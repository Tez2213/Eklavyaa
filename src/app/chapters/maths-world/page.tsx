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
  X,
  MapPin
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function MathWorld() {
  const router = useRouter();
  const [loadingChapter, setLoadingChapter] = useState<number | null>(null);
  const [selectedLandmark, setSelectedLandmark] = useState<any>(null);

  // Mathematical landmarks on our world map
  const mathLandmarks = [
    {
      id: 1,
      name: "Chapter 1",
      title: "Prime Guardians",
      description: "Discover the secrets of prime numbers in the ancient Temple of Primes, where mystical guardians protect mathematical treasures",
      level: 5,
      progress: 100,
      stars: 3,
      isUnlocked: true,
      emoji: "🏛️",
      landmarkUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGw4MWV6cjFzZ3VsM3AweTkwZXBhOWkyeXV2ajcxdTZzaWE3YjFtZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlHFRbmaZtBRhXG/giphy.gif",
      gameUrl: "https://game-ashen-eight.vercel.app/maths/prime-guardians",
      position: { top: '25%', left: '15%' },
      size: 'w-16 h-16 md:w-20 md:h-20',
      region: 'Ancient Valley'
    },
    {
      id: 2,
      name: "Chapter 2", 
      title: "Pythagorean Quest",
      description: "Explore the mystical Pythagorean Mountains where triangles hold the secrets of geometry and ancient mathematical wisdom",
      level: 3,
      progress: 85,
      stars: 2,
      isUnlocked: true,
      emoji: "🏔️",
      landmarkUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJxMWFpaHZhbW9rNzE4cnVsbG5oNTl5aGFqMWFnaHBoa2wxaDVreSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/giphy.gif",
      gameUrl: "https://game-ashen-eight.vercel.app/maths/pythagorean-game",
      position: { top: '35%', left: '35%' },
      size: 'w-18 h-18 md:w-22 md:h-22',
      region: 'Geometric Peaks'
    },
    {
      id: 3,
      name: "Chapter 3",
      title: "Number Mystics",
      description: "Journey through the Enchanted Number Forest where magical trees grow with mathematical patterns and numerical mysteries",
      level: 7,
      progress: 75,
      stars: 3,
      isUnlocked: true,
      emoji: "🌲",
      landmarkUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGp3cjBxcXUxeWE0cWI5ZGM0dDVldnl2eGN6M2c3b3lqZHI2ajJ1dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26FLgGTPUDH6UGAbm/giphy.gif",
      gameUrl: "https://game-ashen-eight.vercel.app/maths/number-mystics",
      position: { top: '60%', left: '20%' },
      size: 'w-20 h-20 md:w-24 md:h-24',
      region: 'Mystic Woods'
    },
    {
      id: 4,
      name: "Chapter 4",
      title: "Nature's Mirror",
      description: "Discover the mathematical patterns in nature at the Crystal Lake where fractals and golden ratios reflect in perfect harmony",
      level: 2,
      progress: 60,
      stars: 1,
      isUnlocked: true,
      emoji: "🏞️",
      landmarkUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQ3YXR2Ym5mOWV4b2tqODNvOGpsZWRqMnh6bWpibGdpYWt5dXl1ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26FLdmIp6wJr91JAI/giphy.gif",
      gameUrl: "https://game-ashen-eight.vercel.app/maths/natures-mirror",
      position: { top: '50%', left: '65%' },
      size: 'w-16 h-16 md:w-20 md:h-20',
      region: 'Reflection Valley'
    },
    {
      id: 5,
      name: "Chapter 5",
      title: "Deep Sea Diver",
      description: "Dive into the Mathematical Ocean depths where underwater calculations and pressure equations challenge brave explorers",
      level: 1,
      progress: 40,
      stars: 2,
      isUnlocked: true,
      emoji: "🌊",
      landmarkUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFkejAyZXh6Z3o5eDNlcm8yMjljbjJjZWJ6azZqYWZhZWQ1dG01bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgG50Fb7Mi0prBC/giphy.gif",
      gameUrl: "https://game-ashen-eight.vercel.app/maths/deep-sea-diver",
      position: { top: '75%', left: '50%' },
      size: 'w-22 h-22 md:w-26 md:h-26',
      region: 'Calculation Depths'
    },
    {
      id: 6,
      name: "Chapter 6",
      title: "Algebra Adventure",
      description: "Unlock the mysteries of the Algebraic Castle where variables and equations guard ancient mathematical scrolls",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      emoji: "🏰",
      landmarkUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZkNGh3dzY2dGpiMHJkM2E2ZGtzeHFoa3g5M3htYmZ5ODJ2MWJxbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2Sq29cFXoF80ADlK/giphy.gif",
      gameUrl: null,
      position: { top: '20%', left: '75%' },
      size: 'w-18 h-18 md:w-22 md:h-22',
      region: 'Mystic Highlands'
    }
  ];

  const handleLandmarkClick = (landmark: any) => {
    if (landmark.isUnlocked) {
      setSelectedLandmark(landmark);
    }
  };

  const handleStartChapter = async (landmark: any) => {
    if (!landmark.gameUrl || loadingChapter) return;
    setLoadingChapter(landmark.id);
    setTimeout(() => {
      setLoadingChapter(null);
      setSelectedLandmark(null);
      window.open(landmark.gameUrl, '_blank');
    }, 1500);
  };

  // Floating mathematical symbols effect
  const [mathOffset, setMathOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMathOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-100 via-blue-50 to-teal-100 relative overflow-hidden">
      {/* Animated Mathematical Symbols Background */}
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{ x: mathOffset.x, y: mathOffset.y }}
        transition={{ type: 'spring', stiffness: 25, damping: 20 }}
      >
        {['+', '×', '÷', '=', '∞', '√', 'π', '∑', '∆', '∫', '∂', '≡'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-4xl text-blue-400 font-bold select-none"
            style={{
              left: `${(i * 15 + 5) % 100}%`,
              top: `${(i * 23 + 10) % 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute opacity-20 ${
              i % 3 === 0 ? 'bg-yellow-400' : 
              i % 3 === 1 ? 'bg-blue-400' : 'bg-emerald-400'
            }`}
            style={{
              width: Math.random() * 60 + 30 + 'px',
              height: Math.random() * 60 + 30 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: i % 2 === 0 ? '50%' : '0%',
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Fixed Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-emerald-200 z-50 shadow-sm"
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
                  onClick={() => router.push('/chapters')}
                  className="text-emerald-700 hover:bg-emerald-100 rounded-full"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </motion.div>
              <div>
                <motion.h1 
                  className="text-xl font-bold text-emerald-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Math Kingdom
                </motion.h1>
                <motion.p 
                  className="text-emerald-600 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  mathematical wonders!
                </motion.p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 font-bold rounded-full px-3">
                  <Star className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" /> 280
                </Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300 rounded-full px-3">
                  🧮 5
                </Badge>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* World Map Container */}
      <div className="relative pt-20 pb-24 min-h-screen">
        {/* Map Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div key={`h-${i}`} className="absolute h-px bg-emerald-400 w-full" style={{ top: `${i * 10}%` }} />
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`v-${i}`} className="absolute w-px bg-emerald-400 h-full" style={{ left: `${i * 10}%` }} />
          ))}
        </div>

        {/* Mathematical Landmarks */}
        {mathLandmarks.map((landmark, index) => (
          <motion.div
            key={landmark.id}
            className={`absolute ${landmark.size} cursor-pointer z-20`}
            style={{ 
              top: landmark.position.top, 
              left: landmark.position.left,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
            whileHover={{ 
              scale: landmark.isUnlocked ? 1.1 : 1,
              y: landmark.isUnlocked ? -5 : 0
            }}
            whileTap={{ scale: landmark.isUnlocked ? 0.95 : 1 }}
            onClick={() => handleLandmarkClick(landmark)}
          >
            <div className={`relative w-full h-full rounded-2xl overflow-hidden border-3 ${
              landmark.isUnlocked 
                ? 'border-emerald-400 shadow-xl shadow-emerald-200' 
                : 'border-gray-400 opacity-60'
            } bg-white/80 backdrop-blur-sm`}>
              <div className="w-full h-full bg-gradient-to-br from-white/50 to-emerald-50/50 flex items-center justify-center relative">
                <img 
                  src={landmark.landmarkUrl}
                  alt={landmark.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-2xl">
                  {landmark.emoji}
                </div>
              </div>
              
              {!landmark.isUnlocked && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
                  <Lock className="w-6 h-6 text-white/80" />
                </div>
              )}
              {landmark.isUnlocked && landmark.progress === 100 && (
                <div className="absolute -top-2 -right-2">
                  <Crown className="w-6 h-6 text-yellow-500 drop-shadow-md" />
                </div>
              )}
            </div>
            
            {/* Landmark Label */}
            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center min-w-max"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + (index * 0.1) }}
            >
              <p className="text-emerald-800 text-sm font-bold bg-white/80 px-2 py-1 rounded-full shadow-sm">
                {landmark.name}
              </p>
              <p className="text-emerald-600 text-xs mt-1">{landmark.region}</p>
              {landmark.isUnlocked && (
                <div className="flex justify-center space-x-1 mt-1">
                  {[...Array(3)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-3 h-3 ${
                        starIndex < landmark.stars
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Progress Indicator */}
            {landmark.isUnlocked && landmark.progress > 0 && (
              <motion.div
                className="absolute -top-1 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1 + (index * 0.1) }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${landmark.progress}%` }}
                  transition={{ duration: 1, delay: 1.2 + (index * 0.1) }}
                />
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Connection Paths between landmarks */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {mathLandmarks.slice(0, -1).map((landmark, index) => {
            const nextLandmark = mathLandmarks[index + 1];
            if (!nextLandmark || !landmark.isUnlocked) return null;
            
            return (
              <motion.path
                key={`path-${landmark.id}`}
                d={`M ${landmark.position.left} ${landmark.position.top} Q ${
                  (parseFloat(landmark.position.left) + parseFloat(nextLandmark.position.left)) / 2
                }% ${
                  Math.min(parseFloat(landmark.position.top), parseFloat(nextLandmark.position.top)) - 5
                }% ${nextLandmark.position.left} ${nextLandmark.position.top}`}
                stroke="rgb(52, 211, 153)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="opacity-40"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: nextLandmark.isUnlocked ? 1 : 0 }}
                transition={{ duration: 2, delay: 1.5 + (index * 0.3) }}
              />
            );
          })}
        </svg>
      </div>

      {/* Landmark Detail Modal */}
      <AnimatePresence>
        {selectedLandmark && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLandmark(null)}
          >
            <motion.div
              className="bg-gradient-to-b from-white to-emerald-50 rounded-2xl p-6 w-full max-w-md relative border border-emerald-200 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedLandmark(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Landmark Animation */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-emerald-300 shadow-lg">
                  <img 
                    src={selectedLandmark.landmarkUrl}
                    alt={selectedLandmark.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute text-3xl mt-20">
                  {selectedLandmark.emoji}
                </div>
              </motion.div>

              {/* Landmark Info */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-emerald-800 mb-2">{selectedLandmark.name}</h2>
                <h3 className="text-xl text-blue-600 mb-2">{selectedLandmark.title}</h3>
                <p className="text-emerald-600 text-sm font-medium mb-3">{selectedLandmark.region}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {selectedLandmark.description}
                </p>

                {/* Progress Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-emerald-100 rounded-lg p-3">
                    <div className="text-2xl font-bold text-emerald-800">{selectedLandmark.level}</div>
                    <div className="text-xs text-emerald-600">Level</div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-800">{selectedLandmark.progress}%</div>
                    <div className="text-xs text-blue-600">Progress</div>
                  </div>
                </div>

                {/* Stars */}
                {selectedLandmark.stars > 0 && (
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
                            starIndex < selectedLandmark.stars
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Progress Bar */}
                {selectedLandmark.progress > 0 && (
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Chapter Progress</span>
                      <span className="text-sm font-bold text-emerald-600">{selectedLandmark.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-emerald-400 to-blue-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedLandmark.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Action Button */}
              {selectedLandmark.gameUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg"
                    disabled={loadingChapter === selectedLandmark.id}
                    onClick={() => handleStartChapter(selectedLandmark)}
                  >
                    {loadingChapter === selectedLandmark.id ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Preparing Adventure...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Start Quest
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
