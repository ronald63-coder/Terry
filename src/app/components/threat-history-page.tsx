import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Shield, ArrowLeft, FileDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';

export function ThreatHistoryPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const threatLevelDistribution = useMemo(() => [
    { name: 'Critical', value: 23, color: '#ff4757', id: 'threat-critical' },
    { name: 'High', value: 45, color: '#fdcb6e', id: 'threat-high' },
    { name: 'Medium', value: 78, color: '#00d4ff', id: 'threat-medium' },
    { name: 'Low', value: 120, color: '#00cec9', id: 'threat-low' }
  ], []);

  const threatsByHour = useMemo(() => [
    { id: 'hour-00', hour: '00:00', threats: 5 },
    { id: 'hour-03', hour: '03:00', threats: 3 },
    { id: 'hour-06', hour: '06:00', threats: 8 },
    { id: 'hour-09', hour: '09:00', threats: 15 },
    { id: 'hour-12', hour: '12:00', threats: 22 },
    { id: 'hour-15', hour: '15:00', threats: 18 },
    { id: 'hour-18', hour: '18:00', threats: 12 },
    { id: 'hour-21', hour: '21:00', threats: 9 }
  ], []);

  const threatsOverTime = useMemo(() => [
    { id: 'day-mon', date: 'Mon', critical: 4, high: 8, medium: 12, low: 20 },
    { id: 'day-tue', date: 'Tue', critical: 6, high: 10, medium: 15, low: 25 },
    { id: 'day-wed', date: 'Wed', critical: 5, high: 7, medium: 10, low: 18 },
    { id: 'day-thu', date: 'Thu', critical: 3, high: 9, medium: 14, low: 22 },
    { id: 'day-fri', date: 'Fri', critical: 5, high: 11, medium: 17, low: 35 }
  ], []);

  const allThreatHistory = useMemo(() => [
    // Page 1
    {
      id: 'threat-1',
      time: '10:34:23',
      user: 'john.doe@equity.co.ke',
      level: 'Critical',
      levelColor: '#ff4757',
      verdict: 'BLOCKED',
      file: 'malware.exe',
      action: 'Quarantined',
      confidence: '94%',
      riskScore: 87
    },
    {
      id: 'threat-2',
      time: '09:15:42',
      user: 'jane.smith@sha.org',
      level: 'High',
      levelColor: '#fdcb6e',
      verdict: 'SUSPICIOUS',
      file: 'data_export.zip',
      action: 'Flagged',
      confidence: '82%',
      riskScore: 73
    },
    {
      id: 'threat-3',
      time: '08:45:11',
      user: 'mike.jones@company.co.ke',
      level: 'Medium',
      levelColor: '#00d4ff',
      verdict: 'REVIEWED',
      file: 'report.pdf',
      action: 'Allowed',
      confidence: '68%',
      riskScore: 45
    },
    {
      id: 'threat-4',
      time: '08:20:33',
      user: 'sarah.w@company.co.ke',
      level: 'Low',
      levelColor: '#00cec9',
      verdict: 'SAFE',
      file: 'document.docx',
      action: 'Allowed',
      confidence: '95%',
      riskScore: 12
    },
    {
      id: 'threat-5',
      time: '07:55:17',
      user: 'tom.brown@equity.co.ke',
      level: 'Critical',
      levelColor: '#ff4757',
      verdict: 'BLOCKED',
      file: 'trojan.dll',
      action: 'Quarantined',
      confidence: '98%',
      riskScore: 92
    },
    // Page 2
    {
      id: 'threat-6',
      time: '14:22:45',
      user: 'peter.kamau@sha.org',
      level: 'High',
      levelColor: '#fdcb6e',
      verdict: 'SUSPICIOUS',
      file: 'suspicious_macro.xlsm',
      action: 'Flagged',
      confidence: '87%',
      riskScore: 78
    },
    {
      id: 'threat-7',
      time: '13:18:32',
      user: 'mary.njeri@company.co.ke',
      level: 'Medium',
      levelColor: '#00d4ff',
      verdict: 'REVIEWED',
      file: 'external_link.html',
      action: 'Allowed',
      confidence: '71%',
      riskScore: 52
    },
    {
      id: 'threat-8',
      time: '12:45:09',
      user: 'david.omondi@equity.co.ke',
      level: 'Critical',
      levelColor: '#ff4757',
      verdict: 'BLOCKED',
      file: 'ransomware.bin',
      action: 'Quarantined',
      confidence: '99%',
      riskScore: 95
    },
    {
      id: 'threat-9',
      time: '11:30:21',
      user: 'grace.wanjiku@sha.org',
      level: 'Low',
      levelColor: '#00cec9',
      verdict: 'SAFE',
      file: 'presentation.pptx',
      action: 'Allowed',
      confidence: '93%',
      riskScore: 15
    },
    {
      id: 'threat-10',
      time: '10:55:44',
      user: 'james.mwangi@company.co.ke',
      level: 'High',
      levelColor: '#fdcb6e',
      verdict: 'SUSPICIOUS',
      file: 'keylogger.exe',
      action: 'Flagged',
      confidence: '89%',
      riskScore: 81
    },
    // Page 3
    {
      id: 'threat-11',
      time: '16:40:12',
      user: 'ann.mutua@equity.co.ke',
      level: 'Medium',
      levelColor: '#00d4ff',
      verdict: 'REVIEWED',
      file: 'unknown_script.ps1',
      action: 'Flagged',
      confidence: '65%',
      riskScore: 48
    },
    {
      id: 'threat-12',
      time: '15:28:33',
      user: 'joseph.kipchoge@sha.org',
      level: 'Critical',
      levelColor: '#ff4757',
      verdict: 'BLOCKED',
      file: 'backdoor.dll',
      action: 'Quarantined',
      confidence: '97%',
      riskScore: 90
    },
    {
      id: 'threat-13',
      time: '14:12:55',
      user: 'lucy.akinyi@company.co.ke',
      level: 'Low',
      levelColor: '#00cec9',
      verdict: 'SAFE',
      file: 'invoice.pdf',
      action: 'Allowed',
      confidence: '96%',
      riskScore: 10
    },
    {
      id: 'threat-14',
      time: '13:45:18',
      user: 'brian.kibet@equity.co.ke',
      level: 'High',
      levelColor: '#fdcb6e',
      verdict: 'SUSPICIOUS',
      file: 'phishing_page.html',
      action: 'Flagged',
      confidence: '85%',
      riskScore: 76
    },
    {
      id: 'threat-15',
      time: '12:20:47',
      user: 'faith.chebet@sha.org',
      level: 'Medium',
      levelColor: '#00d4ff',
      verdict: 'REVIEWED',
      file: 'encrypted_file.7z',
      action: 'Allowed',
      confidence: '70%',
      riskScore: 50
    }
  ], []);

  const totalPages = Math.ceil(allThreatHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentThreats = allThreatHistory.slice(startIndex, endIndex);

  const handleExportCSV = () => {
    const headers = ['Time', 'User', 'Threat Level', 'Verdict', 'File', 'Action', 'Confidence', 'Risk Score'];
    const csvContent = [
      headers.join(','),
      ...allThreatHistory.map(threat => 
        `${threat.time},${threat.user},${threat.level},${threat.verdict},${threat.file},${threat.action},${threat.confidence},${threat.riskScore}`
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `threat_history_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const handleExportJSON = () => {
    const jsonContent = JSON.stringify(allThreatHistory, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `threat_history_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const handleExportPDF = () => {
    // Create a simple text-based PDF content
    const pdfContent = `
NETGUARDIAN AI - THREAT HISTORY REPORT
Date: ${new Date().toLocaleDateString()}
========================================

${allThreatHistory.map((threat, index) => `
${index + 1}. ${threat.user}
   Time: ${threat.time}
   Threat Level: ${threat.level}
   Verdict: ${threat.verdict}
   File: ${threat.file}
   Action: ${threat.action}
   Confidence: ${threat.confidence}
   Risk Score: ${threat.riskScore}/100
   -----------------------------------
`).join('\n')}

Total Threats: ${allThreatHistory.length}
Report Generated: ${new Date().toLocaleString()}
    `.trim();
    
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `threat_history_report_${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
            <h1 className="text-4xl text-white">Threat History</h1>
            <p className="text-[#aaa]">Complete Threat Analysis & Reports</p>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Threat Level Distribution */}
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
          <h2 className="text-2xl text-white mb-6">📊 Threat Level Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={threatLevelDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
              >
                {threatLevelDistribution.map((entry) => (
                  <Cell key={`threat-level-${entry.id}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Threats by Hour */}
        <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
          <h2 className="text-2xl text-white mb-6">📈 Threats by Hour</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={threatsByHour}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00d4ff20" />
              <XAxis dataKey="hour" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#16213e',
                  border: '1px solid #00d4ff',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="threats" stroke="#00d4ff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Threats Over Time */}
        <div className="lg:col-span-2 bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
          <h2 className="text-2xl text-white mb-6">📊 Threats Over Time (Last 5 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={threatsOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00d4ff20" />
              <XAxis dataKey="date" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#16213e',
                  border: '1px solid #00d4ff',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="critical" fill="#ff4757" />
              <Bar dataKey="high" fill="#fdcb6e" />
              <Bar dataKey="medium" fill="#00d4ff" />
              <Bar dataKey="low" fill="#00cec9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Threat History Table */}
      <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-white">🗂️ Detailed Threat History</h2>
          <div className="flex gap-2">
            <button 
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/20 text-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/30 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              CSV
            </button>
            <button 
              onClick={handleExportJSON}
              className="flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/20 text-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/30 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              JSON
            </button>
            <button 
              onClick={handleExportPDF}
              className="flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/20 text-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/30 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              PDF
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#00d4ff]/30">
                <th className="text-left text-[#aaa] p-3">Time</th>
                <th className="text-left text-[#aaa] p-3">User</th>
                <th className="text-left text-[#aaa] p-3">Threat Level</th>
                <th className="text-left text-[#aaa] p-3">Verdict</th>
                <th className="text-left text-[#aaa] p-3">File</th>
                <th className="text-left text-[#aaa] p-3">Action</th>
                <th className="text-left text-[#aaa] p-3">Confidence</th>
                <th className="text-left text-[#aaa] p-3">Risk Score</th>
              </tr>
            </thead>
            <tbody>
              {currentThreats.map((threat) => (
                <tr
                  key={threat.id}
                  className="border-b border-[#00d4ff]/10 hover:bg-[#0a192f]/40 transition-colors"
                >
                  <td className="p-3 text-white">{threat.time}</td>
                  <td className="p-3 text-white">{threat.user}</td>
                  <td className="p-3">
                    <span
                      className="px-3 py-1 rounded text-sm"
                      style={{
                        backgroundColor: `${threat.levelColor}20`,
                        color: threat.levelColor
                      }}
                    >
                      {threat.level}
                    </span>
                  </td>
                  <td className="p-3 text-white">{threat.verdict}</td>
                  <td className="p-3 text-white font-mono text-sm">{threat.file}</td>
                  <td className="p-3 text-white">{threat.action}</td>
                  <td className="p-3 text-[#00d4ff]">{threat.confidence}</td>
                  <td className="p-3">
                    <span
                      className="px-3 py-1 rounded text-sm"
                      style={{
                        backgroundColor: `${threat.levelColor}20`,
                        color: threat.levelColor
                      }}
                    >
                      {threat.riskScore}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-[#aaa]">
            Showing {startIndex + 1}-{Math.min(endIndex, allThreatHistory.length)} of {allThreatHistory.length} threats
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[#0a192f]/60 text-[#aaa] rounded-lg hover:bg-[#0a192f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-[#00d4ff] text-[#0a192f]'
                    : 'bg-[#0a192f]/60 text-white hover:bg-[#0a192f]'
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[#0a192f]/60 text-white rounded-lg hover:bg-[#0a192f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center mt-8 gap-4">
        <img src={logo} alt="NetGuardian AI Logo" className="w-32 h-32 object-contain" />
        <p className="text-[#aaa] text-sm">© 2026 NIRU AI - Hackathon</p>
      </div>
    </div>
  );
}