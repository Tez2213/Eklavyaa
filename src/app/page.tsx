'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [currentScreen, setCurrentScreen] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const screen = Math.floor(scrollY / screenHeight);
      setCurrentScreen(Math.min(screen, 2));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Multilingual taglines
  const taglines = [
    { text: "Education, the fun way", lang: "English" },
    { text: "शिक्षा, मजेदार तरीके से", lang: "Hindi" },
    { text: "ଶିକ୍ଷା, ମଜାଦାର ଉପାୟରେ", lang: "Odia" },
    { text: "शिक्षा, मजेशीर पद्धतीने", lang: "Marathi" }
  ];

  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTagline = taglines[currentTaglineIndex].text;
    
    if (isTyping) {
      // Typing effect
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(currentTagline.slice(0, i + 1));
        i++;
        if (i === currentTagline.length) {
          clearInterval(interval);
          setTimeout(() => setIsTyping(false), 2000); // Show complete text for 2 seconds
        }
      }, 80);
      return () => clearInterval(interval);
    } else {
      // Erasing effect
      let i = currentTagline.length;
      const interval = setInterval(() => {
        setDisplayedText(currentTagline.slice(0, i));
        i--;
        if (i < 0) {
          clearInterval(interval);
          setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
          setIsTyping(true);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [currentTaglineIndex, isTyping]);

  // ------------------ MAGNETIC BUTTON ------------------
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMoveButton = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 8;
    const y = (e.clientY - rect.top - rect.height / 2) / 8;
    setBtnPos({ x, y });
  };

  const handleMouseLeaveButton = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
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

      {/* Gradient Overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-yellow-200/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-200/20 to-transparent pointer-events-none" />

      {/* Parallax Background */}
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

      {/* Screen 1: Application Introduction */}
      {currentScreen === 0 && (
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo Container */}
          <motion.div
            className="mb-6 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-yellow-100/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-300/40 relative">
              <motion.div
                className="absolute inset-2 border-3 border-transparent border-t-yellow-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/logo.png"
                  alt="Eklavyaa Logo"
                  width={100}
                  height={100}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 tracking-wide relative font-bricolage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {"Eklavyaa".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="inline-block hover:scale-110 hover:text-yellow-600 transition-all duration-300 cursor-default relative"
              >
                {letter}
              </motion.span>
            ))}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-yellow-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.3 }}
            />
          </motion.h1>

          {/* Multilingual Tagline */}
          <div className="relative text-center mb-8">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.span
                className="text-sm font-medium text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-300 font-bricolage"
                key={taglines[currentTaglineIndex].lang}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {taglines[currentTaglineIndex].lang}
              </motion.span>
            </motion.div>
            
            <motion.p
              className="text-xl sm:text-2xl text-gray-700 font-medium tracking-wide min-h-[3rem] flex items-center justify-center relative font-bricolage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-yellow-200 shadow-sm">
                {displayedText}
                <motion.span
                  className="text-yellow-600 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                >
                  |
                </motion.span>
              </span>
            </motion.p>
          </div>

          {/* Introduction Text */}
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <p className="text-lg sm:text-xl text-gray-600 font-bricolage leading-relaxed mb-3">
              Interactive learning platform for modern education
            </p>
            <p className="text-base sm:text-lg text-gray-500 font-bricolage">
              Technology-driven, gamified, and engaging
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Screen 2: STEM Learning */}
      {currentScreen === 1 && (
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo and Brand - Smaller */}
          <motion.div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto bg-yellow-100/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300/40 relative mb-3">
              <Image
                src="/logo.png"
                alt="Eklavyaa Logo"
                width={900}
                height={900}
                className="object-contain drop-shadow-lg"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-bricolage">Eklavyaa</h2>
          </motion.div>

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-bricolage">
              STEM Education
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 font-bricolage max-w-2xl">
              NCERT-Based • Grades 6-12 • Interactive Learning
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-200 shadow-sm">
                <span className="text-sm font-medium text-gray-700 font-bricolage">Gamified Learning</span>
              </div>
              <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-200 shadow-sm">
                <span className="text-sm font-medium text-gray-700 font-bricolage">Real-time Progress</span>
              </div>
              <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-200 shadow-sm">
                <span className="text-sm font-medium text-gray-700 font-bricolage">Achievement System</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Screen 3: Interactive Experience */}
      {currentScreen === 2 && (
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo and Brand - Smaller */}
          <motion.div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto bg-yellow-100/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300/40 relative mb-3">
              <Image
                src="/logo.png"
                alt="Eklavyaa Logo"
                width={90}
                height={90}
                className="object-contain drop-shadow-lg"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-bricolage">Eklavyaa</h2>
          </motion.div>

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-bricolage">
              Interactive Learning with Hologram
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 font-bricolage max-w-2xl">
              3D Visuals • Immersive Experience • Enhanced Understanding
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Navigation and Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-yellow-200">
          {/* Previous Button */}
          <motion.button
            onClick={() => setCurrentScreen(Math.max(0, currentScreen - 1))}
            disabled={currentScreen === 0}
            className={`px-4 py-2 rounded-full font-medium font-bricolage transition-all duration-300 ${
              currentScreen === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-yellow-400 hover:bg-yellow-500 text-gray-800 shadow-md hover:shadow-lg'
            }`}
            whileHover={currentScreen > 0 ? { scale: 1.05 } : {}}
            whileTap={currentScreen > 0 ? { scale: 0.95 } : {}}
          >
            Previous
          </motion.button>

          {/* Screen Indicators */}
          <div className="flex gap-2">
            {[0, 1, 2].map((screen) => (
              <motion.div
                key={screen}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  currentScreen === screen ? 'bg-yellow-400' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentScreen(screen)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Next/Get Started Button */}
          <motion.button
            onClick={() => {
              if (currentScreen < 2) {
                setCurrentScreen(currentScreen + 1);
              } else {
                window.location.href = '/login';
              }
            }}
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full font-medium font-bricolage shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentScreen === 2 ? 'Go' : 'Next'}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
