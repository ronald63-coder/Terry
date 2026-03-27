import { Outlet, useNavigate, useLocation } from 'react-router';
import { Shield, FileSearch, UserSearch, FileBarChart, Activity, Settings, LogOut, RefreshCw } from 'lucide-react';
import logo from '../../assets/2a35603e889e5ab74dc12b9797efb4ba35986a8b.png';

export function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're on login or register page
  const isAuthPage = location.pathname === '/' || location.pathname === '/register';

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Shield },
    { path: '/file-analysis', label: 'File Analysis', icon: FileSearch },
    { path: '/user-monitoring', label: 'User Monitoring', icon: UserSearch },
    { path: '/threat-history', label: 'Threat History', icon: FileBarChart },
    { path: '/system-health', label: 'System Health', icon: Activity },
    { path: '/agent-control', label: 'Agent Control', icon: Settings },
  ];

  const handleRefreshAll = () => {
    window.location.reload();
  };

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-black relative">
        {/* Cybersecurity Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1770159116807-9b2a7bb82294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGFyayUyMG5ldHdvcmslMjBkaWdpdGFsfGVufDF8fHx8MTc3Mjc3MTc5M3ww&ixlib=rb-4.1.0&q=80&w=1080)'
          }}
        />
        {/* Kenyan flag color overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#006600]/20 to-[#BB0000]/20" />
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1f3a] relative flex">
      {/* Cybersecurity Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1770159116807-9b2a7bb82294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGFyayUyMG5ldHdvcmslMjBkaWdpdGFsfGVufDF8fHx8MTc3Mjc3MTc5M3ww&ixlib=rb-4.1.0&q=80&w=1080)'
        }}
      />
      {/* Kenyan flag color overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a]/95 via-[#006600]/10 to-[#BB0000]/10" />

      {/* Left Sidebar */}
      <div className="relative z-20 w-64 bg-[#0f1420]/90 backdrop-blur-lg border-r border-[#00d4ff]/20 flex flex-col">
        {/* User Info */}
        <div className="p-6 border-b border-[#00d4ff]/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#BB0000] to-[#006600] rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">Admin User</p>
              <p className="text-[#aaa] text-xs">admin@ccybersentry.ke</p>
            </div>
          </div>
          <div className="text-xs text-[#006600]">
            Role: 👑 Admin
          </div>
        </div>

        {/* Logout Button */}
        <div className="px-4 py-3">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-[#BB0000] to-[#006600] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#BB0000]/30 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Agent Status */}
        <div className="px-4 py-3">
          <div className="bg-[#006600]/20 border border-[#006600]/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
              <p className="text-[#00ff00] text-sm font-semibold">Agent: CONFIGURED</p>
            </div>
            <p className="text-[#aaa] text-xs">Backend ready</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 px-4 py-6">
          <p className="text-[#aaa] text-xs mb-3 px-2">Navigate</p>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#BB0000] text-white'
                      : 'text-[#aaa] hover:bg-[#1a1f3a] hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Refresh All Button */}
        <div className="px-4 py-3 border-t border-[#00d4ff]/20">
          <button
            onClick={handleRefreshAll}
            className="w-full bg-[#00d4ff]/20 border border-[#00d4ff]/50 text-[#00d4ff] py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#00d4ff]/30 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh All
          </button>
        </div>

        {/* Version */}
        <div className="px-4 py-3 border-t border-[#00d4ff]/20">
          <p className="text-[#aaa] text-xs">🛡️  CYBERSENTRY AI v2.0</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}