'use client';

import { useState, useCallback } from 'react';
import { trackGameClick } from '@/lib/leaderboard';
import { useAuth } from '@/contexts/AuthContext';

export function useGameTracker() {
  const { user } = useAuth();
  const [isTracking, setIsTracking] = useState(false);

  const trackAndOpenGame = useCallback(async (
    gameName: string,
    gameUrl: string,
    pointsEarned: number = 1
  ) => {
    if (!user) {
      // If user not logged in, just open the game
      window.open(gameUrl, '_blank');
      return;
    }

    setIsTracking(true);

    try {
      // Track the game click in database (awards points automatically via trigger)
      await trackGameClick(user.id, gameName, gameUrl, pointsEarned);
      
      // Open the game in new tab
      window.open(gameUrl, '_blank');
    } catch (error) {
      console.error('Error tracking game:', error);
      // Still open the game even if tracking fails
      window.open(gameUrl, '_blank');
    } finally {
      setIsTracking(false);
    }
  }, [user]);

  return { trackAndOpenGame, isTracking };
}
