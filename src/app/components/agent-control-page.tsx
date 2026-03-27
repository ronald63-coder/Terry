import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, ArrowLeft, Phone, MessageSquare, Ban, CheckCircle, XCircle, X } from 'lucide-react';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';

export function AgentControlPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showPendingAlert, setShowPendingAlert] = useState(false);
  const [manualControls, setManualControls] = useState({
    selectedUser: '',
    reason: ''
  });
  
  // Popup states
  const [showBlockPopup, setShowBlockPopup] = useState(false);
  const [blockedUser, setBlockedUser] = useState('');
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [callUserData, setCallUserData] = useState({ user: '', phone: '' });
  
  // Track dismissed and blocked users
  const [dismissedUsers, setDismissedUsers] = useState<number[]>([]);

  const [pendingReviewsState, setPendingReviewsState] = useState([
    {
      id: 1,
      user: 'john.doe@equity.co.ke',
      phone: '+254 712 345 678',
      threatLevel: 'Critical',
      levelColor: '#ff4757',
      file: 'malware.exe',
      timestamp: '2m ago',
      riskScore: 87
    },
    {
      id: 2,
      user: 'sarah.williams@sha.org',
      phone: '+254 723 456 789',
      threatLevel: 'High',
      levelColor: '#fdcb6e',
      file: 'suspicious_script.ps1',
      timestamp: '5m ago',
      riskScore: 75
    },
    {
      id: 3,
      user: 'mike.jones@company.co.ke',
      phone: '+254 734 567 890',
      threatLevel: 'Medium',
      levelColor: '#00d4ff',
      file: 'data_export.zip',
      timestamp: '12m ago',
      riskScore: 58
    }
  ]);

  const pendingReviews = pendingReviewsState.filter(review => !dismissedUsers.includes(review.id));

  const handleApproveBlock = (user: string, userId: number) => {
    setBlockedUser(user);
    setShowBlockPopup(true);
    // Remove from pending reviews
    setDismissedUsers([...dismissedUsers, userId]);
    // Store in localStorage to sync with dashboard
    const dismissed = JSON.parse(localStorage.getItem('dismissedUsers') || '[]');
    dismissed.push(user);
    localStorage.setItem('dismissedUsers', JSON.stringify(dismissed));
  };

  const handleCallUser = (user: string, phone: string) => {
    setCallUserData({ user, phone });
    setShowCallPopup(true);
  };

  const handleDismiss = (user: string, userId: number) => {
    // Remove from pending reviews
    setDismissedUsers([...dismissedUsers, userId]);
    // Store in localStorage to sync with dashboard
    const dismissed = JSON.parse(localStorage.getItem('dismissedUsers') || '[]');
    dismissed.push(user);
    localStorage.setItem('dismissedUsers', JSON.stringify(dismissed));
  };

  const handleInitiateCall = () => {
    alert(`Calling ${callUserData.user} at ${callUserData.phone}...`);
    setShowCallPopup(false);
  };

  const recentActivity = [
    { time: '14:34', action: 'WhatsApp alert sent to john.doe@equity.co.ke', status: 'success' },
    { time: '14:30', action: 'Voice call initiated to jane.smith@sha.org', status: 'success' },
    { time: '14:25', action: 'User mike.jones@company.co.ke blocked automatically', status: 'warning' },
    { time: '14:20', action: 'Threat review approved by analyst', status: 'success' },
    { time: '14:15', action: 'Failed to send WhatsApp alert - Retrying', status: 'error' }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Agent Dashboard' },
    { id: 'reviews', label: 'Pending Reviews' },
    { id: 'manual', label: 'Manual Controls' }
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Kenyan flag stripe accent */}
      <div className="fixed top-0 left-0 right-0 h-2 flex z-50">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#BB0000]" />
        <div className="flex-1 bg-[#006600]" />
      </div>

      {/* Header */}
      <div className="mb-8 pt-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-[#006600] hover:underline mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>
        <div className="flex items-center gap-3">
          <Phone className="w-12 h-12 text-[#BB0000]" />
          <div>
            <h1 className="text-4xl text-white">CyberSentry Agent</h1>
            <p className="text-[#aaa]">🇰🇪 Automated Response & Manual Intervention</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-[#00d4ff] text-[#0a192f]'
                : 'bg-[#16213e]/60 text-[#aaa] hover:bg-[#16213e]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00cec9]/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <Shield className="w-8 h-8 text-[#00cec9]" />
                <CheckCircle className="w-6 h-6 text-[#00cec9]" />
              </div>
              <h3 className="text-white mb-1">Agent API</h3>
              <p className="text-2xl text-[#00cec9]">ACTIVE</p>
              <p className="text-[#aaa] text-sm">Last ping: 5s ago</p>
            </div>

            <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <Phone className="w-8 h-8 text-[#00d4ff]" />
              </div>
              <h3 className="text-white mb-1">Poll Interval</h3>
              <p className="text-2xl text-[#00d4ff]">3 sec</p>
              <p className="text-[#aaa] text-sm">Auto-adjust enabled</p>
            </div>

            <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00cec9]/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <MessageSquare className="w-8 h-8 text-[#00cec9]" />
                <CheckCircle className="w-6 h-6 text-[#00cec9]" />
              </div>
              <h3 className="text-white mb-1">WhatsApp</h3>
              <p className="text-2xl text-[#00cec9]">CONNECTED</p>
              <p className="text-[#aaa] text-sm">QR authenticated</p>
            </div>

            <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00cec9]/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <Phone className="w-8 h-8 text-[#00cec9]" />
                <CheckCircle className="w-6 h-6 text-[#00cec9]" />
              </div>
              <h3 className="text-white mb-1">Voice Call</h3>
              <p className="text-2xl text-[#00cec9]">READY</p>
              <p className="text-[#aaa] text-sm">Twilio API active</p>
            </div>
          </div>

          {/* Pending Reviews Summary */}
          <div className="bg-black/60 backdrop-blur-lg border-2 border-[#BB0000] rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-white">📋 Pending Reviews</h2>
              <button
                onClick={() => {
                  setShowPendingAlert(true);
                  setTimeout(() => setShowPendingAlert(false), 3000);
                }}
                className="px-4 py-2 bg-[#BB0000] text-white rounded-lg hover:bg-[#990000] transition-colors shadow-lg hover:shadow-[#BB0000]/50"
              >
                View Details
              </button>
            </div>
            
            {/* Alert notification */}
            {showPendingAlert && (
              <div className="mb-4 p-4 bg-[#006600]/20 border-2 border-[#006600] rounded-lg animate-pulse">
                <p className="text-[#006600] text-center">
                  <strong>{pendingReviews.length} users</strong> require immediate review!
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-black/60 p-4 rounded-lg border border-white/30">
                <p className="text-[#aaa] text-sm mb-1">Total Pending</p>
                <p className="text-3xl text-white">{pendingReviews.length}</p>
              </div>
              <div className="bg-[#BB0000]/20 p-4 rounded-lg border border-[#BB0000]">
                <p className="text-[#aaa] text-sm mb-1">Critical</p>
                <p className="text-3xl text-[#BB0000]">1</p>
              </div>
              <div className="bg-[#fdcb6e]/20 p-4 rounded-lg border border-[#fdcb6e]">
                <p className="text-[#aaa] text-sm mb-1">High</p>
                <p className="text-3xl text-[#fdcb6e]">1</p>
              </div>
              <div className="bg-[#006600]/20 p-4 rounded-lg border border-[#006600]">
                <p className="text-[#aaa] text-sm mb-1">Medium</p>
                <p className="text-3xl text-[#006600]">1</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-6">📡 Recent Agent Activity</h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    activity.status === 'success'
                      ? 'bg-[#00cec9]/10 border-l-[#00cec9]'
                      : activity.status === 'warning'
                      ? 'bg-[#fdcb6e]/10 border-l-[#fdcb6e]'
                      : 'bg-[#ff4757]/10 border-l-[#ff4757]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-white">{activity.action}</p>
                    <p className="text-[#aaa] text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="space-y-6">
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-6">🔍 Threats Needing Human Review</h2>
            <div className="space-y-4">
              {pendingReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-[#0a192f]/60 border border-[#00d4ff]/30 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white text-xl mb-1">{review.user}</h3>
                      <p className="text-[#aaa]">File: {review.file}</p>
                      <p className="text-[#aaa] text-sm">Phone: {review.phone}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className="px-4 py-2 rounded text-sm"
                        style={{
                          backgroundColor: `${review.levelColor}20`,
                          color: review.levelColor
                        }}
                      >
                        {review.threatLevel}
                      </span>
                      <p className="text-[#aaa] text-sm mt-2">{review.timestamp}</p>
                    </div>
                  </div>

                  <div className="mb-4 p-4 bg-[#16213e]/60 rounded-lg">
                    <div className="flex items-center justify-between">
                      <p className="text-[#aaa]">Risk Score</p>
                      <p className="text-2xl" style={{ color: review.levelColor }}>
                        {review.riskScore}/100
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleApproveBlock(review.user, review.id)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#ff4757]/20 text-[#ff4757] py-3 rounded-lg hover:bg-[#ff4757]/30 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Approve Block
                    </button>
                    <button 
                      onClick={() => handleCallUser(review.user, review.phone)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#00d4ff]/20 text-[#00d4ff] py-3 rounded-lg hover:bg-[#00d4ff]/30 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Call User
                    </button>
                    <button 
                      onClick={() => handleDismiss(review.user, review.id)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#00cec9]/20 text-[#00cec9] py-3 rounded-lg hover:bg-[#00cec9]/30 transition-colors"
                    >
                      <XCircle className="w-5 h-5" />
                      Dismiss
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'manual' && (
        <div className="space-y-6">
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-6">⚙️ Manual User Controls</h2>
            <div className="space-y-6">
              {/* User Selection */}
              <div>
                <label className="block text-white mb-2">Select User</label>
                <select
                  value={manualControls.selectedUser}
                  onChange={(e) => setManualControls({ ...manualControls, selectedUser: e.target.value })}
                  className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff]"
                >
                  <option value="">Select a user...</option>
                  <option value="john.doe@equity.co.ke">john.doe@equity.co.ke</option>
                  <option value="jane.smith@sha.org">jane.smith@sha.org</option>
                  <option value="mike.jones@company.co.ke">mike.jones@company.co.ke</option>
                  <option value="sarah.williams@sha.org">sarah.williams@sha.org</option>
                </select>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-white mb-2">Reason / Message</label>
                <textarea
                  value={manualControls.reason}
                  onChange={(e) => setManualControls({ ...manualControls, reason: e.target.value })}
                  className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] min-h-32"
                  placeholder="Enter reason or message..."
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#00d4ff]/20 text-[#00d4ff] py-4 rounded-lg hover:bg-[#00d4ff]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!manualControls.selectedUser}
                >
                  <MessageSquare className="w-5 h-5" />
                  Send WhatsApp Alert
                </button>

                <button className="flex items-center justify-center gap-2 bg-[#00cec9]/20 text-[#00cec9] py-4 rounded-lg hover:bg-[#00cec9]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!manualControls.selectedUser}
                >
                  <Phone className="w-5 h-5" />
                  Initiate Voice Call
                </button>

                <button className="flex items-center justify-center gap-2 bg-[#ff4757]/20 text-[#ff4757] py-4 rounded-lg hover:bg-[#ff4757]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!manualControls.selectedUser}
                >
                  <Ban className="w-5 h-5" />
                  Block User
                </button>

                <button className="flex items-center justify-center gap-2 bg-[#00cec9]/20 text-[#00cec9] py-4 rounded-lg hover:bg-[#00cec9]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!manualControls.selectedUser}
                >
                  <CheckCircle className="w-5 h-5" />
                  Unblock User
                </button>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-lg p-6">
            <h3 className="text-[#00d4ff] mb-3">ℹ️ Manual Control Guidelines</h3>
            <ul className="text-[#aaa] space-y-2 list-disc list-inside">
              <li>Always provide a clear reason when taking manual action</li>
              <li>WhatsApp alerts are sent instantly to the user's registered number</li>
              <li>Voice calls use automated messaging system with playback options</li>
              <li>Blocking a user immediately suspends all their access privileges</li>
              <li>All manual actions are logged and auditable</li>
            </ul>
          </div>
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