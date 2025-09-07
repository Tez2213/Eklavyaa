'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  X,
  GraduationCap
} from 'lucide-react';

interface ClassSelectionModalProps {
  showClassSelector: boolean;
  setShowClassSelector: (show: boolean) => void;
  selectedClass: number;
  setSelectedClass: (classNum: number) => void;
}

export default function ClassSelectionModal({
  showClassSelector,
  setShowClassSelector,
  selectedClass,
  setSelectedClass
}: ClassSelectionModalProps) {
  const classes = [6, 7, 8, 9, 10, 11, 12];

  return (
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
  );
}
