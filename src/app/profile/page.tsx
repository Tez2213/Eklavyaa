'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft,
  Edit,
  Star,
  Trophy,
  Target,
  Calendar,
  BookOpen,
  Award,
  Settings,
  LogOut,
  Crown,
  Flame,
  Zap,
  Clock,
  TrendingUp,
  User,
  Mail,
  Phone,
  MapPin,
  Coins,
  Home,
  GraduationCap,
  X
} from 'lucide-react';

export default function Profile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClass, setSelectedClass] = useState(6);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const classes = [6, 7, 8, 9, 10, 11, 12];

  // Generate random avatar
  const getRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return `https://avatar.iran.liara.run/public/${randomNumber}`;
  };

  // User data
  const userData = {
    name: "Arjun Kumar",
    username: "Arjun_learner",
    email: "arjun@eklavyaa.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    joinedDate: "March 2024",
    avatar: "/avatar.png",
    level: 5,
    totalPoints: 450,
    streak: 3,
    completedCourses: 6,
    totalLessons: 10,
    studyTime: 69, // hours
    rank: 148,
    nextLevelPoints: 500,
    progressToNext: 95 // percentage
  };

  // Achievements data
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: "🎯",
      earned: true,
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "7-day learning streak",
      icon: "🔥",
      earned: true,
      date: "April 2, 2024"
    },
    {
      id: 3,
      title: "Science Explorer",
      description: "Complete Science World",
      icon: "🧪",
      earned: true,
      date: "May 10, 2024"
    },
    {
      id: 4,
      title: "Math Master",
      description: "Complete Math World",
      icon: "📐",
      earned: false,
      date: null
    },
    {
      id: 5,
      title: "Century Club",
      description: "Complete 100 lessons",
      icon: "💯",
      earned: true,
      date: "June 20, 2024"
    },
    {
      id: 6,
      title: "Top Performer",
      description: "Reach top 100 leaderboard",
      icon: "👑",
      earned: false,
      date: null
    }
  ];

  // Recent activity
  const recentActivity = [
    {
      id: 1,
      type: "lesson",
      title: "Prime Guardians - Level 3",
      subject: "Math",
      points: 50,
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "achievement",
      title: "Earned 'Week Warrior' badge",
      subject: "Achievement",
      points: 100,
      time: "1 day ago"
    },
    {
      id: 3,
      type: "lesson",
      title: "Water Cycle Adventure",
      subject: "Science",
      points: 75,
      time: "2 days ago"
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

      {/* Header */}
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
            Profile
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Manage your account
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
              <AvatarFallback className="bg-[#ffce3b] text-white font-semibold text-sm">
            <img src={'https://avatar.iran.liara.run/public/8'} />
              </AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
          </div>
        </div>
      </motion.div>

      <div className="px-4 py-6 space-y-6 pb-24 pt-24">{/* Added pt-24 for header space and pb-24 for navbar space */}
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border border-yellow-200 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Avatar and Edit */}
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-[#ffce3b]">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="bg-[#ffce3b] text-white font-bold text-2xl">
                    {userData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#ffce3b] hover:bg-[#ffde00] rounded-full shadow-lg"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>

              {/* User Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
                <p className="text-gray-600">@{userData.username}</p>
                <a href='/'>
                  <Badge className="mt-2 bg-[#ffce3b] text-white px-3 py-1">
                    Level {userData.level}
                  </Badge>
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 w-full mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ffce3b]">{userData.totalPoints}</div>
                  <div className="text-xs text-gray-500">Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ffce3b]">{userData.rank}</div>
                  <div className="text-xs text-gray-500">Rank</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ffce3b]">{userData.streak}</div>
                  <div className="text-xs text-gray-500">🔥Streak</div>
                </div>
              </div>

              {/* Level Progress */}
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Level Progress</span>
                  <span className="text-sm font-bold text-[#ffce3b]">{userData.progressToNext}%</span>
                </div>
                <Progress value={userData.progressToNext} className="h-3">
                  <div 
                    className="h-full bg-gradient-to-r from-[#ffce3b] to-[#ffde00] rounded-full transition-all duration-500" 
                    style={{ width: `${userData.progressToNext}%` }}
                  />
                </Progress>
                <p className="text-xs text-gray-500 mt-1">
                  {userData.nextLevelPoints - userData.totalPoints} points to Level {userData.level + 1}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex space-x-2 bg-white/90 backdrop-blur-sm rounded-xl p-2 border border-yellow-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { id: 'overview', label: 'Overview', icon: User },
            { id: 'achievements', label: 'Badges', icon: Award },
            { id: 'activity', label: 'Activity', icon: Clock }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#ffce3b] text-white shadow-md'
                  : 'text-gray-600 hover:bg-yellow-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Contact Info */}
            <Card className="bg-white/90 backdrop-blur-sm border border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-[#ffce3b]" />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{userData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{userData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{userData.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">Joined {userData.joinedDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Stats */}
            <Card className="bg-white/90 backdrop-blur-sm border border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-[#ffce3b]" />
                  Learning Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <BookOpen className="w-6 h-6 text-[#ffce3b] mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{userData.completedCourses}</div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <Target className="w-6 h-6 text-[#ffce3b] mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{userData.totalLessons}</div>
                    <div className="text-sm text-gray-600">Lessons</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <Clock className="w-6 h-6 text-[#ffce3b] mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{userData.studyTime}h</div>
                    <div className="text-sm text-gray-600">Study Time</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <Flame className="w-6 h-6 text-[#ffce3b] mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{userData.streak}</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.01 }}
              >
                <Card 
                  className={`border ${
                    achievement.earned 
                      ? 'bg-white/90 border-yellow-200' 
                      : 'bg-gray-50/90 border-gray-200'
                  }`}
                >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`text-2xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                        {achievement.description}
                      </p>
                      {achievement.earned && achievement.date && (
                        <p className="text-xs text-[#ffce3b] font-medium mt-1">
                          Earned on {achievement.date}
                        </p>
                      )}
                    </div>
                    {achievement.earned && (
                      <Badge className="bg-[#ffce3b] text-white">
                        Earned
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'activity' && (
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.01 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border border-yellow-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{activity.subject}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#ffce3b] font-bold">+{activity.points}</span>
                        <Coins className="w-4 h-4 text-[#ffce3b]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
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
            <a href="/dashboard" className="flex flex-col items-center space-y-1">
              <Home className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-xs">Dashboard</span>
            </a>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <a href="/chapters" className="flex flex-col items-center space-y-1">
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
            <a href="/leaderboard" className="flex flex-col items-center space-y-1">
              <Award className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-xs">Leaderboard</span>
            </a>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center space-y-1"
            whileTap={{ scale: 0.95 }}
          >
            <a href="/profile" className="flex flex-col items-center space-y-1">
              <User className="w-5 h-5 text-[#ffce3b]" />
              <span className="text-[#ffce3b] text-xs font-medium">Profile</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
