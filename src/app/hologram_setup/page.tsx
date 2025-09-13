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
  Languages,
  Scissors,
  Ruler,
  Smartphone,
  Package,
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
      title: "Hologram Setup Process",
      steps: [
        {
          number: "01",
          title: "Collect Materials",
          icon: <Package className="w-6 h-6" />,
          items: [
            "Transparent plastic sheet (OHP sheet, CD cover)",
            "Ruler and marker/pen for measurements",
            "Sharp scissors or cutter",
            "Clear tape or glue"
          ]
        },
        {
          number: "02", 
          title: "Draw the Shape",
          icon: <Ruler className="w-6 h-6" />,
          items: [
            "Draw trapezoid: Top = 1cm, Bottom = 6cm, Height = 3.5cm",
            "Use ruler for accurate measurements",
            "Create 4 identical trapezoids",
            "Mark cutting lines clearly"
          ]
        },
        {
          number: "03",
          title: "Cut & Assemble", 
          icon: <Scissors className="w-6 h-6" />,
          items: [
            "Cut along marked lines with precision",
            "Test fit pieces before joining",
            "Apply tape/glue to edges",
            "Form pyramid with open top"
          ]
        },
        {
          number: "04",
          title: "Activate Hologram",
          icon: <Smartphone className="w-6 h-6" />,
          items: [
            "Place pyramid inverted on phone screen",
            "Play hologram video from YouTube", 
            "View from sides for 3D effect",
            "Adjust lighting for best visibility ✨"
          ]
        }
      ]
    },
    hindi: {
      title: "होलोग्राम सेटअप प्रक्रिया",
      steps: [
        {
          number: "01",
          title: "सामग्री इकट्ठा करें",
          icon: <Package className="w-6 h-6" />,
          items: [
            "पारदर्शी प्लास्टिक शीट (OHP शीट, CD कवर)",
            "माप के लिए रूलर और मार्कर/पेन",
            "तेज कैंची या कटर",
            "साफ टेप या गोंद"
          ]
        },
        {
          number: "02",
          title: "आकार बनाएं",
          icon: <Ruler className="w-6 h-6" />,
          items: [
            "समलम्ब: ऊपर = 1सेमी, नीचे = 6सेमी, ऊंचाई = 3.5सेमी",
            "सटीक माप के लिए रूलर का उपयोग करें",
            "4 समान समलम्ब चतुर्भुज बनाएं",
            "काटने की रेखाओं को चिह्नित करें"
          ]
        },
        {
          number: "03",
          title: "काटें और जोड़ें",
          icon: <Scissors className="w-6 h-6" />,
          items: [
            "चिह्नित रेखाओं के साथ सटीकता से काटें",
            "जोड़ने से पहले टुकड़ों को फिट करें",
            "किनारों पर टेप/गोंद लगाएं",
            "खुले शीर्ष के साथ पिरामिड बनाएं"
          ]
        },
        {
          number: "04",
          title: "होलोग्राम सक्रिय करें",
          icon: <Smartphone className="w-6 h-6" />,
          items: [
            "पिरामिड को फोन स्क्रीन पर उल्टा रखें",
            "YouTube से होलोग्राम वीडियो चलाएं",
            "3D प्रभाव के लिए किनारों से देखें",
            "बेहतर दिखावट के लिए रोशनी समायोजित करें ✨"
          ]
        }
      ]
    }
  };

  const currentContent = content[selectedLanguage];

  return (
    <div className="min-h-screen relative font-bricolage" style={{backgroundImage: "url('/bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
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
                          <div key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400">
                            🔥
                          </div>
                        ))}
                      </div>

                      {/* Message */}
                      <p className="text-center text-gray-700">
                        You've earned{" "}
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

      {/* Language Toggle Button - Outside Header */}
      <motion.div
        className="fixed top-20 right-4 z-40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={() => setSelectedLanguage(selectedLanguage === 'english' ? 'hindi' : 'english')}
          className="bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200 px-3 py-2 rounded-full shadow-lg"
          variant="outline"
        >
          <Languages className="w-4 h-4 mr-2" />
          {selectedLanguage === 'english' ? 'हिं' : 'EN'}
        </Button>
      </motion.div>
      
      {/* Main Content with 20px margin from header */}
      <div className="relative z-10 pt-32 pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {currentContent.title}
            </h1>
          </motion.div>

          {/* Steps Container */}
          <div className="grid gap-6">
            {currentContent.steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-yellow-50/80 backdrop-blur-sm border border-yellow-200 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                  </div>
                  <div className="text-yellow-600">
                    {step.icon}
                  </div>
                </div>
                
                {/* Items List */}
                <div className="space-y-3 ml-16">
                  {step.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 bg-white/60 rounded-xl p-3 border border-yellow-100"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              <Home className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-xs">
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