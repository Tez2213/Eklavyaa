'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, BookOpen, Lightbulb, Calculator, ChevronRight, TrendingUp, Percent } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

function InterestCalculatorModuleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [isCompleting, setIsCompleting] = useState(false);

  const sections = [
    {
      title: "Introduction to Interest",
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Interest?</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Interest is the extra money you pay when you borrow money, or the extra money you earn 
              when you save or invest money. It's like a reward for lending money or a cost for borrowing it!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="text-4xl mb-3">🏦</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Earning Interest</h3>
              <p className="text-gray-700">
                When you save money in a bank, the bank pays you interest. Your money grows over time!
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Paying Interest</h3>
              <p className="text-gray-700">
                When you borrow money (loan), you pay interest to the lender. You return more than you borrowed!
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Key Terms to Know:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Principal (P): </span>
                  <span className="text-gray-700">The original amount of money borrowed or invested</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Rate (R): </span>
                  <span className="text-gray-700">The percentage charged or earned per year (usually %)</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Time (T): </span>
                  <span className="text-gray-700">The duration for which money is borrowed or invested (in years)</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Interest (I): </span>
                  <span className="text-gray-700">The extra money paid or earned</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-900 font-bold">Amount (A): </span>
                  <span className="text-gray-700">Principal + Interest (total money)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Simple Interest",
      icon: Calculator,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Simple Interest</h2>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-300">
            <h3 className="text-2xl font-bold text-purple-600 mb-4 text-center">Simple Interest Formula</h3>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-center text-3xl font-bold text-purple-900 mb-4">
                SI = (P × R × T) / 100
              </p>
              <p className="text-center text-gray-700">
                Amount = Principal + Simple Interest
              </p>
            </div>
          </div>

          <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                📊 Example 1: Savings Account
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-green-200 mb-4">
                <p className="text-gray-700 mb-4">
                  You deposit <strong>₹10,000</strong> in a bank at <strong>5% per year</strong> for <strong>3 years</strong>. 
                  How much interest will you earn?
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Given:</strong></p>
                  <p>Principal (P) = ₹10,000</p>
                  <p>Rate (R) = 5%</p>
                  <p>Time (T) = 3 years</p>
                  <div className="border-t-2 border-green-300 my-2"></div>
                  <p><strong>Solution:</strong></p>
                  <p>SI = (P × R × T) / 100</p>
                  <p>SI = (10,000 × 5 × 3) / 100</p>
                  <p>SI = 150,000 / 100</p>
                  <p className="text-green-600 font-bold text-lg">SI = ₹1,500</p>
                  <div className="border-t-2 border-green-300 my-2"></div>
                  <p><strong>Total Amount:</strong></p>
                  <p>Amount = Principal + Interest</p>
                  <p>Amount = ₹10,000 + ₹1,500</p>
                  <p className="text-green-600 font-bold text-lg">Amount = ₹11,500</p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                <p className="font-bold text-green-900">✓ You will earn ₹1,500 as interest!</p>
                <p className="text-sm text-green-700 mt-2">Your total savings after 3 years will be ₹11,500</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                💰 Example 2: Loan Repayment
              </h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-4">
                <p className="text-gray-700 mb-4">
                  You borrow <strong>₹25,000</strong> at <strong>8% per year</strong> for <strong>2 years</strong>. 
                  How much total will you repay?
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg space-y-3 font-mono text-sm">
                  <p><strong>Given:</strong></p>
                  <p>P = ₹25,000, R = 8%, T = 2 years</p>
                  <div className="border-t-2 border-blue-300 my-2"></div>
                  <p>SI = (25,000 × 8 × 2) / 100</p>
                  <p>SI = 400,000 / 100</p>
                  <p className="text-blue-600 font-bold text-lg">SI = ₹4,000</p>
                  <div className="border-t-2 border-blue-300 my-2"></div>
                  <p>Total Amount = ₹25,000 + ₹4,000</p>
                  <p className="text-blue-600 font-bold text-lg">Amount = ₹29,000</p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="font-bold text-blue-900">You will repay ₹29,000 in total</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Compound Interest",
      icon: TrendingUp,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Power of Compound Interest</h2>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
            <p className="text-lg text-gray-700 leading-relaxed">
              Compound interest is "interest on interest"! Unlike simple interest, your money grows faster 
              because you earn interest not just on the principal, but also on the interest earned previously.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-300">
            <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">Compound Interest Formula</h3>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-center text-2xl font-bold text-orange-900 mb-3">
                A = P(1 + R/100)ⁿ
              </p>
              <p className="text-center text-gray-700 mb-3">
                Compound Interest = A - P
              </p>
              <p className="text-sm text-center text-gray-600">
                where n = number of years
              </p>
            </div>
          </div>

          <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Example: Investment Growth</h3>
              
              <div className="bg-white p-6 rounded-lg border-2 border-purple-200 mb-4">
                <p className="text-gray-700 mb-4">
                  You invest <strong>₹5,000</strong> at <strong>10% per year</strong> compound interest 
                  for <strong>2 years</strong>. What is the total amount?
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-purple-900">Year 1:</p>
                    <p className="font-mono text-gray-700">Interest = 5,000 × 10/100 = ₹500</p>
                    <p className="font-mono text-gray-700">Amount = ₹5,000 + ₹500 = <strong>₹5,500</strong></p>
                  </div>
                  <div className="border-t-2 border-purple-300 my-2"></div>
                  <div>
                    <p className="font-bold text-purple-900">Year 2:</p>
                    <p className="font-mono text-gray-700">Interest = 5,500 × 10/100 = ₹550</p>
                    <p className="font-mono text-gray-700">Amount = ₹5,500 + ₹550 = <strong>₹6,050</strong></p>
                  </div>
                  <div className="border-t-2 border-purple-300 my-2"></div>
                  <div>
                    <p className="font-bold text-purple-900">Using Formula:</p>
                    <p className="font-mono text-gray-700">A = 5,000(1 + 10/100)²</p>
                    <p className="font-mono text-gray-700">A = 5,000(1.1)²</p>
                    <p className="font-mono text-gray-700">A = 5,000 × 1.21</p>
                    <p className="font-mono text-green-600 font-bold text-lg">A = ₹6,050</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                <p className="font-bold text-green-900">Compound Interest = ₹6,050 - ₹5,000 = ₹1,050</p>
                <p className="text-sm text-green-700 mt-2">Compare: Simple Interest would be only ₹1,000!</p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl border-2 border-pink-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 The Magic of Compounding</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Albert Einstein called compound interest "the eighth wonder of the world"! Over long periods, 
              compound interest can turn small investments into large sums.
            </p>
            <p className="text-gray-700 font-bold">
              The longer you invest, the more powerful compound interest becomes!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Real-World Applications",
      icon: Lightbulb,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interest in Daily Life</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Understanding interest is crucial for making smart financial decisions!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Savings Accounts</h3>
                <p className="text-gray-700">
                  Banks offer interest on savings accounts (usually 3-4% per year). Your money grows 
                  automatically! Choose banks with higher interest rates for better returns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Loans</h3>
                <p className="text-gray-700">
                  People take home loans to buy houses. Banks charge compound interest (8-10% per year). 
                  Understanding this helps plan loan repayment wisely!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Education Loans</h3>
                <p className="text-gray-700">
                  Students take education loans for higher studies. Interest rates are usually lower 
                  (7-9%) with flexible repayment after completing education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Credit Cards</h3>
                <p className="text-gray-700">
                  Credit cards charge very high compound interest (24-36% per year)! 
                  Always pay your credit card bills on time to avoid heavy interest charges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fixed Deposits</h3>
                <p className="text-gray-700">
                  FDs offer higher interest than savings accounts (6-7% per year). Good for saving 
                  for specific goals like college admission or buying a laptop!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Investment</h3>
                <p className="text-gray-700">
                  Starting to save early takes advantage of compound interest. Even ₹100 per month 
                  invested from age 15 can grow to lakhs by age 25!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Financial Wisdom!</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Start saving early to benefit from compound interest</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Compare interest rates before taking loans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Always pay credit card bills on time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use interest calculators to plan your finances</span>
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
      const subject = searchParams.get('subject') || 'maths-wonder';
      const chapter = searchParams.get('chapter') || 'interest-calculator';
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
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
                <p className="text-gray-600">Interest Calculator - Class 8 Math</p>
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

export default function InterestCalculatorModule() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading module...</p>
        </div>
      </div>
    }>
      <InterestCalculatorModuleContent />
    </Suspense>
  );
}
