'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Yellow Gradient Overlays - Top and Bottom */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ffce3b]/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#ffde00]/15 to-transparent pointer-events-none" />
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Educational Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Book Icon */}
        <motion.div
          className="absolute top-24 left-8 w-6 h-4 bg-blue-300/20 rounded-sm"
          animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-0.5 bg-blue-400/30 mt-1 rounded"></div>
        </motion.div>
        
        {/* Lightbulb Icon */}
        <motion.div
          className="absolute top-20 right-6 w-5 h-6 bg-yellow-200/30 rounded-t-full border-b border-yellow-300/20"
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Globe Icon */}
        <motion.div
          className="absolute top-40 left-4 w-6 h-6 bg-green-300/20 rounded-full border border-green-400/20"
          animate={{ rotate: [0, 360], y: [0, -18, 0] }}
          transition={{ 
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-0.5 bg-green-400/30 mt-2 rounded"></div>
          <div className="w-0.5 h-full bg-green-400/30 absolute left-1/2 top-0 rounded"></div>
        </motion.div>
        
        {/* Calculator */}
        <motion.div
          className="absolute bottom-32 right-8 w-5 h-6 bg-gray-300/20 rounded border border-gray-400/20"
          animate={{ y: [0, 15, 0], x: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-2 gap-0.5 p-0.5">
            <div className="w-1 h-0.5 bg-gray-400/30 rounded-sm"></div>
            <div className="w-1 h-0.5 bg-gray-400/30 rounded-sm"></div>
            <div className="w-1 h-0.5 bg-gray-400/30 rounded-sm"></div>
            <div className="w-1 h-0.5 bg-gray-400/30 rounded-sm"></div>
          </div>
        </motion.div>
        
        {/* Graduation Cap */}
        <motion.div
          className="absolute bottom-48 left-6 w-6 h-4 bg-black/15 rounded-b-full"
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 8, -8, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-7 h-0.5 bg-black/20 absolute -top-0.5 -left-0.5 rounded"></div>
          <div className="w-1.5 h-2 bg-gray-300/30 absolute -top-0.5 right-0.5 rounded"></div>
        </motion.div>
        
        {/* Pencil */}
        <motion.div
          className="absolute top-36 right-12 w-1.5 h-6 bg-orange-300/20 rounded-t-full"
          animate={{ rotate: [0, 12, -12, 0], y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 bg-pink-300/30 rounded-full mt-4"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 relative z-10">
        
        {/* Logo and Brand Section */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div
            className="mb-6 relative"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <div className="w-28 h-28 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 relative">
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent border-t-[#ffce3b]/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/logo.png"
                  alt="Eklavyaa Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            className="text-4xl font-bold text-black mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Eklavyaa
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-base text-black/70 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Education, the fun way.
          </motion.p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Login Title */}
          <motion.h2
            className="text-3xl font-bold text-center text-black mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            LOGIN
          </motion.h2>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label className="block text-sm text-black/70 mb-2">Please enter Email</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="username@gmail.com"
                className="w-full px-5 py-4 rounded-full border-2 border-[#ffce3b]/50 bg-white/70 backdrop-blur-sm text-black placeholder-black/50 focus:outline-none focus:border-[#ffce3b] focus:bg-white transition-all duration-300 text-base"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(255, 206, 59, 0.2)"
                }}
              />
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label className="block text-sm text-black/70 mb-2">Please enter Password</label>
              <motion.input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••••"
                className="w-full px-5 py-4 rounded-full border-2 border-[#ffce3b]/50 bg-white/70 backdrop-blur-sm text-black placeholder-black/50 focus:outline-none focus:border-[#ffce3b] focus:bg-white transition-all duration-300 text-base"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(255, 206, 59, 0.2)"
                }}
              />
            </motion.div>
          </div>

          {/* Login Button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.button
              type="submit"
              className="w-full bg-[#ffce3b] text-white py-4 rounded-full font-bold text-xl shadow-xl border-2 border-[#ffce3b] relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 35px rgba(255, 206, 59, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                y: [0, -3, 0],
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
                <a href="/dashboard" className="relative z-10 block w-full h-full text-white no-underline">
                LOGIN
                </a>
            </motion.button>
          </motion.div>

          {/* Sign Up Link */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.p
              className="text-black/70 text-base"
              whileHover={{ scale: 1.05 }}
            >
              New here?{' '}
              <motion.a
                href="/signup"
                className="text-black font-semibold hover:text-[#ffce3b] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.a>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/3 to-transparent pointer-events-none" />
    </div>
  );
}