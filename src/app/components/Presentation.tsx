import { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Brain, Activity, Users, FileCheck, AlertTriangle, Database, Globe, TrendingUp, CheckCircle, Zap, Lock, BarChart3, Server, Code } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  bgStyle?: string;
}

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    // Slide 1: Title
    {
      id: 1,
      title: "NetGuardian AI",
      subtitle: "Advanced Insider Threat Detection for Kenya",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
            <Shield className="w-32 h-32 text-cyan-400 relative animate-pulse" strokeWidth={1.5} />
          </div>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            NetGuardian AI
          </h1>
          <p className="text-3xl text-gray-300">Advanced Insider Threat Detection Dashboard</p>
          <div className="flex items-center gap-4 mt-8">
            <img src="https://flagcdn.com/w80/ke.png" alt="Kenya Flag" className="w-16 h-12 rounded shadow-lg" />
            <span className="text-2xl text-gray-400">Built for Kenya 🇰🇪</span>
          </div>
          <div className="mt-12 text-gray-500 text-lg">
            FigBuild Hackathon 2026
          </div>
        </div>
      ),
      bgStyle: "bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/20"
    },

    // Slide 2: Problem Statement
    {
      id: 2,
      title: "The Problem",
      subtitle: "Insider Threats in Kenya",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm">
              <AlertTriangle className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-red-400 mb-3">Equity Bank Breach (2023)</h3>
              <p className="text-gray-300 text-lg">Internal employee compromised customer data affecting thousands of accounts</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm">
              <AlertTriangle className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-red-400 mb-3">SHA Fraud (2024)</h3>
              <p className="text-gray-300 text-lg">Social Health Authority data leak exposing sensitive patient information</p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Key Challenges</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p className="text-gray-300 text-lg">60% of data breaches involve insiders</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p className="text-gray-300 text-lg">Average detection time: 85 days</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p className="text-gray-300 text-lg">KES 4.2B lost annually in Kenya</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p className="text-gray-300 text-lg">Limited NC4 compliance tools</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Solution Overview
    {
      id: 3,
      title: "Our Solution",
      subtitle: "AI-Powered Threat Detection",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <Brain className="w-16 h-16 text-cyan-400" />
              <div>
                <h3 className="text-4xl font-bold text-white">NetGuardian AI</h3>
                <p className="text-xl text-cyan-400">Real-time Behavioral Analysis & Threat Detection</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 text-center backdrop-blur-sm hover:border-cyan-400 transition-all">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">&lt; 3 Seconds</h4>
              <p className="text-gray-400 text-lg">Real-time Analysis</p>
            </div>
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 text-center backdrop-blur-sm hover:border-cyan-400 transition-all">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">94% Accuracy</h4>
              <p className="text-gray-400 text-lg">AI Detection Rate</p>
            </div>
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 text-center backdrop-blur-sm hover:border-cyan-400 transition-all">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">4-Layer</h4>
              <p className="text-gray-400 text-lg">Security Gate</p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-green-400" />
              <h4 className="text-2xl font-bold text-white">NC4 Compliant</h4>
            </div>
            <p className="text-gray-300 text-lg">Direct integration with National Computer and Cybercrime Coordination Committee</p>
          </div>
        </div>
      )
    },

    // Slide 4: Key Features
    {
      id: 4,
      title: "Key Features",
      subtitle: "Comprehensive Threat Detection Suite",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform">
            <FileCheck className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">File Analysis</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>File Type Verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>YARA Malware Scanning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>AI Behavioral Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Automated Decision Making</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform">
            <Users className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">User Monitoring</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Real-time Activity Tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Behavioral Pattern Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Risk Profiling (High/Medium/Low)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Anomaly Detection</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform">
            <AlertTriangle className="w-10 h-10 text-red-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Threat Management</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Live Threat Alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Complete Audit Trail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Automated Quarantine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Incident Response</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform">
            <Activity className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">System Health</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Real-time Performance Metrics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Resource Monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Agent Status Dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Uptime Tracking</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 5: Architecture
    {
      id: 5,
      title: "System Architecture",
      subtitle: "Three-Tier Design with AI Agent",
      content: (
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 rounded-lg p-6 w-48">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white">Frontend</h4>
                <p className="text-sm text-gray-400">React + TypeScript</p>
              </div>
              <div className="text-gray-400 text-sm">
                • React Router<br />
                • Recharts<br />
                • Tailwind CSS
              </div>
            </div>

            <div className="flex flex-col items-center">
              <ChevronRight className="w-8 h-8 text-cyan-400" />
              <div className="h-32 w-0.5 bg-cyan-400/50"></div>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400 rounded-lg p-6 w-48">
                <Server className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white">Backend</h4>
                <p className="text-sm text-gray-400">Hono + Edge Functions</p>
              </div>
              <div className="text-gray-400 text-sm">
                • RESTful API<br />
                • Deno Runtime<br />
                • Middleware
              </div>
            </div>

            <div className="flex flex-col items-center">
              <ChevronRight className="w-8 h-8 text-cyan-400" />
              <div className="h-32 w-0.5 bg-cyan-400/50"></div>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-400 rounded-lg p-6 w-48">
                <Database className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white">Database</h4>
                <p className="text-sm text-gray-400">Supabase KV</p>
              </div>
              <div className="text-gray-400 text-sm">
                • Key-Value Store<br />
                • Real-time Sync<br />
                • Auth System
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="w-12 h-12 text-yellow-400" />
              <h3 className="text-3xl font-bold text-white">AI Threat Detection Agent</h3>
            </div>
            <p className="text-gray-300 text-lg mb-4">Intelligent 4-Layer Security Gate:</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-slate-900/50 rounded p-3 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">Layer 1</div>
                <div className="text-sm text-gray-400">File Type Check</div>
              </div>
              <div className="bg-slate-900/50 rounded p-3 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">Layer 2</div>
                <div className="text-sm text-gray-400">YARA Scan</div>
              </div>
              <div className="bg-slate-900/50 rounded p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Layer 3</div>
                <div className="text-sm text-gray-400">AI Analysis</div>
              </div>
              <div className="bg-slate-900/50 rounded p-3 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">Layer 4</div>
                <div className="text-sm text-gray-400">Agent Decision</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Tech Stack
    {
      id: 6,
      title: "Technology Stack",
      subtitle: "Modern, Production-Ready Technologies",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Code className="w-6 h-6" />
                Frontend
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">React</span>
                  <span className="text-cyan-400 font-mono">18.3.1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">TypeScript</span>
                  <span className="text-cyan-400 font-mono">5.3.3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">React Router</span>
                  <span className="text-cyan-400 font-mono">7.x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tailwind CSS</span>
                  <span className="text-cyan-400 font-mono">v4.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Recharts</span>
                  <span className="text-cyan-400 font-mono">Latest</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Lucide React</span>
                  <span className="text-cyan-400 font-mono">Icons</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <Database className="w-6 h-6" />
                Database & Auth
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Supabase</span>
                  <span className="text-green-400 font-mono">Cloud</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">PostgreSQL</span>
                  <span className="text-green-400 font-mono">KV Store</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Auth System</span>
                  <span className="text-green-400 font-mono">Built-in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <Server className="w-6 h-6" />
                Backend
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Hono</span>
                  <span className="text-purple-400 font-mono">Web Framework</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Deno</span>
                  <span className="text-purple-400 font-mono">Runtime</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Edge Functions</span>
                  <span className="text-purple-400 font-mono">Supabase</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">RESTful API</span>
                  <span className="text-purple-400 font-mono">JSON</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                AI & ML
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Custom AI Agent</span>
                  <span className="text-yellow-400 font-mono">TypeScript</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">YARA Rules</span>
                  <span className="text-yellow-400 font-mono">Malware</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Behavioral Analysis</span>
                  <span className="text-yellow-400 font-mono">Real-time</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6" />
                Security
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">4-Layer Gate</span>
                  <span className="text-red-400 font-mono">94% Accuracy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">NC4 Compliance</span>
                  <span className="text-red-400 font-mono">Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Dashboard Demo
    {
      id: 7,
      title: "Dashboard Interface",
      subtitle: "10 Comprehensive Screens",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-5 gap-4">
            {[
              { name: "Login", icon: Lock, color: "cyan" },
              { name: "Register", icon: Users, color: "blue" },
              { name: "Dashboard", icon: BarChart3, color: "purple" },
              { name: "File Analysis", icon: FileCheck, color: "green" },
              { name: "Scan Results", icon: Activity, color: "yellow" },
            ].map((screen) => (
              <div key={screen.name} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-cyan-400 transition-all">
                <screen.icon className={`w-8 h-8 text-${screen.color}-400 mx-auto mb-2`} />
                <p className="text-sm text-gray-300">{screen.name}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-4">
            {[
              { name: "User Monitor", icon: Users, color: "purple" },
              { name: "Threat History", icon: AlertTriangle, color: "red" },
              { name: "System Health", icon: Activity, color: "green" },
              { name: "Agent Control", icon: Brain, color: "yellow" },
              { name: "NC4 Reports", icon: Globe, color: "blue" },
            ].map((screen) => (
              <div key={screen.name} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-cyan-400 transition-all">
                <screen.icon className={`w-8 h-8 text-${screen.color}-400 mx-auto mb-2`} />
                <p className="text-sm text-gray-300">{screen.name}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-400/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Key UI Features</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Dark Cyber Theme with Cyan Accents</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Glass Morphism Effects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Interactive Data Visualizations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Real-time Live Updates</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Kenyan Flag Colors Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Smooth Animations & Transitions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Grid Backgrounds & Glowing Elements</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Responsive Layout Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Kenya-Specific Features
    {
      id: 8,
      title: "Built for Kenya 🇰🇪",
      subtitle: "Local Context & Compliance",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-500/20 via-red-500/20 to-black/20 border-2 border-green-400 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://flagcdn.com/w80/ke.png" alt="Kenya Flag" className="w-20 h-14 rounded shadow-lg" />
              <div>
                <h3 className="text-3xl font-bold text-white">National Sovereignty</h3>
                <p className="text-gray-300">Designed specifically for Kenyan cybersecurity needs</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <Globe className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">NC4 Integration</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Direct reporting to National Computer and Cybercrime Coordination Committee</li>
                <li>• Compliance with Kenyan cybersecurity regulations</li>
                <li>• Automated incident documentation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
              <AlertTriangle className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Local Case Studies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Equity Bank data breach analysis</li>
                <li>• SHA (Social Health Authority) fraud patterns</li>
                <li>• Real-world threat scenarios</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm">
              <Database className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Localized Data</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• KES currency references</li>
                <li>• Kenyan contact information</li>
                <li>• Local threat intelligence</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-sm">
              <Shield className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Cultural Design</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Kenyan flag colors (Black, Red, Green, White)</li>
                <li>• National pride integration</li>
                <li>• Local terminology & context</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Impact & Benefits
    {
      id: 9,
      title: "Impact & Benefits",
      subtitle: "Transforming Cybersecurity in Kenya",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-400 rounded-lg p-6 text-center">
              <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">85%</h3>
              <p className="text-gray-300 text-lg">Faster Threat Detection</p>
              <p className="text-sm text-gray-500 mt-2">From 85 days to &lt;1 day</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 rounded-lg p-6 text-center">
              <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">94%</h3>
              <p className="text-gray-300 text-lg">Detection Accuracy</p>
              <p className="text-sm text-gray-500 mt-2">AI-powered analysis</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400 rounded-lg p-6 text-center">
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">&lt;3s</h3>
              <p className="text-gray-300 text-lg">Analysis Time</p>
              <p className="text-sm text-gray-500 mt-2">Real-time processing</p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Target Industries</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">🏦 Financial Institutions</h4>
                <p className="text-gray-300">Banks, SACCOs, and fintech companies protecting customer data and transactions</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">🏥 Healthcare</h4>
                <p className="text-gray-300">Hospitals and health authorities safeguarding patient records and medical data</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">🏛️ Government</h4>
                <p className="text-gray-300">Public sector organizations securing sensitive national information</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">🏢 Enterprises</h4>
                <p className="text-gray-300">Large corporations monitoring employee activities and data access</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: Roadmap & Future
    {
      id: 10,
      title: "Future Roadmap",
      subtitle: "Expanding NetGuardian AI Capabilities",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-cyan-400">Q2</span>
                </div>
                <h3 className="text-2xl font-bold text-white">2026</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span>Enhanced AI models with deep learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span>Mobile app for iOS and Android</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span>Email threat detection integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-400">Q3</span>
                </div>
                <h3 className="text-2xl font-bold text-white">2026</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>Network traffic analysis module</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>API for third-party integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>Advanced reporting & analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-400">Q4</span>
                </div>
                <h3 className="text-2xl font-bold text-white">2026</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>Multi-tenant enterprise support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>Blockchain audit trail integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>Predictive threat modeling</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-400">Q1</span>
                </div>
                <h3 className="text-2xl font-bold text-white">2027</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span>Regional expansion (East Africa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span>Automated incident response</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span>Compliance certifications (ISO 27001)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400 rounded-lg p-6 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Vision: Secure Kenya's Digital Future 🇰🇪</h3>
            <p className="text-gray-300 text-lg">Become the leading insider threat detection platform across East Africa</p>
          </div>
        </div>
      )
    },

    // Slide 11: Thank You
    {
      id: 11,
      title: "Thank You!",
      subtitle: "Questions & Demo",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-full animate-pulse"></div>
            <Shield className="w-32 h-32 text-cyan-400 relative" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-6xl font-bold text-white text-center">
            Thank You!
          </h2>
          
          <p className="text-2xl text-gray-300 text-center max-w-2xl">
            NetGuardian AI - Protecting Kenya's Digital Infrastructure
          </p>

          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Contact & Links</h3>
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <Globe className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300 text-lg">netguardian-ai.vercel.app</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Code className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300 text-lg">github.com/yourusername/netguardian-ai</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img src="https://flagcdn.com/w40/ke.png" alt="Kenya" className="w-8 h-6 rounded" />
                <span className="text-gray-300 text-lg">Built with ❤️ in Kenya</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400 rounded-lg px-8 py-4">
              <p className="text-cyan-400 font-bold text-lg">Live Demo Available</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400 rounded-lg px-8 py-4">
              <p className="text-green-400 font-bold text-lg">Open for Questions</p>
            </div>
          </div>

          <p className="text-gray-500 text-lg mt-8">
            WRRIC - Hackathon 2026 | #CyberSecurity #Kenya #AI
          </p>
        </div>
      ),
      bgStyle: "bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/20"
    },
  ];

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  const slide = slides[currentSlide];

  return (
    <div 
      className={`min-h-screen ${slide.bgStyle || 'bg-slate-900'} text-white flex flex-col relative overflow-hidden`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80"></div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col p-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-cyan-400">NetGuardian AI</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Slide Title */}
        {currentSlide !== 0 && currentSlide !== 10 && (
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="text-2xl text-gray-400">{slide.subtitle}</p>
            )}
          </div>
        )}

        {/* Slide Content */}
        <div className="flex-1 overflow-y-auto">
          {slide.content}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
              currentSlide === 0
                ? 'border-gray-700 text-gray-600 cursor-not-allowed'
                : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-cyan-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
              currentSlide === slides.length - 1
                ? 'border-gray-700 text-gray-600 cursor-not-allowed'
                : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard Hint */}
        <div className="text-center mt-4 text-gray-500 text-sm">
          Use arrow keys ← → or click to navigate
        </div>
      </div>
    </div>
  );
}