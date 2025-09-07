'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, useRef } from 'react';
import { 
  ArrowLeft,
  Star,
  Rocket,
  Lock,
  Play,
  Crown
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ScienceWorld() {
  const router = useRouter();
  const [isRocketFlying, setIsRocketFlying] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  // Chapter data with different planet themes and colors
  const chapters = [
    {
      id: 1,
      title: "Chapter 1",
      subtitle: "Solar System",
      topic: "Space Exploration",
      color: "from-blue-400 to-blue-600",
      planetColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      isUnlocked: true,
      stars: 3,
      progress: 100,
      position: { top: "10%", left: "15%" },
      gameUrl: "https://game-ashen-eight.vercel.app/science/chef-game"
    },
    {
      id: 2,
      title: "Chapter 2",
      subtitle: "Temperature",
      topic: "Heat & Energy",
      color: "from-orange-400 to-red-500",
      planetColor: "bg-gradient-to-br from-orange-400 to-red-500",
      isUnlocked: true,
      stars: 2,
      progress: 85,
      position: { top: "25%", right: "10%" },
      gameUrl: "https://game-ashen-eight.vercel.app/science/temperature-game"
    },
    {
      id: 3,
      title: "Chapter 3",
      subtitle: "Ingredients",
      topic: "Chemistry Basics",
      color: "from-green-400 to-emerald-600",
      planetColor: "bg-gradient-to-br from-green-400 to-emerald-600",
      isUnlocked: true,
      stars: 3,
      progress: 75,
      position: { top: "45%", left: "20%" },
      gameUrl: "https://game-ashen-eight.vercel.app/science/chef-game"
    },
    {
      id: 4,
      title: "Chapter 4",
      subtitle: "Materials",
      topic: "Matter & Materials",
      color: "from-purple-500 to-indigo-600",
      planetColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
      isUnlocked: true,
      stars: 1,
      progress: 60,
      position: { top: "60%", right: "15%" },
      gameUrl: "https://game-ashen-eight.vercel.app/science/material-game"
    },
    {
      id: 5,
      title: "Chapter 5",
      subtitle: "Water Cycle",
      topic: "Environmental Science",
      color: "from-cyan-400 to-blue-500",
      planetColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
      isUnlocked: true,
      stars: 2,
      progress: 40,
      position: { top: "80%", left: "25%" },
      gameUrl: "https://game-ashen-eight.vercel.app/science/water-cycle-game"
    },
    {
      id: 6,
      title: "Chapter 6",
      subtitle: "Future World",
      topic: "Advanced Science",
      color: "from-pink-500 to-rose-600",
      planetColor: "bg-gradient-to-br from-pink-500 to-rose-600",
      isUnlocked: false,
      stars: 0,
      progress: 0,
      position: { top: "95%", right: "20%" },
      gameUrl: null
    }
  ];

  const handleChapterClick = async (chapter: any) => {
    if (!chapter.isUnlocked || !chapter.gameUrl) return;
    
    setSelectedChapter(chapter.id);
    setIsRocketFlying(true);

    // Simulate rocket flying to chapter
    setTimeout(() => {
      setIsRocketFlying(false);
      setSelectedChapter(null);
      // Navigate to the game URL
      window.open(chapter.gameUrl, '_blank');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Asteroids */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 20, 0],
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md border-b border-white/10 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.back()}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-6 h-6 text-[#ffce3b]" />
                </motion.div>
                <div>
                  <h1 className="text-xl font-bold text-white">SCIENCE WORLD</h1>
                  <p className="text-sm text-white/70">COSMIC ADVENTURE</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-[#ffce3b] text-black font-bold">
                200
              </Badge>
              <Badge className="bg-orange-500 text-white">
                🔥 7
              </Badge>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scrollable Content */}
      <div className="pt-20 pb-24 relative">
        <div className="relative h-[120vh] w-full px-4 sm:px-6">
          {/* Dotted Path connecting chapters */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffce3b" />
                <stop offset="100%" stopColor="#ffd700" />
              </linearGradient>
            </defs>
            {chapters.slice(0, -1).map((chapter, index) => {
              const nextChapter = chapters[index + 1];
              const startX = chapter.position.left ? 
                parseFloat(chapter.position.left) : 
                100 - parseFloat(chapter.position.right || "0");
              const startY = parseFloat(chapter.position.top);
              const endX = nextChapter.position.left ? 
                parseFloat(nextChapter.position.left) : 
                100 - parseFloat(nextChapter.position.right || "0");
              const endY = parseFloat(nextChapter.position.top);
              
              return (
                <motion.path
                  key={index}
                  d={`M ${startX}% ${startY}% Q ${(startX + endX) / 2 + (index % 2 === 0 ? 15 : -15)}% ${(startY + endY) / 2}% ${endX}% ${endY}%`}
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,8"
                  className="drop-shadow-lg"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: index * 0.3 }}
                />
              );
            })}
          </svg>

          {/* Flying Rocket */}
          <AnimatePresence>
            {isRocketFlying && selectedChapter && (
              <motion.div
                ref={rocketRef}
                className="absolute z-40 pointer-events-none"
                initial={{ 
                  x: "20%", 
                  y: "15%",
                  rotate: 0,
                  scale: 0.5
                }}
                animate={{ 
                  x: ["20%", "60%", "40%", "80%", "25%"],
                  y: ["15%", "30%", "50%", "70%", `${chapters[selectedChapter - 1]?.position.top}`],
                  rotate: [0, 45, -30, 90, 0],
                  scale: [0.5, 1.2, 0.8, 1.5, 1]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.7, 1]
                }}
              >
                <div className="relative">
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.3, 
                      repeat: Infinity 
                    }}
                  >
                    <Rocket className="w-8 h-8 text-[#ffce3b] drop-shadow-lg" />
                  </motion.div>
                  {/* Rocket Trail */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      scale: [0.5, 1.2, 0.5],
                      opacity: [0.8, 0.3, 0.8]
                    }}
                    transition={{ 
                      duration: 0.2, 
                      repeat: Infinity 
                    }}
                  >
                    <div className="w-2 h-6 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full blur-sm" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chapter Planets */}
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              className="absolute"
              style={chapter.position}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className="relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChapterClick(chapter)}
                animate={
                  chapter.isUnlocked 
                    ? { 
                        y: [0, -8, 0],
                        rotate: [0, 2, -2, 0]
                      } 
                    : {}
                }
                transition={{ 
                  duration: 3 + index * 0.2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Planet Glow Effect */}
                <motion.div
                  className={`absolute inset-0 ${chapter.planetColor} rounded-full blur-xl opacity-40 scale-150`}
                  animate={{ 
                    opacity: chapter.isUnlocked ? [0.2, 0.6, 0.2] : [0.1, 0.2, 0.1],
                    scale: [1.3, 1.6, 1.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />

                {/* Planet Body */}
                <div className={`relative w-20 h-20 sm:w-24 sm:h-24 ${chapter.planetColor} rounded-full border-3 ${
                  chapter.isUnlocked ? 'border-white/40 shadow-2xl' : 'border-gray-500/50 shadow-lg'
                } overflow-hidden`}>
                  
                  {/* Planet Surface Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className={`w-full h-full bg-gradient-to-br ${chapter.color} rounded-full`} />
                    <div className="absolute top-3 left-3 w-4 h-4 bg-white/25 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/20 rounded-full" />
                    <div className="absolute top-1/2 right-2 w-2 h-2 bg-white/30 rounded-full" />
                    <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-white/35 rounded-full" />
                  </div>

                  {/* Lock Overlay for locked chapters */}
                  {!chapter.isUnlocked && (
                    <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Lock className="w-8 h-8 text-white/80" />
                    </div>
                  )}

                  {/* Chapter Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-xl sm:text-2xl font-bold ${chapter.isUnlocked ? 'text-white drop-shadow-lg' : 'text-white/60'}`}>
                      {chapter.id}
                    </span>
                  </div>

                  {/* Progress Ring */}
                  {chapter.isUnlocked && chapter.progress > 0 && (
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="38"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="3"
                        fill="none"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="38"
                        stroke="#ffce3b"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 38}`}
                        strokeDashoffset={`${2 * Math.PI * 38 * (1 - chapter.progress / 100)}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 38 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 38 * (1 - chapter.progress / 100) }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </svg>
                  )}
                </div>

                {/* Chapter Info Card */}
                <motion.div
                  className="absolute top-24 sm:top-28 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <Card className="bg-black/90 backdrop-blur-md border-white/30 shadow-2xl">
                    <CardContent className="p-4 text-center min-w-[140px] sm:min-w-[160px]">
                      <h3 className="text-white font-bold text-sm sm:text-base">{chapter.title}</h3>
                      <p className="text-white/80 text-xs sm:text-sm">{chapter.subtitle}</p>
                      <p className="text-[#ffce3b] text-xs sm:text-sm mt-1 font-medium">{chapter.topic}</p>
                      
                      {/* Stars */}
                      {chapter.isUnlocked && chapter.stars > 0 && (
                        <div className="flex justify-center space-x-1 mt-3">
                          {[...Array(3)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className={`w-4 h-4 ${
                                starIndex < chapter.stars 
                                  ? 'text-[#ffce3b] fill-current' 
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Progress Bar */}
                      {chapter.isUnlocked && chapter.progress > 0 && (
                        <div className="mt-3">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div 
                              className="bg-[#ffce3b] h-2 rounded-full" 
                              initial={{ width: 0 }}
                              animate={{ width: `${chapter.progress}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                          <p className="text-white/70 text-xs mt-1">{chapter.progress}% Complete</p>
                        </div>
                      )}

                      {/* Play Button for unlocked chapters */}
                      {chapter.isUnlocked && chapter.gameUrl && (
                        <motion.div
                          className="mt-3"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            size="sm" 
                            className="bg-[#ffce3b] text-black hover:bg-[#ffd700] text-xs sm:text-sm font-bold px-4 py-2 w-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleChapterClick(chapter);
                            }}
                          >
                            <Play className="w-3 h-3 mr-2" />
                            Play Game
                          </Button>
                        </motion.div>
                      )}

                      {/* Coming Soon for locked chapters */}
                      {!chapter.isUnlocked && (
                        <div className="mt-3">
                          <Badge className="bg-gray-600 text-white text-xs">
                            Coming Soon
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Special Effects for unlocked chapters */}
                {chapter.isUnlocked && (
                  <>
                    {/* Orbiting particles */}
                    {[...Array(4)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        className="absolute w-1.5 h-1.5 bg-[#ffce3b] rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                        }}
                        animate={{
                          x: [0, 50 * Math.cos(particleIndex * 1.57)],
                          y: [0, 50 * Math.sin(particleIndex * 1.57)],
                          rotate: 360,
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 5 + particleIndex * 0.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ))}

                    {/* Crown for completed chapters */}
                    {chapter.progress === 100 && (
                      <motion.div
                        className="absolute -top-3 -right-3 z-20"
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity 
                        }}
                      >
                        <Crown className="w-8 h-8 text-[#ffce3b] drop-shadow-xl" />
                      </motion.div>
                    )}

                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#ffce3b]/30"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </>
                )}

                {/* Locked planet effects */}
                {!chapter.isUnlocked && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-gray-500/20"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
    </div>
  );
}
