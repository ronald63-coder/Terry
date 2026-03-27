import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Shield, ArrowLeft, Activity, Database, CheckCircle, XCircle } from 'lucide-react';
import { api } from '../../utils/api';

export function BackendTestPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [dashboardStats, setDashboardStats] = useState<any>(null);
  const [agentStatus, setAgentStatus] = useState<any>(null);
  const [systemHealth, setSystemHealth] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testBackendConnection = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log('Testing backend connection...');

      // Health Check
      const health = await api.healthCheck();
      console.log('Health Check:', health);
      setHealthStatus(health);

      // Dashboard Stats
      const stats = await api.getDashboardStats();
      console.log('Dashboard Stats:', stats);
      setDashboardStats(stats.stats);

      // Agent Status
      const agent = await api.getAgentStatus();
      console.log('Agent Status:', agent);
      setAgentStatus(agent.status);

      // System Health
      const system = await api.getSystemHealth();
      console.log('System Health:', system);
      setSystemHealth(system.health);

    } catch (err: any) {
      console.error('Backend test error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testBackendConnection();
  }, []);

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
          <Database className="w-12 h-12 text-[#00d4ff]" />
          <div>
            <h1 className="text-4xl text-white">Backend Connection Test</h1>
            <p className="text-[#aaa]">API Health & Status Diagnostics</p>
          </div>
        </div>
      </div>

      {/* Connection Status */}
      <div className="mb-8">
        <div
          className={`p-6 rounded-lg border-2 ${
            healthStatus
              ? 'bg-[#00cec9]/20 border-[#00cec9]'
              : error
              ? 'bg-[#ff4757]/20 border-[#ff4757]'
              : 'bg-[#fdcb6e]/20 border-[#fdcb6e]'
          }`}
        >
          <div className="flex items-center gap-4">
            {loading ? (
              <Activity className="w-8 h-8 text-[#fdcb6e] animate-spin" />
            ) : healthStatus ? (
              <CheckCircle className="w-8 h-8 text-[#00cec9]" />
            ) : (
              <XCircle className="w-8 h-8 text-[#ff4757]" />
            )}
            <div>
              <h2 className="text-2xl text-white mb-1">
                {loading ? 'Testing Connection...' : healthStatus ? 'Backend Connected ✅' : 'Connection Failed ❌'}
              </h2>
              <p className="text-[#aaa]">
                {error || 'All systems operational'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Test Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <button
          onClick={testBackendConnection}
          disabled={loading}
          className="p-6 bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg hover:border-[#00d4ff] transition-all disabled:opacity-50"
        >
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-6 h-6 text-[#00d4ff]" />
            <h3 className="text-xl text-white">Refresh Connection</h3>
          </div>
          <p className="text-[#aaa]">Test all backend endpoints</p>
        </button>

        <button
          onClick={async () => {
            try {
              const result = await api.analyzeFile(
                { name: 'test.exe', size: 1024, type: 'application/x-msdownload' },
                'test@netguardian.ai'
              );
              console.log('Test file analysis:', result);
              alert(`Test successful! Analysis ID: ${result.analysis.analysisId}`);
            } catch (err: any) {
              alert(`Test failed: ${err.message}`);
            }
          }}
          className="p-6 bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg hover:border-[#00d4ff] transition-all"
        >
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-6 h-6 text-[#00d4ff]" />
            <h3 className="text-xl text-white">Test File Analysis</h3>
          </div>
          <p className="text-[#aaa]">Send test file to AI agent</p>
        </button>
      </div>

      {/* Dashboard Stats */}
      {dashboardStats && (
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white mb-6">📊 Dashboard Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">Total Threats</p>
              <p className="text-3xl text-[#ff4757]">{dashboardStats.totalThreats}</p>
            </div>
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">Critical Threats</p>
              <p className="text-3xl text-[#ff4757]">{dashboardStats.criticalThreats}</p>
            </div>
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">High Risk Users</p>
              <p className="text-3xl text-[#fdcb6e]">{dashboardStats.highRiskUsers}</p>
            </div>
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">Total Scans</p>
              <p className="text-3xl text-[#00d4ff]">{dashboardStats.totalScans}</p>
            </div>
          </div>
        </div>
      )}

      {/* Agent Status */}
      {agentStatus && (
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00cec9]/30 rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white mb-6">🤖 AI Agent Status</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">Status</p>
              <p className="text-2xl text-[#00cec9]">
                {agentStatus.active ? 'ACTIVE ✅' : 'OFFLINE ❌'}
              </p>
            </div>
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">High Risk Users</p>
              <p className="text-2xl text-[#fdcb6e]">{agentStatus.highRiskUsers}</p>
            </div>
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">Critical Threats</p>
              <p className="text-2xl text-[#ff4757]">{agentStatus.criticalThreats}</p>
            </div>
          </div>
        </div>
      )}

      {/* System Health */}
      {systemHealth && (
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white mb-6">💻 System Health Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">CPU Usage</p>
              <p className="text-2xl text-[#00d4ff]">{systemHealth.cpuUsage}%</p>
            </div>
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">Memory</p>
              <p className="text-2xl text-[#fdcb6e]">{systemHealth.memoryUsage}%</p>
            </div>
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">Detection Rate</p>
              <p className="text-2xl text-[#00cec9]">{systemHealth.detectionRate}</p>
            </div>
            <div className="p-4 bg-[#0a192f]/60 rounded-lg">
              <p className="text-[#aaa] text-sm mb-1">Uptime</p>
              <p className="text-2xl text-[#00cec9]">{systemHealth.uptime}</p>
            </div>
          </div>
        </div>
      )}

      {/* Raw Data */}
      {healthStatus && (
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
          <h2 className="text-2xl text-white mb-6">🔧 Raw Response Data</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-[#00d4ff] mb-2">Health Check</h3>
              <pre className="bg-[#0a192f]/60 p-4 rounded-lg text-[#00d4ff] text-sm overflow-x-auto">
                {JSON.stringify(healthStatus, null, 2)}
              </pre>
            </div>
            {dashboardStats && (
              <div>
                <h3 className="text-[#00d4ff] mb-2">Dashboard Stats</h3>
                <pre className="bg-[#0a192f]/60 p-4 rounded-lg text-[#00d4ff] text-sm overflow-x-auto">
                  {JSON.stringify(dashboardStats, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}