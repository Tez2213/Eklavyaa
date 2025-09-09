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
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Yellow Gradient Overlays - Top and Bottom */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ffce3b]/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#ffde00]/20 to-transparent pointer-events-none" />
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
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
          className="absolute top-24 left-8 w-6 h-4 bg-blue-400/25 rounded-sm"
          animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-0.5 bg-blue-500/40 mt-1 rounded"></div>
        </motion.div>
        
        {/* Lightbulb Icon */}
        <motion.div
          className="absolute top-20 right-6 w-5 h-6 bg-yellow-300/30 rounded-t-full border-b border-yellow-400/20"
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Globe Icon */}
        <motion.div
          className="absolute top-40 left-4 w-6 h-6 bg-green-400/25 rounded-full border border-green-500/20"
          animate={{ rotate: [0, 360], y: [0, -18, 0] }}
          transition={{ 
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-0.5 bg-green-500/30 mt-2 rounded"></div>
          <div className="w-0.5 h-full bg-green-500/30 absolute left-1/2 top-0 rounded"></div>
        </motion.div>
        
        {/* Calculator */}
        <motion.div
          className="absolute bottom-32 right-8 w-5 h-6 bg-gray-400/20 rounded border border-gray-500/20"
          animate={{ y: [0, 15, 0], x: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-2 gap-0.5 p-0.5">
            <div className="w-1 h-0.5 bg-gray-500/30 rounded-sm"></div>
            <div className="w-1 h-0.5 bg-gray-500/30 rounded-sm"></div>
            <div className="w-1 h-0.5 bg-gray-500/30 rounded-sm"></div>
            <div className="w-1 h-0.5 bg-gray-500/30 rounded-sm"></div>
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
          <div className="w-1.5 h-2 bg-gray-400/30 absolute -top-0.5 right-0.5 rounded"></div>
        </motion.div>
        
        {/* Pencil */}
        <motion.div
          className="absolute top-36 right-12 w-1.5 h-6 bg-orange-400/25 rounded-t-full"
          animate={{ rotate: [0, 12, -12, 0], y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 bg-pink-400/30 rounded-full mt-4"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 relative z-10">
        
        {/* Logo and Brand Section */}
        <motion.div
          className="text-center mb-12"
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
            <div className="w-28 h-28 mx-auto bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-2 border-white/40 relative">
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent border-t-[#ffce3b]/40 rounded-full"
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
            className="text-5xl font-extrabold text-black mb-2 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Eklavyaa
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-lg text-black/70 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Education, the fun way.
          </motion.p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="w-full max-w-sm bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-[#ffce3b]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Login Title */}
          <h2 className="text-3xl font-bold text-center text-black mb-8">LOGIN</h2>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm text-black/70 mb-2">Email Address</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="username@gmail.com"
                className="w-full px-5 py-4 rounded-full border-2 border-[#ffce3b]/40 bg-white text-black placeholder-black/40 focus:outline-none focus:border-[#ffce3b] transition-all duration-300 text-base shadow-sm"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(255, 206, 59, 0.25)"
                }}
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm text-black/70 mb-2">Password</label>
              <motion.input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••••"
                className="w-full px-5 py-4 rounded-full border-2 border-[#ffce3b]/40 bg-white text-black placeholder-black/40 focus:outline-none focus:border-[#ffce3b] transition-all duration-300 text-base shadow-sm"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(255, 206, 59, 0.25)"
                }}
              />
            </div>
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[#ffce3b] to-[#ffc107] text-white py-4 rounded-full font-bold text-xl shadow-lg mt-10 relative overflow-hidden"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 15px 35px rgba(255, 206, 59, 0.5)"
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 hover:cursor-pointer">LOGIN</span>
          </motion.button>

          {/* Sign Up Link */}
          <p className="text-center mt-8 text-black/70 text-base">
            New here?{' '}
            <a
              href="/signup"
              className="text-black font-semibold hover:text-[#ffce3b] transition-colors duration-300"
            >
              Sign Up
            </a>
          </p>
        </motion.div>
      </div>

      {/* Overlay Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none" />
    </div>
  );
}
