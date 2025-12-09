'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, BookOpen, Lightbulb, Zap, ChevronRight, Gauge, Move } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

function ForceMotionModuleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [isCompleting, setIsCompleting] = useState(false);

  const sections = [
    {
      title: "Introduction to Force & Motion",
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Force?</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              A force is a push or pull acting on an object. It can make things start moving, stop moving, 
              change direction, or change shape. Forces are everywhere around us!
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-300">
            <h3 className="text-2xl font-bold text-purple-600 mb-4 text-center">
              What is Motion?
            </h3>
            <p className="text-center text-gray-700 text-lg mb-4">
              Motion is when an object changes its position with respect to time. 
              An object is in motion if its position is changing!
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🚗</div>
                <p className="font-bold text-blue-900">Linear Motion</p>
                <p className="text-sm text-gray-600">Straight line movement</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🎡</div>
                <p className="font-bold text-green-900">Circular Motion</p>
                <p className="text-sm text-gray-600">Movement in a circle</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🔄</div>
                <p className="font-bold text-orange-900">Oscillatory Motion</p>
                <p className="text-sm text-gray-600">Back and forth motion</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Key Concepts:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Force is measured in: </span>
                  <span className="text-gray-700">Newtons (N), named after Sir Isaac Newton</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Forces can be: </span>
                  <span className="text-gray-700">Contact forces (push, pull) or Non-contact forces (gravity, magnetism)</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Speed vs Velocity: </span>
                  <span className="text-gray-700">Speed is how fast you move, Velocity includes direction</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Acceleration: </span>
                  <span className="text-gray-700">Change in velocity over time (speeding up or slowing down)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Newton's Laws of Motion",
      icon: Zap,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Three Laws That Govern Motion</h2>

          <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                1️⃣ Newton's First Law - Law of Inertia
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-red-200 mb-4">
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <p className="text-lg font-bold text-red-900 text-center">
                    "An object at rest stays at rest, and an object in motion stays in motion 
                    unless acted upon by an external force"
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">🛹 Example 1: Skateboard</p>
                    <p className="text-gray-700 text-sm">
                      When you jump off a moving skateboard, your body continues moving forward 
                      (inertia) while the skateboard stops, causing you to stumble!
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">🚗 Example 2: Car Brakes</p>
                    <p className="text-gray-700 text-sm">
                      When a car suddenly brakes, passengers jerk forward because their bodies 
                      want to continue moving (inertia).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-600">
                <p className="font-bold text-red-900">💡 Key Point:</p>
                <p className="text-sm text-red-700 mt-1">
                  Inertia is the tendency of objects to resist changes in motion. Heavier objects have more inertia!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                2️⃣ Newton's Second Law - F = ma
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-blue-900 text-center mb-2">
                    Force = Mass × Acceleration
                  </p>
                  <p className="text-center text-gray-700">F = m × a</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">📊 Example: Pushing Objects</p>
                    <p className="text-gray-700 text-sm mb-2">
                      You push a bicycle (light) and a car (heavy) with the same force:
                    </p>
                    <div className="bg-blue-50 p-3 rounded font-mono text-sm">
                      <p>• Bicycle: Less mass → More acceleration (moves faster)</p>
                      <p>• Car: More mass → Less acceleration (moves slower)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="font-bold text-blue-900">💡 Key Point:</p>
                <p className="text-sm text-blue-700 mt-1">
                  The heavier the object, the more force you need to accelerate it!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                3️⃣ Newton's Third Law - Action-Reaction
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-green-200 mb-4">
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-lg font-bold text-green-900 text-center">
                    "For every action, there is an equal and opposite reaction"
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">🚀 Example 1: Rocket Launch</p>
                    <p className="text-gray-700 text-sm">
                      Rocket pushes gas downward (action) → Gas pushes rocket upward (reaction)
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">🏊 Example 2: Swimming</p>
                    <p className="text-gray-700 text-sm">
                      You push water backward (action) → Water pushes you forward (reaction)
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">🎈 Example 3: Balloon</p>
                    <p className="text-gray-700 text-sm">
                      Air rushes out backward (action) → Balloon flies forward (reaction)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Types of Forces",
      icon: Gauge,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Forces Around Us</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-purple-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gravitational Force</h3>
                <p className="text-gray-700 mb-3">
                  The force that pulls objects toward Earth. It's why we don't float away!
                </p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> When you drop a ball, gravity pulls it down. 
                    Earth's gravity = 9.8 m/s²
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Friction</h3>
                <p className="text-gray-700 mb-3">
                  The force that opposes motion between surfaces in contact.
                </p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Rubbing your hands creates heat due to friction. 
                    Car brakes use friction to stop!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🧲</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Magnetic Force</h3>
                <p className="text-gray-700 mb-3">
                  Force between magnets or magnetic materials (attract or repel).
                </p>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Refrigerator magnets stick to metal surfaces. 
                    Opposite poles attract!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Muscular Force</h3>
                <p className="text-gray-700 mb-3">
                  Force applied by muscles when we push, pull, or lift objects.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Lifting your school bag, kicking a football, 
                    rowing a boat - all use muscular force!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🔌</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrostatic Force</h3>
                <p className="text-gray-700 mb-3">
                  Force between electrically charged objects (can attract or repel).
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Hair standing up after rubbing a balloon on it. 
                    Lightning is electrostatic discharge!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Buoyant Force</h3>
                <p className="text-gray-700 mb-3">
                  Upward force exerted by a fluid (liquid or gas) on objects.
                </p>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Ships float because buoyant force balances their weight. 
                    Objects feel lighter in water!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-2 border-blue-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">⚖️ Balanced vs Unbalanced Forces</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-2">Balanced Forces:</p>
                <p className="text-sm text-gray-700">
                  Equal forces in opposite directions → No change in motion. 
                  Example: Tug of war with equal strength teams.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-orange-900 mb-2">Unbalanced Forces:</p>
                <p className="text-sm text-gray-700">
                  Unequal forces → Object accelerates. 
                  Example: Pushing a box makes it move (force &gt; friction).
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Real-World Applications",
      icon: Lightbulb,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Force & Motion in Daily Life</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Understanding forces helps us design safer vehicles, better sports equipment, and amazing technology!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vehicle Safety</h3>
                <p className="text-gray-700">
                  Seatbelts and airbags use Newton's laws to protect us. During sudden stops, 
                  seatbelts provide force to decelerate your body safely, preventing injury from inertia!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sports & Athletics</h3>
                <p className="text-gray-700">
                  Athletes use force and motion principles to improve performance. Sprinters push hard 
                  against starting blocks (action-reaction), javelin throwers optimize angles for maximum distance!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aviation</h3>
                <p className="text-gray-700">
                  Airplanes fly by balancing four forces: lift (upward), weight (downward), thrust (forward), 
                  and drag (backward). Understanding these forces is crucial for safe flight!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Space Exploration</h3>
                <p className="text-gray-700">
                  Rockets use Newton's Third Law to reach space. Burning fuel creates exhaust that pushes 
                  down, propelling the rocket upward with tremendous force!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Engineering & Construction</h3>
                <p className="text-gray-700">
                  Engineers design buildings and bridges to withstand various forces - gravity, wind, 
                  earthquakes. Understanding force distribution ensures structures don't collapse!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Amusement Parks</h3>
                <p className="text-gray-700">
                  Roller coasters are designed using physics! Gravity pulls you down hills, inertia keeps 
                  you in loops, and friction in brakes brings you to a safe stop!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🌟 Fun Facts!</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Isaac Newton developed his laws of motion in 1687, over 300 years ago!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>In space, objects continue moving forever unless acted upon by a force (no air resistance!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>The strongest muscle force in your body comes from your jaw muscles!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Friction can be useful (brakes, walking) or a problem (wears out machine parts)</span>
              </li>
            </ul>
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
      const subject = searchParams.get('subject') || 'science-wonder';
      const chapter = searchParams.get('chapter') || 'force-motion';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
                        ? 'bg-blue-600 w-8'
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
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                <CurrentIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {sections[currentSection].title}
                </h1>
                <p className="text-gray-600">Force & Motion - Class 8 Science</p>
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
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8"
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

export default function ForceMotionModule() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading module...</p>
        </div>
      </div>
    }>
      <ForceMotionModuleContent />
    </Suspense>
  );
}
