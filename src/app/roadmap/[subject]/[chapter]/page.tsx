'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getUserGameStats } from '@/lib/leaderboard';
import { 
  Star, 
  Video, 
  Book, 
  Youtube, 
  Play, 
  Lock, 
  CheckCircle2,
  Trophy,
  Flame,
  ChevronRight,
  ArrowLeft,
  Eye,
  FileText,
  Sparkles,
  Clock
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface LearningNode {
  id: string;
  type: 'hologram' | 'module' | 'video' | 'game';
  title: string;
  description: string;
  duration: string;
  points: number;
  url?: string;
  isCompleted: boolean;
  isUnlocked: boolean;
  prerequisite?: string;
  icon: any;
  color: string;
  gif?: string;
}

export default function LearningRoadmap() {
  const { subject, chapter } = useParams();
  const router = useRouter();
  const { user, profile } = useAuth();
  const [nodes, setNodes] = useState<LearningNode[]>([]);
  const [userProgress, setUserProgress] = useState<any>({});
  const [selectedNode, setSelectedNode] = useState<LearningNode | null>(null);
  const [userStats, setUserStats] = useState<any>(null);

  useEffect(() => {
    if (user) {
      loadUserProgress();
      fetchUserStats();
    }
  }, [user, subject, chapter]);

  const fetchUserStats = async () => {
    if (!user) return;
    const { data } = await getUserGameStats(user.id);
    if (data) {
      setUserStats(data);
    }
  };

  const loadRoadmap = (progress: any = {}) => {
    // Define roadmap for each chapter
    const roadmaps: any = {
      'maths-wonder-pythagoras': [
        {
          id: 'module-1',
          type: 'module',
          title: 'Read Theory Module',
          description: 'Understanding a² + b² = c²',
          duration: '10 min',
          points: 15,
          url: '/module/pythagoras',
          isCompleted: false,
          isUnlocked: true,
          icon: Book,
          color: 'from-blue-500 to-cyan-500',
          gif: '/brain.gif'
        },
        {
          id: 'video-1',
          type: 'video',
          title: 'Watch Tutorial Video',
          description: 'learn Pythagorean Theorem',
          duration: '8 min',
          points: 10,
          url: 'https://www.youtube.com/watch?v=AA6RfgP-AHU',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'module-1',
          icon: Youtube,
          color: 'from-red-500 to-orange-500',
          gif: '/target.gif'
        },
        {
          id: 'game-1',
          type: 'game',
          title: 'Play Interactive Game',
          description: 'Pythagorean Theorem Game',
          duration: '15 min',
          points: 25,
          url: 'https://www.geogebra.org/m/jByHW6W4',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'video-1',
          icon: Play,
          color: 'from-green-500 to-emerald-500',
          gif: '/trophy.gif'
        },
        {
          id: 'hologram-1',
          type: 'hologram',
          title: 'Experience 3D Hologram',
          description: 'Visualize Pythagorean Theorem in 3D',
          duration: '5 min',
          points: 20,
          url: '/hologram_setup',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'game-1',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
          gif: '/magic.gif'
        }
      ],
      // Add more chapter roadmaps here
      'science-wonder-photosynthesis': [
        {
          id: 'module-1',
          type: 'module',
          title: 'Read About Photosynthesis',
          description: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
          duration: '12 min',
          points: 15,
          url: '/module/photosynthesis',
          isCompleted: false,
          isUnlocked: true,
          icon: Book,
          color: 'from-blue-500 to-cyan-500',
          gif: '/sprout.gif'
        },
        {
          id: 'video-1',
          type: 'video',
          title: 'Watch Animation',
          description: 'How plants make food',
          duration: '10 min',
          points: 10,
          url: 'https://www.youtube.com/watch?v=UPBMG5EYydo',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'module-1',
          icon: Youtube,
          color: 'from-red-500 to-orange-500',
          gif: '/wheat.gif'
        },
        {
          id: 'game-1',
          type: 'game',
          title: 'Photosynthesis Simulator',
          description: 'Interactive plant lab',
          duration: '15 min',
          points: 25,
          url: 'https://www.biologysimulations.com/photosynthesis',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'video-1',
          icon: Play,
          color: 'from-green-500 to-emerald-500',
          gif: '/trophy1.gif'
        },
        {
          id: 'hologram-1',
          type: 'hologram',
          title: 'Experience Plant Cell 3D',
          description: 'See photosynthesis in hologram',
          duration: '5 min',
          points: 20,
          url: '/hologram_setup',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'game-1',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
          gif: '/magic.gif'
        }
      ],
      'science-world-solar-system': [
        {
          id: 'module-1',
          type: 'module',
          title: 'Read About Solar System',
          description: 'Explore planets, stars, and cosmic wonders',
          duration: '15 min',
          points: 15,
          url: '/module/solar-system',
          isCompleted: false,
          isUnlocked: true,
          icon: Book,
          color: 'from-blue-500 to-cyan-500',
          gif: '/brain.gif'
        },
        {
          id: 'video-1',
          type: 'video',
          title: 'Watch Space Documentary',
          description: 'Journey through our solar system',
          duration: '12 min',
          points: 10,
          url: 'https://www.youtube.com/watch?v=libKVRa01L8',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'module-1',
          icon: Youtube,
          color: 'from-red-500 to-orange-500',
          gif: '/target.gif'
        },
        {
          id: 'game-1',
          type: 'game',
          title: 'Solar System Explorer',
          description: 'Interactive space adventure',
          duration: '20 min',
          points: 25,
          url: 'https://game-ashen-eight.vercel.app/science/solar-game',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'video-1',
          icon: Play,
          color: 'from-green-500 to-emerald-500',
          gif: '/trophy.gif'
        },
        {
          id: 'hologram-1',
          type: 'hologram',
          title: 'Experience 3D Solar System',
          description: 'See planets in hologram',
          duration: '5 min',
          points: 20,
          url: '/hologram_setup',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'game-1',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
          gif: '/magic.gif'
        }
      ],
      // Class 8 Math Chapters
      'maths-wonder-basic-algebra': [
        {
          id: 'module-1',
          type: 'module',
          title: 'Read About Basic Algebra',
          description: 'Master variables, expressions & equations',
          duration: '12 min',
          points: 15,
          url: '/module/basic-algebra',
          isCompleted: false,
          isUnlocked: true,
          icon: Book,
          color: 'from-purple-500 to-blue-500',
          gif: '/brain.gif'
        },
        {
          id: 'video-1',
          type: 'video',
          title: 'Watch Algebra Tutorial',
          description: 'Learn algebraic expressions',
          duration: '10 min',
          points: 10,
          url: 'https://www.youtube.com/watch?v=NybHckSEQBI',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'module-1',
          icon: Youtube,
          color: 'from-red-500 to-orange-500',
          gif: '/target.gif'
        },
        {
          id: 'game-1',
          type: 'game',
          title: 'Play Algebra Game',
          description: 'Solve equations and expressions',
          duration: '15 min',
          points: 25,
          url: 'https://sih-games-8.vercel.app/maths/square-game',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'video-1',
          icon: Play,
          color: 'from-green-500 to-emerald-500',
          gif: '/trophy.gif'
        },
        {
          id: 'hologram-1',
          type: 'hologram',
          title: 'Visualize Algebra in 3D',
          description: 'See algebraic concepts in hologram',
          duration: '5 min',
          points: 20,
          url: '/hologram_setup',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'game-1',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
          gif: '/magic.gif'
        }
      ],
      'maths-wonder-interest-calculator': [
        {
          id: 'module-1',
          type: 'module',
          title: 'Read About Interest',
          description: 'Understand simple & compound interest',
          duration: '12 min',
          points: 15,
          url: '/module/interest-calculator',
          isCompleted: false,
          isUnlocked: true,
          icon: Book,
          color: 'from-green-500 to-emerald-500',
          gif: '/brain.gif'
        },
        {
          id: 'video-1',
          type: 'video',
          title: 'Watch Interest Explained',
          description: 'How money grows with interest',
          duration: '10 min',
          points: 10,
          url: 'https://www.youtube.com/watch?v=9_mI-GY0vYY',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'module-1',
          icon: Youtube,
          color: 'from-red-500 to-orange-500',
          gif: '/target.gif'
        },
        {
          id: 'game-1',
          type: 'game',
          title: 'Interest Calculator Game',
          description: 'Calculate interest interactively',
          duration: '15 min',
          points: 25,
          url: 'https://sih-games-8.vercel.app/maths/interest-game',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'video-1',
          icon: Play,
          color: 'from-green-500 to-emerald-500',
          gif: '/trophy.gif'
        },
        {
          id: 'hologram-1',
          type: 'hologram',
          title: 'See Money Growth in 3D',
          description: 'Visualize compound interest',
          duration: '5 min',
          points: 20,
          url: '/hologram_setup',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'game-1',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
          gif: '/magic.gif'
        }
      ],
      // Class 8 Science Chapters
      'science-wonder-force-motion': [
        {
          id: 'module-1',
          type: 'module',
          title: 'Read About Force & Motion',
          description: "Newton's laws and types of forces",
          duration: '12 min',
          points: 15,
          url: '/module/force-motion',
          isCompleted: false,
          isUnlocked: true,
          icon: Book,
          color: 'from-blue-500 to-purple-500',
          gif: '/brain.gif'
        },
        {
          id: 'video-1',
          type: 'video',
          title: 'Watch Physics Tutorial',
          description: 'Understanding forces in motion',
          duration: '10 min',
          points: 10,
          url: 'https://www.youtube.com/watch?v=kKKM8Y-u7ds',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'module-1',
          icon: Youtube,
          color: 'from-red-500 to-orange-500',
          gif: '/target.gif'
        },
        {
          id: 'game-1',
          type: 'game',
          title: 'Force & Motion Game',
          description: 'Interactive physics experiments',
          duration: '15 min',
          points: 25,
          url: 'https://sih-games-8.vercel.app/science/force-game',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'video-1',
          icon: Play,
          color: 'from-green-500 to-emerald-500',
          gif: '/trophy.gif'
        },
        {
          id: 'hologram-1',
          type: 'hologram',
          title: 'Experience Forces in 3D',
          description: 'See Newton\'s laws in action',
          duration: '5 min',
          points: 20,
          url: '/hologram_setup',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'game-1',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
          gif: '/magic.gif'
        }
      ],
      'science-wonder-metals-materials': [
        {
          id: 'module-1',
          type: 'module',
          title: 'Read About Metals & Materials',
          description: 'Properties of metals and non-metals',
          duration: '12 min',
          points: 15,
          url: '/module/metals-materials',
          isCompleted: false,
          isUnlocked: true,
          icon: Book,
          color: 'from-amber-500 to-orange-500',
          gif: '/brain.gif'
        },
        {
          id: 'video-1',
          type: 'video',
          title: 'Watch Materials Science',
          description: 'Understanding material properties',
          duration: '10 min',
          points: 10,
          url: 'https://www.youtube.com/watch?v=aoGMZwBcS3E',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'module-1',
          icon: Youtube,
          color: 'from-red-500 to-orange-500',
          gif: '/target.gif'
        },
        {
          id: 'game-1',
          type: 'game',
          title: 'Metals & Materials Game',
          description: 'Explore properties of materials',
          duration: '15 min',
          points: 25,
          url: 'https://sih-games-8.vercel.app/science/metal-game',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'video-1',
          icon: Play,
          color: 'from-green-500 to-emerald-500',
          gif: '/trophy.gif'
        },
        {
          id: 'hologram-1',
          type: 'hologram',
          title: 'See Material Structure in 3D',
          description: 'Explore atomic structure',
          duration: '5 min',
          points: 20,
          url: '/hologram_setup',
          isCompleted: false,
          isUnlocked: false,
          prerequisite: 'game-1',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
          gif: '/magic.gif'
        }
      ]
    };

    const chapterKey = `${subject}-${chapter}`;
    const roadmap = roadmaps[chapterKey] || roadmaps['maths-wonder-pythagoras'];
    
    // Apply current progress to the roadmap
    const updatedRoadmap = roadmap.map((node: any, index: number) => {
      const isCompleted = progress[node.id]?.completed || false;
      
      // All tasks are always unlocked - no prerequisites needed
      const isUnlocked = true;

      return {
        ...node,
        isCompleted,
        isUnlocked
      };
    });
    
    setNodes(updatedRoadmap);
  };

  const loadUserProgress = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('learning_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('chapter', `${subject}-${chapter}`);

    const progress: any = {};
    if (data && data.length > 0) {
      data.forEach(item => {
        progress[item.node_id] = {
          completed: item.completed,
          completed_at: item.completed_at
        };
      });
    }
    
    setUserProgress(progress);
    loadRoadmap(progress); // Load roadmap with the fetched progress
  };

  const updateNodesWithProgress = (progress: any) => {
    loadRoadmap(progress); // Just reload the roadmap with new progress
  };

  const handleNodeClick = async (node: LearningNode) => {
    if (!node.isUnlocked) {
      alert('Complete previous tasks to unlock this!');
      return;
    }

    if (node.isCompleted) {
      setSelectedNode(node);
      return;
    }

    setSelectedNode(node);
  };

  const handleStartNode = async (node: LearningNode) => {
    if (node.url) {
      // For module type, navigate internally with params
      if (node.type === 'module') {
        router.push(`${node.url}?subject=${subject}&chapter=${chapter}`);
      } else {
        // For other types (video, game, hologram), open in new tab
        window.open(node.url, '_blank');
        
        // Mark as completed after a delay (simulating completion)
        setTimeout(async () => {
          await markNodeComplete(node.id);
        }, 3000);
      }
    }
  };

  const markNodeComplete = async (nodeId: string) => {
    if (!user) return;

    // Update database
    const { error } = await supabase
      .from('learning_progress')
      .upsert({
        user_id: user.id,
        chapter: `${subject}-${chapter}`,
        node_id: nodeId,
        completed: true,
        completed_at: new Date().toISOString()
      });

    if (!error) {
      // Update local state
      const newProgress = {
        ...userProgress,
        [nodeId]: { completed: true, completed_at: new Date().toISOString() }
      };
      setUserProgress(newProgress);
      updateNodesWithProgress(newProgress);

      // Award points
      const node = nodes.find(n => n.id === nodeId);
      if (node) {
        await awardPoints(node.points);
      }
    }
  };

  const awardPoints = async (points: number) => {
    if (!user) return;

    const { error } = await supabase.rpc('increment_points', {
      user_id: user.id,
      points_to_add: points
    });
  };

  const getCompletionPercentage = () => {
    if (nodes.length === 0) return 0;
    const totalNodes = nodes.length;
    let progressSum = 0;
    
    nodes.forEach(node => {
      if (node.isCompleted) {
        progressSum += 100; // Completed tasks = 100%
      } else if (node.isUnlocked) {
        progressSum += 75; // Unlocked but not completed = 75%
      } else {
        progressSum += 0; // Locked tasks = 0%
      }
    });
    
    return Math.round(progressSum / totalNodes);
  };

  const isFullyCompleted = () => {
    if (nodes.length === 0) return false;
    return nodes.every(n => n.isCompleted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-3">
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-3 py-1">
                <Flame className="w-4 h-4 mr-1" />
                {userStats?.streak || 0}
              </Badge>
              <Badge className="bg-[#ffce3b] text-white px-3 py-1">
                <Trophy className="w-4 h-4 mr-1" />
                {userStats?.points || 0}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            {chapter?.toString().split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </h1>
          <p className="text-gray-600">Complete all tasks to unlock the game!</p>
          
          {/* Progress Bar */}
          <div className="bg-white rounded-full h-3 border-2 border-gray-200 overflow-hidden mt-4">
            <motion.div
              className="h-full bg-gradient-to-r from-[#ffce3b] to-[#ffde00]"
              initial={{ width: 0 }}
              animate={{ width: `${getCompletionPercentage()}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-sm text-gray-600">{getCompletionPercentage()}% Complete</p>
        </motion.div>

        {/* Learning Roadmap - Beautiful Left-Right Zigzag Layout */}
        <div className="relative py-12 max-w-6xl mx-auto px-4">
          {nodes.map((node, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div key={node.id} className="relative mb-16 last:mb-0">
                {/* Connecting Path Between Nodes */}
                {index < nodes.length - 1 && (
                  <div className={`absolute ${isLeft ? 'left-1/2' : 'right-1/2'} top-full w-1 h-16 -translate-x-1/2 z-0`}>
                    <svg className="w-full h-full" viewBox="0 0 20 100" preserveAspectRatio="none">
                      <path
                        d={isLeft ? "M 10 0 Q 15 25, 10 50 Q 5 75, 10 100" : "M 10 0 Q 5 25, 10 50 Q 15 75, 10 100"}
                        fill="none"
                        stroke={
                          node.isCompleted && nodes[index + 1]?.isUnlocked
                            ? '#22c55e'
                            : node.isCompleted
                            ? '#fbbf24'
                            : '#d1d5db'
                        }
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="8 6"
                        className="transition-all duration-500"
                      />
                    </svg>
                  </div>
                )}

                {/* Node Container - Alternating Left/Right */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, type: 'spring', damping: 20 }}
                  className={`flex items-center gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'} ${isLeft ? 'pr-0 md:pr-20' : 'pl-0 md:pl-20'}`}
                >
                  {/* Bulb Side */}
                  <div className="relative flex-shrink-0">
                    {/* Glow Effect for Active Node */}
                    {node.isUnlocked && !node.isCompleted && (
                      <div className="absolute inset-0 bg-[#ffce3b] opacity-40 blur-3xl animate-pulse rounded-full" />
                    )}

                    {/* Bulb Container */}
                    <motion.div
                      onClick={() => handleNodeClick(node)}
                      whileHover={node.isUnlocked ? { scale: 1.08, rotate: [0, -5, 5, 0] } : {}}
                      whileTap={node.isUnlocked ? { scale: 0.95 } : {}}
                      className={`relative cursor-pointer transition-all duration-300 ${
                        !node.isUnlocked ? 'opacity-50 cursor-not-allowed grayscale' : ''
                      }`}
                    >
                      {/* Bulb Shape */}
                      <div className="relative w-24 md:w-32">
                    <svg viewBox="0 0 220 280" className="w-full h-full drop-shadow-2xl">
                      {/* Main Bulb Body - Rounded Shape */}
                      <ellipse
                        cx="110"
                        cy="90"
                        rx="70"
                        ry="85"
                        fill={
                          node.isCompleted
                            ? 'url(#greenGradient)'
                            : node.isUnlocked
                            ? 'url(#yellowGradient)'
                            : 'url(#grayGradient)'
                        }
                        stroke={node.isCompleted ? '#22c55e' : node.isUnlocked ? '#ffce3b' : '#9ca3af'}
                        strokeWidth="4"
                      />
                      
                      {/* Bulb Bottom Neck */}
                      <rect
                        x="85"
                        y="165"
                        width="50"
                        height="35"
                        rx="8"
                        fill={node.isCompleted ? '#16a34a' : node.isUnlocked ? '#f59e0b' : '#6b7280'}
                        stroke={node.isCompleted ? '#15803d' : node.isUnlocked ? '#d97706' : '#4b5563'}
                        strokeWidth="2"
                      />
                      
                      {/* Bulb Metal Base Lines */}
                      <line x1="85" y1="175" x2="135" y2="175" stroke="#ffffff" strokeWidth="1.5" opacity="0.3"/>
                      <line x1="85" y1="185" x2="135" y2="185" stroke="#ffffff" strokeWidth="1.5" opacity="0.3"/>
                      <line x1="85" y1="195" x2="135" y2="195" stroke="#ffffff" strokeWidth="1.5" opacity="0.3"/>

                      {/* Bulb Screw Base */}
                      <ellipse
                        cx="110"
                        cy="215"
                        rx="25"
                        ry="15"
                        fill={node.isCompleted ? '#15803d' : node.isUnlocked ? '#d97706' : '#4b5563'}
                        stroke={node.isCompleted ? '#166534' : node.isUnlocked ? '#c2410c' : '#374151'}
                        strokeWidth="2"
                      />

                      {/* Light Glow Effect (only when unlocked/completed) */}
                      {(node.isUnlocked || node.isCompleted) && (
                        <>
                          <ellipse
                            cx="110"
                            cy="90"
                            rx="75"
                            ry="90"
                            fill={node.isCompleted ? '#22c55e' : '#fbbf24'}
                            opacity="0.2"
                            className="animate-pulse"
                          />
                          <ellipse
                            cx="110"
                            cy="90"
                            rx="80"
                            ry="95"
                            fill={node.isCompleted ? '#22c55e' : '#fbbf24'}
                            opacity="0.1"
                            className="animate-pulse"
                            style={{ animationDelay: '0.5s' }}
                          />
                        </>
                      )}

                      {/* Shine Effect on Bulb */}
                      <ellipse
                        cx="85"
                        cy="60"
                        rx="20"
                        ry="30"
                        fill="#ffffff"
                        opacity="0.4"
                      />

                      {/* Gradients */}
                      <defs>
                        <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#fef9c3" />
                          <stop offset="30%" stopColor="#fef08a" />
                          <stop offset="70%" stopColor="#fde047" />
                          <stop offset="100%" stopColor="#facc15" />
                        </linearGradient>
                        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#d1fae5" />
                          <stop offset="30%" stopColor="#a7f3d0" />
                          <stop offset="70%" stopColor="#6ee7b7" />
                          <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>
                        <linearGradient id="grayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#f3f4f6" />
                          <stop offset="50%" stopColor="#e5e7eb" />
                          <stop offset="100%" stopColor="#d1d5db" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Completion Star Badge */}
                    {node.isCompleted && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', delay: 0.3 }}
                        className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-3 border-white shadow-xl z-20"
                      >
                        <Star className="w-5 h-5 text-white fill-white" />
                      </motion.div>
                    )}

                    {/* Points Badge */}
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full text-xs font-bold shadow-xl z-20 ${
                      node.isCompleted
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                        : node.isUnlocked
                        ? 'bg-gradient-to-r from-[#ffce3b] to-[#fbbf24] text-white'
                        : 'bg-gray-400 text-white'
                    }`}>
                      +{node.points} XP
                    </div>

                    {/* Lock Icon for Locked State */}
                    {!node.isUnlocked && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4 z-20">
                        <Lock className="w-10 h-10 text-gray-500" />
                      </div>
                    )}

                      {/* Lock Icon for Locked State */}
                      {!node.isUnlocked && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4 z-20">
                          <Lock className="w-10 h-10 text-gray-500" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Details Card - Appears on opposite side */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + 0.15, type: 'spring', damping: 20 }}
                  className="flex-1 max-w-md"
                >
                  <div className={`bg-white rounded-2xl shadow-xl p-6 border-2 transition-all duration-300 hover:shadow-2xl ${
                    node.isCompleted
                      ? 'border-green-400 bg-gradient-to-br from-green-50 to-white'
                      : node.isUnlocked
                      ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-white'
                      : 'border-gray-300 bg-gray-50'
                  }`}>
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${
                        node.isCompleted
                          ? 'bg-green-100'
                          : node.isUnlocked
                          ? 'bg-yellow-100'
                          : 'bg-gray-200'
                      }`}>
                        <node.icon className={`w-6 h-6 ${
                          node.isCompleted
                            ? 'text-green-600'
                            : node.isUnlocked
                            ? 'text-yellow-600'
                            : 'text-gray-500'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-gray-900">{node.title}</h3>
                          {node.isCompleted && (
                            <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-100" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{node.description}</p>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg">
                        <Clock className="w-4 h-4" />
                        {node.duration}
                      </span>
                      <span className="flex items-center gap-1.5 bg-purple-100 px-3 py-1.5 rounded-lg text-purple-700 font-semibold">
                        <Sparkles className="w-4 h-4" />
                        {node.points} XP
                      </span>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mb-4">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${
                            node.isCompleted
                              ? 'w-full bg-gradient-to-r from-green-400 to-green-600'
                              : node.isUnlocked
                              ? 'w-0 bg-gradient-to-r from-yellow-400 to-yellow-600'
                              : 'w-0 bg-gray-300'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Action Button */}
                    <div>
                      {node.isCompleted ? (
                        <button 
                          disabled
                          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                          Completed!
                        </button>
                      ) : node.isUnlocked ? (
                        <Button
                          className="w-full py-6 px-4 rounded-xl bg-gradient-to-r from-[#ffce3b] via-[#fbbf24] to-[#f59e0b] hover:from-[#fbbf24] hover:to-[#ffce3b] text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-base"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStartNode(node);
                          }}
                        >
                          <Play className="w-5 h-5 mr-2" />
                          Start Learning
                        </Button>
                      ) : (
                        <button 
                          disabled
                          className="w-full py-3 px-4 rounded-xl bg-gray-300 text-gray-500 font-bold flex items-center justify-center gap-2 cursor-not-allowed"
                        >
                          <Lock className="w-5 h-5" />
                          Complete Previous Task
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            );
          })}
        </div>

        {/* Completion Card */}
        {isFullyCompleted() && (
          <div className="mt-8">
            <Card className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  🎉 Chapter Completed!
                </h2>
                <p className="text-gray-600 mb-4">
                  You've mastered all concepts. Great job!
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#ffce3b] to-[#ffde00] text-white hover:shadow-lg"
                  onClick={() => router.push('/chapters')}
                >
                  Continue Learning
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
