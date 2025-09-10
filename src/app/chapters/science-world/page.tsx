'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  Star,
  Lock,
  Play,
  Crown,
  Loader2,
  Trophy,
  X
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScienceWorld() {
  const router = useRouter();
  const [loadingChapter, setLoadingChapter] = useState<number | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<any>(null);

  // Planet chapters data - Following real solar system order and distances
  const planets = [
    {
      id: 1,
      name: "Chapter 1",
      title: "Solar System",
      description: "Explore the mysteries of our solar system and learn about planets, stars, and cosmic phenomena",
      level: 5,
      progress: 100,
      stars: 3,
      isUnlocked: true,
      planetUrl: "/mecury.webp",
      gameUrl: "https://game-ashen-eight.vercel.app/science/solar-game",
      position: { top: '50%', left: '35%' },
      size: 'w-12 h-12 md:w-14 md:h-14',
      orbitRadius: '80px'
    },
    {
      id: 2,
      name: "Chapter 2",
      title: "Temperature",
      description: "Understand heat, cold, and temperature changes in our environment and daily life",
      level: 3,
      progress: 85,
      stars: 2,
      isUnlocked: true,
      planetUrl: "/venus.webp",
      gameUrl: "https://game-ashen-eight.vercel.app/science/temperature-game",
      position: { top: '35%', left: '30%' },
      size: 'w-14 h-14 md:w-16 md:h-16',
      orbitRadius: '110px'
    },
    {
      id: 3,
      name: "Chapter 3",
      title: "Ingredients",
      description: "Discover the building blocks of matter and learn about different materials around us",
      level: 7,
      progress: 75,
      stars: 3,
      isUnlocked: true,
      planetUrl: "/earth.webp",
      gameUrl: "https://game-ashen-eight.vercel.app/science/chef-game",
      position: { top: '25%', left: '50%' },
      size: 'w-16 h-16 md:w-18 md:h-18',
      orbitRadius: '140px'
    },
    {
      id: 4,
      name: "Chapter 4",
      title: "Materials",
      description: "Explore different types of materials, their properties, and how they're used in our world",
      level: 2,
      progress: 60,
      stars: 1,
      isUnlocked: true,
      planetUrl: "/mars.webp",
      gameUrl: "https://game-ashen-eight.vercel.app/science/material-game",
      position: { top: '30%', left: '70%' },
      size: 'w-14 h-14 md:w-16 md:h-16',
      orbitRadius: '170px'
    },
    {
      id: 5,
      name: "Chapter 5",
      title: "Water Cycle",
      description: "Learn about the amazing journey of water through evaporation, condensation, and precipitation",
      level: 1,
      progress: 40,
      stars: 2,
      isUnlocked: true,
      planetUrl: "/jupiter.webp",
      gameUrl: "https://game-ashen-eight.vercel.app/science/water-cycle-game",
      position: { top: '65%', left: '75%' },
      size: 'w-22 h-22 md:w-26 md:h-26',
      orbitRadius: '220px'
    },
    {
      id: 6,
      name: "Chapter 6",
      title: "Future World",
      description: "Discover amazing future technologies and innovations in science",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      planetUrl: "/saturn.webp",
      gameUrl: null,
      position: { top: '75%', left: '45%' },
      size: 'w-20 h-20 md:w-24 md:h-24',
      orbitRadius: '270px'
    },
    {
      id: 7,
      name: "Chapter 7",
      title: "Advanced Physics",
      description: "Dive into the world of advanced physics and scientific principles",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      planetUrl: "/uranus.gif",
      gameUrl: null,
      position: { top: '70%', left: '20%' },
      size: 'w-18 h-18 md:w-20 md:h-20',
      orbitRadius: '320px'
    },
    {
      id: 8,
      name: "Chapter 8",
      title: "Chemistry Lab",
      description: "Explore chemical reactions and the fascinating world of chemistry",
      level: 0,
      progress: 0,
      stars: 0,
      isUnlocked: false,
      planetUrl: "/neptune.webp",
      gameUrl: null,
      position: { top: '45%', left: '15%' },
      size: 'w-17 h-17 md:w-19 md:h-19',
      orbitRadius: '370px'
    }
  ];

  const handlePlanetClick = (planet: any) => {
    if (planet.isUnlocked) {
      setSelectedPlanet(planet);
    }
  };

  const handleStartChapter = async (planet: any) => {
    if (!planet.gameUrl || loadingChapter) return;
    setLoadingChapter(planet.id);
    setTimeout(() => {
      setLoadingChapter(null);
      setSelectedPlanet(null);
      window.open(planet.gameUrl, '_blank');
    }, 1500);
  };

  // Floating stars effect
  const [starOffset, setStarOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setStarOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black relative overflow-hidden">
      {/* Starfield Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: starOffset.x, y: starOffset.y }}
        transition={{ type: 'spring', stiffness: 20, damping: 15 }}
      >
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Fixed Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-purple-500/30 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push('/chapters')}
                  className="text-white hover:bg-purple-800/50 rounded-full"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </motion.div>
              <div>
                <motion.h1 
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Science World
                </motion.h1>
                <motion.p 
                  className="text-purple-300 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Explore the science!
                </motion.p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 font-bold rounded-full px-3">
                  <Star className="w-3 h-3 mr-1 fill-yellow-300 text-yellow-300" /> 450
                </Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 rounded-full px-3">
                  🔥 3
                </Badge>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sun (Center Reference) */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotate: 360
        }}
        transition={{ 
          opacity: { duration: 1, delay: 0.5 },
          scale: { duration: 1, delay: 0.5 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-lg shadow-yellow-400/30">
          <img 
            src="/sun.webp"
            alt="Sun"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping"></div>
      </motion.div>

      {/* Planets */}
      <div className="relative pt-20 pb-24 min-h-screen">
        {/* Orbital Rings - Static for visual reference */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[80, 110, 140, 170, 220, 270, 320, 370].map((radius, index) => (
            <motion.div
              key={radius}
              className="absolute border border-white/10 rounded-full"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                left: `-${radius}px`,
                top: `-${radius}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
            />
          ))}
        </div>

        {planets.map((planet, index) => (
          <motion.div
            key={planet.id}
            className={`absolute ${planet.size} cursor-pointer z-20`}
            style={{ 
              top: planet.position.top, 
              left: planet.position.left,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 + (index * 0.2) }}
            whileHover={{ scale: planet.isUnlocked ? 1.1 : 1 }}
            whileTap={{ scale: planet.isUnlocked ? 0.95 : 1 }}
            onClick={() => handlePlanetClick(planet)}
          >
            <div className={`relative w-full h-full rounded-full overflow-hidden border-2 ${
              planet.isUnlocked 
                ? 'border-white/50 shadow-xl shadow-white/20' 
                : 'border-gray-600 opacity-60'
            }`}>
              <img 
                src={planet.planetUrl}
                alt={planet.name}
                className="w-full h-full object-cover"
              />
              {!planet.isUnlocked && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white/80" />
                </div>
              )}
              {planet.isUnlocked && planet.progress === 100 && (
                <div className="absolute -top-2 -right-2">
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
              )}
            </div>
            
            {/* Planet Label */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + (index * 0.1) }}
            >
              <p className="text-white text-xs font-medium">{planet.name}</p>
              {planet.isUnlocked && (
                <div className="flex justify-center space-x-1 mt-1">
                  {[...Array(3)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-3 h-3 ${
                        starIndex < planet.stars
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
      {/* Planet Detail Modal */}
      <AnimatePresence>
        {selectedPlanet && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlanet(null)}
          >
            <motion.div
              className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 w-full max-w-md relative border border-purple-500/30 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedPlanet(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Planet Animation */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                  <img 
                    src={selectedPlanet.planetUrl}
                    alt={selectedPlanet.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Planet Info */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-2">{selectedPlanet.name}</h2>
                <h3 className="text-xl text-purple-300 mb-3">{selectedPlanet.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {selectedPlanet.description}
                </p>

                {/* Progress Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-900/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{selectedPlanet.level}</div>
                    <div className="text-xs text-purple-300">Level</div>
                  </div>
                  <div className="bg-purple-900/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{selectedPlanet.progress}%</div>
                    <div className="text-xs text-purple-300">Progress</div>
                  </div>
                </div>

                {/* Stars */}
                {selectedPlanet.stars > 0 && (
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(3)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (starIndex * 0.1) }}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            starIndex < selectedPlanet.stars
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Progress Bar */}
                {selectedPlanet.progress > 0 && (
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Chapter Progress</span>
                      <span className="text-sm font-bold text-purple-300">{selectedPlanet.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedPlanet.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Action Button */}
              {selectedPlanet.gameUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg"
                    disabled={loadingChapter === selectedPlanet.id}
                    onClick={() => handleStartChapter(selectedPlanet)}
                  >
                    {loadingChapter === selectedPlanet.id ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Launching...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Start Mission
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
