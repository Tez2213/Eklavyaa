'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BottomNav from "@/components/ui/BottomNav";
import { useState } from "react";
import Link from 'next/link';
import { 
  Star, 
  Trophy, 
  ArrowRight,
  Atom,
  TestTube,
  Rocket,
  Beaker,
  Calculator,
  Triangle,
  Ruler,
  Square,
  Lock,
  Building,
  Book,
  Palette,
  GraduationCap,
  X
} from 'lucide-react';

export default function Chapters() {
  const [selectedClass, setSelectedClass] = useState(6);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const classes = [6, 7, 8, 9, 10, 11, 12];

  // Sample data for worlds
  const activeWorlds = [
    {
      id: 1,
      title: 'Science World',
      level: 5,
      progress: 40,
      stars: 3,
      bgColor: 'bg-blue-500',
      bgGradient: 'from-blue-500 to-blue-600',
      icons: [
        { icon: Atom, color: 'text-blue-200' },
        { icon: TestTube, color: 'text-green-200' },
        { icon: Rocket, color: 'text-red-200' },
        { icon: Beaker, color: 'text-blue-200' }
      ]
    },
    {
      id: 2,
      title: 'Math World',
      level: 8,
      progress: 65,
      stars: 6,
      bgColor: 'bg-orange-400',
      bgGradient: 'from-orange-400 to-yellow-500',
      icons: [
        { icon: Calculator, color: 'text-red-400' },
        { icon: Triangle, color: 'text-orange-300' },
        { icon: Ruler, color: 'text-yellow-300' },
        { icon: Square, color: 'text-blue-300' }
      ]
    }
  ];

  const comingSoonWorlds = [
    {
      id: 3,
      title: 'History',
      subtitle: 'Coming Soon',
      bgColor: 'bg-gray-200'
    },
    {
      id: 4,
      title: 'English',
      subtitle: 'Coming Soon',
      bgColor: 'bg-gray-200'
    },
    {
      id: 5,
      title: 'Art',
      subtitle: 'Coming Soon',
      bgColor: 'bg-gray-200'
    }
  ];

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
                Class 6 Worlds   
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to explore and learn?
              </motion.p>
            </div>
            
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-3 py-1">
                  🔥  3
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
                    <img src={"/avatar.png"} />
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content with top padding for fixed header */}
      <div className="relative z-10 px-4 pt-24 pb-24">

        {/* Active Worlds */}
        <div className="space-y-6 mb-8">
          {activeWorlds.map((world, index) => {
            // Determine the link for each world
            let worldLink = '';
            if (world.title === 'Science World') {
              worldLink = '/chapters/science-world';
            } else if (world.title === 'Math World') {
              worldLink = '/chapters/maths-world';
            }

            const cardContent = (
              <Card className={`${world.bgColor} border-0 shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300`}>
                <CardContent className="p-6 relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${world.bgGradient} opacity-90`} />
                  
                  {/* Decorative Circle */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{world.title}</h3>
                        <p className="text-white/80 font-medium">Level {world.level}</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/20 rounded-full p-2"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Subject Icons */}
                    <div className="flex items-center space-x-4 mb-6">
                      {world.icons.map((IconData, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          className="relative"
                          animate={{ 
                            y: [0, -8, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3 + iconIndex,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: iconIndex * 0.5
                          }}
                        >
                          <IconData.icon className={`w-8 h-8 ${IconData.color}`} />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Progress Section */}
                    <div className="mb-4">
                      <Progress value={world.progress} className="h-3 bg-black/20">
                        <div 
                          className="h-full bg-black rounded-full transition-all duration-1000" 
                          style={{ width: `${world.progress}%` }} 
                        />
                      </Progress>
                    </div>
                    
                    {/* Bottom Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center space-x-1">
                          {[...Array(world.stars)].map((_, starIndex) => (
                            <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-white font-medium ml-2">{world.stars}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white/70 text-sm">Progress</span>
                        <span className="text-white font-bold text-lg">{world.progress}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <motion.div
                key={world.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {worldLink ? (
                  <Link href={worldLink} className="block">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>

        {/* More Worlds Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Worlds Coming Soon</h3>
          
          <div className="space-y-4">
            {comingSoonWorlds.map((world, index) => (
              <motion.div
                key={world.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card className="bg-gray-100 border-gray-200 shadow-sm relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          {world.id === 3 && <Building className="w-6 h-6 text-gray-500" />}
                          {world.id === 4 && <Book className="w-6 h-6 text-gray-500" />}
                          {world.id === 5 && <Palette className="w-6 h-6 text-gray-500" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{world.title}</h4>
                          <p className="text-gray-500 text-sm">{world.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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

      <BottomNav currentPage="chapters" currentClass={6} />
    </div>
  );
}