'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, BookOpen, Award, Bot, User, Loader2, Download } from "lucide-react";

interface BottomNavProps {
  currentPage?: string;
  currentClass?: number;
}

export default function BottomNav({ currentPage = "", currentClass = 6 }: BottomNavProps) {
    const router = useRouter();
    const [selectedClass, setSelectedClass] = useState(currentClass);
    const [showClassSelector, setShowClassSelector] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingClass, setLoadingClass] = useState<number | null>(null);
    const classes = [6, 7, 8, 9, 10, 11, 12];

  const handleClassSelection = async (classNum: number) => {
    setLoadingClass(classNum);
    setIsLoading(true);
    
    // Immediately navigate to the appropriate class page
    if (classNum === 6) {
      router.push('/chapters');
    } else if (classNum === 8) {
      router.push('/chapters/class-8');
    } else {
      // For other classes, you can add more routes later
      router.push('/chapters');
    }
    
    // Simulate downloading packages for the selected class
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSelectedClass(classNum);
    setShowClassSelector(false);
    setIsLoading(false);
    setLoadingClass(null);
  };

  const getChaptersUrl = () => {
    if (selectedClass === 6) {
      return '/chapters';
    } else if (selectedClass === 8) {
      return '/chapters/class-8';
    } else {
      return '/chapters';
    }
  };
  return (
    <>
      {/* Class Selection Modal */}
      <AnimatePresence>
        {showClassSelector && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isLoading && setShowClassSelector(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-sm relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Select Your Class
              </h3>
              
              {isLoading && loadingClass && (
                <motion.div
                  className="mb-6 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Loader2 className="w-5 h-5 animate-spin text-[#ffce3b]" />
                    <span className="text-sm font-medium text-gray-700">
                      Downloading Class {loadingClass} packages...
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-[#ffce3b] h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              )}
              
              <div className="grid grid-cols-4 gap-3 mb-6">
                {classes.map((classNum) => (
                  <motion.button
                    key={classNum}
                    onClick={() => handleClassSelection(classNum)}
                    disabled={isLoading}
                    className={`w-12 h-12 rounded-full font-bold text-lg transition-all relative ${
                      selectedClass === classNum
                        ? 'bg-[#ffce3b] text-white shadow-lg scale-110'
                        : isLoading
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } ${loadingClass === classNum ? 'ring-2 ring-[#ffce3b] ring-opacity-50' : ''}`}
                    whileHover={{ scale: isLoading ? 1 : (selectedClass === classNum ? 1.1 : 1.05) }}
                    whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  >
                    {loadingClass === classNum ? (
                      <div className="flex items-center justify-center">
                        <Download className="w-4 h-4 animate-bounce" />
                      </div>
                    ) : (
                      classNum
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
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
            <a href="/dashboard" className="flex flex-col items-center space-y-1">
              <Home className={`w-5 h-5 ${currentPage === 'dashboard' ? 'text-[#ffce3b]' : 'text-gray-400'}`} />
              <span className={`text-xs ${currentPage === 'dashboard' ? 'text-[#ffce3b] font-medium' : 'text-gray-400'}`}>
                Dashboard
              </span>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <a href={getChaptersUrl()} className="flex flex-col items-center space-y-1">
              <BookOpen className={`w-5 h-5 ${currentPage === 'chapters' ? 'text-[#ffce3b]' : 'text-gray-400'}`} />
              <span className={`text-xs ${currentPage === 'chapters' ? 'text-[#ffce3b] font-medium' : 'text-gray-400'}`}>Chapters</span>
            </a>
          </motion.div>

          <motion.button
            className="w-12 h-12 bg-[#ffce3b] rounded-full flex items-center justify-center relative"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowClassSelector(true)}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-white animate-spin" />
            ) : (
              <span className="text-white font-bold text-lg">
                {selectedClass}
              </span>
            )}
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
            <a href="/leaderboard" className="flex flex-col items-center space-y-1">
              <Award className={`w-5 h-5 ${currentPage === 'leaderboard' ? 'text-[#ffce3b]' : 'text-gray-400'}`} />
              <span className={`text-xs ${currentPage === 'leaderboard' ? 'text-[#ffce3b] font-medium' : 'text-gray-400'}`}>Leaderboard</span>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <a href="/chat-bot" className="flex flex-col items-center space-y-1">
              <Bot className={`w-5 h-5 ${currentPage === 'chatbot' ? 'text-[#ffce3b]' : 'text-gray-400'}`} />
              <span className={`text-xs ${currentPage === 'chatbot' ? 'text-[#ffce3b] font-medium' : 'text-gray-400'}`}>Dronacharaya</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}