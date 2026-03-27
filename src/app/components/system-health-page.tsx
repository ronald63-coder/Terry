import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, ArrowLeft, Activity, CheckCircle, XCircle, Cpu, HardDrive } from 'lucide-react';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';

export function SystemHealthPage() {
  const navigate = useNavigate();
  const [showLogs, setShowLogs] = useState(false);

  const aiModels = [
    { name: 'Enhanced Rule Engine', accuracy: 98.2, status: 'active', color: '#00cec9' },
    { name: 'Anomaly Detector', accuracy: 97.5, status: 'active', color: '#00cec9' },
    { name: 'Entropy Analyzer', accuracy: 95.8, status: 'active', color: '#00cec9' },
    { name: 'PE Structure Analyzer', accuracy: 94.3, status: 'active', color: '#00cec9' },
    { name: 'YARA Rules Engine', accuracy: 99.1, status: 'active', color: '#00cec9' }
  ];

  const systemLogs = [
    { time: '14:23:45', level: 'INFO', message: 'System health check completed - All systems operational' },
    { time: '14:20:12', level: 'WARNING', message: 'High CPU usage detected - Auto-scaling initiated' },
    { time: '14:15:33', level: 'INFO', message: 'AI model synchronization completed' },
    { time: '14:10:07', level: 'ERROR', message: 'Database connection timeout - Retrying...' },
    { time: '14:05:22', level: 'INFO', message: 'Threat scan completed: 150 files processed' },
    { time: '14:00:00', level: 'INFO', message: 'Scheduled backup initiated' }
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-[#00d4ff] hover:underline mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>
        <div className="flex items-center gap-3">
          <Activity className="w-12 h-12 text-[#00d4ff]" />
          <div>
            <h1 className="text-4xl text-white">System Health</h1>
            <p className="text-[#aaa]">Real-time System Monitoring</p>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00cec9]/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-8 h-8 text-[#00cec9]" />
            <span className="text-xs px-2 py-1 bg-[#00cec9]/20 text-[#00cec9] rounded">ONLINE</span>
          </div>
          <h3 className="text-white mb-1">Overall Status</h3>
          <p className="text-3xl text-[#00cec9]">Healthy</p>
        </div>

        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-8 h-8 text-[#00d4ff]" />
            <span className="text-xs px-2 py-1 bg-[#00d4ff]/20 text-[#00d4ff] rounded">v2.0</span>
          </div>
          <h3 className="text-white mb-1">Version</h3>
          <p className="text-xl text-[#00d4ff]">CyberSentry 2.0</p>
        </div>

        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-8 h-8 text-[#00d4ff]" />
          </div>
          <h3 className="text-white mb-1">Uptime</h3>
          <p className="text-3xl text-white">99.8%</p>
          <p className="text-[#aaa] text-sm">47 days 3 hours</p>
        </div>

        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00cec9]/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-8 h-8 text-[#00cec9]" />
          </div>
          <h3 className="text-white mb-1">API Response</h3>
          <p className="text-3xl text-[#00cec9]">45ms</p>
          <p className="text-[#aaa] text-sm">Average</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#ff4757]/30 rounded-lg p-6">
          <h3 className="text-white mb-2">🚨 Total Threats</h3>
          <p className="text-4xl text-[#ff4757]">266</p>
        </div>

        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#fdcb6e]/30 rounded-lg p-6">
          <h3 className="text-white mb-2">🛑 Auto-Blocks</h3>
          <p className="text-4xl text-[#fdcb6e]">127</p>
        </div>

        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#ff4757]/30 rounded-lg p-6">
          <h3 className="text-white mb-2">🚫 Blocked Users</h3>
          <p className="text-4xl text-[#ff4757]">45</p>
        </div>

        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
          <h3 className="text-white mb-2">⚡ Active Scans</h3>
          <p className="text-4xl text-[#00d4ff]">12</p>
        </div>
      </div>

      {/* AI Model Status */}
      <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6 mb-8">
        <h2 className="text-2xl text-white mb-6">🤖 AI Model Status</h2>
        <div className="space-y-4">
          {aiModels.map((model, index) => (
            <div key={index} className="bg-[#0a192f]/60 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#00cec9] animate-pulse" />
                  <h3 className="text-white">{model.name}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#00cec9]">{model.accuracy}% Accuracy</span>
                  <span className="px-3 py-1 bg-[#00cec9]/20 text-[#00cec9] rounded text-sm uppercase">
                    {model.status}
                  </span>
                </div>
              </div>
              <div className="h-2 bg-[#0a192f] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#00cec9] transition-all"
                  style={{ width: `${model.accuracy}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Usage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* CPU Usage */}
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-8 h-8 text-[#00d4ff]" />
            <h2 className="text-2xl text-white">CPU Usage</h2>
          </div>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-48 h-48">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#0a192f"
                  strokeWidth="16"
                  fill="transparent"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#00d4ff"
                  strokeWidth="16"
                  fill="transparent"
                  strokeDasharray={`${(67 / 100) * 502.4} 502.4`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl text-white">67%</span>
                <span className="text-[#aaa] text-sm">In Use</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-[#aaa] text-sm">Cores</p>
              <p className="text-white text-xl">8</p>
            </div>
            <div className="text-center">
              <p className="text-[#aaa] text-sm">Threads</p>
              <p className="text-white text-xl">16</p>
            </div>
          </div>
        </div>

        {/* Memory Usage */}
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <HardDrive className="w-8 h-8 text-[#00cec9]" />
            <h2 className="text-2xl text-white">Memory Usage</h2>
          </div>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-48 h-48">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#0a192f"
                  strokeWidth="16"
                  fill="transparent"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#00cec9"
                  strokeWidth="16"
                  fill="transparent"
                  strokeDasharray={`${(54 / 100) * 502.4} 502.4`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl text-white">54%</span>
                <span className="text-[#aaa] text-sm">In Use</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-[#aaa] text-sm">Used</p>
              <p className="text-white text-xl">21.6 GB</p>
            </div>
            <div className="text-center">
              <p className="text-[#aaa] text-sm">Total</p>
              <p className="text-white text-xl">40 GB</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Logs */}
      <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
        <button
          onClick={() => setShowLogs(!showLogs)}
          className="w-full flex items-center justify-between mb-4"
        >
          <h2 className="text-2xl text-white">📋 System Logs</h2>
          <span className="text-[#00d4ff]">{showLogs ? '▼' : '▶'}</span>
        </button>

        {showLogs && (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {systemLogs.map((log, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  log.level === 'ERROR'
                    ? 'bg-[#ff4757]/10 border-l-[#ff4757]'
                    : log.level === 'WARNING'
                    ? 'bg-[#fdcb6e]/10 border-l-[#fdcb6e]'
                    : 'bg-[#00d4ff]/10 border-l-[#00d4ff]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      log.level === 'ERROR'
                        ? 'bg-[#ff4757] text-white'
                        : log.level === 'WARNING'
                        ? 'bg-[#fdcb6e] text-[#0a192f]'
                        : 'bg-[#00d4ff] text-[#0a192f]'
                    }`}
                  >
                    {log.level}
                  </span>
                  <span className="text-[#aaa] text-sm">{log.time}</span>
                </div>
                <p className="text-white text-sm">{log.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center mt-8 gap-4">
        <img src={logo} alt="NetGuardian AI Logo" className="w-32 h-32 object-contain" />
        <p className="text-[#aaa] text-sm">© 2026 NIRU AI - Hackathon</p>
      </div>
    </div>
  );
}