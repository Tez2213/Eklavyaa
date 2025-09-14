'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import BottomNav from "@/components/ui/BottomNav";
import { useState } from 'react';
import { 
  Crown,
  Trophy,
  Star,
  Coins,
  GraduationCap,
  X
} from 'lucide-react';

export default function Leaderboard() {
  const [selectedClass, setSelectedClass] = useState(6);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const classes = [6, 7, 8, 9, 10, 11, 12];

  // Generate random avatars
  const getRandomAvatar = (seed: string) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return `https://avatar.iran.liara.run/public/${randomNumber}`;
  };

  // Sample leaderboard data
  const topThree = [
    {
      id: 1,
      name: "sara",
      username: "sara324",
      position: 1,
      points: 5000,
      avatar: getRandomAvatar("sara"),
      badge: "diamond"
    },
    {
      id: 2,
      name: "Ananaya",
      username: "Ananya_457",
      position: 2,
      points: 4847,
      avatar: getRandomAvatar("Ananya"),
      badge: "diamond"
    },
    {
      id: 3,
      name: "Dhruv",
      username: "dhruv_genius",
      position: 3,
      points: 4147,
      avatar: getRandomAvatar("dhruv"),
      badge: "diamond"
    }
  ];

  const otherPlayers = [
    {
      id: 4,
      name: "Ishan",
      username: "Ishan_w_2024",
      position: 4,
      points: 3900,
      avatar: getRandomAvatar("Ishan"),
      badge: "ruby"
    },
    {
      id: 5,
      name: "Aditi",
      username: "Aditi_333",
      position: 5,
      points: 3850,
      avatar: getRandomAvatar("Aditi"),
      badge: "ruby"
    },
    {
      id: 6,
      name: "Sumit",
      username: "sumit_900",
      position: 6,
      points: 3720,
      avatar: getRandomAvatar("Sumit"),
      badge: "sapphire"
    },
    {
      id: 7,
      name: "Devojit",
      username: "Dev_ojit",
      position: 7,
      points: 3610,
      avatar: getRandomAvatar("Devojit"),
      badge: "sapphire"
    },
    {
      id: 8,
      name: "Yash",
      username: "Yash_2323",
      position: 8,
      points: 3605,
      avatar: getRandomAvatar("Yash"),
      badge: "sapphire"
    },
    {
      id: 9,
      name: "Rohan",
      username: "Rohan302",
      position: 9,
      points: 3555,
      avatar: getRandomAvatar("Rohan"),
      badge: "sapphire"
    },
    {
      id: 10,
      name: "Abhi",
      username: "Abhi223",
      position: 10,
      points: 3500,
      avatar: getRandomAvatar("Abhi"),
      badge: "sapphire"
    }
  ];

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'diamond':
        return '';
      case 'ruby':
        return '';
      case 'sapphire':
        return '';
      default:
        return '';
    }
  };

  const getPodiumHeight = (position: number) => {
    switch (position) {
      case 1:
        return 'h-20';
      case 2:
        return 'h-16';
      case 3:
        return 'h-12';
      default:
        return 'h-12';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
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
      
      {/* Header - Fixed at top */}
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
            Leaderboard
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See who's leading the way!
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
              3
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
              <a href='/profile'>
              <AvatarFallback className="bg-[#ffce3b] text-white font-semibold text-sm">
              <img src={'/admin.gif'} />
              </AvatarFallback>
              </a>
            </Avatar>
          </motion.div>
        </div>
          </div>
        </div>
      </motion.div>

      {/* Top 3 Podium - Fixed under header */}
      <motion.div
        className="fixed top-[86px] left-0 right-0 bg-gray-50/95 backdrop-blur-md z-40 border-b border-gray-200/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="px-4 py-6">
          <div className="flex items-end justify-center space-x-4">
            {/* 2nd Place */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="relative mb-3">
                <Avatar className="w-16 h-16 border-4 border-gray-400">
                  <AvatarImage src={topThree[1].avatar} alt={topThree[1].name} />
                  <AvatarFallback className="bg-gray-400 text-white font-bold">
                    {topThree[1].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className={`bg-[#ffce3b] rounded-t-lg flex items-center justify-center ${getPodiumHeight(2)} w-16`}>
                <span className="text-black font-bold text-2xl">2</span>
              </div>
              <div className="text-center mt-2">
                <p className="text-sm font-semibold text-gray-900">{topThree[1].points}</p>
                <p className="text-xs text-gray-500">ID: {topThree[1].username}</p>
              </div>
            </motion.div>

            {/* 1st Place */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative mb-3">
                <Crown className="w-6 h-6 text-[#ffce3b] absolute -top-7 left-1/2 transform -translate-x-1/2" />
                <Avatar className="w-20 h-20 border-4 border-[#ffce3b]">
                  <AvatarImage src={topThree[0].avatar} alt={topThree[0].name} />
                  <AvatarFallback className="bg-[#ffce3b] text-black font-bold">
                    {topThree[0].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className={`bg-[#ffce3b] rounded-t-lg flex items-center justify-center ${getPodiumHeight(1)} w-20`}>
                <span className="text-black font-bold text-3xl">1</span>
              </div>
              <div className="text-center mt-2">
                <p className="text-lg font-bold text-[#ffce3b]">{topThree[0].points}</p>
                <p className="text-xs text-gray-500">ID: {topThree[0].username}</p>
              </div>
            </motion.div>

            {/* 3rd Place */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative mb-3">
                <Avatar className="w-16 h-16 border-4 border-orange-400">
                  <AvatarImage src={topThree[2].avatar} alt={topThree[2].name} />
                  <AvatarFallback className="bg-orange-400 text-white font-bold">
                    {topThree[2].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className={`bg-[#ffce3b] rounded-t-lg flex items-center justify-center ${getPodiumHeight(3)} w-16`}>
                <span className="text-black font-bold text-2xl">3</span>
              </div>
              <div className="text-center mt-2">
                <p className="text-sm font-semibold text-gray-900">{topThree[2].points}</p>
                <p className="text-xs text-gray-500">ID: {topThree[2].username}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Area - Scrollable */}
      <motion.div
        className="pt-[360px] pb-[180px] min-h-screen"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="px-3 max-w-sm mx-auto space-y-2">
          {otherPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-r from-yellow-200 to-yellow-300 border-0 shadow-md">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-black font-bold text-base w-5 text-center flex-shrink-0">
                        {player.position}
                      </div>
                      <Avatar className="w-9 h-9 flex-shrink-0">
                        <AvatarImage src={player.avatar} alt={player.name} />
                        <AvatarFallback className="bg-gray-600 text-white font-bold text-sm">
                          {player.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="text-black font-semibold text-sm truncate">{player.name}</p>
                        <p className="text-black/70 text-xs truncate">ID: {player.username}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 flex-shrink-0">
                      <span className="text-black font-bold text-sm">{player.points}</span>
                      <Coins className="w-3 h-3 text-black" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

        {/* Current User Position - Fixed at Bottom */}
        <motion.div
         className="fixed bottom-[70px] left-0 right-0 bg-gray-50/95 backdrop-blur-md border-t border-gray-200/50 z-40 px-3 py-3"
         initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-sm mx-auto">
            <Card className="bg-white border border-[#ffce3b] shadow-xl">
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-[#ffce3b] font-bold text-base w-5 text-center flex-shrink-0">
                      148
                    </div>
                    <Avatar className="w-9 h-9 flex-shrink-0">
                      <AvatarImage src={'/avatar.png'} alt="You" />
                      <AvatarFallback className="bg-[#ffce3b] text-black font-bold text-sm">
                        A
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-900 font-semibold text-sm">Arjun</p>
                      <p className="text-gray-500 text-xs">That's you!</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 flex-shrink-0">
                    <span className="text-[#ffce3b] font-bold text-sm">2450</span>
                    <Coins className="w-3 h-3 text-[#ffce3b]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

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

      <BottomNav currentPage="leaderboard" />
    </div>
  );
}