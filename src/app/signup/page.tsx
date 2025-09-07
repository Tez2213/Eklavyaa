'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function SignUp() {
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
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
          className="absolute top-20 left-6 w-6 h-4 bg-blue-300/20 rounded-sm"
          animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-0.5 bg-blue-400/30 mt-1 rounded"></div>
        </motion.div>
        
        {/* Globe Icon */}
        <motion.div
          className="absolute top-32 right-8 w-6 h-6 bg-green-300/20 rounded-full border border-green-400/20"
          animate={{ rotate: [0, 360], y: [0, -15, 0] }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Calculator */}
        <motion.div
          className="absolute bottom-40 left-4 w-5 h-6 bg-gray-300/20 rounded border border-gray-400/20"
          animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-2 gap-0.5 p-0.5">
            <div className="w-1 h-0.5 bg-gray-400/30 rounded-sm"></div>
            <div className="w-1 h-0.5 bg-gray-400/30 rounded-sm"></div>
          </div>
        </motion.div>
        
        {/* Pencil */}
        <motion.div
          className="absolute bottom-60 right-6 w-1.5 h-6 bg-orange-300/20 rounded-t-full"
          animate={{ rotate: [0, 10, -10, 0], y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 bg-pink-300/30 rounded-full mt-4"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 relative z-10">
        
        {/* Logo and Brand Section */}
        <motion.div
          className="text-center mb-8"
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
            <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 relative">
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/logo.png"
                  alt="Eklavyaa Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            className="text-3xl font-bold text-black mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Eklavyaa
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-sm text-black/70 font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Education, the fun way.
          </motion.p>
        </motion.div>

        {/* Sign Up Form */}
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Sign Up Title */}
          <motion.h2
            className="text-2xl font-bold text-center text-black mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            SIGN UP
          </motion.h2>

          {/* User Type Selection */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-sm text-black/70 mb-2">I am a:</p>
            <div className="flex space-x-4">
              <motion.button
                type="button"
                onClick={() => setUserType('student')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                  userType === 'student'
                    ? 'bg-[#ffce3b] text-white shadow-lg'
                    : 'bg-white/50 text-black border border-[#ffce3b]/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Student
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setUserType('tutor')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                  userType === 'tutor'
                    ? 'bg-[#ffce3b] text-white shadow-lg'
                    : 'bg-white/50 text-black border border-[#ffce3b]/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Tutor
              </motion.button>
            </div>
          </motion.div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label className="block text-sm text-black/70 mb-1">Full Name</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-full border-2 border-[#ffce3b]/50 bg-white/70 backdrop-blur-sm text-black placeholder-black/50 focus:outline-none focus:border-[#ffce3b] focus:bg-white transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Username Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <label className="block text-sm text-black/70 mb-1">Username</label>
              <motion.input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Choose a username"
                className="w-full px-4 py-3 rounded-full border-2 border-[#ffce3b]/50 bg-white/70 backdrop-blur-sm text-black placeholder-black/50 focus:outline-none focus:border-[#ffce3b] focus:bg-white transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <label className="block text-sm text-black/70 mb-1">Email</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full border-2 border-[#ffce3b]/50 bg-white/70 backdrop-blur-sm text-black placeholder-black/50 focus:outline-none focus:border-[#ffce3b] focus:bg-white transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Phone Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <label className="block text-sm text-black/70 mb-1">Phone Number</label>
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-full border-2 border-[#ffce3b]/50 bg-white/70 backdrop-blur-sm text-black placeholder-black/50 focus:outline-none focus:border-[#ffce3b] focus:bg-white transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <label className="block text-sm text-black/70 mb-1">Password</label>
              <motion.input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-full border-2 border-[#ffce3b]/50 bg-white/70 backdrop-blur-sm text-black placeholder-black/50 focus:outline-none focus:border-[#ffce3b] focus:bg-white transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Confirm Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <label className="block text-sm text-black/70 mb-1">Confirm Password</label>
              <motion.input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 rounded-full border-2 border-[#ffce3b]/50 bg-white/70 backdrop-blur-sm text-black placeholder-black/50 focus:outline-none focus:border-[#ffce3b] focus:bg-white transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
          </div>

          {/* Sign Up Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.button
              type="submit"
              className="w-full bg-[#ffce3b] text-white py-4 rounded-full font-bold text-lg shadow-xl border-2 border-[#ffce3b] relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(255, 206, 59, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                y: [0, -2, 0],
              }}
              transition={{ 
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-100, 200] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
                <a href="/dashboard" className="relative z-10 block w-full h-full">
                SIGN UP
                </a>
            </motion.button>
          </motion.div>

          {/* Login Link */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <motion.p
              className="text-black/70 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Already Registered?{' '}
              <motion.a
                href="/login"
                className="text-black font-semibold hover:text-[#ffce3b] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
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