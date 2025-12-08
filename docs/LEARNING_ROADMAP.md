# 🎓 Learning Roadmap System

## Overview
The Learning Roadmap is a gamified prerequisite system that ensures students complete essential learning tasks before playing games.

## How It Works

### Student Journey:
1. **Student selects a chapter** from Science World or Maths World
2. **Redirected to Roadmap** (`/roadmap/[subject]/[chapter]`)
3. **Must complete tasks in order**:
   - 🌟 **Hologram** - Watch 3D visualization (5-10 min) → +10 pts
   - 📖 **Module** - Read theory content (10-15 min) → +15 pts
   - 🎥 **Video** - Watch YouTube tutorial (8-12 min) → +10 pts
   - 🎮 **Game** - Play interactive game (15-20 min) → +25 pts

4. **Each task unlocks the next**
5. **Points awarded** upon completion
6. **Progress saved** to database

## Database Schema

### Table: `learning_progress`
```sql
- id (UUID, Primary Key)
- user_id (UUID, Foreign Key → auth.users)
- chapter (TEXT) - e.g., "maths-wonder-pythagoras"
- node_id (TEXT) - e.g., "hologram-1", "module-1"
- completed (BOOLEAN)
- completed_at (TIMESTAMP)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

## Roadmap Configuration

### Example: Pythagorean Theorem
```typescript
{
  id: 'hologram-1',
  type: 'hologram',
  title: 'Watch 3D Hologram',
  description: 'Visualize Pythagorean Theorem in 3D',
  duration: '5 min',
  points: 10,
  url: '/hologram_setup',
  isCompleted: false,
  isUnlocked: true, // First node always unlocked
  icon: Sparkles,
  color: 'from-purple-500 to-pink-500'
}
```

### Node Types:
- **hologram**: 3D visualization learning
- **module**: Text-based theory reading
- **video**: YouTube/external video tutorials
- **game**: Interactive game/simulation

## Features

### ✅ Implemented:
- Sequential task unlocking (prerequisite system)
- Progress tracking in database
- Point rewards system
- Visual roadmap UI (Duolingo-style)
- Completion percentage
- Real-time progress updates
- Individual node completion status
- Locked/unlocked states

### 🎨 UI Components:
- Gradient node icons
- Connecting lines between nodes
- Step numbers
- Duration badges
- Points badges
- Completion checkmarks
- Lock icons for locked nodes

### 📊 Analytics:
- Track completion percentage per chapter
- Time spent on each node (future)
- Drop-off points (future)
- Popular learning paths (future)

## Setup Instructions

### 1. Run Database Migration
```bash
# In Supabase dashboard, run the SQL from:
supabase/migrations/create_learning_progress.sql
```

### 2. Add Roadmap Data
Edit `/src/app/roadmap/[subject]/[chapter]/page.tsx` and add your chapter roadmaps in the `roadmaps` object.

### 3. Test Flow
1. Go to `/chapters/science-world` or `/chapters/maths-world`
2. Click on any chapter
3. You'll be redirected to `/roadmap/[subject]/[chapter]`
4. Complete tasks in sequence
5. Watch points accumulate!

## Customization

### Add New Chapter Roadmap:
```typescript
const roadmaps: any = {
  'maths-wonder-algebra': [
    {
      id: 'hologram-1',
      type: 'hologram',
      title: 'Algebra in 3D',
      description: 'Visual equations',
      duration: '6 min',
      points: 10,
      url: '/hologram_setup',
      isCompleted: false,
      isUnlocked: true,
      icon: Sparkles,
      color: 'from-blue-500 to-purple-500'
    },
    // Add more nodes...
  ]
};
```

### Change Point Values:
Adjust `points` property in each node configuration.

### Add More Node Types:
1. Define new type: `'quiz' | 'assignment' | 'discussion'`
2. Add icon mapping
3. Add completion logic in `handleStartNode`

## Future Enhancements

### Phase 2:
- [ ] Adaptive learning paths based on student performance
- [ ] Time-based unlocks (wait 1 hour between modules)
- [ ] Peer comparison ("3 friends completed this!")
- [ ] Certificates upon chapter completion
- [ ] Downloadable progress reports for parents/teachers

### Phase 3:
- [ ] AI-powered content recommendations
- [ ] Custom roadmaps for teachers to create
- [ ] Integration with LMS (Canvas, Moodle)
- [ ] Mobile app with offline roadmap
- [ ] Voice-guided roadmap navigation

## Benefits

### For Students:
- ✅ Clear learning path
- ✅ Motivation through gamification
- ✅ No skipping important concepts
- ✅ Sense of achievement

### For Teachers:
- ✅ Ensures thorough learning
- ✅ Tracks student progress
- ✅ Identifies struggling students
- ✅ Customizable learning paths

### For Platform:
- ✅ Increased engagement time
- ✅ Better learning outcomes
- ✅ Higher completion rates
- ✅ More data for analytics

## Analytics Dashboard (Future)

```
Chapter: Pythagorean Theorem
Total Students: 1,245
---
Hologram:     1,200 (96%) ✅
Module:       1,050 (84%) ⚠️
Video:          980 (79%) ⚠️
Game:           850 (68%) ❌

Drop-off: 16% between hologram and module
Avg. completion time: 38 minutes
```

## Contact
For questions or feature requests, contact: ujjwaltyagi9605@gmail.com
