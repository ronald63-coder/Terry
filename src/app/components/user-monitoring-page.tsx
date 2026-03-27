import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, ArrowLeft, Eye, Ban, AlertTriangle, Clock, FileText, MapPin } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { jsPDF } from 'jspdf';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';

export function UserMonitoringPage() {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const riskDistribution = [
    { name: 'High Risk', value: 45, color: '#ff4757', id: 'high-risk-dist' },
    { name: 'Medium Risk', value: 120, color: '#fdcb6e', id: 'medium-risk-dist' },
    { name: 'Low Risk', value: 1082, color: '#00cec9', id: 'low-risk-dist' }
  ];

  // Function to generate PDF report
  const generateRiskReport = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    
    // Header
    doc.setFillColor(10, 25, 47);
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    doc.setTextColor(0, 212, 255);
    doc.setFontSize(24);
    doc.text('NETGUARDIAN AI', pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text('User Risk Assessment Report', pageWidth / 2, 30, { align: 'center' });
    
    // Reset text color for body
    doc.setTextColor(0, 0, 0);
    
    // Report Date
    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 50);
    doc.text('National Cybersecurity Operations Centre', 14, 56);
    
    // Risk Distribution Summary
    doc.setFontSize(16);
    doc.text('Risk Distribution Summary', 14, 70);
    
    doc.setFontSize(12);
    let yPos = 80;
    
    doc.setTextColor(255, 71, 87);
    doc.text(`High Risk Users: ${riskDistribution[0].value}`, 20, yPos);
    yPos += 8;
    
    doc.setTextColor(253, 203, 110);
    doc.text(`Medium Risk Users: ${riskDistribution[1].value}`, 20, yPos);
    yPos += 8;
    
    doc.setTextColor(0, 206, 201);
    doc.text(`Low Risk Users: ${riskDistribution[2].value}`, 20, yPos);
    yPos += 8;
    
    doc.setTextColor(0, 0, 0);
    const totalUsers = riskDistribution.reduce((sum, item) => sum + item.value, 0);
    doc.text(`Total Users Monitored: ${totalUsers}`, 20, yPos);
    yPos += 15;
    
    // Key Statistics
    doc.setFontSize(16);
    doc.text('Key Statistics', 14, yPos);
    yPos += 10;
    
    doc.setFontSize(12);
    doc.text('Protected Users: 1,202', 20, yPos);
    yPos += 8;
    doc.text('Blocked Users: 45', 20, yPos);
    yPos += 8;
    doc.text('Active Monitoring: 24/7', 20, yPos);
    yPos += 15;
    
    // Recommendations
    doc.setFontSize(16);
    doc.text('Recommendations', 14, yPos);
    yPos += 10;
    
    doc.setFontSize(11);
    const recommendations = [
      '• Immediate review required for 45 high-risk users',
      '• Enhanced monitoring recommended for medium-risk group',
      '• Regular security training for all staff members',
      '• Review and update access control policies',
      '• Implement multi-factor authentication for high-risk users'
    ];
    
    recommendations.forEach(rec => {
      doc.text(rec, 20, yPos);
      yPos += 7;
    });
    
    yPos += 10;
    
    // Compliance
    doc.setFontSize(16);
    doc.text('Compliance & Reporting', 14, yPos);
    yPos += 10;
    
    doc.setFontSize(11);
    doc.text('This report complies with:', 20, yPos);
    yPos += 7;
    doc.text('• Kenya Data Protection Act (2019)', 20, yPos);
    yPos += 7;
    doc.text('• NC4 Cybersecurity Guidelines', 20, yPos);
    yPos += 7;
    doc.text('• ISO 27001 Information Security Standards', 20, yPos);
    
    // Footer
    doc.setFontSize(9);
    doc.setTextColor(128, 128, 128);
    const footerY = doc.internal.pageSize.height - 20;
    doc.text('CONFIDENTIAL - For Authorized Personnel Only', pageWidth / 2, footerY, { align: 'center' });
    doc.text('© 2026 NetGuardian AI | FigBuild Hackathon', pageWidth / 2, footerY + 5, { align: 'center' });
    doc.text('🇰🇪 Kenya\'s Digital Security', pageWidth / 2, footerY + 10, { align: 'center' });
    
    // Save the PDF
    doc.save(`NetGuardian_Risk_Report_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@equity.co.ke',
      riskLevel: 'high',
      riskColor: '#ff4757',
      lastAction: 'Attempted unauthorized database access',
      loginTime: '10:34 AM',
      department: 'Finance',
      status: 'blocked',
      recentActivity: [
        { time: '10:34 AM', action: 'Failed database access attempt', severity: 'critical' },
        { time: '10:30 AM', action: 'Downloaded 150 files', severity: 'high' },
        { time: '10:25 AM', action: 'Login from new location', severity: 'medium' }
      ],
      fileAccess: [
        { file: 'customer_data.xlsx', time: '10:32 AM', action: 'Download' },
        { file: 'financial_report_Q1.pdf', time: '10:28 AM', action: 'View' },
        { file: 'payroll.csv', time: '10:20 AM', action: 'Edit' }
      ],
      loginLocations: [
        { ip: '197.232.61.23', location: 'Nairobi, Kenya', time: '10:34 AM' },
        { ip: '41.90.64.15', location: 'Mombasa, Kenya', time: '8:15 AM' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@sha.org',
      riskLevel: 'medium',
      riskColor: '#fdcb6e',
      lastAction: 'Mass file download',
      loginTime: '9:15 AM',
      department: 'Healthcare',
      status: 'active',
      recentActivity: [
        { time: '9:45 AM', action: 'Downloaded 50 patient records', severity: 'medium' },
        { time: '9:20 AM', action: 'Accessed medical database', severity: 'low' }
      ],
      fileAccess: [
        { file: 'patient_records.db', time: '9:45 AM', action: 'Download' }
      ],
      loginLocations: [
        { ip: '41.80.120.45', location: 'Nairobi, Kenya', time: '9:15 AM' }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.j@company.co.ke',
      riskLevel: 'low',
      riskColor: '#00cec9',
      lastAction: 'Regular file access',
      loginTime: '8:00 AM',
      department: 'IT',
      status: 'active',
      recentActivity: [
        { time: '11:00 AM', action: 'Updated system configuration', severity: 'low' },
        { time: '9:30 AM', action: 'Accessed admin panel', severity: 'low' }
      ],
      fileAccess: [
        { file: 'system_config.json', time: '11:00 AM', action: 'Edit' }
      ],
      loginLocations: [
        { ip: '197.232.61.88', location: 'Nairobi, Kenya', time: '8:00 AM' }
      ]
    }
  ];

  const selectedUserData = users.find(u => u.id === selectedUser);

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
          <Shield className="w-12 h-12 text-[#00d4ff]" />
          <div>
            <h1 className="text-4xl text-white">User Monitoring</h1>
            <p className="text-[#aaa]">Real-time Insider Threat Detection</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Risk Distribution Chart */}
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-6">📊 User Risk Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                >
                  {riskDistribution.map((entry) => (
                    <Cell key={`user-risk-${entry.id}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* User Cards */}
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-6">👥 Monitored Users</h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="bg-[#0a192f]/60 border border-[#00d4ff]/30 rounded-lg p-4 hover:border-[#00d4ff] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                        style={{ backgroundColor: user.riskColor }}
                      >
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-white">{user.name}</h3>
                        <p className="text-[#aaa] text-sm">{user.email}</p>
                      </div>
                    </div>
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: user.riskColor }}
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3 text-sm">
                    <div>
                      <p className="text-[#aaa]">Risk Level</p>
                      <p className="text-white capitalize">{user.riskLevel}</p>
                    </div>
                    <div>
                      <p className="text-[#aaa]">Department</p>
                      <p className="text-white">{user.department}</p>
                    </div>
                    <div>
                      <p className="text-[#aaa]">Status</p>
                      <p
                        className={`capitalize ${
                          user.status === 'blocked' ? 'text-[#ff4757]' : 'text-[#00cec9]'
                        }`}
                      >
                        {user.status}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-[#aaa] text-sm mb-1">Last Action</p>
                    <p className="text-white">{user.lastAction}</p>
                    <p className="text-[#aaa] text-sm mt-1">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {user.loginTime}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedUser(user.id)}
                    className="w-full bg-[#00d4ff]/20 text-[#00d4ff] py-2 rounded-lg hover:bg-[#00d4ff]/30 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Expanded User Profile */}
          {selectedUserData && (
            <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-white">User Profile Details</h2>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-[#00d4ff] hover:underline"
                >
                  Close
                </button>
              </div>

              <div className="space-y-6">
                {/* User Header */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl"
                    style={{ backgroundColor: selectedUserData.riskColor }}
                  >
                    {selectedUserData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-2xl text-white">{selectedUserData.name}</h3>
                    <p className="text-[#aaa]">{selectedUserData.email}</p>
                    <div className="flex gap-4 mt-2">
                      <span
                        className="px-3 py-1 rounded text-sm"
                        style={{
                          backgroundColor: `${selectedUserData.riskColor}20`,
                          color: selectedUserData.riskColor
                        }}
                      >
                        Risk: {selectedUserData.riskLevel.toUpperCase()}
                      </span>
                      <span
                        className={`px-3 py-1 rounded text-sm ${
                          selectedUserData.status === 'blocked'
                            ? 'bg-[#ff4757]/20 text-[#ff4757]'
                            : 'bg-[#00cec9]/20 text-[#00cec9]'
                        }`}
                      >
                        {selectedUserData.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-white mb-3">Recent Activity</h3>
                  <div className="space-y-2">
                    {selectedUserData.recentActivity.map((activity, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border-l-4 ${
                          activity.severity === 'critical'
                            ? 'bg-[#ff4757]/10 border-l-[#ff4757]'
                            : activity.severity === 'high'
                            ? 'bg-[#fdcb6e]/10 border-l-[#fdcb6e]'
                            : activity.severity === 'medium'
                            ? 'bg-[#fdcb6e]/10 border-l-[#fdcb6e]'
                            : 'bg-[#00d4ff]/10 border-l-[#00d4ff]'
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

                {/* File Access History */}
                <div>
                  <h3 className="text-white mb-3">File Access History</h3>
                  <div className="space-y-2">
                    {selectedUserData.fileAccess.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-[#0a192f]/60 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-[#00d4ff]" />
                          <div>
                            <p className="text-white">{file.file}</p>
                            <p className="text-[#aaa] text-sm">Action: {file.action}</p>
                          </div>
                        </div>
                        <p className="text-[#aaa] text-sm">{file.time}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Login Locations */}
                <div>
                  <h3 className="text-white mb-3">Login Locations</h3>
                  <div className="space-y-2">
                    {selectedUserData.loginLocations.map((location, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-[#0a192f]/60 rounded-lg">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-[#00d4ff]" />
                          <div>
                            <p className="text-white">{location.location}</p>
                            <p className="text-[#aaa] text-sm">IP: {location.ip}</p>
                          </div>
                        </div>
                        <p className="text-[#aaa] text-sm">{location.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Risk Summary Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#ff4757]/30 rounded-lg p-6">
            <h3 className="text-white mb-2">🔴 High Risk Users</h3>
            <p className="text-4xl text-[#ff4757]">{riskDistribution[0].value}</p>
          </div>

          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#fdcb6e]/30 rounded-lg p-6">
            <h3 className="text-white mb-2">🟡 Medium Risk Users</h3>
            <p className="text-4xl text-[#fdcb6e]">{riskDistribution[1].value}</p>
          </div>

          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00cec9]/30 rounded-lg p-6">
            <h3 className="text-white mb-2">🟢 Low Risk Users</h3>
            <p className="text-4xl text-[#00cec9]">{riskDistribution[2].value}</p>
          </div>

          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
            <h3 className="text-white mb-2">🛡️ Protected Users</h3>
            <p className="text-4xl text-[#00d4ff]">1,202</p>
          </div>

          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#ff4757]/30 rounded-lg p-6">
            <h3 className="text-white mb-2">🚫 Blocked Users</h3>
            <p className="text-4xl text-[#ff4757]">45</p>
          </div>

          <button
            onClick={generateRiskReport}
            className="w-full bg-gradient-to-r from-[#00d4ff] to-[#00cec9] text-[#0a192f] py-3 rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all"
          >
            Generate Risk Report
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center mt-8 gap-4">
        <img src={logo} alt="NetGuardian AI Logo" className="w-32 h-32 object-contain" />
        <p className="text-[#aaa] text-sm">© 2026 WRRIC - Hackathon</p>
      </div>
    </div>
  );
}