import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, User, Lock, LogIn } from 'lucide-react';
import logo from   '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';

export function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login
    if (username && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Kenyan flag stripe accent */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#BB0000]" />
        <div className="flex-1 bg-[#006600]" />
      </div>

      {/* Login card */}
      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-lg bg-black/80 border-2 border-[#BB0000] rounded-2xl p-8 shadow-2xl shadow-[#BB0000]/20">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="NetGuardian AI Logo" className="w-32 h-32 mx-auto mb-4 object-contain" />
            <div className="flex items-center justify-center gap-3 mb-2">
              <h1 className="text-4xl text-white">CYBERSENTRY AI</h1>
            </div>
            <p className="text-[#aaa]">Insider Threat Protection</p>
          </div>

          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BB0000]" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black/60 border border-[#BB0000]/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#aaa] focus:outline-none focus:border-[#BB0000] focus:ring-2 focus:ring-[#BB0000]/30 transition-all"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BB0000]" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/60 border border-[#BB0000]/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#aaa] focus:outline-none focus:border-[#BB0000] focus:ring-2 focus:ring-[#BB0000]/30 transition-all"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#BB0000] to-[#006600] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#BB0000]/50 transition-all transform hover:scale-105"
            >
              <LogIn className="w-5 h-5" />
              Login
            </button>
          </form>

          {/* Sign up link */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/register')}
              className="text-[#006600] hover:underline"
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}