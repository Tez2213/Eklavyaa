'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Multilingual taglines
  const taglines = [
    { text: "Education, the fun way", lang: "English" },
    { text: "शिक्षा, मजेदार तरीके से", lang: "Hindi" },
    { text: "ଶିକ୍ଷା, ମଜାଦାର ଉପାୟରେ", lang: "Odia" },
    { text: "التعليم بطريقة ممتعة", lang: "Arabic" },
    { text: "शिक्षा, मजेशीर पद्धतीने", lang: "Marathi" }
  ];

  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Typewriter effect for taglines
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
              width: '80px',
              height: '80px',
              left: `${15 + i * 35}%`,
              top: `${15 + i * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Simple Gradient Overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-yellow-200/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-200/20 to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 relative z-10">
        {/* Logo and Brand Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto bg-yellow-100/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-300/40 relative">
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
                  width={100}
                  height={100}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {"Eklavyaa".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="inline-block hover:scale-110 hover:text-yellow-600 transition-all duration-300 cursor-default"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.div
            className="h-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg sm:text-xl text-gray-700 font-medium">
              {displayedText}
              <motion.span
                className="inline-block w-0.5 h-6 bg-yellow-500 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </p>
          </motion.div>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-yellow-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Login Title */}
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Welcome Back
          </motion.h2>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 border-yellow-200 bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all duration-300 text-base"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(251, 191, 36, 0.2)"
                }}
              />
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <motion.input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 border-yellow-200 bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all duration-300 text-base"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(251, 191, 36, 0.2)"
                }}
              />
            </motion.div>
          </div>

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-8"
          >
            <motion.button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-3 sm:py-4 rounded-xl font-bold text-lg shadow-lg border-2 border-yellow-300 transition-colors duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(251, 191, 36, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="/dashboard" className="block w-full h-full">
                Sign In
              </a>
            </motion.button>
          </motion.div>

          {/* Sign Up Link */}
          <motion.p 
            className="text-center mt-6 text-gray-600 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            New to Eklavyaa?{' '}
            <a
              href="/signup"
              className="text-gray-800 font-semibold hover:text-yellow-600 transition-colors duration-300"
            >
              Create Account
            </a>
          </motion.p>
        </motion.div>

        {/* Simple Floating Animation */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-yellow-400 rounded-full mb-2 mx-auto opacity-60"
              initial={{ y: 0, opacity: 0.6 }}
              animate={{
                y: [-40, -50],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
