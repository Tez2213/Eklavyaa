'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, BookOpen, Lightbulb, Calculator, ChevronRight, Variable } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

function BasicAlgebraModuleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [isCompleting, setIsCompleting] = useState(false);

  const sections = [
    {
      title: "Introduction to Algebra",
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Algebra?</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Algebra is the branch of mathematics that uses letters and symbols to represent numbers and quantities 
              in formulas and equations. It's like a mathematical language that helps us solve problems!
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-300">
            <h3 className="text-2xl font-bold text-purple-600 mb-4 text-center">
              From Arithmetic to Algebra
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-2">Arithmetic:</p>
                <p className="text-gray-700 font-mono">5 + 3 = 8</p>
                <p className="text-sm text-gray-600 mt-2">We work with specific numbers</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-900 mb-2">Algebra:</p>
                <p className="text-gray-700 font-mono">x + 3 = 8</p>
                <p className="text-sm text-gray-600 mt-2">We use variables (x) to find unknown values</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Key Concepts:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Variables: </span>
                  <span className="text-gray-700">Letters (like x, y, z) that represent unknown numbers</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Constants: </span>
                  <span className="text-gray-700">Fixed values like numbers (2, 5, 10)</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Expressions: </span>
                  <span className="text-gray-700">Combinations of variables and numbers (3x + 5)</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Equations: </span>
                  <span className="text-gray-700">Mathematical statements with an equals sign (2x + 3 = 11)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Algebraic Expressions & Operations",
      icon: Calculator,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Working with Expressions</h2>

          <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                ➕ Adding & Subtracting Like Terms
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-green-200 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>Like terms</strong> are terms that have the same variable raised to the same power.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg space-y-3">
                  <div>
                    <p className="font-bold text-green-900">Example 1: Simplify 3x + 5x</p>
                    <p className="font-mono text-gray-700 mt-2">3x + 5x = (3 + 5)x = <span className="text-green-600 font-bold">8x</span></p>
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Example 2: Simplify 7y - 2y + 4</p>
                    <p className="font-mono text-gray-700 mt-2">7y - 2y + 4 = (7 - 2)y + 4 = <span className="text-green-600 font-bold">5y + 4</span></p>
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Example 3: Simplify 4x + 3y - x + 2y</p>
                    <p className="font-mono text-gray-700 mt-2">4x - x + 3y + 2y = <span className="text-green-600 font-bold">3x + 5y</span></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                ✖️ Multiplying Expressions
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                  <div>
                    <p className="font-bold text-blue-900">Example 1: Multiply 3 × 4x</p>
                    <p className="font-mono text-gray-700 mt-2">3 × 4x = <span className="text-blue-600 font-bold">12x</span></p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Example 2: Multiply 2x × 5y</p>
                    <p className="font-mono text-gray-700 mt-2">2x × 5y = <span className="text-blue-600 font-bold">10xy</span></p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Example 3: Multiply 3(2x + 4)</p>
                    <p className="font-mono text-gray-700 mt-2">3 × 2x + 3 × 4 = <span className="text-blue-600 font-bold">6x + 12</span></p>
                    <p className="text-sm text-gray-600 mt-1">This is called the distributive property!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Solving Linear Equations",
      icon: Variable,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Finding the Unknown Value</h2>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Golden Rule of Equations:</h3>
            <p className="text-gray-700 text-lg">
              Whatever you do to one side of the equation, you must do to the other side!
            </p>
          </div>

          <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Example 1: Solve x + 5 = 12</h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-purple-200 mb-4">
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-bold text-purple-900">Step 1: Write the equation</p>
                    <p className="text-gray-700 mt-1">x + 5 = 12</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-bold text-purple-900">Step 2: Subtract 5 from both sides</p>
                    <p className="text-gray-700 mt-1">x + 5 - 5 = 12 - 5</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-bold text-purple-900">Step 3: Simplify</p>
                    <p className="text-gray-700 mt-1">x = <span className="text-green-600 font-bold">7</span></p>
                  </div>
                  <div className="bg-green-100 p-3 rounded border-l-4 border-green-600">
                    <p className="font-bold text-green-900">✓ Check: 7 + 5 = 12 ✓</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Example 2: Solve 3x - 4 = 11</h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-orange-200 mb-4">
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="font-bold text-orange-900">Step 1: Write the equation</p>
                    <p className="text-gray-700 mt-1">3x - 4 = 11</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="font-bold text-orange-900">Step 2: Add 4 to both sides</p>
                    <p className="text-gray-700 mt-1">3x - 4 + 4 = 11 + 4</p>
                    <p className="text-gray-700 mt-1">3x = 15</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="font-bold text-orange-900">Step 3: Divide both sides by 3</p>
                    <p className="text-gray-700 mt-1">3x ÷ 3 = 15 ÷ 3</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="font-bold text-orange-900">Step 4: Simplify</p>
                    <p className="text-gray-700 mt-1">x = <span className="text-green-600 font-bold">5</span></p>
                  </div>
                  <div className="bg-green-100 p-3 rounded border-l-4 border-green-600">
                    <p className="font-bold text-green-900">✓ Check: 3(5) - 4 = 15 - 4 = 11 ✓</p>
                  </div>
                </div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Algebra in Daily Life</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Algebra isn't just abstract mathematics - it's used everywhere to solve real problems!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shopping & Budgets</h3>
                <p className="text-gray-700 mb-3">
                  If 3 notebooks cost ₹45, how much does one notebook cost?
                </p>
                <div className="bg-blue-50 p-3 rounded-lg font-mono text-sm">
                  <p>3x = 45</p>
                  <p>x = 45 ÷ 3</p>
                  <p className="text-green-600 font-bold">x = ₹15</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏃</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Speed & Distance</h3>
                <p className="text-gray-700 mb-3">
                  A car travels at 60 km/h. How long to travel 180 km?
                </p>
                <div className="bg-green-50 p-3 rounded-lg font-mono text-sm">
                  <p>60t = 180</p>
                  <p>t = 180 ÷ 60</p>
                  <p className="text-green-600 font-bold">t = 3 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎂</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Age Problems</h3>
                <p className="text-gray-700 mb-3">
                  Ram is 5 years older than Shyam. If Ram is 18, how old is Shyam?
                </p>
                <div className="bg-purple-50 p-3 rounded-lg font-mono text-sm">
                  <p>x + 5 = 18</p>
                  <p>x = 18 - 5</p>
                  <p className="text-green-600 font-bold">x = 13 years</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technology & Coding</h3>
                <p className="text-gray-700">
                  Computer programs use algebraic formulas to calculate everything from game scores 
                  to social media algorithms. Every app you use is built with algebra!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Amazing Fact!</h3>
            <p className="text-gray-700 leading-relaxed">
              The word "algebra" comes from the Arabic word "al-jabr" meaning "reunion of broken parts". 
              It was introduced to Europe by the mathematician Al-Khwarizmi around 820 AD. His work formed 
              the foundation of modern algebra!
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
      const chapter = searchParams.get('chapter') || 'basic-algebra';
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
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
                        ? 'bg-purple-600 w-8'
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
              <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl">
                <CurrentIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {sections[currentSection].title}
                </h1>
                <p className="text-gray-600">Basic Algebra - Class 8 Math</p>
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
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8"
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

export default function BasicAlgebraModule() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading module...</p>
        </div>
      </div>
    }>
      <BasicAlgebraModuleContent />
    </Suspense>
  );
}
