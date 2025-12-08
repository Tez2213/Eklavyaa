"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BottomNav from "@/components/ui/BottomNav";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getUserGameStats } from "@/lib/leaderboard";
import { useRouter } from "next/navigation";
import {
  Trophy,
  Languages,
  Scissors,
  Ruler,
  Smartphone,
  Package,
  X,
} from "lucide-react";

export default function HologramSetup() {
  const { user, profile } = useAuth();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'hindi' | 'odia'>('english');
  const [showStarPopup, setShowStarPopup] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [userStats, setUserStats] = useState<any>(null);

  useEffect(() => {
    if (user) {
      fetchUserStats();
    }
  }, [user]);

  const fetchUserStats = async () => {
    if (!user) return;
    const { data } = await getUserGameStats(user.id);
    if (data) {
      setUserStats(data);
    }
  };
  
  const content = {
    english: {
      title: "Hologram Setup",
      description: "Watch this tutorial to learn how to create your own hologram projector",
      stepsTitle: "How to Make Your Hologram",
      steps: [
        "Cut a transparent plastic sheet (CD case/OHP sheet) into 4 trapezoids: Top=1cm, Bottom=6cm, Height=3.5cm",
        "Join all 4 pieces with tape/glue to form a pyramid with an open top",
        "Place the pyramid upside down on your phone screen",
        "Play the hologram video and view from the sides to see the 3D effect ✨"
      ]
    },
    hindi: {
      title: "होलोग्राम सेटअप",
      description: "अपना होलोग्राम प्रोजेक्टर बनाने का तरीका जानने के लिए यह ट्यूटोरियल देखें",
      stepsTitle: "अपना होलोग्राम कैसे बनाएं",
      steps: [
        "पारदर्शी प्लास्टिक शीट (CD केस/OHP शीट) को 4 समलम्ब में काटें: ऊपर=1सेमी, नीचे=6सेमी, ऊंचाई=3.5सेमी",
        "सभी 4 टुकड़ों को टेप/गोंद से जोड़कर खुले शीर्ष के साथ पिरामिड बनाएं",
        "पिरामिड को अपने फोन स्क्रीन पर उल्टा रखें",
        "होलोग्राम वीडियो चलाएं और 3D प्रभाव देखने के लिए किनारों से देखें ✨"
      ]
    },
    odia: {
      title: "ହୋଲୋଗ୍ରାମ ସେଟଅପ୍",
      description: "ଆପଣଙ୍କର ନିଜସ୍ୱ ହୋଲୋଗ୍ରାମ ପ୍ରୋଜେକ୍ଟର ତିଆରି କରିବାକୁ ଏହି ଟ୍ୟୁଟୋରିଆଲ୍ ଦେଖନ୍ତୁ",
      stepsTitle: "ଆପଣଙ୍କର ହୋଲୋଗ୍ରାମ କିପରି ତିଆରି କରିବେ",
      steps: [
        "ସ୍ୱଚ୍ଛ ପ୍ଲାଷ୍ଟିକ ସିଟ୍ (CD କେସ/OHP ସିଟ୍) କୁ 4 ଟି ଟ୍ରାପେଜଏଡରେ କାଟନ୍ତୁ: ଉପର=1ସେମି, ତଳ=6ସେମି, ଉଚ୍ଚତା=3.5ସେମି",
        "ସମସ୍ତ 4 ଖଣ୍ଡକୁ ଟେପ୍/ଗ୍ଲୁ ଦ୍ୱାରା ଯୋଡି ଖୋଲା ଉପର ସହିତ ପିରାମିଡ୍ ତିଆରି କରନ୍ତୁ",
        "ପିରାମିଡକୁ ଆପଣଙ୍କ ଫୋନ୍ ସ୍କ୍ରିନରେ ଓଲଟା ରଖନ୍ତୁ",
        "ହୋଲୋଗ୍ରାମ ଭିଡିଓ ଚଲାନ୍ତୁ ଏବଂ 3D ପ୍ରଭାବ ଦେଖିବାକୁ ପାର୍ଶ୍ୱରୁ ଦେଖନ୍ତୁ ✨"
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
                Tutorial
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
                  🔥 {userStats?.streak || 0}
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Badge 
                  className="bg-[#ffce3b] text-white px-3 py-1 cursor-pointer hover:bg-[#ffde00] transition-colors"
                  onClick={() => router.push('/leaderboard')}
                >
                  <Trophy className="w-3 h-3 mr-1" />
                  {userStats?.points || 0}
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
                    <img src={profile?.avatar_url || "/avatar.png"} alt="Avatar" />
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
                        {Array.from({ length: userStats?.streak || 0 }, (_, i) => i + 1).slice(0, 10).map((star) => (
                          <div key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400">
                            🔥
                          </div>
                        ))}
                      </div>

                      {/* Message */}
                      <p className="text-center text-gray-700">
                        You've earned{" "}
                        <span className="font-bold">{userStats?.streak || 0} Fire Streak</span> for
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

      {/* Language Dropdown - Outside Header */}
      <motion.div
        className="fixed top-20 right-4 z-40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <Button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200 px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            variant="outline"
          >
            <Languages className="w-4 h-4" />
            {selectedLanguage === 'english' ? 'EN' : selectedLanguage === 'hindi' ? 'हिं' : 'ଓଡ଼ି'}
          </Button>
          
          <AnimatePresence>
            {showLanguageDropdown && (
              <motion.div
                className="absolute top-12 right-0 bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden min-w-[120px]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => {
                    setSelectedLanguage('english');
                    setShowLanguageDropdown(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-yellow-50 transition-colors ${
                    selectedLanguage === 'english' ? 'bg-yellow-100 font-semibold text-yellow-800' : 'text-gray-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setSelectedLanguage('hindi');
                    setShowLanguageDropdown(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-yellow-50 transition-colors ${
                    selectedLanguage === 'hindi' ? 'bg-yellow-100 font-semibold text-yellow-800' : 'text-gray-700'
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => {
                    setSelectedLanguage('odia');
                    setShowLanguageDropdown(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-yellow-50 transition-colors ${
                    selectedLanguage === 'odia' ? 'bg-yellow-100 font-semibold text-yellow-800' : 'text-gray-700'
                  }`}
                >
                  ଓଡ଼ିଆ
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      {/* Main Content with 20px margin from header */}
      <div className="relative z-10 pt-24 pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Video Section at Top */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-yellow-50/80 backdrop-blur-sm border border-yellow-200 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {currentContent.title}
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                {currentContent.description}
              </p>
              
              {/* YouTube Iframe */}
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg relative mb-8">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/7YWTtCsvgvg`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Steps Section */}
              <div className="bg-white/60 rounded-xl p-6 border border-yellow-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 mr-2 text-yellow-600" />
                  {currentContent.stepsTitle}
                </h3>
                <div className="space-y-3">
                  {currentContent.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-yellow-50/50 rounded-lg p-3 border border-yellow-100"
                    >
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      

      <BottomNav />
    </div>
  );
}