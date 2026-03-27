import { useState } from 'react';
import { Users, AlertTriangle, ShieldOff, CheckCircle, X } from 'lucide-react';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';
import nc4Logo from '../../assets/63fc5cb358795522eb03a21b2b98de3ecdbcf7bb.png';

export function DashboardPage() {
  const [showNC4Form, setShowNC4Form] = useState(false);
  const [selectedThreat, setSelectedThreat] = useState<any>(null);
  const [nc4Data, setNC4Data] = useState({
    incidentType: '',
    severity: 50,
    description: ''
  });

  const allAlerts = [
    { id: 1, type: 'Malware Detected', user: 'Ronny Ogeya', message: 'Suspicious file activity detected', time: '07:26 PM', level: 'critical', file: 'suspicious_file.exe', action: 'Blocked and Quarantined', riskScore: 92, details: 'Attempted to execute suspicious.exe file with known malware signatures. The file was automatically blocked before reaching the database.' },
    { id: 2, type: 'Unusual Login', user: 'Bob Wilson', message: 'Login from unusual location', time: '02:49 PM', level: 'medium', file: 'N/A', action: 'Monitoring', riskScore: 58, details: 'User logged in from Mombasa instead of usual Nairobi location. Multiple failed login attempts detected before successful login.' },
    { id: 3, type: 'Mass Download', user: 'Demo Attacker', message: 'Mass file download detected', time: '06:49 PM', level: 'medium', file: 'customer_data.zip', action: 'Flagged for Review', riskScore: 67, details: 'User downloaded 150+ files within 10 minutes. Pattern matches insider threat behavior. Files contained customer records and financial data.' },
  ];

  // Filter out dismissed users from localStorage
  const dismissedUsers = JSON.parse(localStorage.getItem('dismissedUsers') || '[]');
  const alerts = allAlerts.filter(alert => !dismissedUsers.includes(alert.user));

  const handleNC4Submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('NC4 Report submitted successfully!');
    setShowNC4Form(false);
    setNC4Data({ incidentType: '', severity: 50, description: '' });
  };

  return (
    <div className="min-h-screen p-6">
      {/* Kenyan flag stripe accent */}
      <div className="fixed top-0 left-64 right-0 h-1 flex z-50">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#BB0000]" />
        <div className="flex-1 bg-[#006600]" />
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#4a9eff]/30 to-[#00d4ff]/20 backdrop-blur-lg border border-[#00d4ff]/40 rounded-2xl p-8 mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src={logo} alt="NetGuardian AI Logo" className="w-12 h-12 object-contain" />
          <h1 className="text-4xl text-white font-bold">CyberSentry AI Dashboard</h1>
        </div>
        <p className="text-white/80">National Cybersecurity Operations Centre - Real-time Threat Intelligence</p>
        <p className="text-[#006600] text-sm mt-1">🇰🇪 Kenya's Digital Security</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-8 h-8 text-[#00d4ff]" />
            <span className="text-white text-lg">Total Users</span>
          </div>
          <p className="text-4xl text-white font-bold mb-1">5</p>
          <p className="text-white/60 text-sm">+2%</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-8 h-8 text-[#ff4757]" />
            <span className="text-white text-lg">Active Threats</span>
          </div>
          <p className="text-4xl text-white font-bold mb-1">0</p>
          <p className="text-white/60 text-sm">+8%</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <ShieldOff className="w-8 h-8 text-[#fdcb6e]" />
            <span className="text-white text-lg">Auto-Blocks</span>
          </div>
          <p className="text-4xl text-white font-bold mb-1">2</p>
          <p className="text-white/60 text-sm">+8%</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-8 h-8 text-[#00cec9]" />
            <span className="text-white text-lg">Protected</span>
          </div>
          <p className="text-4xl text-white font-bold mb-1">5</p>
          <p className="text-white/60 text-sm">+22%</p>
        </div>
      </div>

      {/* Live Threat Alerts */}
      <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-[#ff4757] rounded-full animate-pulse"></span>
          <h2 className="text-2xl text-white">Live Threat Alerts</h2>
        </div>
        
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg flex items-center justify-between ${
                alert.level === 'critical'
                  ? 'bg-[#ff4757]/20 border-l-4 border-[#ff4757]'
                  : alert.level === 'medium'
                  ? 'bg-[#fdcb6e]/20 border-l-4 border-[#fdcb6e]'
                  : 'bg-[#00d4ff]/20 border-l-4 border-[#00d4ff]'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    alert.level === 'critical'
                      ? 'bg-[#ff4757] text-white'
                      : alert.level === 'medium'
                      ? 'bg-[#fdcb6e] text-black'
                      : 'bg-[#00d4ff] text-black'
                  }`}>
                    {alert.level === 'critical' ? '🚨' : alert.level === 'medium' ? '⚠️' : 'ℹ️'} {alert.type}
                  </span>
                </div>
                <p className="text-white mb-1">
                  <span className="font-semibold">User: {alert.user}</span> | Time: {alert.time}
                </p>
                <p className="text-white/70 text-sm">{alert.message}</p>
              </div>
              <button 
                onClick={() => setSelectedThreat(alert)}
                className="ml-4 px-6 py-2 bg-[#00d4ff] text-black rounded-lg hover:bg-[#00d4ff]/80 transition-all font-semibold"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {alerts.length === 0 && (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-[#00cec9] mx-auto mb-4" />
            <p className="text-white text-xl">All threats have been handled</p>
            <p className="text-white/60 mt-2">No active alerts at this time</p>
          </div>
        )}
      </div>

      {/* NC4 Reporting Section */}
      <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6 mb-8">
        <button
          onClick={() => setShowNC4Form(!showNC4Form)}
          className="w-full flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-3">
            <img src={nc4Logo} alt="NC4 Logo" className="w-16 h-auto object-contain" />
            <h2 className="text-2xl text-white">📡 NATIONAL COMPUTER AND CYBERCRIME COMMITTEE Reporting</h2>
          </div>
          <span className="text-[#00d4ff] text-2xl">{showNC4Form ? '▼' : '▶'}</span>
        </button>

        {showNC4Form && (
          <form onSubmit={handleNC4Submit} className="space-y-4">
            <div>
              <label className="block text-white mb-2">Incident Type</label>
              <select
                value={nc4Data.incidentType}
                onChange={(e) => setNC4Data({ ...nc4Data, incidentType: e.target.value })}
                className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff]"
                required
              >
                <option value="">Select Type</option>
                <option value="data-breach">Data Breach</option>
                <option value="unauthorized-access">Unauthorized Access</option>
                <option value="malware">Malware Detection</option>
                <option value="insider-threat">Insider Threat</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Severity: {nc4Data.severity}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={nc4Data.severity}
                onChange={(e) => setNC4Data({ ...nc4Data, severity: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Description</label>
              <textarea
                value={nc4Data.description}
                onChange={(e) => setNC4Data({ ...nc4Data, description: e.target.value })}
                className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] min-h-32"
                placeholder="Provide detailed incident description..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#BB0000] to-[#006600] text-white py-3 rounded-lg hover:shadow-lg hover:shadow-[#BB0000]/50 transition-all font-semibold"
            >
              Submit NC4 Report
            </button>
          </form>
        )}
      </div>

      {/* Footer Logo */}
      <div className="mt-8 flex items-center justify-center gap-3 py-6 border-t border-[#00d4ff]/20">
        <img src={logo} alt="NetGuardian AI Logo" className="w-8 h-8 object-contain" />
        <p className="text-[#aaa] text-sm">Powered by CyberSentry AI</p>
      </div>

      {/* Threat Details Modal */}
      {selectedThreat && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0a192f] border-2 border-[#00d4ff] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#00d4ff]/30">
              <h2 className="text-2xl text-white font-bold">🔍 Threat Details</h2>
              <button
                onClick={() => setSelectedThreat(null)}
                className="text-[#00d4ff] hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Threat Type & Level */}
              <div className="flex items-center justify-between">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedThreat.level === 'critical'
                    ? 'bg-[#ff4757] text-white'
                    : selectedThreat.level === 'medium'
                    ? 'bg-[#fdcb6e] text-black'
                    : 'bg-[#00d4ff] text-black'
                }`}>
                  {selectedThreat.level === 'critical' ? '🚨' : selectedThreat.level === 'medium' ? '⚠️' : 'ℹ️'} {selectedThreat.type}
                </span>
                <span className="text-[#aaa]">{selectedThreat.time}</span>
              </div>

              {/* User Info */}
              <div className="bg-[#16213e]/60 rounded-lg p-4">
                <p className="text-[#aaa] text-sm mb-1">User</p>
                <p className="text-white text-xl font-semibold">{selectedThreat.user}</p>
              </div>

              {/* File Info */}
              <div className="bg-[#16213e]/60 rounded-lg p-4">
                <p className="text-[#aaa] text-sm mb-1">File</p>
                <p className="text-white font-mono">{selectedThreat.file}</p>
              </div>

              {/* Risk Score */}
              <div className="bg-[#16213e]/60 rounded-lg p-4">
                <p className="text-[#aaa] text-sm mb-3">Risk Score</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-3 bg-[#0a192f] rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          selectedThreat.level === 'critical'
                            ? 'bg-[#ff4757]'
                            : selectedThreat.level === 'medium'
                            ? 'bg-[#fdcb6e]'
                            : 'bg-[#00d4ff]'
                        }`}
                        style={{ width: `${selectedThreat.riskScore}%` }}
                      />
                    </div>
                  </div>
                  <span className={`text-2xl font-bold ${
                    selectedThreat.level === 'critical'
                      ? 'text-[#ff4757]'
                      : selectedThreat.level === 'medium'
                      ? 'text-[#fdcb6e]'
                      : 'text-[#00d4ff]'
                  }`}>
                    {selectedThreat.riskScore}/100
                  </span>
                </div>
              </div>

              {/* Action Taken */}
              <div className="bg-[#16213e]/60 rounded-lg p-4">
                <p className="text-[#aaa] text-sm mb-1">Action Taken</p>
                <p className="text-white text-lg">{selectedThreat.action}</p>
              </div>

              {/* Details */}
              <div className="bg-[#16213e]/60 rounded-lg p-4">
                <p className="text-[#aaa] text-sm mb-2">Detailed Analysis</p>
                <p className="text-white leading-relaxed">{selectedThreat.details}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-[#00d4ff]/30">
                <button className="flex-1 bg-[#00d4ff]/20 text-[#00d4ff] py-3 rounded-lg hover:bg-[#00d4ff]/30 transition-colors font-semibold">
                  View Full Report
                </button>
                <button className="flex-1 bg-[#ff4757]/20 text-[#ff4757] py-3 rounded-lg hover:bg-[#ff4757]/30 transition-colors font-semibold">
                  Report to NC4
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}