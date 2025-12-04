import { supabase, LeaderboardEntry } from './supabase';

/**
 * Track a game click and award points
 */
export async function trackGameClick(
  userId: string,
  gameName: string,
  gameUrl: string,
  pointsEarned: number = 1
) {
  try {
    const { data, error } = await supabase
      .from('game_clicks')
      .insert({
        user_id: userId,
        game_name: gameName,
        game_url: gameUrl,
        points_earned: pointsEarned,
      })
      .select();

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error tracking game click:', error);
    return { data: null, error };
  }
}

/**
 * Get leaderboard entries (top users by points)
 */
export async function getLeaderboard(classLevel?: number, limit: number = 100) {
  try {
    let query = supabase
      .from('leaderboard')
      .select('*')
      .order('points', { ascending: false });

    if (classLevel) {
      query = query.eq('class_level', classLevel);
    }

    const { data, error } = await query.limit(limit);

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching leaderboard:', error);
    return { data: null, error };
  }
}

/**
 * Get user's leaderboard position
 */
export async function getUserLeaderboardPosition(userId: string, classLevel?: number) {
  try {
    // Get user's entry
    const { data: userEntry, error: userError } = await supabase
      .from('leaderboard')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (userError) throw userError;

    // Count users with more points
    let query = supabase
      .from('leaderboard')
      .select('id', { count: 'exact', head: true })
      .gt('points', userEntry.points);

    if (classLevel) {
      query = query.eq('class_level', classLevel);
    }

    const { count, error: countError } = await query;

    if (countError) throw countError;

    const position = (count || 0) + 1;

    return { data: { position, entry: userEntry }, error: null };
  } catch (error: any) {
    console.error('Error getting user position:', error);
    return { data: null, error };
  }
}

/**
 * Get user's game statistics
 */
export async function getUserGameStats(userId: string) {
  try {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching user stats:', error);
    return { data: null, error };
  }
}

/**
 * Get user's recent game clicks
 */
export async function getUserGameHistory(userId: string, limit: number = 10) {
  try {
    const { data, error } = await supabase
      .from('game_clicks')
      .select('*')
      .eq('user_id', userId)
      .order('clicked_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching game history:', error);
    return { data: null, error };
  }
}

/**
 * Update user streak
 */
export async function updateUserStreak(userId: string) {
  try {
    const { data, error } = await supabase.rpc('update_user_streak', {
      p_user_id: userId,
    });

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error updating streak:', error);
    return { data: null, error };
  }
}

/**
 * Get top performers of the week
 */
export async function getWeeklyTopPerformers(classLevel?: number, limit: number = 10) {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    let query = supabase
      .from('leaderboard')
      .select('*')
      .gte('last_game_played_at', oneWeekAgo.toISOString())
      .order('points', { ascending: false });

    if (classLevel) {
      query = query.eq('class_level', classLevel);
    }

    const { data, error } = await query.limit(limit);

    if (error) throw error;
    return { data, error: null };
  } catch (error: any) {
    console.error('Error fetching weekly performers:', error);
    return { data: null, error };
  }
}
