'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  Star,
  Lock,
  Play,
  Crown,
  Loader2,
  Trophy,
  X,
  Leaf,
  TreePine,
  Flower,
  Wheat,
  Droplets,
  Sun,
  Cloud,
  Sprout
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScienceWonder() {
  const router = useRouter();
  const [loadingChapter, setLoadingChapter] = useState<number | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<any>(null);

  // Crop Management Chapters - Agricultural theme
  const chapters = [
    {
      id: 1,
      name: "Chapter 1",
      title: "Seed Science",
      description: "Discover the amazing world of seeds, germination, and how plants begin their life cycle",
      level: 1,
      progress: 0,
      stars: 0,
      isUnlocked: true,
      icon: '/sprout.gif',
      gameUrl: "https://game-ashen-eight.vercel.app/science/seed-game",
      position: { top: '20%', left: '20%' },
      bgColor: 'from-green-400 to-green-600'
    },
    {
      id: 2,
      name: "Chapter 2",
      title: "Soil Health",
      description: "Learn about different types of soil and their importance for healthy plant growth",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      icon: '/treepine.gif',
      gameUrl: null,
      position: { top: '35%', left: '40%' },
      bgColor: 'from-amber-600 to-yellow-700'
    },
    {
      id: 3,
      name: "Chapter 3",
      title: "Water Cycle",
      description: "Understand how water moves through plants and the environment",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      icon: '/droplet.gif',
      gameUrl: null,
      position: { top: '25%', left: '60%' },
      bgColor: 'from-blue-400 to-blue-600'
    },
    {
      id: 4,
      name: "Chapter 4",
      title: "Plant Growth",
      description: "Explore how plants grow, develop, and adapt to their environment",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      icon: '/leaf.gif',
      gameUrl: null,
      position: { top: '50%', left: '75%' },
      bgColor: 'from-green-500 to-emerald-600'
    },
    {
      id: 5,
      name: "Chapter 5",
      title: "Crop Farming",
      description: "Learn about different crops and modern farming techniques",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      icon: '/wheat.gif',
      gameUrl: null,
      position: { top: '70%', left: '60%' },
      bgColor: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      name: "Chapter 6",
      title: "Pollination",
      description: "Discover the wonderful world of flowers, bees, and plant reproduction",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      icon: '/flower.gif',
      gameUrl: null,
      position: { top: '75%', left: '35%' },
      bgColor: 'from-pink-400 to-rose-500'
    },
    {
      id: 7,
      name: "Chapter 7",
      title: "Weather & Climate",
      description: "Understand how weather affects crop growth and farming practices",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      icon: '/cloud.gif',
      gameUrl: null,
      position: { top: '60%', left: '15%' },
      bgColor: 'from-gray-400 to-slate-500'
    },
    {
      id: 8,
      name: "Chapter 8",
      title: "Future Farming",
      description: "Explore modern technology and sustainable farming for the future",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      icon: '/sun.gif',
      gameUrl: null,
      position: { top: '40%', left: '25%' },
      bgColor: 'from-orange-400 to-red-500'
    }
  ];

  const handleChapterClick = (chapter: any) => {
    if (chapter.isUnlocked) {
      setSelectedChapter(chapter);
    }
  };

  const handleStartChapter = async (chapter: any) => {
    if (!chapter.gameUrl || loadingChapter) return;
    setLoadingChapter(chapter.id);
    setTimeout(() => {
      setLoadingChapter(null);
      setSelectedChapter(null);
      window.open(chapter.gameUrl, '_blank');
    }, 1500);
  };

  // Floating clouds effect
  const [cloudOffset, setCloudOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 5;
      const y = (e.clientY / innerHeight - 0.5) * 5;
      setCloudOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-green-100 to-green-200 relative overflow-hidden">
      {/* Animated Clouds Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: cloudOffset.x, y: cloudOffset.y }}
        transition={{ type: 'spring', stiffness: 20, damping: 15 }}
      >
        {/* Large Clouds */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 40 + 20}px`,
            }}
            animate={{
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* Floating Leaves */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            className="absolute text-green-500/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          >
            <Leaf className="w-4 h-4" />
          </motion.div>
        ))}
      </motion.div>

      {/* Fixed Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 bg-green-800/90 backdrop-blur-md border-b border-green-600/30 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push('/chapters/class-8')}
                  className="text-white hover:bg-green-700/50 rounded-full"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </motion.div>
              <div>
                <motion.h1 
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Science Wonder
                </motion.h1>
                <motion.p 
                  className="text-green-200 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Crop Management Adventure
                </motion.p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge className="bg-orange-500/20 text-orange-200 border-orange-400/30 rounded-full px-3">
                  🔥 3
                </Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Badge className="bg-yellow-500/20 text-yellow-200 border-yellow-400/30 font-bold rounded-full px-3">
                  <Star className="w-3 h-3 mr-1 fill-yellow-200 text-yellow-200" /> 450
                </Badge>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chapter Points */}
      <div className="relative pt-20 pb-24 min-h-screen">
        {/* Field Rows - Visual reference lines */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[60, 90, 120, 150, 180, 210, 240, 270].map((radius, index) => (
            <motion.div
              key={radius}
              className="absolute border border-green-300/20 rounded-full"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                left: `-${radius}px`,
                top: `-${radius}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
            />
          ))}
        </div>

        {chapters.map((chapter, index) => {
         
          return (
            <motion.div
              key={chapter.id}
              className="absolute w-16 h-16 md:w-18 md:h-18 cursor-pointer z-20"
              style={{ 
                top: chapter.position.top, 
                left: chapter.position.left,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 + (index * 0.2) }}
              whileHover={{ scale: chapter.isUnlocked ? 1.1 : 1 }}
              whileTap={{ scale: chapter.isUnlocked ? 0.95 : 1 }}
              onClick={() => handleChapterClick(chapter)}
            >
              <div className={`relative w-full h-full rounded-full overflow-hidden border-3 ${
                chapter.isUnlocked 
                  ? 'border-white/70 shadow-xl shadow-green-400/30' 
                  : 'border-gray-400 opacity-50'
              }`}>
                <div className={`w-full h-full bg-gradient-to-br ${chapter.bgColor} flex items-center justify-center`}>
                  <img src={chapter.icon} />
                </div>
                {!chapter.isUnlocked && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-white/80" />
                  </div>
                )}
                {chapter.isUnlocked && chapter.progress === 100 && (
                  <div className="absolute -top-2 -right-2">
                    <Crown className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
              </div>
              
              {/* Chapter Label */}
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + (index * 0.1) }}
              >
                <p className="text-green-800 text-xs font-bold bg-white/80 px-2 py-1 rounded-full">
                  {chapter.name}
                </p>
                {chapter.isUnlocked && (
                  <div className="flex justify-center space-x-1 mt-1">
                    {[...Array(3)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`w-3 h-3 ${
                          starIndex < chapter.stars
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Chapter Detail Modal */}
      <AnimatePresence>
        {selectedChapter && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChapter(null)}
          >
            <motion.div
              className="bg-gradient-to-b from-green-800 to-green-900 rounded-2xl p-6 w-full max-w-md relative border border-green-500/30 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
                onClick={() => setSelectedChapter(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Chapter Icon Animation */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${selectedChapter.bgColor} border-4 border-white/30 shadow-lg flex items-center justify-center`}>
                  <selectedChapter.icon className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              {/* Chapter Info */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-2">{selectedChapter.name}</h2>
                <h3 className="text-xl text-green-200 mb-3">{selectedChapter.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  {selectedChapter.description}
                </p>

                {/* Progress Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-700/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{selectedChapter.level}</div>
                    <div className="text-xs text-green-200">Level</div>
                  </div>
                  <div className="bg-green-700/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{selectedChapter.progress}%</div>
                    <div className="text-xs text-green-200">Progress</div>
                  </div>
                </div>

                {/* Stars */}
                {selectedChapter.stars > 0 && (
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(3)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (starIndex * 0.1) }}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            starIndex < selectedChapter.stars
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-500'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Progress Bar */}
                {selectedChapter.progress > 0 && (
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Chapter Progress</span>
                      <span className="text-sm font-bold text-green-200">{selectedChapter.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedChapter.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Action Button */}
              {selectedChapter.gameUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg"
                    disabled={loadingChapter === selectedChapter.id}
                    onClick={() => handleStartChapter(selectedChapter)}
                  >
                    {loadingChapter === selectedChapter.id ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Launching...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Start Learning
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}