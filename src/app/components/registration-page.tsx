import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, User, Mail, Lock, UserCircle, Building, Briefcase, ArrowLeft } from 'lucide-react';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';

export function RegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    department: '',
    role: ''
  });

  const departments = ['IT', 'HR', 'Finance', 'Marketing', 'Engineering', 'Operations'];
  const roles = ['User', 'Analyst', 'Manager', 'Administrator'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (formData.password === formData.confirmPassword) {
      navigate('/');
    }
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '' };
    if (password.length < 4) return { strength: 25, label: 'Weak', color: '#ff4757' };
    if (password.length < 8) return { strength: 50, label: 'Fair', color: '#fdcb6e' };
    if (password.length < 12) return { strength: 75, label: 'Good', color: '#00cec9' };
    return { strength: 100, label: 'Strong', color: '#00d4ff' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Kenyan flag stripe accent */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#BB0000]" />
        <div className="flex-1 bg-[#006600]" />
      </div>

      {/* Registration card */}
      <div className="relative w-full max-w-2xl">
        <div className="backdrop-blur-lg bg-black/80 border-2 border-[#006600] rounded-2xl p-8 shadow-2xl shadow-[#006600]/20">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#006600] hover:underline mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </button>

          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img src={logo} alt="NetGuardian AI" className="w-12 h-12 object-contain" />
              <h1 className="text-4xl text-white">Join NetGuardian</h1>
            </div>
            <p className="text-[#aaa]">Create your account</p>
            <p className="text-[#BB0000] text-sm mt-1">🇰🇪 Securing Kenya's Digital Future</p>
          </div>

          {/* Registration form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00d4ff]" />
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#aaa] focus:outline-none focus:border-[#00d4ff] transition-colors"
                    placeholder="Username"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00d4ff]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#aaa] focus:outline-none focus:border-[#00d4ff] transition-colors"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-white mb-2">Full Name</label>
                <div className="relative">
                  <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00d4ff]" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#aaa] focus:outline-none focus:border-[#00d4ff] transition-colors"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00d4ff]" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#aaa] focus:outline-none focus:border-[#00d4ff] transition-colors"
                    placeholder="Password"
                    required
                  />
                </div>
                {/* Password strength indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="h-2 bg-[#0a192f]/80 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300"
                        style={{
                          width: `${passwordStrength.strength}%`,
                          backgroundColor: passwordStrength.color
                        }}
                      />
                    </div>
                    <p className="text-sm mt-1" style={{ color: passwordStrength.color }}>
                      {passwordStrength.label}
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-white mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00d4ff]" />
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#aaa] focus:outline-none focus:border-[#00d4ff] transition-colors"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Department</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00d4ff]" />
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] transition-colors"
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Role</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00d4ff]" />
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#0a192f]/80 border border-[#00d4ff]/50 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] transition-colors"
                    required
                  >
                    <option value="">Select Role</option>
                    {roles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00d4ff] to-[#00cec9] text-[#0a192f] py-3 rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all transform hover:scale-105"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center mt-8 gap-4">
        <img src={logo} alt="NetGuardian AI Logo" className="w-24 h-24 object-contain" />
        <p className="text-[#aaa] text-sm">© 2026 NIRU AI - Hackathon</p>
      </div>
    </div>
  );
}