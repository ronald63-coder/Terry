import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, ArrowLeft, CheckCircle } from 'lucide-react';
import { api } from '../../utils/api';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';
import nc4Logo from '../../assets/63fc5cb358795522eb03a21b2b98de3ecdbcf7bb.png';

export function NC4ReportingPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportData, setReportData] = useState({
    incidentType: '',
    severity: 50,
    description: '',
    organization: ''
  });
  const [reportId, setReportId] = useState('');

  const incidentTypes = [
    'Data Breach',
    'Unauthorized Access',
    'Malware Detection',
    'Insider Threat',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reportData.incidentType || !reportData.description) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    try {
      console.log('Submitting NC4 report:', reportData);
      
      // Submit to backend
      const response = await api.submitNC4Report({
        incidentType: reportData.incidentType,
        severity: getSeverityLabel(reportData.severity).label,
        description: reportData.description,
        organization: reportData.organization
      });
      
      console.log('NC4 Report response:', response);
      
      setReportId(response.reportId);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting NC4 report:', error);
      alert('Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSeverityLabel = (value: number) => {
    if (value < 25) return { label: 'LOW', color: '#00cec9' };
    if (value < 50) return { label: 'MEDIUM', color: '#00d4ff' };
    if (value < 75) return { label: 'HIGH', color: '#fdcb6e' };
    return { label: 'CRITICAL', color: '#ff4757' };
  };

  const severityInfo = getSeverityLabel(reportData.severity);

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
            <h1 className="text-4xl text-white">NC4 Incident Reporting</h1>
            <p className="text-[#aaa]">National Kenya Computer Incident Response Team - Coordination Centre</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {!submitted ? (
          // Report Form
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-8">
            <div className="mb-6 pb-6 border-b border-[#00d4ff]/30">
              <h2 className="text-2xl text-white mb-2">📡 Submit Incident Report</h2>
              <p className="text-[#aaa]">
                Report cybersecurity incidents to the National Kenya Computer Incident Response Team
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Incident Type */}
              <div>
                <label className="block text-white mb-3 text-lg">Incident Type *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {incidentTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setReportData({ ...reportData, incidentType: type })}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        reportData.incidentType === type
                          ? 'border-[#00d4ff] bg-[#00d4ff]/20 text-white'
                          : 'border-[#00d4ff]/30 bg-[#0a192f]/60 text-[#aaa] hover:border-[#00d4ff]/50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Severity Slider */}
              <div>
                <label className="block text-white mb-3 text-lg">
                  Severity Level: <span style={{ color: severityInfo.color }}>{severityInfo.label}</span>
                </label>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={reportData.severity}
                    onChange={(e) => setReportData({ ...reportData, severity: parseInt(e.target.value) })}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #00cec9 0%, #00d4ff 33%, #fdcb6e 66%, #ff4757 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-[#00cec9]">LOW</span>
                    <span className="text-[#00d4ff]">MEDIUM</span>
                    <span className="text-[#fdcb6e]">HIGH</span>
                    <span className="text-[#ff4757]">CRITICAL</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-white mb-3 text-lg">Incident Description *</label>
                <textarea
                  value={reportData.description}
                  onChange={(e) => setReportData({ ...reportData, description: e.target.value })}
                  className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg px-4 py-3 text-white placeholder-[#aaa] focus:outline-none focus:border-[#00d4ff] min-h-48"
                  placeholder="Provide detailed information about the incident, including:&#10;- What happened?&#10;- When did it occur?&#10;- What systems were affected?&#10;- What actions have been taken?&#10;- Any evidence or indicators of compromise?"
                  required
                />
              </div>

              {/* Organization */}
              <div>
                <label className="block text-white mb-3 text-lg">Organization</label>
                <input
                  type="text"
                  value={reportData.organization}
                  onChange={(e) => setReportData({ ...reportData, organization: e.target.value })}
                  className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg px-4 py-3 text-white placeholder-[#aaa] focus:outline-none focus:border-[#00d4ff]"
                  placeholder="Enter the name of your organization"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff4757] to-[#fdcb6e] text-white py-4 rounded-lg text-lg hover:shadow-lg hover:shadow-[#ff4757]/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !reportData.incidentType || !reportData.description}
              >
                {isSubmitting ? 'Submitting...' : 'Submit NC4 Report'}
              </button>

              <p className="text-[#aaa] text-sm text-center">
                * Required fields. All reports are encrypted and sent securely to NC4.
              </p>
            </form>
          </div>
        ) : (
          // Confirmation View
          <div className="space-y-6">
            <div className="bg-[#00cec9]/20 border-2 border-[#00cec9] rounded-lg p-8 text-center">
              <CheckCircle className="w-20 h-20 text-[#00cec9] mx-auto mb-4" />
              <h2 className="text-3xl text-white mb-2">Report Submitted Successfully!</h2>
              <p className="text-[#aaa] mb-6">
                Your incident has been reported to the National Kenya Computer Incident Response Team
              </p>
              <div className="inline-block bg-[#0a192f]/60 px-6 py-3 rounded-lg">
                <p className="text-[#aaa] text-sm mb-1">Incident ID</p>
                <p className="text-2xl text-[#00cec9] font-mono">{reportId}</p>
              </div>
            </div>

            <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
              <h3 className="text-xl text-white mb-4">📋 Report Details</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#0a192f]/60 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">Incident Type</p>
                  <p className="text-white text-lg">{reportData.incidentType}</p>
                </div>

                <div className="p-4 bg-[#0a192f]/60 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">Severity Level</p>
                  <p className="text-lg" style={{ color: severityInfo.color }}>
                    {severityInfo.label} ({reportData.severity}/100)
                  </p>
                </div>

                <div className="p-4 bg-[#0a192f]/60 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">Description</p>
                  <p className="text-white whitespace-pre-wrap">{reportData.description}</p>
                </div>

                <div className="p-4 bg-[#0a192f]/60 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">Submitted At</p>
                  <p className="text-white">{new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
              <h3 className="text-xl text-white mb-4">📊 Report JSON Data</h3>
              <pre className="text-[#00d4ff] text-sm overflow-x-auto bg-[#0a192f]/60 p-4 rounded-lg">
                {JSON.stringify(
                  {
                    reportId,
                    timestamp: new Date().toISOString(),
                    organization: 'CYBERSENTRY AI',
                    incidentType: reportData.incidentType,
                    severity: severityInfo.label,
                    severityScore: reportData.severity,
                    description: reportData.description,
                    reportedBy: 'System Administrator',
                    status: 'SUBMITTED',
                    nc4Compliance: true
                  },
                  null,
                  2
                )}
              </pre>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setReportData({ incidentType: '', severity: 50, description: '', organization: '' });
                }}
                className="flex-1 bg-[#00d4ff]/20 text-[#00d4ff] py-3 rounded-lg hover:bg-[#00d4ff]/30 transition-colors"
              >
                Submit Another Report
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="flex-1 bg-gradient-to-r from-[#00d4ff] to-[#00cec9] text-[#0a192f] py-3 rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}

        {/* NC4 Info */}
        <div className="mt-8 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <img src={nc4Logo} alt="NC4 Logo" className="w-24 h-auto object-contain" />
            <div className="flex-1">
              <h3 className="text-[#00d4ff] mb-3">ℹ️ About NC4 Reporting</h3>
              <ul className="text-[#aaa] space-y-2 list-disc list-inside">
                <li>NC4 is Kenya's National Computer Incident Response Team - Coordination Centre</li>
                <li>All reports are handled with strict confidentiality</li>
                <li>You will receive a follow-up within 24-48 hours</li>
                <li>Keep your Incident ID for reference in all communications</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#00d4ff]/20">
            <h4 className="text-white mb-2">📞 NC4 Contact Information</h4>
            <div className="space-y-1">
              <p className="text-[#aaa]"><span className="text-[#00d4ff]">Cybercrime Hotline:</span> +254 716148341</p>
              <p className="text-[#aaa]"><span className="text-[#00d4ff]">Email:</span> info@nc4.go.ke</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-center mt-8 gap-4">
          <img src={logo} alt="NetGuardian AI Logo" className="w-32 h-32 object-contain" />
          <p className="text-[#aaa] text-sm">© 2026 NIRU AI - Hackathon</p>
        </div>
      </div>
    </div>
  );
}