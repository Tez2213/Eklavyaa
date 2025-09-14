"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BottomNav from "@/components/ui/BottomNav";
import { useState } from "react";
import {
  Star,
  Target,
  Zap,
  Trophy,
  ArrowRight,
  Brain,
  X,
  GraduationCap,
} from "lucide-react";

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState(6);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const classes = [6, 7, 8, 9, 10, 11, 12];
  const [showStarPopup, setShowStarPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-bricolage">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
                className="text-2xl flex font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Hello, <div className="text-amber-500">&nbsp;Arjun</div>
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
                <Badge
                  className="bg-yellow-100 text-yellow-800 border-yellow-200 px-3 py-1 cursor-pointer"
                  onClick={() => setShowStarPopup(true)}
                >
                  🔥 3
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
                  <a href="/profile" >
                  <AvatarFallback className="bg-[#ffce3b] text-white font-semibold text-sm">
                    <img src={"/avatar.png"} />
                  </AvatarFallback>
                  </a>
                </Avatar>
              </motion.div>
              {/* 🔥 Star Popup Modal */}
              <AnimatePresence>
                {showStarPopup && (
                  <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowStarPopup(false)}
                  >
                    <motion.div
                      className="bg-white rounded-2xl p-6 w-full max-w-sm relative mt-20"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Modal Header with Close Button */}
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900">
                          Your Stars
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowStarPopup(false)}
                          className="h-8 w-8 rounded-full hover:bg-gray-100"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Stars Display */}
                      <div className="flex justify-center mb-4 space-x-2">
                        {[1, 2, 3].map((star) => (
                          <div className="w-8 h-8 fill-yellow-400 text-yellow-400">
                            🔥
                          </div>
                        ))}
                      </div>

                      {/* Message */}
                      <p className="text-center text-gray-700">
                        You’ve earned{" "}
                        <span className="font-bold">3 Fire Streek</span> for
                        your progress! 🎉
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content with top padding for fixed header */}
      <div className="relative z-10 px-4 pt-24 pb-24">
        {/* Added pt-24 for header space */}

        {/* Continue Your Journey Card */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://game-ashen-eight.vercel.app/maths/prime-guardians">
            <Card className="bg-gradient-to-r from-[#ffce3b] to-[#ffde00] border-0 shadow-lg mb-6 overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">
                      Continue Your Journey
                    </h3>
                    <p className="text-black/80 font-medium">
                      Chapter 3: Algebra
                    </p>
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
                    <div
                      className="h-full bg-black rounded-full transition-all duration-500"
                      style={{ width: "65%" }}
                    />
                  </Progress>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-black/70 text-sm">Progress</span>
                  <span className="text-black font-bold text-lg">65%</span>
                </div>
              </CardContent>
            </Card>
          </a>
        </motion.div>

        {/* Weekly Goal Tracker */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Weekly Goal Tracker
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <img className="h-12" src={'/target.gif'} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accuracy</h4>
                  <p className="text-2xl font-bold text-gray-900 mb-2">87%</p>
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
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
                    <img className="h-12" src={'/shock.gif'} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Speed</h4>
                  <p className="text-2xl font-bold text-gray-900 mb-2">87%</p>
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Hologram Magic Button */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-full">
            <motion.button
              onClick={() => window.location.href = '/hologram_setup'}
              className="relative w-full h-16 bg-black text-white font-bold text-xl rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Animated Rainbow Border */}
              <div className="absolute inset-0 p-1">
                <div 
                  className="absolute inset-0 rounded-xl animate-spin"
                  style={{
                    background: 'conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080, #ff0000)',
                    animation: 'spin 3s linear infinite'
                  }}
                />
                <div className="relative w-full h-full bg-black rounded-lg flex items-center justify-center font-semibold font-bricolage">
                  Hologram Magic 🪄
                </div>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Friend Activity Feed */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Friend Activity Feed
          </h3>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
  <CardContent className="p-4 flex items-center space-x-3">
    {/* Friend's Avatar */}
    <Avatar className="w-8 h-8">
      <AvatarFallback className="bg-blue-500 text-white">
        <img src={'https://avatar.iran.liara.run/public/8'} />
        </AvatarFallback> {/* Replace with actual avatar */}
    </Avatar>
    {/* Friend's Name */}
    <div>
      <p className="text-sm font-semibold text-gray-900">Rohan Sharma</p>
      {/* Activity Text */}
      <p className="text-xs text-gray-500">completed a quiz on Algebra.</p>
    </div>
    <div className="flex-grow"></div> {/* Pushes the badge to the right */}
    <a href="/chapters">
      <Badge className="bg-[#ffce3b] text-white ml-3 px-3 py-1 text-xs">
        Mini Quiz
      </Badge>
    </a>
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Unlockable Badges
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-[#ffce3b] rounded-full flex items-center justify-center mx-auto mb-2 relative">
                    <img className="h-12" src={'/brain.gif'} />
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
                    <img className="h-12" src={'/trophy.gif'} />
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
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-8 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                    <img className="h-12" src={'/trophy1.gif'} />
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    Keep it up Arjun
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
                <h3 className="text-xl font-bold text-gray-900">
                  Select Your Class
                </h3>
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
                      ${
                        selectedClass === classNum
                          ? "bg-[#ffce3b] border-[#ffce3b] text-white"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:border-[#ffce3b] hover:bg-[#ffce3b]/10"
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

      <BottomNav currentPage="dashboard" />
    </div>
  );
}
