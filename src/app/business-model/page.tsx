'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import MermaidChart from '@/components/MermaidChart';
import { 
  TrendingUp, 
  Users, 
  Building2, 
  Landmark, 
  IndianRupee,
  Target,
  Zap,
  Lock,
  Unlock,
  BarChart3,
  PieChart,
  ArrowRight,
  CheckCircle2,
  XCircle,
  DollarSign,
  Globe,
  Smartphone,
  Crown,
  Shield
} from 'lucide-react';

export default function BusinessModel() {
  const [activeSection, setActiveSection] = useState<'overview' | 'revenue' | 'hierarchy' | 'projections' | 'uniteconomics'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Eklavyaa Business Model</h1>
              <p className="text-gray-600 mt-1">Hybrid B2B2C + Government SaaS Platform</p>
            </div>
            <Badge className="bg-green-500 text-white px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              ₹320 Cr ARR (Year 5)
            </Badge>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'revenue', label: 'Revenue Streams', icon: IndianRupee },
              { id: 'hierarchy', label: 'User Hierarchy', icon: Users },
              { id: 'projections', label: 'Projections', icon: BarChart3 },
              { id: 'uniteconomics', label: 'Unit Economics', icon: PieChart }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all border-b-2 whitespace-nowrap ${
                  activeSection === tab.id
                    ? 'border-[#ffce3b] text-[#ffce3b] bg-yellow-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        
        {/* OVERVIEW SECTION */}
        {activeSection === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Users (Y5)</p>
                      <h3 className="text-3xl font-bold text-gray-900 mt-1">3M</h3>
                      <p className="text-xs text-green-600 mt-1">↑ 100% YoY</p>
                    </div>
                    <Users className="w-10 h-10 text-[#ffce3b]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Organizations</p>
                      <h3 className="text-3xl font-bold text-gray-900 mt-1">10K</h3>
                      <p className="text-xs text-green-600 mt-1">↑ Schools + NGOs</p>
                    </div>
                    <Building2 className="w-10 h-10 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Govt Contracts</p>
                      <h3 className="text-3xl font-bold text-gray-900 mt-1">25</h3>
                      <p className="text-xs text-green-600 mt-1">↑ State Tenders</p>
                    </div>
                    <Landmark className="w-10 h-10 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">ARR (Year 5)</p>
                      <h3 className="text-3xl font-bold text-gray-900 mt-1">₹320Cr</h3>
                      <p className="text-xs text-green-600 mt-1">↑ 78% Margin</p>
                    </div>
                    <IndianRupee className="w-10 h-10 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Model Flow */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-[#ffce3b]" />
                  Business Model Flywheel
                </h2>
                
                <div className="bg-gray-50 p-6 overflow-x-auto">
                  <MermaidChart chart={`graph LR
    A[Free Students<br/>₹0 Revenue] -->|Create Demand| B[Parents See Value]
    B -->|Pressure Schools| C[Organizations Subscribe<br/>₹15K/month]
    C -->|Unlock Full Content| D[25,000 Students<br/>Sponsored]
    D -->|Govt Sees Adoption| E[Government Tenders<br/>₹5Cr Contract]
    E -->|100K Students| F[Massive Scale]
    F -->|More Parents| B
    
    style A fill:#fee2e2,stroke:#991b1b
    style C fill:#dcfce7,stroke:#166534
    style E fill:#dbeafe,stroke:#1e40af
    style F fill:#fef3c7,stroke:#92400e`} />
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 border border-red-200 p-4">
                    <h4 className="font-bold text-red-900 mb-2">Free Tier (B2C)</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 20% content access</li>
                      <li>• 3 games/day limit</li>
                      <li>• Creates demand</li>
                      <li>• Zero revenue</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4">
                    <h4 className="font-bold text-green-900 mb-2">Paid Tier (B2B)</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 100% content unlock</li>
                      <li>• Teacher + Parent portals</li>
                      <li>• ₹15K/month (500 students)</li>
                      <li>• 66% gross margin</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4">
                    <h4 className="font-bold text-blue-900 mb-2">Govt Contracts (G2B)</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Pre-installed on tablets</li>
                      <li>• ₹500/device/year</li>
                      <li>• 1 tender = ₹5Cr revenue</li>
                      <li>• 60% gross margin</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* REVENUE STREAMS SECTION */}
        {activeSection === 'revenue' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Revenue Breakdown Chart */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Distribution (Year 5)</h2>
                
                <div className="bg-gray-50 p-6 overflow-x-auto">
                  <MermaidChart chart={`pie title Revenue Mix - ₹320 Crore
    "B2B (Organizations)" : 100
    "G2B (Government)" : 200
    "Content Licensing" : 10
    "Other Streams" : 10`} />
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">Primary Revenue (90%)</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200">
                        <div className="flex items-center space-x-3">
                          <Building2 className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-green-900">B2B Organizations</span>
                        </div>
                        <span className="font-bold text-green-900">₹100 Cr</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <Landmark className="w-5 h-5 text-blue-600" />
                          <span className="font-medium text-blue-900">G2B Government</span>
                        </div>
                        <span className="font-bold text-blue-900">₹200 Cr</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">Secondary Revenue (10%)</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200">
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-purple-600" />
                          <span className="font-medium text-purple-900">Content Licensing</span>
                        </div>
                        <span className="font-bold text-purple-900">₹10 Cr</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="w-5 h-5 text-orange-600" />
                          <span className="font-medium text-orange-900">Hardware Partnerships</span>
                        </div>
                        <span className="font-bold text-orange-900">₹10 Cr</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Tiers */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">B2B Pricing Tiers</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { 
                      name: 'Starter', 
                      students: '1-100', 
                      price: '₹5,000', 
                      annual: '₹50,000',
                      features: ['Full Content', 'Teacher Portal', 'Basic Analytics', 'Email Support']
                    },
                    { 
                      name: 'Growth', 
                      students: '101-500', 
                      price: '₹15,000', 
                      annual: '₹1,50,000',
                      features: ['Everything in Starter', 'Parent Portal', 'Advanced Analytics', 'Priority Support'],
                      popular: true
                    },
                    { 
                      name: 'Scale', 
                      students: '501-2000', 
                      price: '₹40,000', 
                      annual: '₹4,00,000',
                      features: ['Everything in Growth', 'White-label', 'API Access', 'Custom Integrations']
                    },
                    { 
                      name: 'Enterprise', 
                      students: '2000+', 
                      price: 'Custom', 
                      annual: 'Custom',
                      features: ['Everything in Scale', 'Dedicated Manager', 'Custom Features', '99.9% SLA']
                    }
                  ].map((tier) => (
                    <div 
                      key={tier.name}
                      className={`border-2 p-6 bg-white ${
                        tier.popular ? 'border-[#ffce3b] shadow-xl relative' : 'border-gray-200'
                      }`}
                    >
                      {tier.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ffce3b] text-white">
                          Most Popular
                        </Badge>
                      )}
                      <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{tier.students} students</p>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                        <span className="text-gray-600">/month</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">or {tier.annual}/year</p>
                      
                      <ul className="mt-6 space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* USER HIERARCHY SECTION */}
        {activeSection === 'hierarchy' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Role-Based Access Control */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-[#ffce3b]" />
                  User Hierarchy & Access Control
                </h2>
                
                <div className="bg-gray-50 p-6 overflow-x-auto">
                  <MermaidChart chart={`graph TD
    A[Super Admin<br/>Full Platform Control] --> B[Organization Admin<br/>Multi-School Management]
    A --> C[Government Admin<br/>State-Level Analytics]
    
    B --> D[School Admin<br/>School Management]
    C --> E[District Admin<br/>District Analytics]
    
    D --> F[Teacher<br/>Class Management]
    E --> F
    
    F --> G[Student<br/>Learning Content]
    
    D --> H[Parent<br/>Child Progress]
    G --> H
    
    style A fill:#dc2626,stroke:#991b1b,color:#fff
    style B fill:#ea580c,stroke:#9a3412,color:#fff
    style C fill:#7c3aed,stroke:#5b21b6,color:#fff
    style D fill:#2563eb,stroke:#1e40af,color:#fff
    style E fill:#0891b2,stroke:#155e75,color:#fff
    style F fill:#059669,stroke:#065f46,color:#fff
    style G fill:#eab308,stroke:#a16207,color:#000
    style H fill:#ec4899,stroke:#be185d,color:#fff`} />
                </div>
              </CardContent>
            </Card>

            {/* Access Matrix */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Resource Access Matrix</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Role</th>
                        <th className="border border-gray-300 p-3 text-center">Content Access</th>
                        <th className="border border-gray-300 p-3 text-center">Analytics</th>
                        <th className="border border-gray-300 p-3 text-center">User Management</th>
                        <th className="border border-gray-300 p-3 text-center">Platform Settings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 font-semibold flex items-center space-x-2">
                          <Crown className="w-5 h-5 text-red-600" />
                          <span>Super Admin</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Unlock className="w-5 h-5 text-green-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Unlock className="w-5 h-5 text-green-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Unlock className="w-5 h-5 text-green-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Unlock className="w-5 h-5 text-green-600 mx-auto" />
                        </td>
                      </tr>

                      <tr className="bg-orange-50">
                        <td className="border border-gray-300 p-3 font-semibold flex items-center space-x-2">
                          <Building2 className="w-5 h-5 text-orange-600" />
                          <span>Organization Admin</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Unlock className="w-5 h-5 text-green-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Unlock className="w-5 h-5 text-green-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="text-sm text-gray-600">Own Org Only</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                      </tr>

                      <tr className="bg-purple-50">
                        <td className="border border-gray-300 p-3 font-semibold flex items-center space-x-2">
                          <Landmark className="w-5 h-5 text-purple-600" />
                          <span>Government Admin</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="text-sm text-gray-600">View Only</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Unlock className="w-5 h-5 text-green-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="text-sm text-gray-600">State Level</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                      </tr>

                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 font-semibold">Teacher</td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Unlock className="w-5 h-5 text-green-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="text-sm text-gray-600">Own Class</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="text-sm text-gray-600">Own Students</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                      </tr>

                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-3 font-semibold">Student (Free)</td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="text-sm text-orange-600">20% Only</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="text-sm text-gray-600">Own Only</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                      </tr>

                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">Student (Sponsored)</td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Unlock className="w-5 h-5 text-green-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="text-sm text-gray-600">Own Only</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                      </tr>

                      <tr className="bg-pink-50">
                        <td className="border border-gray-300 p-3 font-semibold">Parent</td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="text-sm text-gray-600">Child Only</span>
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                        <td className="border border-gray-300 p-3 text-center">
                          <Lock className="w-5 h-5 text-red-600 mx-auto" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Portal Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-[#ffce3b]" />
                    Student Portal Features
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Interactive learning content',
                      'Gamification (points, streaks)',
                      'Real-time leaderboard',
                      'Hologram learning',
                      'AI chatbot tutor',
                      'Progress tracking',
                      'Offline mode'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-500" />
                    Teacher Portal Features
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Class management dashboard',
                      'Assign lessons & homework',
                      'Student performance analytics',
                      'Attendance tracking',
                      'Parent communication',
                      'Content library access',
                      'Custom quiz creation'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-orange-500" />
                    Organization Portal Features
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Multi-school management',
                      'Bulk user creation',
                      'Consolidated analytics',
                      'White-label branding',
                      'API integrations',
                      'Custom reporting',
                      'Billing management'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Crown className="w-5 h-5 mr-2 text-red-500" />
                    Super Admin Features
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Full platform control',
                      'User role management',
                      'Content moderation',
                      'System configuration',
                      'Revenue analytics',
                      'A/B testing tools',
                      'Database management'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {/* PROJECTIONS SECTION */}
        {activeSection === 'projections' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* 5-Year Projections Table */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">5-Year Financial Projections</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="border border-gray-700 p-3 text-left">Metric</th>
                        <th className="border border-gray-700 p-3 text-center">Year 1</th>
                        <th className="border border-gray-700 p-3 text-center">Year 2</th>
                        <th className="border border-gray-700 p-3 text-center">Year 3</th>
                        <th className="border border-gray-700 p-3 text-center">Year 4</th>
                        <th className="border border-gray-700 p-3 text-center">Year 5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 p-3 font-semibold">Total Students</td>
                        <td className="border border-gray-300 p-3 text-center">10,000</td>
                        <td className="border border-gray-300 p-3 text-center">100,000</td>
                        <td className="border border-gray-300 p-3 text-center">500,000</td>
                        <td className="border border-gray-300 p-3 text-center">1,500,000</td>
                        <td className="border border-gray-300 p-3 text-center font-bold">3,000,000</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 font-semibold">Organizations</td>
                        <td className="border border-gray-300 p-3 text-center">50</td>
                        <td className="border border-gray-300 p-3 text-center">500</td>
                        <td className="border border-gray-300 p-3 text-center">2,000</td>
                        <td className="border border-gray-300 p-3 text-center">5,000</td>
                        <td className="border border-gray-300 p-3 text-center font-bold">10,000</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 p-3 font-semibold">Total Revenue</td>
                        <td className="border border-gray-300 p-3 text-center">₹1.6 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹30 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹75 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹160 Cr</td>
                        <td className="border border-gray-300 p-3 text-center font-bold text-green-700">₹320 Cr</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 font-semibold">└ B2B Revenue</td>
                        <td className="border border-gray-300 p-3 text-center">₹0.9 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹5 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹20 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹50 Cr</td>
                        <td className="border border-gray-300 p-3 text-center font-bold">₹100 Cr</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 font-semibold">└ G2B Revenue</td>
                        <td className="border border-gray-300 p-3 text-center">₹0</td>
                        <td className="border border-gray-300 p-3 text-center">₹22.5 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹50 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹100 Cr</td>
                        <td className="border border-gray-300 p-3 text-center font-bold">₹200 Cr</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 font-semibold">└ Other Revenue</td>
                        <td className="border border-gray-300 p-3 text-center">₹0.7 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹2.5 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹5 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹10 Cr</td>
                        <td className="border border-gray-300 p-3 text-center font-bold">₹20 Cr</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 p-3 font-semibold">Total Costs</td>
                        <td className="border border-gray-300 p-3 text-center">₹3.2 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹14 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹30 Cr</td>
                        <td className="border border-gray-300 p-3 text-center">₹60 Cr</td>
                        <td className="border border-gray-300 p-3 text-center font-bold">₹100 Cr</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-3 font-semibold">Net Profit</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">-₹1.6 Cr</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">+₹16 Cr</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">+₹45 Cr</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">+₹100 Cr</td>
                        <td className="border border-gray-300 p-3 text-center font-bold text-green-700">+₹220 Cr</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="border border-gray-300 p-3 font-semibold">Profit Margin</td>
                        <td className="border border-gray-300 p-3 text-center text-red-600">-100%</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">53%</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">60%</td>
                        <td className="border border-gray-300 p-3 text-center text-green-600">62%</td>
                        <td className="border border-gray-300 p-3 text-center font-bold text-green-700">69%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h4 className="font-bold text-red-900">Year 1: Investment Phase</h4>
                    <p className="text-sm text-red-700 mt-2">Focus on user acquisition. Burn ₹1.6Cr to build 10K student base + 50 org clients.</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-bold text-green-900">Year 2: Breakeven</h4>
                    <p className="text-sm text-green-700 mt-2">Win 2 govt tenders (₹22.5Cr). Achieve profitability with 53% margin.</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h4 className="font-bold text-blue-900">Year 5: Scale</h4>
                    <p className="text-sm text-blue-700 mt-2">3M students, ₹320Cr revenue, 69% margin. Ready for IPO/acquisition.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Growth Chart */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Growth Trajectory</h2>
                
                <div className="bg-gray-50 p-6 overflow-x-auto">
                  <MermaidChart chart={`%%{init: {'theme':'base'}}%%
graph LR
    Y1[Year 1<br/>₹1.6 Cr] --> Y2[Year 2<br/>₹30 Cr]
    Y2 --> Y3[Year 3<br/>₹75 Cr]
    Y3 --> Y4[Year 4<br/>₹160 Cr]
    Y4 --> Y5[Year 5<br/>₹320 Cr]
    
    Y1 -.->|1775% Growth| Y2
    Y2 -.->|150% Growth| Y3
    Y3 -.->|113% Growth| Y4
    Y4 -.->|100% Growth| Y5
    
    style Y1 fill:#fecaca,stroke:#991b1b
    style Y2 fill:#fef08a,stroke:#a16207
    style Y3 fill:#bfdbfe,stroke:#1e40af
    style Y4 fill:#bbf7d0,stroke:#166534
    style Y5 fill:#86efac,stroke:#065f46,stroke-width:4px`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* UNIT ECONOMICS SECTION */}
        {activeSection === 'uniteconomics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Per Student Economics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg border-t-4 border-t-red-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Free Student</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">CAC (Marketing)</span>
                      <span className="font-bold text-red-600">-₹50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Server Cost/Year</span>
                      <span className="font-bold text-red-600">-₹5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenue</span>
                      <span className="font-bold text-gray-900">₹0</span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">LTV</span>
                      <span className="font-bold text-red-600">-₹55</span>
                    </div>
                    <Badge className="w-full justify-center bg-red-100 text-red-800 border-red-200">
                      Acquisition Loss
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Purpose: Create demand, viral growth
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg border-t-4 border-t-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Sponsored Student (B2B)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Org Pays/Month</span>
                      <span className="font-bold text-green-600">+₹30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Our Cost/Month</span>
                      <span className="font-bold text-red-600">-₹10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Gross Profit/Month</span>
                      <span className="font-bold text-green-600">+₹20</span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">Annual LTV</span>
                      <span className="font-bold text-green-600">+₹240</span>
                    </div>
                    <Badge className="w-full justify-center bg-green-100 text-green-800 border-green-200">
                      66% Gross Margin
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    ₹15K/month for 500 students = ₹30/student
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg border-t-4 border-t-blue-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Government Student (G2B)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Govt Pays/Year</span>
                      <span className="font-bold text-blue-600">+₹500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Our Cost/Year</span>
                      <span className="font-bold text-red-600">-₹200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Gross Profit/Year</span>
                      <span className="font-bold text-blue-600">+₹300</span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">Annual LTV</span>
                      <span className="font-bold text-blue-600">+₹300</span>
                    </div>
                    <Badge className="w-full justify-center bg-blue-100 text-blue-800 border-blue-200">
                      60% Gross Margin
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Installation fee + 1-year license per tablet
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Per Organization Economics */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">B2B Organization Economics</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-700">Acquisition Costs</h3>
                    <div className="bg-red-50 border border-red-200 p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Sales Team Salary</span>
                        <span className="font-bold text-red-600">₹10,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Marketing Spend</span>
                        <span className="font-bold text-red-600">₹8,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Onboarding Cost</span>
                        <span className="font-bold text-red-600">₹7,000</span>
                      </div>
                      <hr className="border-red-300" />
                      <div className="flex justify-between">
                        <span className="font-bold text-gray-900">Total CAC</span>
                        <span className="font-bold text-red-600">₹25,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-700">Lifetime Value</h3>
                    <div className="bg-green-50 border border-green-200 p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monthly Revenue</span>
                        <span className="font-bold text-green-600">₹15,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Avg. Retention</span>
                        <span className="font-bold text-green-600">3 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Total Revenue</span>
                        <span className="font-bold text-green-600">₹5,40,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Costs (30%)</span>
                        <span className="font-bold text-red-600">-₹1,62,000</span>
                      </div>
                      <hr className="border-green-300" />
                      <div className="flex justify-between">
                        <span className="font-bold text-gray-900">Net LTV</span>
                        <span className="font-bold text-green-600">₹3,78,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">LTV / CAC Ratio</h4>
                      <p className="text-sm text-gray-600 mt-1">Healthy ratio is 3:1+</p>
                    </div>
                    <div className="text-4xl font-bold text-yellow-600">15:1</div>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    For every ₹1 spent acquiring an organization, we earn ₹15 over their lifetime. This indicates excellent unit economics and sustainable growth.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cohort Analysis */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Cohort Retention & Revenue</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="border border-gray-700 p-3 text-left">Month</th>
                        <th className="border border-gray-700 p-3 text-center">Retention %</th>
                        <th className="border border-gray-700 p-3 text-center">Active Orgs</th>
                        <th className="border border-gray-700 p-3 text-center">MRR</th>
                        <th className="border border-gray-700 p-3 text-center">Cumulative Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { month: 'Month 1', retention: 100, orgs: 100, mrr: '₹15L', cumulative: '₹15L' },
                        { month: 'Month 3', retention: 95, orgs: 95, mrr: '₹14.25L', cumulative: '₹43.75L' },
                        { month: 'Month 6', retention: 90, orgs: 90, mrr: '₹13.5L', cumulative: '₹84.75L' },
                        { month: 'Month 12', retention: 85, orgs: 85, mrr: '₹12.75L', cumulative: '₹1.62Cr' },
                        { month: 'Month 24', retention: 75, orgs: 75, mrr: '₹11.25L', cumulative: '₹3.06Cr' },
                        { month: 'Month 36', retention: 70, orgs: 70, mrr: '₹10.5L', cumulative: '₹4.41Cr' }
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="border border-gray-300 p-3 font-semibold">{row.month}</td>
                          <td className="border border-gray-300 p-3 text-center">
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              {row.retention}%
                            </Badge>
                          </td>
                          <td className="border border-gray-300 p-3 text-center">{row.orgs}</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-green-600">{row.mrr}</td>
                          <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">{row.cumulative}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-600 mt-4">
                  Assumes 100 organizations signed in Month 1 at ₹15K/month. 70% retention after 3 years = ₹4.41Cr cumulative revenue from single cohort.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}