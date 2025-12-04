# Supabase Database Setup for Eklavyaa

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - Project name: `Eklavyaa`
   - Database password: (save this securely)
   - Region: Choose closest to your users
5. Wait for project to be created

## Step 2: Get API Credentials

1. Go to Project Settings → API
2. Copy the following to `.env.local`:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Step 3: Create Database Tables

Go to SQL Editor in Supabase dashboard and run these SQL commands:

### 1. User Profiles Table

```sql
-- Create user profiles table
CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  user_type TEXT CHECK (user_type IN ('student', 'tutor')) DEFAULT 'student',
  class_level INTEGER CHECK (class_level >= 6 AND class_level <= 12) DEFAULT 6,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policies for user_profiles
CREATE POLICY "Users can view all profiles"
  ON user_profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);
```

### 2. Leaderboard Table

```sql
-- Create leaderboard table
CREATE TABLE leaderboard (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  username TEXT NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  points INTEGER DEFAULT 0,
  games_played INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  class_level INTEGER DEFAULT 6,
  last_game_played_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Policies for leaderboard
CREATE POLICY "Anyone can view leaderboard"
  ON leaderboard FOR SELECT
  USING (true);

CREATE POLICY "Users can update own leaderboard entry"
  ON leaderboard FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own leaderboard entry"
  ON leaderboard FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_leaderboard_points ON leaderboard(points DESC);
CREATE INDEX idx_leaderboard_class ON leaderboard(class_level, points DESC);
```

### 3. Game Clicks Tracking Table

```sql
-- Create game_clicks table to track when users click games
CREATE TABLE game_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  game_name TEXT NOT NULL,
  game_url TEXT NOT NULL,
  points_earned INTEGER DEFAULT 1,
  clicked_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE game_clicks ENABLE ROW LEVEL SECURITY;

-- Policies for game_clicks
CREATE POLICY "Users can view own game clicks"
  ON game_clicks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own game clicks"
  ON game_clicks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_game_clicks_user ON game_clicks(user_id, clicked_at DESC);
```

### 4. Database Functions

```sql
-- Function to handle new user signup (creates profile automatically)
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_profiles (id, email, full_name, username, user_type, class_level, phone, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'),
    COALESCE(NEW.raw_user_meta_data->>'username', 'user_' || substr(NEW.id::text, 1, 8)),
    COALESCE(NEW.raw_user_meta_data->>'user_type', 'student'),
    COALESCE((NEW.raw_user_meta_data->>'class_level')::integer, 6),
    NEW.raw_user_meta_data->>'phone',
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', '/avatar.png')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile when user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Function to automatically create leaderboard entry when user profile is created
CREATE OR REPLACE FUNCTION create_leaderboard_entry()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO leaderboard (user_id, username, full_name, avatar_url, class_level)
  VALUES (NEW.id, NEW.username, NEW.full_name, NEW.avatar_url, NEW.class_level);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create leaderboard entry
CREATE TRIGGER on_user_profile_created
  AFTER INSERT ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION create_leaderboard_entry();

-- Function to update leaderboard when game is clicked
CREATE OR REPLACE FUNCTION update_leaderboard_on_game_click()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE leaderboard
  SET 
    points = points + NEW.points_earned,
    games_played = games_played + 1,
    last_game_played_at = NEW.clicked_at,
    updated_at = NOW()
  WHERE user_id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to update leaderboard
CREATE TRIGGER on_game_clicked
  AFTER INSERT ON game_clicks
  FOR EACH ROW
  EXECUTE FUNCTION update_leaderboard_on_game_click();

-- Function to update streak (call this daily)
CREATE OR REPLACE FUNCTION update_user_streak(p_user_id UUID)
RETURNS INTEGER AS $$
DECLARE
  v_last_played TIMESTAMPTZ;
  v_current_streak INTEGER;
BEGIN
  SELECT last_game_played_at, streak
  INTO v_last_played, v_current_streak
  FROM leaderboard
  WHERE user_id = p_user_id;

  IF v_last_played IS NULL THEN
    RETURN 0;
  END IF;

  -- If played today or yesterday, increment or maintain streak
  IF DATE(v_last_played) = CURRENT_DATE THEN
    RETURN v_current_streak;
  ELSIF DATE(v_last_played) = CURRENT_DATE - INTERVAL '1 day' THEN
    UPDATE leaderboard
    SET streak = streak + 1, updated_at = NOW()
    WHERE user_id = p_user_id;
    RETURN v_current_streak + 1;
  ELSE
    -- Streak broken
    UPDATE leaderboard
    SET streak = 0, updated_at = NOW()
    WHERE user_id = p_user_id;
    RETURN 0;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 5. Update Trigger for user_profiles

```sql
-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leaderboard_updated_at
  BEFORE UPDATE ON leaderboard
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Step 4: Configure Authentication

1. Go to Authentication → Providers
2. Enable Email provider
3. (Optional) Disable email confirmations for testing:
   - Go to Authentication → Settings
   - Turn off "Enable email confirmations"

## Step 5: Test Connection

Run your Next.js app and test the authentication flow!

## Database Schema Summary

### Tables Created:
1. **user_profiles** - User information (links to auth.users)
2. **leaderboard** - Points, games played, streak tracking
3. **game_clicks** - Track every game click for analytics

### Key Features:
- ✅ Automatic leaderboard entry creation
- ✅ Auto-increment points on game click
- ✅ Streak tracking system
- ✅ Class-based leaderboard filtering
- ✅ Row Level Security enabled
- ✅ Optimized indexes for performance

## Environment Variables

Make sure your `.env.local` has:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
