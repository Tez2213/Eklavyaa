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

  const fullText = "Education, the fun way.";
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80); 
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Yellow Gradient Overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#ffce3b]/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#ffde00]/10 to-transparent pointer-events-none" />

      {/* Parallax Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
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
            <div className="w-36 h-36 mx-auto bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-4 border-white/40 relative">
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-gray-200 rounded-full"
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
                  rotateY: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Eklavyaa Logo"
                  width={900}
                  height={900}
                  className="object-contain drop-shadow-lg"
                  style={{ filter: 'grayscale(0.2) brightness(0.95)' }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-black mb-3 tracking-wide"
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
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="inline-block hover:text-white hover:scale-110 transition-all duration-300 cursor-default"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-xl text-black/90 font-medium tracking-wide min-h-[2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </motion.div>

        {/* Button with Magnetic Hover */}
        <motion.div
          className="relative"
          onMouseMove={handleMouseMoveButton}
          onMouseLeave={handleMouseLeaveButton}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="bg-[#ffce3b] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl border-3 border-[#ffce3b]/60 backdrop-blur-sm relative overflow-hidden"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 35px rgba(255, 206, 59, 0.4)",
              y: -2,
            }}
            whileTap={{ scale: 0.92 }}
            animate={{ x: btnPos.x, y: btnPos.y }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            {/* Button Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: [-100, 200] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <a href="/login" className="relative z-10">
              Get Started
            </a>
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 bg-white/50 rounded-full mb-2"
              initial={{ y: 0, opacity: 1, scale: 0.8 }}
              animate={{
                y: -80,
                opacity: 0,
                scale: 1.2,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none" />
    </div>
  );
}
