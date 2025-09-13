'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronRight, Rocket, Brain, Globe, Zap, Star, Wifi, WifiOff, GamepadIcon, Eye, BookOpen } from 'lucide-react';
import Image from 'next/image';

interface FeatureShowcaseProps {
  onGetStarted: () => void;
}

export default function FeatureShowcase({ onGetStarted }: FeatureShowcaseProps) {
  const [currentScreen, setCurrentScreen] = useState(0);
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

  // Professional feature data matching the main application theme
  const features = [
    {
      id: 1,
      title: "Gamified Learning",
      subtitle: "Adventure Through Knowledge",
      description: "Transform your learning journey into exciting adventures! Interactive games, challenges, and rewards make education engaging and memorable for every student.",
      mascot: "🦊",
      mascotName: "Learning Fox",
      icon: GamepadIcon,
      highlights: [
        { icon: "🎮", text: "Interactive Games", desc: "Play while you learn" },
        { icon: "🏆", text: "Achievements", desc: "Unlock rewards" },
        { icon: "⭐", text: "Progress Tracking", desc: "See your growth" },
        { icon: "🚀", text: "Level Up", desc: "Advance your skills" }
      ],
      buttonText: "Next",
      buttonAction: () => setCurrentScreen(1)
    },
    {
      id: 2,
      title: "Hologram Experience",
      subtitle: "3D Visual Learning",
      description: "Experience concepts in stunning 3D! Our holographic technology brings complex topics to life, making abstract ideas tangible and easy to understand.",
      mascot: "🐺",
      mascotName: "Vision Wolf",
      icon: Eye,
      highlights: [
        { icon: "🌌", text: "3D Visuals", desc: "See in three dimensions" },
        { icon: "🔮", text: "AR Learning", desc: "Augmented reality" },
        { icon: "💫", text: "Interactive Models", desc: "Touch and explore" },
        { icon: "🌟", text: "Immersive Experience", desc: "Feel the learning" }
      ],
      buttonText: "Next",
      buttonAction: () => setCurrentScreen(2)
    },
    {
      id: 3,
      title: "NCERT Curriculum",
      subtitle: "Grade 6-12 Complete Learning",
      description: "Complete NCERT curriculum with offline support! Learn seamlessly even with poor connectivity. Quality education accessible anywhere, anytime.",
      mascot: "🐻",
      mascotName: "Scholar Bear",
      icon: BookOpen,
      highlights: [
        { icon: "📚", text: "Full NCERT", desc: "Complete syllabus" },
        { icon: "📱", text: "Offline Ready", desc: "No internet needed" },
        { icon: "🌐", text: "Low Bandwidth", desc: "Works everywhere" },
        { icon: "🎓", text: "Grades 6-12", desc: "All levels covered" }
      ],
      buttonText: "Get Started",
      buttonAction: onGetStarted
    }
  ];

  const currentFeature = features[currentScreen];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Background Elements matching main page */}
      <div className="absolute inset-0">
        {/* Simple floating elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 bg-yellow-300"
            style={{
              width: '100px',
              height: '100px',
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Simple Gradient Overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-yellow-200/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-200/20 to-transparent pointer-events-none" />

      {/* Parallax Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col px-4 py-8">
        {/* Header with Logo */}
        <motion.div
          className="flex items-center justify-between mb-8 pt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-yellow-300/40">
              <Image
                src="/logo.png"
                alt="Eklavyaa Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Eklavyaa</h1>
              <p className="text-sm text-gray-600">Discover Features</p>
            </div>
          </div>
          
          <motion.button
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-yellow-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStarted}
          >
            Skip Intro
          </motion.button>
        </motion.div>
        {/* Feature Content */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              className="max-w-lg mx-auto text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Feature Icon & Mascot */}
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
                  {/* Main Container */}
                  <motion.div
                    className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-yellow-100/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-300/40 relative"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Rotating Ring */}
                    <motion.div
                      className="absolute inset-2 border-3 border-transparent border-t-yellow-400 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Mascot */}
                    <motion.div
                      className="relative z-10 text-5xl sm:text-6xl"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {currentFeature.mascot}
                    </motion.div>

                    {/* Feature Icon */}
                    <motion.div
                      className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <currentFeature.icon className="w-5 h-5 text-gray-800" />
                    </motion.div>
                  </motion.div>

                  {/* Mascot Name Badge */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-100/90 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <span className="text-xs font-semibold text-yellow-700">{currentFeature.mascotName}</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Feature Title */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {currentFeature.title}
              </motion.h2>

              {/* Feature Subtitle */}
              <motion.p
                className="text-lg sm:text-xl text-yellow-700 font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {currentFeature.subtitle}
              </motion.p>

              {/* Feature Description */}
              <motion.p
                className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {currentFeature.description}
              </motion.p>

              {/* Feature Highlights */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {currentFeature.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-yellow-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="text-2xl mb-2">{highlight.icon}</div>
                    <div className="text-sm font-bold text-gray-800 mb-1">{highlight.text}</div>
                    <div className="text-xs text-gray-600">{highlight.desc}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Button */}
              <motion.button
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-300 flex items-center gap-3 mx-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(251, 191, 36, 0.3)",
                  y: -2
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
        </div>

        {/* Bottom Navigation */}
        <motion.div
          className="flex items-center justify-center space-x-6 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {/* Screen Indicators */}
          <div className="flex justify-center space-x-3">
            {features.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentScreen 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-yellow-200 hover:bg-yellow-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentScreen(index)}
              />
            ))}
          </div>

          {/* Progress Text */}
          <div className="text-sm text-gray-600 font-medium bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-200">
            {currentScreen + 1} of {features.length}
          </div>
        </motion.div>

        {/* Simple Floating Animation */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-yellow-400 rounded-full mb-2 mx-auto"
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: [-30, -40],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}