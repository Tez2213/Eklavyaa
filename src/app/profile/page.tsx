'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import BottomNav from "@/components/ui/BottomNav";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getUserGameStats, getUserLeaderboardPosition, getUserGameHistory } from '@/lib/leaderboard';
import { 
  ArrowLeft,
  Edit,
  Star,
  Trophy,
  Target,
  Calendar,
  BookOpen,
  Award,
  Flame,
  Clock,
  TrendingUp,
  User,
  Mail,
  Phone,
  MapPin,
  Coins,
  GraduationCap,
  X,
  Loader2,
  LogOut
} from 'lucide-react';

export default function Profile() {
  const { user, profile, loading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClass, setSelectedClass] = useState(6);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const [userStats, setUserStats] = useState<any>(null);
  const [userRank, setUserRank] = useState<number>(0);
  const [recentGames, setRecentGames] = useState<any[]>([]);
  const classes = [6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    if (profile) {
      setSelectedClass(profile.class_level);
    }
  }, [profile]);

  useEffect(() => {
    if (user) {
      fetchUserStats();
      fetchUserRank();
      fetchRecentGames();
    }
  }, [user]);

  const fetchUserStats = async () => {
    if (!user) return;
    const { data } = await getUserGameStats(user.id);
    if (data) {
      setUserStats(data);
    }
  };

  const fetchUserRank = async () => {
    if (!user || !profile) return;
    const { data } = await getUserLeaderboardPosition(user.id, profile.class_level);
    if (data) {
      setUserRank(data.position);
    }
  };

  const fetchRecentGames = async () => {
    if (!user) return;
    const { data } = await getUserGameHistory(user.id, 5);
    if (data) {
      setRecentGames(data);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#ffce3b]" />
      </div>
    );
  }

  // User data from real database
  const userData = {
    name: profile?.full_name || "Student",
    username: profile?.username || "user",
    email: profile?.email || "",
    phone: profile?.phone || "Not set",
    location: "India",
    joinedDate: profile?.created_at ? new Date(profile.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : "Recently",
    avatar: profile?.avatar_url || "/avatar.png",
    level: Math.floor((userStats?.points || 0) / 100) + 1,
    totalPoints: userStats?.points || 0,
    streak: userStats?.streak || 0,
    completedCourses: 0,
    totalLessons: userStats?.games_played || 0,
    studyTime: Math.floor((userStats?.games_played || 0) * 0.5), // estimate
    rank: userRank,
    nextLevelPoints: (Math.floor((userStats?.points || 0) / 100) + 1) * 100,
    progressToNext: ((userStats?.points || 0) % 100)
  };

  // Achievements data based on real user stats
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: "🎯",
      earned: (userStats?.games_played || 0) >= 1,
      date: (userStats?.games_played || 0) >= 1 ? new Date(profile?.created_at || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : null
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "7-day learning streak",
      icon: "🔥",
      earned: (userStats?.streak || 0) >= 7,
      date: (userStats?.streak || 0) >= 7 ? new Date(userStats?.last_game_played_at || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : null
    },
    {
      id: 3,
      title: "Science Explorer",
      description: "Complete Science World",
      icon: "🧪",
      earned: (userStats?.games_played || 0) >= 5,
      date: (userStats?.games_played || 0) >= 5 ? new Date(userStats?.last_game_played_at || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : null
    },
    {
      id: 4,
      title: "Math Master",
      description: "Complete Math World",
      icon: "📐",
      earned: (userStats?.games_played || 0) >= 10,
      date: (userStats?.games_played || 0) >= 10 ? new Date(userStats?.last_game_played_at || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : null
    },
    {
      id: 5,
      title: "Century Club",
      description: "Earn 100 points",
      icon: "💯",
      earned: (userStats?.points || 0) >= 100,
      date: (userStats?.points || 0) >= 100 ? new Date(userStats?.updated_at || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : null
    },
    {
      id: 6,
      title: "Top Performer",
      description: "Reach top 100 leaderboard",
      icon: "👑",
      earned: userRank > 0 && userRank <= 100,
      date: (userRank > 0 && userRank <= 100) ? new Date(userStats?.updated_at || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : null
    }
  ];

  // Helper function to get time ago
  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now.getTime() - past.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  };

  // Recent activity from real game history
  const recentActivity = recentGames.map((game, index) => ({
    id: index + 1,
    type: "lesson",
    title: game.game_name || "Game",
    subject: game.game_name?.includes('Prime') || game.game_name?.includes('Math') || game.game_name?.includes('Pythagorean') ? "Math" : "Science",
    points: game.points_earned || 1,
    time: getTimeAgo(game.clicked_at)
  }));

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
              🔥
              {userStats?.streak || 0}
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Badge 
              className="bg-[#ffce3b] text-white px-3 py-1 cursor-pointer hover:bg-[#ffde00] transition-colors"
              onClick={() => window.location.href = '/leaderboard'}
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
              <AvatarFallback className="bg-[#ffce3b] text-white font-semibold text-sm">
            <img src={profile?.avatar_url || '/avatar.png'} alt="Avatar" />
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
              <div className='flex flex-col justify-center items-center'>
                <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
                <p className="text-gray-600">@{userData.username}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    onClick={signOut}
                    variant="ghost"
                    size="sm"
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <Badge className="bg-[#ffce3b] text-white px-3 py-1">
                    Level {userData.level}
                  </Badge>
                  </Button>
                </div>
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

      <BottomNav currentPage="profile" />
    </div>
  );
}
