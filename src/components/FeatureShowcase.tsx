'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronRight, Rocket, Brain, Globe, Zap, Star, Wifi, WifiOff } from 'lucide-react';

interface FeatureShowcaseProps {
  onGetStarted: () => void;
}

export default function FeatureShowcase({ onGetStarted }: FeatureShowcaseProps) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [animateStars, setAnimateStars] = useState(true);

  // Space theme animals and features data
  const features = [
    {
      id: 1,
      title: "Gamified Learning",
      subtitle: "Adventure Through Knowledge",
      description: "Embark on epic learning adventures with space companions! Transform education into exciting quests where every lesson becomes a thrilling mission.",
      mascot: "🦊", // Space Fox Navigator
      mascotName: "Cosmo Fox",
      background: "from-yellow-400 via-orange-400 to-yellow-500",
      animalFeatures: [
        { icon: "🎮", text: "Interactive Games" },
        { icon: "🏆", text: "Achievement System" },
        { icon: "⭐", text: "Star Rewards" },
        { icon: "🚀", text: "Level Progression" }
      ],
      buttonText: "Next",
      buttonAction: () => setCurrentScreen(1)
    },
    {
      id: 2,
      title: "Hologram Visual Experience",
      subtitle: "Learn in 3D Space",
      description: "Experience learning like never before with immersive holographic visuals! Watch complex concepts come alive in stunning 3D environments.",
      mascot: "🐺", // Space Wolf Guide
      mascotName: "Stellar Wolf",
      background: "from-blue-400 via-purple-500 to-blue-600",
      animalFeatures: [
        { icon: "🌌", text: "3D Holograms" },
        { icon: "🔮", text: "AR Experience" },
        { icon: "💫", text: "Interactive Models" },
        { icon: "🌟", text: "Visual Learning" }
      ],
      buttonText: "Next",
      buttonAction: () => setCurrentScreen(2)
    },
    {
      id: 3,
      title: "NCERT Grade 6-12",
      subtitle: "Learn Anywhere, Anytime",
      description: "Complete NCERT curriculum with offline support! Learn even with poor internet connectivity - your space companion ensures uninterrupted education.",
      mascot: "🐻", // Space Bear Scholar
      mascotName: "Nova Bear",
      background: "from-emerald-400 via-teal-500 to-green-500",
      animalFeatures: [
        { icon: "📚", text: "NCERT Curriculum" },
        { icon: "📱", text: "Offline Learning" },
        { icon: "🌐", text: "Low Connectivity" },
        { icon: "🎓", text: "Grade 6-12" }
      ],
      buttonText: "Get Started",
      buttonAction: onGetStarted
    }
  ];

  const currentFeature = features[currentScreen];

  // Floating stars animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateStars(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Space Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${currentFeature.background} opacity-90`}
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Floating Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 16 + 8}px`
              }}
              animate={{
                y: animateStars ? [-10, 10] : [10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            >
              ⭐
            </motion.div>
          ))}
        </div>

        {/* Space Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            className="max-w-md mx-auto text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Space Animal Mascot */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <div className="relative">
                {/* Mascot Container */}
                <motion.div
                  className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-6xl sm:text-7xl">{currentFeature.mascot}</span>
                </motion.div>
                
                {/* Orbiting Elements */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Star className="w-4 h-4 text-white/60" />
                  </div>
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <Zap className="w-4 h-4 text-white/60" />
                  </div>
                </motion.div>

                {/* Mascot Name Badge */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <span className="text-xs font-semibold text-gray-800">{currentFeature.mascotName}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Feature Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {currentFeature.title}
            </motion.h1>

            {/* Feature Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-white/90 font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {currentFeature.subtitle}
            </motion.p>

            {/* Feature Description */}
            <motion.p
              className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {currentFeature.description}
            </motion.p>

            {/* Feature Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {currentFeature.animalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-2xl mb-1">{feature.icon}</div>
                  <div className="text-sm font-medium text-white">{feature.text}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Button */}
            <motion.button
              className="bg-white text-gray-800 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/30 backdrop-blur-sm flex items-center gap-2 mx-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(255, 255, 255, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onClick={currentFeature.buttonAction}
            >
              {currentFeature.buttonText}
              {currentFeature.buttonText !== "Get Started" && (
                <ChevronRight className="w-5 h-5" />
              )}
              {currentFeature.buttonText === "Get Started" && (
                <Rocket className="w-5 h-5" />
              )}
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Screen Indicators */}
        <motion.div
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {features.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentScreen ? 'bg-white' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentScreen(index)}
            />
          ))}
        </motion.div>

        {/* Skip Option */}
        <motion.button
          className="absolute top-8 right-4 text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          onClick={onGetStarted}
        >
          Skip Intro
        </motion.button>
      </div>
    </div>
  );
}