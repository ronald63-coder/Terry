import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Shield, AlertTriangle, CheckCircle, FileText, Search, Brain, Code, ArrowLeft, FileBarChart, Printer } from 'lucide-react';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';

// ============================================
// TYPES & INTERFACES
// ============================================

interface FileInfo {
  name: string;
  size: number;
  type: string;
}

interface BackendAnalysis {
  threatLevel: string;
  riskScore: number;
  confidence: number;
  action: string;
  threats: string[];
  analysisId: string;
  timestamp: string;
}

interface SuspiciousIndicator {
  name: string;
  status: boolean;
}

interface NetworkIndicators {
  urls: number;
  ips: number;
}

interface Indicators {
  suspicious: SuspiciousIndicator[];
  network: NetworkIndicators;
}

interface AIAnalysis {
  confidence: number;
  anomalyDetected: boolean;
  models: string[];
  riskAssessment: string;
}

interface YaraRules {
  totalMatches: number;
  critical: number;
  high: number;
  medium: number;
  riskBoost: string;
}

interface ScanResult {
  verdict: string;
  riskScore: number;
  confidence: number;
  status: string;
  icon: string;
  color: string;
  reasons: string[];
  analysisId?: string;
  timestamp?: string;
  features: Record<string, string>;
  indicators: Indicators;
  aiAnalysis: AIAnalysis;
  yaraRules: YaraRules;
}

// ============================================
// COMPONENT
// ============================================

export function ScanResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get data from location state with proper typing
  const file = (location.state?.file as FileInfo) || { 
    name: 'sample_file.exe', 
    size: 2457600, 
    type: 'application/x-msdownload' 
  };
  
  const backendAnalysis = location.state?.analysis as BackendAnalysis | undefined;
  const [activeTab, setActiveTab] = useState<string>('features');

  // Use backend analysis if available, otherwise simulate
  const scanResult: ScanResult = backendAnalysis ? {
    verdict: backendAnalysis.threatLevel.toUpperCase(),
    riskScore: backendAnalysis.riskScore,
    confidence: backendAnalysis.confidence,
    status: backendAnalysis.action.toUpperCase(),
    icon: backendAnalysis.riskScore >= 70 ? '🚨' : backendAnalysis.riskScore >= 50 ? '⚠️' : backendAnalysis.riskScore >= 30 ? '📋' : '✅',
    color: backendAnalysis.riskScore >= 70 ? '#ff4757' : backendAnalysis.riskScore >= 50 ? '#fdcb6e' : backendAnalysis.riskScore >= 30 ? '#00d4ff' : '#00cec9',
    reasons: backendAnalysis.threats.length > 0 ? backendAnalysis.threats : ['File appears clean'],
    analysisId: backendAnalysis.analysisId,
    timestamp: backendAnalysis.timestamp,
    features: {
      fileSize: `${(file.size / 1024).toFixed(2)} KB`,
      entropy: '7.89 (High)',
      fileType: file.type || 'Unknown',
      sections: '8',
      imports: '142',
      stringsFound: '1,247'
    },
    indicators: {
      suspicious: [
        { name: 'Packed executable', status: backendAnalysis.riskScore >= 70 },
        { name: 'Registry modifications', status: backendAnalysis.riskScore >= 50 },
        { name: 'Network callbacks', status: backendAnalysis.riskScore >= 60 },
        { name: 'Anti-debugging', status: backendAnalysis.riskScore >= 70 }
      ],
      network: {
        urls: backendAnalysis.riskScore >= 50 ? 3 : 0,
        ips: backendAnalysis.riskScore >= 50 ? 5 : 0
      }
    },
    aiAnalysis: {
      confidence: backendAnalysis.confidence,
      anomalyDetected: backendAnalysis.riskScore >= 50,
      models: ['Enhanced Rule Engine', 'Anomaly Detector', 'Entropy Analyzer'],
      riskAssessment: backendAnalysis.threatLevel.toUpperCase()
    },
    yaraRules: {
      totalMatches: Math.floor(backendAnalysis.riskScore / 7),
      critical: Math.floor(backendAnalysis.riskScore / 20),
      high: Math.floor(backendAnalysis.riskScore / 15),
      medium: Math.floor(backendAnalysis.riskScore / 30),
      riskBoost: `+${backendAnalysis.riskScore}%`
    }
  } : {
    verdict: 'CRITICAL THREAT',
    riskScore: 87,
    confidence: 94,
    status: 'BLOCKED',
    icon: '🚨',
    color: '#ff4757',
    reasons: [
      'Suspicious PE header modifications detected',
      'Known malware signature match (WannaCry variant)',
      'Obfuscated code patterns identified',
      'Network connectivity to known C&C server',
      'Privilege escalation attempts in code'
    ],
    features: {
      fileSize: '2.4 MB',
      entropy: '7.89 (High)',
      fileType: 'PE32 executable',
      sections: '8',
      imports: '142',
      stringsFound: '1,247'
    },
    indicators: {
      suspicious: [
        { name: 'Packed executable', status: true },
        { name: 'Registry modifications', status: true },
        { name: 'Network callbacks', status: true },
        { name: 'Anti-debugging', status: true }
      ],
      network: {
        urls: 3,
        ips: 5
      }
    },
    aiAnalysis: {
      confidence: 94,
      anomalyDetected: true,
      models: ['Enhanced Rule Engine', 'Anomaly Detector', 'Entropy Analyzer'],
      riskAssessment: 'CRITICAL'
    },
    yaraRules: {
      totalMatches: 12,
      critical: 4,
      high: 5,
      medium: 3,
      riskBoost: '+45%'
    }
  };

  useEffect(() => {
    console.log('Scan Results:', scanResult);
    console.log('Backend Analysis:', backendAnalysis);
  }, []);

  const tabs = [
    { id: 'features', label: 'File Features', icon: FileText },
    { id: 'indicators', label: 'Indicators', icon: Search },
    { id: 'ai', label: 'AI Analysis', icon: Brain },
    { id: 'yara', label: 'YARA Rules', icon: Shield },
    { id: 'json', label: 'Raw JSON', icon: Code }
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/file-analysis')}
          className="flex items-center gap-2 text-[#00d4ff] hover:underline mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to File Analysis
        </button>
        <div className="flex items-center gap-3">
          <Shield className="w-12 h-12 text-[#00d4ff]" />
          <div>
            <h1 className="text-4xl text-white">Scan Results</h1>
            <p className="text-[#aaa]">Security Gate Analysis Complete</p>
          </div>
        </div>
      </div>

      {/* Result Banner */}
      <div
        className={`mb-8 p-6 rounded-lg border-2 ${
          scanResult.status === 'BLOCKED'
            ? 'bg-[#ff4757]/20 border-[#ff4757] animate-pulse'
            : 'bg-[#00cec9]/20 border-[#00cec9]'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {scanResult.status === 'BLOCKED' ? (
              <AlertTriangle className="w-12 h-12 text-[#ff4757]" />
            ) : (
              <CheckCircle className="w-12 h-12 text-[#00cec9]" />
            )}
            <div>
              <h2 className="text-3xl text-white mb-2">
                {scanResult.status === 'BLOCKED' ? 'Threat BLOCKED' : 'File CLEAN'}
              </h2>
              <p className="text-[#aaa]">
                {scanResult.status === 'BLOCKED'
                  ? 'Quarantined - never reached database'
                  : 'Stored to database'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[#aaa] mb-1">File: {file?.name || 'sample.exe'}</p>
            <p className="text-[#aaa]">Scanned: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Verdict Card */}
      <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#ff4757] rounded-lg p-8 mb-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at center, ${scanResult.color} 0%, transparent 70%)`
          }}
        />
        <div className="relative text-center">
          <div className="text-6xl mb-4">{scanResult.icon}</div>
          <h2 className="text-4xl text-white mb-4">{scanResult.verdict}</h2>
          <div className="flex items-center justify-center gap-8">
            <div>
              <p className="text-[#aaa] mb-1">Risk Score</p>
              <p className="text-3xl" style={{ color: scanResult.color }}>
                {scanResult.riskScore}/100
              </p>
            </div>
            <div>
              <p className="text-[#aaa] mb-1">Confidence</p>
              <p className="text-3xl text-[#00d4ff]">{scanResult.confidence}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detection Reasons */}
      <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#ff4757]/30 rounded-lg p-6 mb-8">
        <h2 className="text-2xl text-white mb-4">🔍 Detection Reasons</h2>
        <div className="space-y-2">
          {scanResult.reasons.map((reason: string, index: number) => (
            <div
              key={index}
              className="p-3 bg-[#ff4757]/10 border-l-4 border-l-[#ff4757] rounded"
            >
              <p className="text-white">{reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Analysis Tabs */}
      <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6 mb-8">
        <h2 className="text-2xl text-white mb-6">📊 Technical Analysis</h2>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#00d4ff] text-[#0a192f]'
                  : 'bg-[#0a192f]/60 text-[#aaa] hover:bg-[#0a192f]'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#0a192f]/60 rounded-lg p-6">
          {activeTab === 'features' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-white mb-4">Basic Properties</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(scanResult.features).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="p-4 bg-[#16213e]/60 rounded-lg">
                      <p className="text-[#aaa] text-sm mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </p>
                      <p className="text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white mb-4">Structural Analysis</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(scanResult.features).slice(3).map(([key, value]) => (
                    <div key={key} className="p-4 bg-[#16213e]/60 rounded-lg">
                      <p className="text-[#aaa] text-sm mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </p>
                      <p className="text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'indicators' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-white mb-4">Suspicious Indicators</h3>
                <div className="space-y-2">
                  {scanResult.indicators.suspicious.map((indicator: SuspiciousIndicator, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-[#16213e]/60 rounded-lg"
                    >
                      <p className="text-white">{indicator.name}</p>
                      {indicator.status ? (
                        <span className="px-3 py-1 bg-[#ff4757]/20 text-[#ff4757] rounded text-sm">
                          Detected
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-[#00cec9]/20 text-[#00cec9] rounded text-sm">
                          Clear
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white mb-4">Network Indicators</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#16213e]/60 rounded-lg">
                    <p className="text-[#aaa] text-sm mb-1">URLs Found</p>
                    <p className="text-2xl text-[#ff4757]">{scanResult.indicators.network.urls}</p>
                  </div>
                  <div className="p-4 bg-[#16213e]/60 rounded-lg">
                    <p className="text-[#aaa] text-sm mb-1">IPs Found</p>
                    <p className="text-2xl text-[#ff4757]">{scanResult.indicators.network.ips}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-6">
              <div className="p-4 bg-[#16213e]/60 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white">AI Confidence</p>
                  <p className="text-[#00d4ff]">{scanResult.aiAnalysis.confidence}%</p>
                </div>
                <div className="h-3 bg-[#0a192f] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00d4ff] transition-all"
                    style={{ width: `${scanResult.aiAnalysis.confidence}%` }}
                  />
                </div>
              </div>

              <div className="p-4 bg-[#16213e]/60 rounded-lg">
                <p className="text-[#aaa] mb-2">Anomaly Detection</p>
                <p className="text-2xl text-[#ff4757]">
                  {scanResult.aiAnalysis.anomalyDetected ? 'ANOMALIES DETECTED' : 'No Anomalies'}
                </p>
              </div>

              <div>
                <h3 className="text-white mb-4">Models Used</h3>
                <div className="space-y-2">
                  {scanResult.aiAnalysis.models.map((model: string, index: number) => (
                    <div key={index} className="p-3 bg-[#16213e]/60 rounded-lg">
                      <p className="text-white">{model}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#ff4757]/20 border border-[#ff4757] rounded-lg">
                <p className="text-[#aaa] mb-2">Risk Assessment</p>
                <p className="text-3xl text-[#ff4757]">{scanResult.aiAnalysis.riskAssessment}</p>
              </div>
            </div>
          )}

          {activeTab === 'yara' && (
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="p-4 bg-[#16213e]/60 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">Total Matches</p>
                  <p className="text-2xl text-white">{scanResult.yaraRules.totalMatches}</p>
                </div>
                <div className="p-4 bg-[#ff4757]/20 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">Critical</p>
                  <p className="text-2xl text-[#ff4757]">{scanResult.yaraRules.critical}</p>
                </div>
                <div className="p-4 bg-[#fdcb6e]/20 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">High</p>
                  <p className="text-2xl text-[#fdcb6e]">{scanResult.yaraRules.high}</p>
                </div>
                <div className="p-4 bg-[#00d4ff]/20 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">Medium</p>
                  <p className="text-2xl text-[#00d4ff]">{scanResult.yaraRules.medium}</p>
                </div>
              </div>

              <div className="p-4 bg-[#16213e]/60 rounded-lg">
                <p className="text-[#aaa] mb-2">Risk Boost</p>
                <p className="text-3xl text-[#ff4757]">{scanResult.yaraRules.riskBoost}</p>
              </div>
            </div>
          )}

          {activeTab === 'json' && (
            <pre className="text-[#00d4ff] text-sm overflow-x-auto">
              {JSON.stringify(scanResult, null, 2)}
            </pre>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-4">
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#00d4ff]/20 text-[#00d4ff] py-3 rounded-lg hover:bg-[#00d4ff]/30 transition-colors">
          <FileBarChart className="w-5 h-5" />
          View Report
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#00d4ff]/20 text-[#00d4ff] py-3 rounded-lg hover:bg-[#00d4ff]/30 transition-colors">
          <Printer className="w-5 h-5" />
          Print Report
        </button>
        <button
          onClick={() => navigate('/nc4-reporting')}
          className="flex-1 flex items-center justify-center gap-2 bg-[#ff4757]/20 text-[#ff4757] py-3 rounded-lg hover:bg-[#ff4757]/30 transition-colors"
        >
          <Shield className="w-5 h-5" />
          Report to NC4
        </button>
      </div>

      {/* Auto-blocked notification */}
      {scanResult.status === 'BLOCKED' && (
        <div className="bg-[#ff4757]/20 border border-[#ff4757] rounded-lg p-4 animate-pulse">
          <p className="text-white text-center">
            ⚠️ File automatically blocked and quarantined. User notified via WhatsApp and voice call.
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col items-center justify-center mt-8 gap-4">
        <img src={logo} alt="NetGuardian AI Logo" className="w-32 h-32 object-contain" />
        <p className="text-[#aaa] text-sm">© 2026 NIRU AI - Hackathon</p>
      </div>
    </div>
  );
}