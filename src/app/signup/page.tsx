'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-8 bg-yellow-300"
            style={{
              width: '60px',
              height: '60px',
              left: `${10 + i * 25}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -12, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Simple Gradient Overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-yellow-200/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-200/15 to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 relative z-10">
        {/* Logo and Brand Section */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo Container */}
          <motion.div
            className="mb-4 relative"
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
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-yellow-100/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-3 border-yellow-300/40 relative">
              {/* Single Rotating Ring */}
              <motion.div
                className="absolute inset-2 border-2 border-transparent border-t-yellow-400 rounded-full"
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
                  width={70}
                  height={70}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {"Eklavyaa".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.08,
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
            className="h-7 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              {displayedText}
              <motion.span
                className="inline-block w-0.5 h-5 bg-yellow-500 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </p>
          </motion.div>
        </motion.div>

        {/* SignUp Form */}
        <motion.div
          className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-yellow-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Title */}
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Join Eklavyaa
          </motion.h2>

          {/* User Type Selection */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-sm font-medium text-gray-700 mb-3 text-center">I am a:</p>
            <div className="grid grid-cols-2 gap-3">
              <motion.button 
                type="button" 
                onClick={() => setUserType('student')} 
                className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                  userType === 'student' 
                    ? 'bg-yellow-400 text-gray-800 shadow-md border-2 border-yellow-400' 
                    : 'bg-white/70 text-gray-700 border-2 border-yellow-200 hover:border-yellow-300'
                }`} 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                Student
              </motion.button>
              <motion.button 
                type="button" 
                onClick={() => setUserType('tutor')} 
                className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                  userType === 'tutor' 
                    ? 'bg-yellow-400 text-gray-800 shadow-md border-2 border-yellow-400' 
                    : 'bg-white/70 text-gray-700 border-2 border-yellow-200 hover:border-yellow-300'
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
            {[
              { field: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
              { field: 'username', label: 'Username', type: 'text', placeholder: 'Choose a username' },
              { field: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
              { field: 'phone', label: 'Phone', type: 'tel', placeholder: 'Enter phone number' },
              { field: 'password', label: 'Password', type: 'password', placeholder: 'Create a password' },
              { field: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' }
            ].map(({ field, label, type, placeholder }, idx) => (
              <motion.div 
                key={field} 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.4, delay: 1.2 + idx * 0.1 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <motion.input
                  type={type}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border-2 border-yellow-200 bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:bg-white transition-all duration-300 text-sm"
                  whileFocus={{ 
                    scale: 1.01,
                    boxShadow: "0 0 10px rgba(251, 191, 36, 0.2)"
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Sign Up Button */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <motion.button 
              type="submit" 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-3 sm:py-4 rounded-lg font-bold text-lg shadow-lg border-2 border-yellow-300 transition-colors duration-300" 
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 8px 20px rgba(251, 191, 36, 0.3)",
                y: -2
              }} 
              whileTap={{ scale: 0.98 }}
            >
              <a href="/dashboard" className="block w-full h-full">
                Create Account
              </a>
            </motion.button>
          </motion.div>

          {/* Login Link */}
          <motion.p 
            className="text-center mt-6 text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            Already have an account?{' '}
            <a 
              href="/login" 
              className="text-gray-800 font-semibold hover:text-yellow-600 transition-colors duration-300"
            >
              Sign In
            </a>
          </motion.p>
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
