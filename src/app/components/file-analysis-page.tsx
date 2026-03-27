import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, Upload, FileCode, Database, Brain, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { api } from '../../utils/api';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';

export function FileAnalysisPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (file && !isAnalyzing) {
      setIsAnalyzing(true);
      try {
        console.log('Sending file for analysis:', file.name);
        
        // Call backend API for analysis
        const response = await api.analyzeFile({
          name: file.name,
          size: file.size,
          type: file.type
        }, 'admin@cybersentry.co.ke');
        
        console.log('Analysis response:', response);
        
        // Navigate to results page with real analysis data
        navigate('/scan-results', { 
          state: { 
            file: { name: file.name, size: file.size, type: file.type },
            analysis: response.analysis
          } 
        });
      } catch (error) {
        console.error('Error analyzing file:', error);
        alert('Failed to analyze file. Please try again.');
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  const fileTypes = ['EXE', 'DLL', 'PDF', 'DOC', 'ZIP'];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-[#00d4ff] hover:underline"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <button
            onClick={() => navigate('/backend-test')}
            className="px-4 py-2 bg-[#00d4ff]/20 text-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/30 transition-colors font-[Abel] text-[10px]"
          >
            🔧 Backend Test
          </button>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-12 h-12 text-[#00d4ff]" />
          <div>
            <h1 className="text-4xl text-white">Pre-Database Security Gate</h1>
            <p className="text-[#aaa]">4-Layer File Analysis System</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Upload Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Security Gate Layers */}
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-6">🛡️ Security Gate Layers</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#0a192f]/60 border border-[#00d4ff]/30 rounded-lg">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-full flex items-center justify-center">
                  <FileCode className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-1">Layer 1: File Type Verification</h3>
                  <p className="text-[#aaa] text-sm">Is this really a PDF?</p>
                </div>
                <CheckCircle className="w-6 h-6 text-[#00cec9]" />
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#0a192f]/60 border border-[#00d4ff]/30 rounded-lg">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-1">Layer 2: YARA Malware Scan</h3>
                  <p className="text-[#aaa] text-sm">2,500+ rules</p>
                </div>
                <CheckCircle className="w-6 h-6 text-[#00cec9]" />
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#0a192f]/60 border border-[#00d4ff]/30 rounded-lg">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-1">Layer 3: AI Behavioral Analysis</h3>
                  <p className="text-[#aaa] text-sm">94% accuracy</p>
                </div>
                <CheckCircle className="w-6 h-6 text-[#00cec9]" />
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#0a192f]/60 border border-[#00d4ff]/30 rounded-lg">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-full flex items-center justify-center">
                  <Database className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-1">Layer 4: Agent Decision</h3>
                  <p className="text-[#aaa] text-sm">PASS/BLOCK in 3s</p>
                </div>
                {file ? (
                  <CheckCircle className="w-6 h-6 text-[#00cec9]" />
                ) : (
                  <XCircle className="w-6 h-6 text-[#aaa]" />
                )}
              </div>
            </div>
          </div>

          {/* Upload Area */}
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-6">📁 File Upload</h2>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                isDragging
                  ? 'border-[#00d4ff] bg-[#00d4ff]/10'
                  : 'border-[#00d4ff]/50 bg-[#0a192f]/60'
              }`}
            >
              <Upload className="w-16 h-16 text-[#00d4ff] mx-auto mb-4" />
              <p className="text-white text-xl mb-2">Drop File for Analysis</p>
              <p className="text-[#aaa] mb-4">or click to browse</p>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block px-6 py-2 bg-[#00d4ff]/20 text-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/30 cursor-pointer transition-colors"
              >
                Choose File
              </label>

              <div className="flex items-center justify-center gap-2 mt-6">
                {fileTypes.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 bg-[#00d4ff]/20 text-[#00d4ff] rounded text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* File Info */}
          {file && (
            <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
              <h2 className="text-2xl text-white mb-4">📄 File Information</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#0a192f]/60 p-4 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">Filename</p>
                  <p className="text-white truncate">{file.name}</p>
                </div>
                <div className="bg-[#0a192f]/60 p-4 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">File Size</p>
                  <p className="text-white">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
                <div className="bg-[#0a192f]/60 p-4 rounded-lg">
                  <p className="text-[#aaa] text-sm mb-1">File Type</p>
                  <p className="text-white">{file.type || 'Unknown'}</p>
                </div>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full mt-6 bg-gradient-to-r from-[#00d4ff] to-[#00cec9] text-[#0a192f] py-3 rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? '🔄 Analyzing...' : 'Analyze File'}
              </button>
            </div>
          )}
        </div>

        {/* Quick Stats Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#ff4757]/30 rounded-lg p-6">
            <h3 className="text-white mb-2">🚨 Threats Today</h3>
            <p className="text-4xl text-[#ff4757]">34</p>
          </div>

          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00d4ff]/30 rounded-lg p-6">
            <h3 className="text-white mb-2">📊 Files Scanned</h3>
            <p className="text-4xl text-[#00d4ff]">1,247</p>
          </div>

          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#00cec9]/30 rounded-lg p-6">
            <h3 className="text-white mb-2">🤖 Active AI Models</h3>
            <p className="text-4xl text-[#00cec9]">5</p>
          </div>

          <div className="bg-[#16213e]/60 backdrop-blur-lg border border-[#fdcb6e]/30 rounded-lg p-6">
            <h3 className="text-white mb-2">📋 YARA Rules</h3>
            <p className="text-4xl text-[#fdcb6e]">2,500+</p>
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