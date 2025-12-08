'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, BookOpen, Lightbulb, Leaf, ChevronRight, Sun, Droplet, Wind } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

function PhotosynthesisModuleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [isCompleting, setIsCompleting] = useState(false);

  const sections = [
    {
      title: "Introduction to Photosynthesis",
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Photosynthesis?</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Photosynthesis is the amazing process by which plants, algae, and some bacteria convert light energy 
              into chemical energy stored in glucose. It's how plants make their own food!
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-300">
            <p className="text-center text-2xl md:text-3xl font-bold text-green-600 mb-4">
              6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="font-bold text-blue-600 mb-2">Inputs</p>
                <p className="text-sm text-gray-700">Carbon Dioxide + Water + Sunlight</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <p className="font-bold text-yellow-600 mb-2">Process</p>
                <p className="text-sm text-gray-700">Photosynthesis in Chloroplasts</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="font-bold text-green-600 mb-2">Outputs</p>
                <p className="text-sm text-gray-700">Glucose + Oxygen</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Key Points to Remember:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Photosynthesis happens in <strong>chloroplasts</strong>, which contain the green pigment chlorophyll</span>
              </li>
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Plants take in <strong>carbon dioxide</strong> through tiny pores called stomata</span>
              </li>
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">The oxygen we breathe is a <strong>byproduct</strong> of photosynthesis!</span>
              </li>
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Without photosynthesis, there would be <strong>no life on Earth</strong> as we know it</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "The Two Stages of Photosynthesis",
      icon: Leaf,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Does Photosynthesis Work?</h2>

          <p className="text-lg text-gray-700">
            Photosynthesis happens in two main stages: the Light-Dependent Reactions and the Light-Independent Reactions (Calvin Cycle).
          </p>

          <Card className="border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
                <Sun className="w-8 h-8 text-yellow-500" />
                Stage 1: Light-Dependent Reactions
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-yellow-200 mb-4">
                <p className="text-gray-700 mb-4">
                  These reactions occur in the <strong>thylakoid membranes</strong> of chloroplasts and require light energy.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-bold text-yellow-900 mb-2">Step 1: Light Absorption</p>
                    <p className="text-sm text-gray-700">
                      Chlorophyll and other pigments absorb light energy (mainly blue and red wavelengths)
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-bold text-yellow-900 mb-2">Step 2: Water Splitting</p>
                    <p className="text-sm text-gray-700">
                      Light energy splits water molecules (H₂O) into hydrogen and oxygen. The oxygen is released!
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-bold text-yellow-900 mb-2">Step 3: Energy Storage</p>
                    <p className="text-sm text-gray-700">
                      Energy is stored in molecules called ATP and NADPH, which will be used in Stage 2
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-600">
                <p className="font-bold text-yellow-900">⚡ Products: ATP, NADPH, and O₂</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <Leaf className="w-8 h-8 text-green-500" />
                Stage 2: Calvin Cycle (Light-Independent)
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-green-200 mb-4">
                <p className="text-gray-700 mb-4">
                  These reactions occur in the <strong>stroma</strong> of chloroplasts and don't directly need light, 
                  but they use the products from Stage 1.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-900 mb-2">Step 1: Carbon Fixation</p>
                    <p className="text-sm text-gray-700">
                      CO₂ from the air is captured and attached to a 5-carbon sugar using the enzyme RuBisCO
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-900 mb-2">Step 2: Reduction</p>
                    <p className="text-sm text-gray-700">
                      ATP and NADPH (from Stage 1) are used to convert 3-carbon molecules into sugars
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-900 mb-2">Step 3: Regeneration</p>
                    <p className="text-sm text-gray-700">
                      Some molecules are used to regenerate the 5-carbon sugar so the cycle can continue
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                <p className="font-bold text-green-900">🍬 Product: Glucose (C₆H₁₂O₆)</p>
                <p className="text-sm text-green-700 mt-2">This glucose is used by the plant for energy or stored as starch!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Importance & Real-World Impact",
      icon: Lightbulb,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why is Photosynthesis Important?</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Photosynthesis is the foundation of almost all life on Earth. Let's explore its incredible impact!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Oxygen Production</h3>
                <p className="text-gray-700">
                  Plants produce about <strong>330 billion tons of oxygen</strong> every year through photosynthesis. 
                  This is the oxygen that all animals, including humans, breathe to survive!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🍎</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Food Chain Foundation</h3>
                <p className="text-gray-700">
                  Plants are <strong>primary producers</strong> - they create food from sunlight. All animals either 
                  eat plants directly or eat other animals that eat plants!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Climate Regulation</h3>
                <p className="text-gray-700">
                  Photosynthesis removes <strong>CO₂ from the atmosphere</strong>, helping to reduce greenhouse gases 
                  and combat climate change. Forests are Earth's "lungs"!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Source</h3>
                <p className="text-gray-700">
                  Fossil fuels (coal, oil, gas) come from ancient plants that stored solar energy through photosynthesis 
                  millions of years ago. We're still using that energy today!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-2 border-green-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Droplet className="w-6 h-6 text-blue-600" />
              Factors Affecting Photosynthesis
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-5 h-5 text-yellow-500" />
                  <p className="font-bold text-gray-900">Light Intensity</p>
                </div>
                <p className="text-sm text-gray-700">More light = faster photosynthesis (up to a point)</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="w-5 h-5 text-blue-500" />
                  <p className="font-bold text-gray-900">CO₂ Concentration</p>
                </div>
                <p className="text-sm text-gray-700">More CO₂ = more raw material for glucose production</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🌡️</span>
                  <p className="font-bold text-gray-900">Temperature</p>
                </div>
                <p className="text-sm text-gray-700">Optimal range: 25-35°C for most plants</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Amazing Facts!</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✨ A single large tree can produce enough oxygen for 2 people for a whole year!</li>
              <li>✨ Rainforests produce about 28% of the world's oxygen</li>
              <li>✨ Ocean phytoplankton (tiny marine plants) produce about 50-80% of Earth's oxygen</li>
              <li>✨ Photosynthesis captures about 100 terawatts of solar energy - 6 times more than all of human civilization uses!</li>
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
      const chapter = searchParams.get('chapter') || 'photosynthesis';
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
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
                        ? 'bg-green-600 w-8'
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
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                <CurrentIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {sections[currentSection].title}
                </h1>
                <p className="text-gray-600">Photosynthesis - Science Chapter</p>
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
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8"
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

export default function PhotosynthesisModule() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading module...</p>
        </div>
      </div>
    }>
      <PhotosynthesisModuleContent />
    </Suspense>
  );
}
