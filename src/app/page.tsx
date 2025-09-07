'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
  <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Yellow Gradient Overlays - Top and Bottom */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#ffce3b]/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#ffde00]/10 to-transparent pointer-events-none" />
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Educational Floating Icons with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Book Icon */}
        <motion.div
          className="absolute top-16 left-4 w-8 h-6 bg-white/30 rounded-sm shadow-sm"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-1 bg-blue-400/50 mt-1 rounded"></div>
          <div className="w-3/4 h-0.5 bg-blue-400/30 mt-1 rounded"></div>
        </motion.div>
        
        {/* Lightbulb Icon */}
        <motion.div
          className="absolute top-24 right-8 w-6 h-8 bg-yellow-100/40 rounded-t-full border-b-2 border-white/30"
          animate={{ 
            y: [0, 12, 0],
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Globe Icon */}
        <motion.div
          className="absolute top-40 left-12 w-8 h-8 bg-blue-400/30 rounded-full border-2 border-white/20"
          animate={{ 
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-0.5 bg-green-400/40 mt-3 rounded"></div>
          <div className="w-0.5 h-full bg-green-400/40 absolute left-1/2 top-0 rounded"></div>
        </motion.div>
        
        {/* Calculator Icon */}
        <motion.div
          className="absolute bottom-40 right-6 w-6 h-8 bg-gray-300/30 rounded border border-white/20"
          animate={{ 
            y: [0, 18, 0],
            x: [0, -8, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="grid grid-cols-2 gap-0.5 p-1">
            <div className="w-2 h-1 bg-white/40 rounded-sm"></div>
            <div className="w-2 h-1 bg-white/40 rounded-sm"></div>
            <div className="w-2 h-1 bg-white/40 rounded-sm"></div>
            <div className="w-2 h-1 bg-white/40 rounded-sm"></div>
          </div>
        </motion.div>
        
        {/* Graduation Cap */}
        <motion.div
          className="absolute bottom-32 left-8 w-8 h-6 bg-black/20 rounded-b-full"
          animate={{ 
            y: [0, -22, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-10 h-1 bg-black/30 absolute -top-1 -left-1 rounded"></div>
          <div className="w-2 h-3 bg-gray-300/40 absolute -top-1 right-1 rounded"></div>
        </motion.div>
        
        {/* Pencil Icon */}
        <motion.div
          className="absolute top-32 left-1/2 w-2 h-8 bg-orange-400/30 rounded-t-full"
          animate={{ 
            rotate: [0, 15, -15, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-2 h-2 bg-pink-400/40 rounded-full mt-6"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
        
        {/* Logo and Brand Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo Container with Enhanced Animation */}
          <motion.div
            className="mb-8 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15
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
                  ease: "linear"
                }}
              />
              
              {/* Logo with Multiple Animations */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotateY: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
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

          {/* Brand Name with Letter Animation */}
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
                  stiffness: 200
                }}
                className="inline-block hover:text-white hover:scale-110 transition-all duration-300 cursor-default"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Tagline with Typewriter Effect */}
          <motion.p
            className="text-xl text-black/90 font-medium tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Education, the fun way.
          </motion.p>
        </motion.div>

        {/* Interactive Button with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="bg-[#ffce3b] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl border-3 border-[#ffce3b]/60 backdrop-blur-sm relative overflow-hidden"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 15px 35px rgba(255, 206, 59, 0.4)",
              y: -2
            }}
            whileTap={{ scale: 0.92 }}
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Button Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: [-100, 200] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <a href="/login" className="relative z-10">
              Get Started
            </a>
          </motion.button>
        </motion.div>

        {/* Enhanced Bottom Decorative Elements */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="flex space-x-3"
            animate={{ 
              y: [0, -12, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 bg-white/50 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Enhanced Gradient Overlays */}
  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none" />
    </div>
  );
}