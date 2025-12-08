'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, BookOpen, Lightbulb, Rocket, ChevronRight, Globe, Sun, Moon } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

function SolarSystemModuleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [isCompleting, setIsCompleting] = useState(false);

  const sections = [
    {
      title: "Introduction to Our Solar System",
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the Solar System?</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Solar System is our cosmic neighborhood! It consists of the Sun and everything that orbits around it, 
              including eight planets, their moons, asteroids, comets, and dwarf planets. Our Solar System formed about 
              <strong> 4.6 billion years ago</strong> from a giant cloud of gas and dust.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300">
            <div className="text-center mb-6">
              <Sun className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-yellow-600 mb-2">The Sun - Our Star</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-bold text-yellow-900 mb-2">Size</p>
                <p className="text-sm text-gray-700">1.4 million km diameter - 109 times Earth's diameter!</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-bold text-yellow-900 mb-2">Temperature</p>
                <p className="text-sm text-gray-700">15 million°C at the core, 5,500°C at the surface</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-bold text-yellow-900 mb-2">Mass</p>
                <p className="text-sm text-gray-700">Contains 99.86% of all mass in the Solar System!</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-bold text-yellow-900 mb-2">Composition</p>
                <p className="text-sm text-gray-700">73% Hydrogen, 25% Helium, 2% other elements</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Key Facts About the Solar System:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">The Sun is so massive that its gravity holds all the planets in orbit</span>
              </li>
              <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">There are <strong>8 planets</strong> in our Solar System (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)</span>
              </li>
              <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">The asteroid belt lies between Mars and Jupiter with millions of rocky objects</span>
              </li>
              <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Light from the Sun takes <strong>8 minutes and 20 seconds</strong> to reach Earth!</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "The Eight Planets",
      icon: Globe,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Planets</h2>

          <p className="text-lg text-gray-700">
            The planets are divided into two groups: <strong>Inner Planets</strong> (rocky) and <strong>Outer Planets</strong> (gas giants).
          </p>

          <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">🪨 Inner Planets (Rocky/Terrestrial)</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                    <h4 className="font-bold text-gray-900 text-lg">1. Mercury</h4>
                  </div>
                  <p className="text-sm text-gray-700 ml-11">
                    <strong>Closest to the Sun</strong> • Smallest planet • No atmosphere • Temperatures range from -180°C to 430°C • Takes 88 Earth days to orbit the Sun
                  </p>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-600"></div>
                    <h4 className="font-bold text-gray-900 text-lg">2. Venus</h4>
                  </div>
                  <p className="text-sm text-gray-700 ml-11">
                    <strong>Hottest planet</strong> • Thick toxic atmosphere • Rotates backwards • Surface temp 465°C • Called "Earth's twin" due to similar size
                  </p>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    <h4 className="font-bold text-gray-900 text-lg">3. Earth 🌍</h4>
                  </div>
                  <p className="text-sm text-gray-700 ml-11">
                    <strong>Our home!</strong> • Only planet with life • 71% covered in water • Has one moon • Perfect distance from Sun for liquid water
                  </p>
                </div>

                <div className="bg-red-100 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-red-500"></div>
                    <h4 className="font-bold text-gray-900 text-lg">4. Mars</h4>
                  </div>
                  <p className="text-sm text-gray-700 ml-11">
                    <strong>The Red Planet</strong> • Has polar ice caps • Largest volcano in Solar System (Olympus Mons) • Two small moons • Possible ancient rivers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">💨 Outer Planets (Gas/Ice Giants)</h3>
              
              <div className="space-y-4">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-orange-300"></div>
                    <h4 className="font-bold text-gray-900 text-lg">5. Jupiter ♃</h4>
                  </div>
                  <p className="text-sm text-gray-700 ml-15">
                    <strong>Largest planet!</strong> • Has Great Red Spot (giant storm) • 95+ moons including Ganymede (biggest moon) • Could fit 1,300 Earths inside!
                  </p>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-yellow-200 border-2 border-yellow-400"></div>
                    <h4 className="font-bold text-gray-900 text-lg">6. Saturn ♄</h4>
                  </div>
                  <p className="text-sm text-gray-700 ml-15">
                    <strong>Lord of the Rings!</strong> • Famous ring system made of ice and rock • 146+ moons • Least dense planet (would float in water!) • Titan is its largest moon
                  </p>
                </div>

                <div className="bg-cyan-100 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-cyan-400"></div>
                    <h4 className="font-bold text-gray-900 text-lg">7. Uranus ⛢</h4>
                  </div>
                  <p className="text-sm text-gray-700 ml-13">
                    <strong>Tilted sideways!</strong> • Rotates on its side • Blue-green color from methane • Very cold (-224°C) • Has faint rings
                  </p>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600"></div>
                    <h4 className="font-bold text-gray-900 text-lg">8. Neptune ♆</h4>
                  </div>
                  <p className="text-sm text-gray-700 ml-13">
                    <strong>Farthest from Sun</strong> • Strongest winds in Solar System (2,000 km/h!) • Deep blue color • Has a large dark spot • Takes 165 Earth years to orbit
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Amazing Space Facts",
      icon: Rocket,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mind-Blowing Facts About Space!</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Moons Everywhere!</h3>
                <p className="text-gray-700">
                  Our Solar System has <strong>over 200 known moons!</strong> Jupiter has 95+ moons, Saturn has 146+. 
                  Some moons are bigger than the planet Mercury!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Super Speed!</h3>
                <p className="text-gray-700">
                  Earth travels around the Sun at <strong>107,000 km/h</strong> (67,000 mph)! 
                  That's faster than any rocket, yet we don't feel it!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diamond Rain</h3>
                <p className="text-gray-700">
                  On Neptune and Uranus, it might <strong>rain diamonds!</strong> Extreme pressure turns 
                  carbon into diamond crystals that fall like rain.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Day Length Varies</h3>
                <p className="text-gray-700">
                  A day on Venus (243 Earth days) is <strong>longer than its year</strong> (225 Earth days)! 
                  Meanwhile, Jupiter's day is only 10 hours!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Extreme Volcanoes</h3>
                <p className="text-gray-700">
                  Jupiter's moon Io has over <strong>400 active volcanoes</strong> - more than any other 
                  object in the Solar System!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🪐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Saturn's Rings</h3>
                <p className="text-gray-700">
                  Saturn's rings are <strong>282,000 km wide</strong> but only 10 meters thick! 
                  They're made of billions of ice particles.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border-2 border-indigo-400">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Moon className="w-6 h-6 text-indigo-600" />
              Scale of the Solar System
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>If the Sun was the size of a basketball:</strong>
              </p>
              <ul className="space-y-2 ml-4 text-gray-700">
                <li>• Earth would be the size of a peppercorn 26 meters away</li>
                <li>• Jupiter would be the size of a golf ball 134 meters away</li>
                <li>• Neptune would be a marble 780 meters away!</li>
              </ul>
              <p className="text-sm text-indigo-700 font-semibold mt-4">
                The Solar System is incredibly vast - Neptune is 4.5 billion km from the Sun! 
                Light takes over 4 hours to reach Neptune from the Sun.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Future Exploration</h3>
            <p className="text-gray-700 leading-relaxed">
              Humans have sent spacecraft to explore every planet in our Solar System! 
              The <strong>Voyager 1</strong> probe, launched in 1977, has now left our Solar System 
              and is in interstellar space - over 24 billion kilometers away! 
              NASA is planning missions to Europa (Jupiter's moon) and Titan (Saturn's moon) 
              to search for signs of life.
            </p>
          </div>
        </div>
      )
    }
  ];

  const handleSectionComplete = () => {
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
    
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinish = async () => {
    if (!user || isCompleting) return;
    
    setIsCompleting(true);
    
    try {
      const subject = searchParams.get('subject') || 'science-world';
      const chapter = searchParams.get('chapter') || 'solar-system';
      const nodeId = 'module-1';
      
      // Mark as completed in database
      await supabase
        .from('learning_progress')
        .upsert({
          user_id: user.id,
          chapter: `${subject}-${chapter}`,
          node_id: nodeId,
          completed: true,
          completed_at: new Date().toISOString()
        });
      
      // Award points
      await supabase.rpc('increment_points', {
        user_id: user.id,
        points_to_add: 15
      });
      
      // Navigate back to roadmap
      router.push(`/roadmap/${subject}/${chapter}`);
    } catch (error) {
      console.error('Error completing module:', error);
      setIsCompleting(false);
    }
  };

  const CurrentIcon = sections[currentSection].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Roadmap
            </Button>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-600">
                Section {currentSection + 1} of {sections.length}
              </span>
              <div className="flex gap-2">
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSection
                        ? 'bg-indigo-600 w-8'
                        : completedSections.includes(index)
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl">
                <CurrentIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {sections[currentSection].title}
                </h1>
                <p className="text-gray-600">Solar System - Science Chapter</p>
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="mb-8">
            {sections[currentSection].content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between items-center pt-8 border-t-2 border-gray-200">
            <Button
              variant="outline"
              onClick={() => {
                if (currentSection > 0) {
                  setCurrentSection(currentSection - 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              disabled={currentSection === 0}
              className="disabled:opacity-50"
            >
              Previous Section
            </Button>

            {currentSection === sections.length - 1 ? (
              <Button
                onClick={handleFinish}
                disabled={isCompleting}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 disabled:opacity-50"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                {isCompleting ? 'Completing...' : 'Complete Module'}
              </Button>
            ) : (
              <Button
                onClick={handleSectionComplete}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8"
              >
                Next Section
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SolarSystemModule() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading module...</p>
        </div>
      </div>
    }>
      <SolarSystemModuleContent />
    </Suspense>
  );
}
