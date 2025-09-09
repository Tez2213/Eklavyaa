'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useState } from 'react';
import { 
  Star, 
  Target, 
  Zap, 
  Trophy, 
  ArrowRight,
  Home,
  BookOpen,
  Award,
  User,
  Brain,
  Flame,
  X,
  GraduationCap
} from 'lucide-react';

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState(6);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const classes = [6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Fixed Header Section */}
      <motion.div
        className="fixed top-0 left-0 right-0 bg-gray-50/95 backdrop-blur-md border-b border-gray-200/50 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <motion.h1 
                className="text-2xl font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Hello Arjun
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to learn today?
              </motion.p>
            </div>
            
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-3 py-1">
                  <Star className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" />
                  7
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Badge className="bg-[#ffce3b] text-white px-3 py-1">
                  <Trophy className="w-3 h-3 mr-1" />
                  450
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Avatar className="w-8 h-8 bg-[#ffce3b]">
                  <AvatarFallback className="bg-[#ffce3b] text-white font-semibold text-sm">
                    A
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content with top padding for fixed header */}
      <div className="relative z-10 px-4 pt-24 pb-24">{/* Added pt-24 for header space */}

        {/* Continue Your Journey Card */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-[#ffce3b] to-[#ffde00] border-0 shadow-lg mb-6 overflow-hidden">
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">Continue Your Journey</h3>
                  <p className="text-black/80 font-medium">Chapter 3: Algebra</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-6 h-6 text-black" />
                </motion.div>
              </div>
              
              <div className="mb-2">
                <Progress value={65} className="h-2 bg-black/20">
                  <div className="h-full bg-black rounded-full transition-all duration-500" style={{ width: '65%' }} />
                </Progress>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-black/70 text-sm">Progress</span>
                <span className="text-black font-bold text-lg">65%</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Weekly Goal Tracker */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Goal Tracker</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accuracy</h4>
                  <p className="text-2xl font-bold text-gray-900 mb-2">87%</p>
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Speed</h4>
                  <p className="text-2xl font-bold text-gray-900 mb-2">87%</p>
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stats</h3>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="w-full bg-[#ffce3b] hover:bg-[#ffde00] text-white py-4 rounded-2xl font-semibold text-base shadow-lg">
              <Flame className="w-5 h-5 mr-2" />
              Claim Streak Tracker
            </Button>
          </motion.div>
        </motion.div>

        {/* Friend Activity Feed */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Friend Activity Feed</h3>
          
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="bg-yellow-50 border-yellow-200 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      The human brain contains approximately 86 billion neurons.
                    </p>
                  </div>
                  <a href='/chapters'>
                  <Badge className="bg-[#ffce3b] text-white ml-3 px-3 py-1 text-xs">
                    Mini Quiz
                  </Badge>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Unlockable Badges */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Unlockable Badges</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-[#ffce3b] rounded-full flex items-center justify-center mx-auto mb-2 relative">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-gray-600 font-medium">30%</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-gray-100 border-gray-200 shadow-sm opacity-60">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-6 h-6 text-gray-500" />
                  </div>
                  <p className="text-xs text-gray-500 font-medium">70%</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-[#ffce3b] border-[#ffce3b] shadow-sm">
                <CardContent className="p-12">
                  <p className="text-xs text-white font-semibold text-center leading-tight">
                    Keep up the work, Arjun
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Class Selection Modal */}
      <AnimatePresence>
        {showClassSelector && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowClassSelector(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-sm relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Select Your Class</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowClassSelector(false)}
                  className="h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {classes.map((classNum) => (
                  <motion.button
                    key={classNum}
                    onClick={() => {
                      setSelectedClass(classNum);
                      setShowClassSelector(false);
                    }}
                    className={`
                      aspect-square rounded-xl border-2 font-bold text-lg
                      ${selectedClass === classNum 
                        ? 'bg-[#ffce3b] border-[#ffce3b] text-white' 
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-[#ffce3b] hover:bg-[#ffce3b]/10'
                      }
                      transition-all duration-200
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {classNum}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-6 flex items-center justify-center">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-4 py-2">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Currently: Class {selectedClass}
                </Badge>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Bottom Navigation */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md px-4 py-3 border-t border-gray-800 z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5 text-[#ffce3b]" />
            <a href="/dashboard" className="text-[#ffce3b] text-xs font-medium">
              Dashboard
            </a>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="w-5 h-5 text-gray-400" />
            <a href="/chapters" className="text-gray-400 text-xs">Chapters</a>
          </motion.div>
          
          <motion.button
            className="w-12 h-12 bg-[#ffce3b] rounded-full flex items-center justify-center relative"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowClassSelector(true)}
          >
            <span className="text-white font-bold text-lg">{selectedClass}</span>
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-[#ffce3b] text-xs font-bold">•</span>
            </motion.div>
          </motion.button>
          
          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <Award className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 text-xs">Leaderboard</span>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <User className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 text-xs">Profile</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}