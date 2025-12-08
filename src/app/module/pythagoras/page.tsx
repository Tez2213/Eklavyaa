'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, BookOpen, Lightbulb, Calculator, ChevronRight } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

function PythagorasModuleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [isCompleting, setIsCompleting] = useState(false);

  const sections = [
    {
      title: "Introduction to Pythagorean Theorem",
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the Pythagorean Theorem?</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Pythagorean Theorem is one of the most famous mathematical formulas in the world. 
              It describes the relationship between the three sides of a right-angled triangle.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300">
            <p className="text-center text-4xl font-bold text-blue-600 mb-4">
              a² + b² = c²
            </p>
            <p className="text-center text-gray-600">
              Where <span className="font-bold text-blue-600">a</span> and <span className="font-bold text-blue-600">b</span> are the lengths of the two shorter sides,<br />
              and <span className="font-bold text-red-600">c</span> is the length of the longest side (hypotenuse)
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Key Points to Remember:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">This theorem only works for <strong>right-angled triangles</strong> (triangles with one 90° angle)</span>
              </li>
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">The hypotenuse (c) is always the <strong>longest side</strong>, opposite the right angle</span>
              </li>
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Named after the Greek mathematician <strong>Pythagoras</strong> (570-495 BC)</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Understanding with Examples",
      icon: Calculator,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Solve Real Examples</h2>

          <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                📐 Example 1: Finding the Hypotenuse
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-purple-200 mb-4">
                <p className="text-gray-700 mb-4">
                  A right triangle has sides of length <strong>a = 3 cm</strong> and <strong>b = 4 cm</strong>. 
                  What is the length of the hypotenuse?
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg space-y-2 font-mono text-sm">
                  <p><strong>Step 1:</strong> Write the formula: a² + b² = c²</p>
                  <p><strong>Step 2:</strong> Substitute values: 3² + 4² = c²</p>
                  <p><strong>Step 3:</strong> Calculate: 9 + 16 = c²</p>
                  <p><strong>Step 4:</strong> Simplify: 25 = c²</p>
                  <p><strong>Step 5:</strong> Take square root: c = √25 = <span className="text-green-600 font-bold">5 cm</span></p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                <p className="font-bold text-green-900">✓ Answer: The hypotenuse is 5 cm</p>
                <p className="text-sm text-green-700 mt-2">This is called a "3-4-5 triangle" - a famous Pythagorean triple!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                📐 Example 2: Finding a Shorter Side
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-orange-200 mb-4">
                <p className="text-gray-700 mb-4">
                  A ladder is 13 meters long and leans against a wall. The base of the ladder is 5 meters 
                  from the wall. How high up the wall does the ladder reach?
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg space-y-2 font-mono text-sm">
                  <p><strong>Step 1:</strong> We know: a² + b² = c² (where c = 13m, a = 5m, b = ?)</p>
                  <p><strong>Step 2:</strong> Rearrange: b² = c² - a²</p>
                  <p><strong>Step 3:</strong> Substitute: b² = 13² - 5²</p>
                  <p><strong>Step 4:</strong> Calculate: b² = 169 - 25 = 144</p>
                  <p><strong>Step 5:</strong> Take square root: b = √144 = <span className="text-green-600 font-bold">12 m</span></p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                <p className="font-bold text-green-900">✓ Answer: The ladder reaches 12 meters up the wall</p>
                <p className="text-sm text-green-700 mt-2">Another Pythagorean triple: 5-12-13!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Real-World Applications",
      icon: Lightbulb,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Do We Use This?</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The Pythagorean Theorem isn't just for math class - it's used everywhere in the real world!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Construction & Architecture</h3>
                <p className="text-gray-700">
                  Builders use it to make sure walls are perfectly vertical and floors are level. 
                  The "3-4-5" method helps create perfect right angles!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technology & Screens</h3>
                <p className="text-gray-700">
                  TV and phone screen sizes are measured diagonally using the Pythagorean theorem. 
                  A "55-inch TV" means the diagonal is 55 inches!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Navigation & GPS</h3>
                <p className="text-gray-700">
                  GPS systems use it to calculate the shortest distance between two points. 
                  It helps find the most efficient route!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sports & Gaming</h3>
                <p className="text-gray-700">
                  Video games use it to calculate distances, trajectories, and collision detection. 
                  Sports analysts use it to measure player movements!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Fun Fact!</h3>
            <p className="text-gray-700 leading-relaxed">
              The Pythagorean Theorem was known to ancient civilizations like the Babylonians and Indians 
              long before Pythagoras! However, Pythagoras and his students were the first to prove it 
              mathematically, which is why it's named after him.
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
      const subject = searchParams.get('subject') || 'maths-wonder';
      const chapter = searchParams.get('chapter') || 'pythagoras';
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
                <p className="text-gray-600">Pythagorean Theorem - Chapter 1</p>
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

export default function PythagorasModule() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading module...</p>
        </div>
      </div>
    }>
      <PythagorasModuleContent />
    </Suspense>
  );
}
