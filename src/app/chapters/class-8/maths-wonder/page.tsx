'use client';

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
  X
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function MathsWonder() {
  const router = useRouter();
  const [loadingChapter, setLoadingChapter] = useState<number | null>(null);
  const [selectedLandmark, setSelectedLandmark] = useState<any>(null);

  // Algebraic Expression landmarks arranged sequentially
  const mathLandmarks = [
    {
      id: 1,
      name: "Chapter 1",
      title: "Basic Algebra",
      description: "Start your algebraic journey by learning variables, constants, and simple expressions in the Foundation Temple",
      level: 1,
      progress: 0,
      stars: 0,
      isUnlocked: true,
      emoji: "",
      landmarkUrl: "/math1.webp",
      gameUrl: "https://game-ashen-eight.vercel.app/maths/basic-algebra",
      position: { top: '15%', left: '15%' },
      size: 'w-16 h-16 md:w-20 md:h-20',
      region: 'Foundation Valley',
      algebraicSymbol: 'x'
    },
    {
      id: 2,
      name: "Chapter 2", 
      title: "Powers & Exponents",
      description: "Discover the mighty power of exponents and learn to calculate squared, cubed, and higher powers in the Power Tower",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      emoji: "",
      landmarkUrl: "/math2.webp",
      gameUrl: null,
      position: { top: '15%', left: '45%' },
      size: 'w-18 h-18 md:w-22 md:h-22',
      region: 'Power Heights',
      algebraicSymbol: 'x²'
    },
    {
      id: 3,
      name: "Chapter 3",
      title: "Square Roots",
      description: "Unlock the mysteries of square roots and radical expressions in the mystical Root Garden",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      emoji: "",
      landmarkUrl: "/math3.webp",
      gameUrl: null,
      position: { top: '15%', left: '75%' },
      size: 'w-20 h-20 md:w-24 md:h-24',
      region: 'Radical Woods',
      algebraicSymbol: '√x'
    },
    {
      id: 4,
      name: "Chapter 4",
      title: "Linear Equations",
      description: "Master the art of solving linear equations and find the value of unknown variables in the Equation Observatory",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      emoji: "",
      landmarkUrl: "/math4.webp",
      gameUrl: null,
      position: { top: '40%', left: '15%' },
      size: 'w-16 h-16 md:w-20 md:h-20',
      region: 'Linear Plains',
      algebraicSymbol: '2x+3=7'
    },
    {
      id: 5,
      name: "Chapter 5",
      title: "Quadratic Expressions",
      description: "Explore the fascinating world of quadratic expressions and parabolas in the Curve Castle",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      emoji: "",
      landmarkUrl: "/math5.webp",
      gameUrl: null,
      position: { top: '40%', left: '45%' },
      size: 'w-22 h-22 md:w-26 md:h-26',
      region: 'Quadratic Kingdom',
      algebraicSymbol: 'x²+2x+1'
    },
    {
      id: 6,
      name: "Chapter 6",
      title: "Factorization",
      description: "Learn to break down complex expressions into simpler factors in the Factor Fortress",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      emoji: "",
      landmarkUrl: "/math6.webp",
      gameUrl: null,
      position: { top: '40%', left: '75%' },
      size: 'w-18 h-18 md:w-22 md:h-22',
      region: 'Factor Fields',
      algebraicSymbol: '(x+2)(x-1)'
    },
    {
      id: 7,
      name: "Chapter 7",
      title: "Polynomial Powers",
      description: "Master advanced polynomials and their operations in the Polynomial Palace",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      emoji: "",
      landmarkUrl: "/math1.webp",
      gameUrl: null,
      position: { top: '65%', left: '15%' },
      size: 'w-17 h-17 md:w-19 md:h-19',
      region: 'Polynomial Peaks',
      algebraicSymbol: 'x³+x²+x+1'
    },
    {
      id: 8,
      name: "Chapter 8",
      title: "Advanced Algebra",
      description: "Conquer the most challenging algebraic concepts and become an Algebra Master in the Summit of Symbols",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      emoji: "",
      landmarkUrl: "/math2.webp",
      gameUrl: null,
      position: { top: '65%', left: '45%' },
      size: 'w-20 h-20 md:w-24 md:h-24',
      region: 'Master Summit',
      algebraicSymbol: '∑x²'
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
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-indigo-50 to-blue-100 relative overflow-hidden">
      {/* Animated Algebraic Symbols Background */}
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{ x: mathOffset.x, y: mathOffset.y }}
        transition={{ type: 'spring', stiffness: 25, damping: 20 }}
      >
        {['x²', '√y', 'x³', '∛z', 'x⁴', '²√x', 'x^n', '∫', 'Σ', 'α', 'β', 'θ'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-4xl text-purple-400 font-bold select-none"
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

      {/* Floating Power and Root Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`symbol-${i}`}
            className={`absolute text-3xl font-bold opacity-20 ${
              i % 4 === 0 ? 'text-purple-500' : 
              i % 4 === 1 ? 'text-indigo-500' : 
              i % 4 === 2 ? 'text-blue-500' : 'text-pink-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {['x²', '√', 'x³', '∛', '²', '³', '⁴', 'ⁿ'][i % 8]}
          </motion.div>
        ))}
      </div>

      {/* Fixed Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 bg-purple-800/90 backdrop-blur-md border-b border-purple-600/30 z-50 shadow-sm"
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
                  className="text-white hover:bg-purple-700/50 rounded-full"
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
                  Maths Wonder
                </motion.h1>
                <motion.p 
                  className="text-purple-200 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Algebraic Expression Adventure
                </motion.p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 rounded-full px-3">
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

      {/* World Map Container */}
      <div className="relative pt-20 pb-24 min-h-screen">
        {/* Algebraic Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div key={`h-${i}`} className="absolute h-px bg-purple-400 w-full" style={{ top: `${i * 12.5}%` }} />
          ))}
          {[...Array(8)].map((_, i) => (
            <div key={`v-${i}`} className="absolute w-px bg-purple-400 h-full" style={{ left: `${i * 12.5}%` }} />
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
                ? 'border-purple-400 shadow-xl shadow-purple-300/50' 
                : 'border-gray-400 opacity-50'
            } bg-white/80 backdrop-blur-sm`}>
              <div className="w-full h-full bg-gradient-to-br from-white/50 to-purple-50/50 flex items-center justify-center relative">
                <img 
                  src={landmark.landmarkUrl}
                  alt={landmark.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent rounded-xl" />
                
                {/* Algebraic Symbol Overlay */}
                <div className="absolute bottom-2 right-2 bg-purple-800/80 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {landmark.algebraicSymbol}
                </div>
              </div>
              
              {!landmark.isUnlocked && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
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
              <p className="text-purple-800 text-sm font-bold bg-white/90 px-2 py-1 rounded-full shadow-sm">
                {landmark.name}
              </p>
              <p className="text-purple-600 text-xs mt-1">{landmark.region}</p>
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
                  className="h-full bg-gradient-to-r from-purple-400 to-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${landmark.progress}%` }}
                  transition={{ duration: 1, delay: 1.2 + (index * 0.1) }}
                />
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Sequential Connection Paths between landmarks */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {mathLandmarks.slice(0, -1).map((landmark, index) => {
            const nextLandmark = mathLandmarks[index + 1];
            if (!nextLandmark) return null;
            
            // Calculate path based on sequential arrangement
            const startX = parseFloat(landmark.position.left);
            const startY = parseFloat(landmark.position.top);
            const endX = parseFloat(nextLandmark.position.left);
            const endY = parseFloat(nextLandmark.position.top);
            
            return (
              <motion.line
                key={`path-${landmark.id}`}
                x1={`${startX}%`}
                y1={`${startY}%`}
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke="rgb(147, 51, 234)"
                strokeWidth="3"
                strokeDasharray="8,4"
                className="opacity-30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: landmark.isUnlocked ? 1 : 0 }}
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
              className="bg-gradient-to-b from-white to-purple-50 rounded-2xl p-6 w-full max-w-md relative border border-purple-200 shadow-2xl"
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
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-purple-300 shadow-lg relative">
                  <img 
                    src={selectedLandmark.landmarkUrl}
                    alt={selectedLandmark.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-purple-800 text-white text-sm font-bold px-2 py-1 rounded">
                    {selectedLandmark.algebraicSymbol}
                  </div>
                </div>
              </motion.div>

              {/* Landmark Info */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-purple-800 mb-2">{selectedLandmark.name}</h2>
                <h3 className="text-xl text-indigo-600 mb-2">{selectedLandmark.title}</h3>
                <p className="text-purple-600 text-sm font-medium mb-3">{selectedLandmark.region}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {selectedLandmark.description}
                </p>

                {/* Progress Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-800">{selectedLandmark.level}</div>
                    <div className="text-xs text-purple-600">Level</div>
                  </div>
                  <div className="bg-indigo-100 rounded-lg p-3">
                    <div className="text-2xl font-bold text-indigo-800">{selectedLandmark.progress}%</div>
                    <div className="text-xs text-indigo-600">Progress</div>
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
                      <span className="text-sm font-bold text-purple-600">{selectedLandmark.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-purple-400 to-indigo-500 h-3 rounded-full"
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
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg"
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