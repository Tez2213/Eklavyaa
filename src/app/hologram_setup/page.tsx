"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import {
  Trophy,
  Home,
  BookOpen,
  Award,
  Bot,
  ArrowLeft,
  Languages,
  Play,
  Scissors,
  Ruler,
  Smartphone,
  Package,
  Zap,
  X,
} from "lucide-react";

export default function HologramSetup() {
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'hindi'>('english');
  const [showStarPopup, setShowStarPopup] = useState(false);
    const [selectedClass, setSelectedClass] = useState(6);
    const [showClassSelector, setShowClassSelector] = useState(false);
    const [showStreekSelection, setShowStreekSelection] = useState(false);
    const classes = [6, 7, 8, 9, 10, 11, 12];
    const streek = [1, 2, 3, 4, 5, 6, 7];

  const content = {
    english: {
      steps: [
        {
          number: "01",
          title: "COLLECT MATERIALS",
          description: "Gather all the essential items needed for your hologram pyramid",
          icon: <Package className="w-8 h-8" />,
          items: [
            "Transparent plastic sheet (OHP sheet, CD cover)",
            "Ruler and marker/pen for precise measurements",
            "Sharp scissors or precision cutter",
            "Clear tape or strong adhesive glue"
          ],
          color: "from-cyan-400 to-blue-500",
          position: "left"
        },
        {
          number: "02",
          title: "DRAW THE SHAPE",
          description: "Create precise trapezoid templates with exact dimensions",
          icon: <Ruler className="w-8 h-8" />,
          items: [
            "Draw trapezoid: Top = 1cm, Bottom = 6cm, Height = 3.5cm",
            "Use ruler for accurate measurements",
            "Create 4 identical trapezoids",
            "Mark cutting lines clearly"
          ],
          color: "from-purple-400 to-pink-500",
          position: "right"
        },
        {
          number: "03",
          title: "CUT & ASSEMBLE",
          description: "Carefully cut and join pieces to form the pyramid structure",
          icon: <Scissors className="w-8 h-8" />,
          items: [
            "Cut along marked lines with precision",
            "Test fit pieces before permanent joining",
            "Apply tape/glue to edges systematically",
            "Form pyramid with open top (no tip)"
          ],
          color: "from-green-400 to-emerald-500",
          position: "left"
        },
        {
          number: "04",
          title: "ACTIVATE HOLOGRAM",
          description: "Position pyramid and play holographic content",
          icon: <Smartphone className="w-8 h-8" />,
          items: [
            "Place pyramid inverted on phone screen",
            "Play hologram video from YouTube",
            "View from sides for 3D floating effect",
            "Adjust lighting for optimal visibility ✨"
          ],
          color: "from-orange-400 to-red-500",
          position: "right"
        }
      ],
      testVideo: "Test Your Creation",
      testDescription: "Experience the magic with our sample hologram video",
      backToDashboard: "Return to Dashboard"
    },
    hindi: {
      title: "होलोग्राम सेटअप",
      subtitle: "प्रक्रिया",
      steps: [
        {
          number: "01",
          title: "सामग्री इकट्ठा करें",
          description: "होलोग्राम पिरामिड के लिए आवश्यक सभी चीजें जुटाएं",
          icon: <Package className="w-8 h-8" />,
          items: [
            "पारदर्शी प्लास्टिक शीट (OHP शीट, CD कवर)",
            "सटीक माप के लिए रूलर और मार्कर/पेन",
            "तेज कैंची या प्रिसिजन कटर",
            "साफ टेप या मजबूत चिपकने वाला गोंद"
          ],
          color: "from-cyan-400 to-blue-500",
          position: "left"
        },
        {
          number: "02",
          title: "आकार बनाएं",
          description: "सटीक आयामों के साथ समलम्ब चतुर्भुज टेम्प्लेट बनाएं",
          icon: <Ruler className="w-8 h-8" />,
          items: [
            "समलम्ब चतुर्भुज: ऊपर = 1सेमी, नीचे = 6सेमी, ऊंचाई = 3.5सेमी",
            "सटीक माप के लिए रूलर का उपयोग करें",
            "4 समान समलम्ब चतुर्भुज बनाएं",
            "काटने की रेखाओं को स्पष्ट रूप से चिह्नित करें"
          ],
          color: "from-purple-400 to-pink-500",
          position: "right"
        },
        {
          number: "03",
          title: "काटें और जोड़ें",
          description: "पिरामिड संरचना बनाने के लिए सावधानी से काटें और जोड़ें",
          icon: <Scissors className="w-8 h-8" />,
          items: [
            "चिह्नित रेखाओं के साथ सटीकता से काटें",
            "स्थायी जोड़ने से पहले टुकड़ों को फिट करके देखें",
            "किनारों पर व्यवस्थित रूप से टेप/गोंद लगाएं",
            "खुले शीर्ष के साथ पिरामिड बनाएं (बिना सिरे के)"
          ],
          color: "from-green-400 to-emerald-500",
          position: "left"
        },
        {
          number: "04",
          title: "होलोग्राम सक्रिय करें",
          description: "पिरामिड की स्थिति तय करें और होलोग्राफिक सामग्री चलाएं",
          icon: <Smartphone className="w-8 h-8" />,
          items: [
            "पिरामिड को फोन स्क्रीन पर उल्टा रखें",
            "YouTube से होलोग्राम वीडियो चलाएं",
            "3D तैरते प्रभाव के लिए किनारों से देखें",
            "बेहतर दिखावट के लिए रोशनी समायोजित करें ✨"
          ],
          color: "from-orange-400 to-red-500",
          position: "right"
        }
      ],
      testVideo: "अपनी रचना का परीक्षण करें",
      testDescription: "हमारे नमूना होलोग्राम वीडियो के साथ जादू का अनुभव करें",
      backToDashboard: "डैशबोर्ड पर वापस जाएं"
    }
  };

  const currentContent = content[selectedLanguage];

  return (
    <div className="min-h-screen relative overflow-hidden font-bricolage">
      {/* Fixed Header Section */}
            <motion.div
              className="fixed top-0 left-0 right-0 bg-gray-50/95 backdrop-blur-md border-b border-gray-200/50 z-50 mb-[5px]"
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
                      Hologram
                    </motion.h1>
                    <motion.p
                      className="text-gray-600 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Setup Process
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
      
      
      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-32">
        {/* Flowing Steps Container */}
        <div className="relative px-6">
          {/* Central flowing path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 via-pink-500 to-orange-500 transform -translate-x-1/2 opacity-30" />
          
          {currentContent.steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative mb-24 ${step.position === 'right' ? 'ml-auto' : ''}`}
              style={{ width: 'min(90%, 600px)' }}
              initial={{ opacity: 0, x: step.position === 'right' ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Flowing Shape Background */}
              <div className={`relative bg-gradient-to-br ${step.color} p-8 rounded-[3rem] shadow-2xl backdrop-blur-xl border border-white/10`}>
                {/* Floating Number */}
                <motion.div
                  className={`absolute ${step.position === 'right' ? '-left-8' : '-right-8'} top-8 w-16 h-16 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center shadow-2xl`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <span className="text-2xl font-black text-slate-800">{step.number}</span>
                </motion.div>

                {/* Astronaut Icon */}
                <motion.div
                  className={`absolute ${step.position === 'right' ? '-right-6' : '-left-6'} -top-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl`}
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.7,
                  }}
                >
                  <div className="text-slate-700">
                    {step.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-white/90 text-lg mb-6 font-medium">
                    {step.description}
                  </p>
                  
                  {/* Items List */}
                  <div className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + itemIndex * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: itemIndex * 0.2,
                          }}
                        />
                        <span className="text-white font-medium leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 border-2 border-white/30 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

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
            <a
              href="/dashboard"
              className="flex flex-col items-center space-y-1"
            >
              <Home className="w-5 h-5 text-[#ffce3b]" />
              <span className="text-[#ffce3b] text-xs font-medium">
                Dashboard
              </span>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/chapters"
              className="flex flex-col items-center space-y-1"
            >
              <BookOpen className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-xs">Chapters</span>
            </a>
          </motion.div>

          <motion.button
            className="w-12 h-12 bg-[#ffce3b] rounded-full flex items-center justify-center relative"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowClassSelector(true)}
          >
            <span className="text-white font-bold text-lg">
              {selectedClass}
            </span>
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
            <a
              href="/leaderboard"
              className="flex flex-col items-center space-y-1"
            >
              <Award className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-xs">Leaderboard</span>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <a href="/profile" className="flex flex-col items-center space-y-1">
              <Bot className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-xs">Chat Bot</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}