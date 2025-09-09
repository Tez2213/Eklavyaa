'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  Star,
  Rocket,
  Lock,
  Play,
  Crown,
  Loader2
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ScienceWorld() {
  const router = useRouter();
  const [loadingChapter, setLoadingChapter] = useState<number | null>(null);

  // Chapter data
  const chapters = [
    {
      id: 1,
      title: "Solar System",
      emoji: "🌟",
      color: "bg-blue-400",
      bgGradient: "from-yellow-300 via-yellow-400 to-yellow-500",
      isUnlocked: true,
      stars: 3,
      progress: 100,
      gameUrl: "https://game-ashen-eight.vercel.app/science/solar-game"
    },
    {
      id: 2,
      title: "Temperature",
      emoji: "🔥",
      color: "bg-orange-400",
      bgGradient: "from-orange-300 via-orange-400 to-orange-500",
      isUnlocked: true,
      stars: 2,
      progress: 85,
      gameUrl: "https://game-ashen-eight.vercel.app/science/temperature-game"
    },
    {
      id: 3,
      title: "Ingredients",
      emoji: "🧪",
      color: "bg-green-400",
      bgGradient: "from-green-300 via-green-400 to-green-500",
      isUnlocked: true,
      stars: 3,
      progress: 75,
      gameUrl: "https://game-ashen-eight.vercel.app/science/chef-game"
    },
    {
      id: 4,
      title: "Materials",
      emoji: "⚗️",
      color: "bg-purple-400",
      bgGradient: "from-purple-300 via-purple-400 to-purple-500",
      isUnlocked: true,
      stars: 1,
      progress: 60,
      gameUrl: "https://game-ashen-eight.vercel.app/science/material-game"
    },
    {
      id: 5,
      title: "Water Cycle",
      emoji: "💧",
      color: "bg-cyan-400",
      bgGradient: "from-cyan-300 via-cyan-400 to-cyan-500",
      isUnlocked: true,
      stars: 2,
      progress: 40,
      gameUrl: "https://game-ashen-eight.vercel.app/science/water-cycle-game"
    },
    {
      id: 6,
      title: "Future World",
      emoji: "🚀",
      color: "bg-yellow-400",
      bgGradient: "from-yellow-300 via-yellow-400 to-yellow-500",
      isUnlocked: false,
      stars: 0,
      progress: 0,
      gameUrl: null
    }
  ];

  const handleChapterClick = async (chapter: any) => {
    if (!chapter.isUnlocked || !chapter.gameUrl || loadingChapter) return;
    setLoadingChapter(chapter.id);
    setTimeout(() => {
      setLoadingChapter(null);
      window.open(chapter.gameUrl, '_blank');
    }, 1500);
  };

  // Floating background effect
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-cyan-50 pointer-events-none" />

      {/* Floating science symbols */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: 'spring', stiffness: 20, damping: 15 }}
      >
        {['🧬','🪐','🔬','⚗️','💡','🌡️','🌱'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-3xl select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {symbol}
          </div>
        ))}
      </motion.div>

      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-yellow-200 z-50 shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push('/chapters')}
              className="text-yellow-700 hover:cursor-pointer hover:bg-yellow-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🧪</div>
              <div>
                <h1 className="text-lg font-bold text-yellow-800">Science Galaxy</h1>
                <p className="text-xs text-yellow-600">Explore the wonders of science!</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-yellow-100 text-yellow-800 font-bold rounded-full px-3">
              <Star className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" /> 200
            </Badge>
            <Badge className="bg-yellow-300 text-white rounded-full px-3">🔥 7</Badge>
          </div>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="p-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: chapter.id * 0.1 }}
              >
                <Card
                  className={`
                    ${chapter.isUnlocked ? 'cursor-pointer hover:scale-105' : 'opacity-60'} 
                    transition-all duration-300 shadow-lg border border-yellow-200 overflow-hidden bg-white/90 backdrop-blur-sm
                    ${chapter.isUnlocked ? 'transform hover:-translate-y-1 hover:shadow-yellow-300/30' : ''}
                  `}
                  onClick={() => handleChapterClick(chapter)}
                >
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${chapter.bgGradient} p-4 relative rounded-t-lg`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{chapter.emoji}</div>
                          <div>
                            <h3 className="font-bold text-white text-lg">{chapter.title}</h3>
                            <p className="text-white/80 text-sm">Chapter {chapter.id}</p>
                          </div>
                        </div>
                        {chapter.progress === 100 && (
                          <Crown className="w-6 h-6 text-yellow-300" />
                        )}
                      </div>

                      {!chapter.isUnlocked && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-t-lg">
                          <Lock className="w-8 h-8 text-white/80" />
                        </div>
                      )}
                    </div>

                    <div className="p-4 bg-gradient-to-b from-white/60 to-yellow-50/60 backdrop-blur-sm rounded-b-lg">
                      {/* Stars */}
                      {chapter.isUnlocked && chapter.stars > 0 && (
                        <div className="flex justify-center space-x-1 mb-3">
                          {[...Array(3)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className={`w-5 h-5 ${
                                starIndex < chapter.stars
                                  ? 'text-yellow-300 fill-current drop-shadow-md'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Progress Bar */}
                      {chapter.isUnlocked && chapter.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-600">Progress</span>
                            <span className="text-xs font-bold text-yellow-700">{chapter.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-yellow-300 to-yellow-400 h-2 rounded-full transition-all duration-500 shadow-md"
                              style={{ width: `${chapter.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      {chapter.isUnlocked && chapter.gameUrl ? (
                        <Button
                          className="w-full hover:cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 rounded-full hover:shadow-lg transition-all duration-200"
                          disabled={loadingChapter === chapter.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleChapterClick(chapter);
                          }}
                        >
                          {loadingChapter === chapter.id ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Loading...
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Play Now!
                            </>
                          )}
                        </Button>
                      ) : !chapter.isUnlocked ? (
                        <div className="text-center py-2">
                          <Badge className="bg-gray-400 text-white rounded-full">
                            🔒 Coming Soon
                          </Badge>
                        </div>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Encouragement Section */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          </motion.div>
        </div>
      </div>
    </div>
  );
}
