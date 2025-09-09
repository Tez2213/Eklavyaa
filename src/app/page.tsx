'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
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

  // Multilingual taglines
  const taglines = [
    { text: "Education, the fun way", lang: "English" },
    { text: "शिक्षा, मजेदार तरीके से", lang: "Hindi" },
    { text: "ଶିକ୍ଷା, ମଜାଦାର ଉପାୟରେ", lang: "Odia" },
    { text: "التعليم بطريقة ممتعة", lang: "Arabic" },
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
      {/* Minimal Background Elements */}
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
      <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        {/* Logo and Brand Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo Container */}
          <motion.div
            className="mb-8 relative"
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
            <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto bg-yellow-100/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-300/40 relative">
              {/* Single Rotating Ring */}
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
                  width={120}
                  height={120}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Brand Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 tracking-wide relative"
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
            
            {/* Simple underline */}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-yellow-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.3 }}
            />
          </motion.h1>

          {/* Multilingual Tagline with Language Indicator */}
          <div className="relative">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.span
                className="text-sm font-medium text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-300"
                key={taglines[currentTaglineIndex].lang}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {taglines[currentTaglineIndex].lang}
              </motion.span>
            </motion.div>
            
            <motion.p
              className="text-xl sm:text-2xl text-gray-700 font-medium tracking-wide min-h-[3rem] flex items-center justify-center relative"
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
        </motion.div>

        {/* Clean Button with Magnetic Hover */}
        <motion.div
          className="relative"
          onMouseMove={handleMouseMoveButton}
          onMouseLeave={handleMouseLeaveButton}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.button
            className="relative bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-lg sm:text-xl shadow-lg border-2 border-yellow-300 transition-colors duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(251, 191, 36, 0.3)",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ x: btnPos.x, y: btnPos.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <a href="/login">
              Get Started
            </a>
          </motion.button>
        </motion.div>

        {/* Simple Floating Animation */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-yellow-400 rounded-full mb-3 mx-auto"
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: [-60, -80],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
