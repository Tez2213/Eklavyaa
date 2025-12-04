import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export type UserProfile = {
  id: string;
  email: string;
  full_name: string;
  username: string;
  user_type: 'student' | 'tutor';
  class_level: number;
  phone?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
};

export type LeaderboardEntry = {
  id: string;
  user_id: string;
  username: string;
  full_name: string;
  avatar_url?: string;
  points: number;
  games_played: number;
  streak: number;
  class_level: number;
  last_game_played_at?: string;
  created_at: string;
  updated_at: string;
};

export type GameClick = {
  id: string;
  user_id: string;
  game_name: string;
  game_url: string;
  points_earned: number;
  clicked_at: string;
};
