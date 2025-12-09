'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, BookOpen, Lightbulb, Atom, ChevronRight, Sparkles, Wrench } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

function MetalsMaterialsModuleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [isCompleting, setIsCompleting] = useState(false);

  const sections = [
    {
      title: "Introduction to Metals & Non-Metals",
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What are Metals and Non-Metals?</h2>
          
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Elements are divided into metals and non-metals based on their physical and chemical properties. 
              Understanding these materials helps us choose the right ones for different purposes!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl border-2 border-gray-400">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Metals</h3>
              <p className="text-gray-700 mb-3">
                Shiny, hard materials that conduct heat and electricity well.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm font-bold text-gray-900 mb-2">Examples:</p>
                <p className="text-sm text-gray-700">Iron, Copper, Aluminum, Gold, Silver, Zinc</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-6 rounded-xl border-2 border-blue-300">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Metals</h3>
              <p className="text-gray-700 mb-3">
                Dull materials that are poor conductors of heat and electricity.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm font-bold text-gray-900 mb-2">Examples:</p>
                <p className="text-sm text-gray-700">Carbon, Sulfur, Oxygen, Nitrogen, Chlorine</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Key Distinctions:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Appearance: </span>
                  <span className="text-gray-700">Metals are shiny (lustrous), non-metals are dull</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">State: </span>
                  <span className="text-gray-700">Most metals are solid at room temperature (except Mercury), non-metals can be solid, liquid, or gas</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Hardness: </span>
                  <span className="text-gray-700">Metals are generally hard (except sodium, potassium), non-metals are often brittle or soft</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Conductivity: </span>
                  <span className="text-gray-700">Metals conduct heat & electricity, non-metals are insulators (except graphite)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Physical Properties of Metals",
      icon: Sparkles,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Metals Special?</h2>

          <Card className="border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
                ✨ 1. Metallic Luster (Shine)
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-yellow-200 mb-4">
                <p className="text-gray-700 mb-3">
                  Metals have a characteristic shine when freshly cut or polished. This property is called <strong>metallic luster</strong>.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-bold text-yellow-900 mb-2">Examples:</p>
                  <p className="text-sm text-gray-700">
                    • Gold jewelry sparkles in light<br/>
                    • Silver utensils have a brilliant shine<br/>
                    • Polished aluminum foil reflects light
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                🔨 2. Malleability (Can be Hammered)
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-red-200 mb-4">
                <p className="text-gray-700 mb-3">
                  Metals can be beaten into thin sheets without breaking. This property is called <strong>malleability</strong>.
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-bold text-red-900 mb-2">Real-Life Uses:</p>
                  <p className="text-sm text-gray-700">
                    • Aluminum foil for food packaging<br/>
                    • Gold foil for decorating sweets<br/>
                    • Iron sheets for making car bodies<br/>
                    • Silver foil for medicine packaging
                  </p>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-600">
                <p className="font-bold text-red-900">💡 Did You Know?</p>
                <p className="text-sm text-red-700 mt-1">
                  Gold is the most malleable metal - 1 gram can be beaten into a sheet of 1 square meter!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                🔗 3. Ductility (Can be Drawn into Wires)
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-4">
                <p className="text-gray-700 mb-3">
                  Metals can be drawn into thin wires. This property is called <strong>ductility</strong>.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-bold text-blue-900 mb-2">Applications:</p>
                  <p className="text-sm text-gray-700">
                    • Copper wires for electrical circuits<br/>
                    • Gold wires in jewelry making<br/>
                    • Aluminum wires for power transmission<br/>
                    • Steel wires for construction
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                ⚡ 4. Conductivity
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-purple-200 mb-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="font-bold text-orange-900 mb-2">🔥 Heat Conductors</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Metals allow heat to pass through easily.
                    </p>
                    <p className="text-xs text-gray-600">
                      <strong>Why?</strong> Cooking pots are made of aluminum or steel!
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-bold text-yellow-900 mb-2">⚡ Electricity Conductors</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Metals allow electric current to flow.
                    </p>
                    <p className="text-xs text-gray-600">
                      <strong>Why?</strong> Copper and aluminum used in electrical wiring!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-600">
                <p className="font-bold text-purple-900">Best Conductors:</p>
                <p className="text-sm text-purple-700 mt-1">
                  Silver (best) → Copper → Gold → Aluminum
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                🔔 5. Sonorousness (Make Sound)
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                <p className="text-gray-700 mb-3">
                  Metals produce a ringing sound when struck. This property is called <strong>sonorousness</strong>.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-900 mb-2">Musical Applications:</p>
                  <p className="text-sm text-gray-700">
                    • School bells made of brass or bronze<br/>
                    • Musical instruments (cymbals, gongs, bells)<br/>
                    • Temple bells produce pleasant sound
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Properties of Non-Metals",
      icon: Atom,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Non-Metals</h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Non-metals have properties opposite to metals. They play crucial roles in nature and our daily lives!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-400 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🪨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Luster (Dull)</h3>
                <p className="text-gray-700 mb-3">
                  Non-metals don't have shine. They appear dull.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Exceptions:</strong> Iodine (shiny), Diamond (brilliant), Graphite (slight shine)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💔</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Brittle (Break Easily)</h3>
                <p className="text-gray-700 mb-3">
                  Solid non-metals break into pieces when hammered.
                </p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Sulfur and phosphorus crumble when pressed
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Poor Conductors</h3>
                <p className="text-gray-700 mb-3">
                  Non-metals don't conduct heat or electricity (insulators).
                </p>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Exception:</strong> Graphite conducts electricity (used in pencils)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Low Melting Points</h3>
                <p className="text-gray-700 mb-3">
                  Most non-metals have low melting and boiling points.
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Exception:</strong> Diamond (carbon) has very high melting point
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-300">
            <h3 className="text-xl font-bold text-blue-900 mb-4">States of Non-Metals at Room Temperature</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-900 mb-2">💨 Gases</p>
                <p className="text-sm text-gray-700">
                  Oxygen, Nitrogen, Chlorine, Hydrogen
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-900 mb-2">💧 Liquid</p>
                <p className="text-sm text-gray-700">
                  Bromine (only liquid non-metal)
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-2">🪨 Solids</p>
                <p className="text-sm text-gray-700">
                  Carbon, Sulfur, Phosphorus, Iodine
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🔬 Important Non-Metals</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Carbon (C):</strong> Essential for life, found in all living things. Forms diamond and graphite.</p>
              <p><strong>Oxygen (O₂):</strong> We breathe it! Supports burning and respiration.</p>
              <p><strong>Nitrogen (N₂):</strong> Makes up 78% of air. Used in fertilizers.</p>
              <p><strong>Sulfur (S):</strong> Yellow powder, used in gunpowder and matches.</p>
              <p><strong>Phosphorus (P):</strong> Glows in dark (white phosphorus), used in matchsticks.</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Metals & Materials in Daily Life</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Understanding material properties helps us choose the right materials for different purposes!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-orange-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🍳</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cooking Utensils</h3>
                <p className="text-gray-700 mb-3">
                  Made from aluminum or steel because:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Good heat conductors (cook food evenly)</li>
                  <li>• Hard and durable</li>
                  <li>• Don't react with food</li>
                  <li>• Handles are plastic (insulator) to prevent burns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrical Wiring</h3>
                <p className="text-gray-700 mb-3">
                  Copper and aluminum used because:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Excellent electricity conductors</li>
                  <li>• Ductile (can be drawn into wires)</li>
                  <li>• Covered with plastic (insulator) for safety</li>
                  <li>• Flexible and long-lasting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Jewelry</h3>
                <p className="text-gray-700 mb-3">
                  Gold and silver preferred because:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Beautiful metallic luster</li>
                  <li>• Don't corrode or tarnish easily</li>
                  <li>• Malleable (easy to shape into designs)</li>
                  <li>• Ductile (can make fine chains)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Construction</h3>
                <p className="text-gray-700 mb-3">
                  Iron and steel used because:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Very strong and hard</li>
                  <li>• Can bear heavy loads</li>
                  <li>• Malleable (can be shaped into beams)</li>
                  <li>• Cost-effective for large structures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aircraft & Vehicles</h3>
                <p className="text-gray-700 mb-3">
                  Aluminum used because:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lightweight (reduces fuel consumption)</li>
                  <li>• Strong when alloyed</li>
                  <li>• Doesn't rust easily</li>
                  <li>• Malleable (easy to shape into parts)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌬️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Life Support</h3>
                <p className="text-gray-700 mb-3">
                  Oxygen (non-metal) essential for:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Breathing and respiration</li>
                  <li>• Hospitals use oxygen cylinders</li>
                  <li>• Supports combustion (burning)</li>
                  <li>• Making ozone layer (O₃) protects from UV rays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Carbon Forms</h3>
                <p className="text-gray-700 mb-3">
                  Different forms, different uses:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Diamond:</strong> Hardest material - cutting tools, jewelry</li>
                  <li>• <strong>Graphite:</strong> Soft - pencils, lubricants</li>
                  <li>• <strong>Coal:</strong> Fuel for energy production</li>
                  <li>• <strong>Fullerene:</strong> Nanotechnology applications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chemical Industry</h3>
                <p className="text-gray-700 mb-3">
                  Non-metals in chemicals:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Chlorine - water purification, bleaching</li>
                  <li>• Sulfur - sulfuric acid production</li>
                  <li>• Nitrogen - fertilizers, explosives</li>
                  <li>• Phosphorus - matches, fertilizers</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🌟 Future Materials!</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Graphene:</strong> Stronger than steel, thinner than paper - future of electronics!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Titanium alloys:</strong> Used in space crafts and medical implants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Smart materials:</strong> Change properties based on environment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Biodegradable plastics:</strong> Eco-friendly alternatives using natural materials</span>
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
      const chapter = searchParams.get('chapter') || 'metals-materials';
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
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
                        ? 'bg-amber-600 w-8'
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
              <div className="p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl">
                <CurrentIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {sections[currentSection].title}
                </h1>
                <p className="text-gray-600">Metals & Materials - Class 8 Science</p>
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
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8"
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

export default function MetalsMaterialsModule() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading module...</p>
        </div>
      </div>
    }>
      <MetalsMaterialsModuleContent />
    </Suspense>
  );
}
