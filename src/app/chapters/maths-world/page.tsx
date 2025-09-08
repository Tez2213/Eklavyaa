'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
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

export default function MathWorld() {
  const router = useRouter();
  const [loadingChapter, setLoadingChapter] = useState<number | null>(null);

  // Chapter data with math theme
  const chapters = [
    {
      id: 1,
      title: "Prime Guardians",
      emoji: "🛡️",
      color: "bg-emerald-400",
      bgGradient: "from-emerald-300 to-green-500",
      isUnlocked: true,
      stars: 3,
      progress: 100,
      gameUrl: "https://game-ashen-eight.vercel.app/maths/prime-guardians"
    },
    {
      id: 2,
      title: "Pythagorean Quest",
      emoji: "�",
      color: "bg-blue-400",
      bgGradient: "from-blue-300 to-indigo-500",
      isUnlocked: true,
      stars: 2,
      progress: 85,
      gameUrl: "https://game-ashen-eight.vercel.app/maths/pythagorean-game"
    },
    {
      id: 3,
      title: "Number Mystics",
      emoji: "🔢",
      color: "bg-purple-400",
      bgGradient: "from-purple-300 to-violet-500",
      isUnlocked: true,
      stars: 3,
      progress: 75,
      gameUrl: "https://game-ashen-eight.vercel.app/maths/number-mystics"
    },
    {
      id: 4,
      title: "Nature's Mirror",
      emoji: "🌿",
      color: "bg-teal-400",
      bgGradient: "from-teal-300 to-cyan-500",
      isUnlocked: true,
      stars: 1,
      progress: 60,
      gameUrl: "https://game-ashen-eight.vercel.app/maths/natures-mirror"
    },
    {
      id: 5,
      title: "Deep Sea Diver",
      emoji: "🤿",
      color: "bg-ocean-400",
      bgGradient: "from-blue-400 to-blue-600",
      isUnlocked: true,
      stars: 2,
      progress: 40,
      gameUrl: "https://game-ashen-eight.vercel.app/maths/deep-sea-diver"
    },
    {
      id: 6,
      title: "Algebra Adventure",
      emoji: "✨",
      color: "bg-yellow-400",
      bgGradient: "from-[#ffce3b] to-[#ffde00]",
      isUnlocked: false,
      stars: 0,
      progress: 0,
      gameUrl: null
    }
  ];

  const handleChapterClick = async (chapter: any) => {
    if (!chapter.isUnlocked || !chapter.gameUrl || loadingChapter) return;
    
    setLoadingChapter(chapter.id);

    // Simulate loading
    setTimeout(() => {
      setLoadingChapter(null);
      // Navigate to the game URL
      window.open(chapter.gameUrl, '_blank');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-100 via-blue-50 to-purple-100 relative">
      {/* Mathematical Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-blue-200/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
        
        {/* Mathematical symbols */}
        {['+', '×', '÷', '=', '∞', '√', 'π'].map((symbol, i) => (
          <div
            key={symbol}
            className="absolute text-4xl font-bold text-blue-200/20 select-none"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Floating number elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-emerald-200/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-blue-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-32 left-1/4 w-18 h-18 bg-purple-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-yellow-200/20 rounded-full blur-xl" />
      </div>

      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-emerald-200 z-50 shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push('/chapters')}
                className="text-emerald-700 hover:bg-emerald-100 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">🧮</div>
                <div>
                  <h1 className="text-lg font-bold text-emerald-800">Math Kingdom</h1>
                  <p className="text-xs text-emerald-600">Discover the magic of numbers!</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 font-bold rounded-full px-3">
                <Star className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" />
                200
              </Badge>
              <Badge className="bg-[#ffce3b] text-white rounded-full px-3">
                🔥 7
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((chapter, index) => (
              <div key={chapter.id} className="relative">
                <Card 
                  className={`
                    ${chapter.isUnlocked ? 'cursor-pointer hover:scale-105' : 'opacity-60'} 
                    transition-all duration-300 shadow-lg hover:shadow-xl border border-emerald-200 overflow-hidden bg-white/90 backdrop-blur-sm
                    ${chapter.isUnlocked ? 'transform hover:-translate-y-1 hover:shadow-emerald-300/30' : ''}
                  `}
                  onClick={() => handleChapterClick(chapter)}
                >
                  <CardContent className="p-0">
                    {/* Chapter Header with gradient */}
                    <div className={`bg-gradient-to-r ${chapter.bgGradient} p-4 relative`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{chapter.emoji}</div>
                          <div>
                            <h3 className="font-bold text-white text-lg">{chapter.title}</h3>
                            <p className="text-white/80 text-sm">Chapter {chapter.id}</p>
                          </div>
                        </div>
                        {chapter.progress === 100 && (
                          <Crown className="w-6 h-6 text-[#ffce3b]" />
                        )}
                      </div>
                      
                      {!chapter.isUnlocked && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
                          <Lock className="w-8 h-8 text-white/80" />
                        </div>
                      )}
                    </div>

                    {/* Chapter Content */}
                    <div className="p-4 bg-gradient-to-b from-white/60 to-gray-50/60 backdrop-blur-sm">
                      {/* Stars */}
                      {chapter.isUnlocked && chapter.stars > 0 && (
                        <div className="flex justify-center space-x-1 mb-3">
                          {[...Array(3)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className={`w-5 h-5 ${
                                starIndex < chapter.stars 
                                  ? 'text-[#ffce3b] fill-current drop-shadow-lg' 
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
                            <span className="text-xs font-bold text-emerald-700">{chapter.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-[#ffce3b] to-[#ffde00] h-2 rounded-full transition-all duration-500 shadow-md" 
                              style={{ width: `${chapter.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      {chapter.isUnlocked && chapter.gameUrl ? (
                        <Button 
                          className="w-full bg-[#ffce3b] hover:bg-[#ffde00] text-white font-bold py-2 rounded-full hover:shadow-lg transition-all duration-200"
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
              </div>
            ))}
          </div>

          {/* Fun encouragement message */}
          <div className="mt-8 text-center">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-emerald-200 shadow-lg">
              <div className="text-4xl mb-2">�</div>
              <h2 className="text-xl font-bold text-emerald-800 mb-2">Amazing Math Explorer!</h2>
              <p className="text-emerald-700">Keep solving puzzles to unlock new mathematical adventures and discover the beauty of numbers!</p>
              <div className="mt-4">
                <Badge className="bg-[#ffce3b] text-white px-4 py-2 rounded-full shadow-md">
                  🧮 Math Wizard!
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
