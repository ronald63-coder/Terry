import { projectId, publicAnonKey } from '/utils/supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-30fe5f13`;

// API Helper class
class NetGuardianAPI {
  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      console.error(`API Error (${endpoint}):`, error);
      throw new Error(error.error || `Request failed: ${response.statusText}`);
    }

    return response.json();
  }

  // Health Check
  async healthCheck() {
    return this.request('/health');
  }

  // File Analysis
  async analyzeFile(file: { name: string; size: number; type: string }, user?: string) {
    return this.request('/analyze-file', {
      method: 'POST',
      body: JSON.stringify({ file, user }),
    });
  }

  // Get Scans
  async getScans() {
    return this.request('/scans');
  }

  // Get Threats
  async getThreats() {
    return this.request('/threats');
  }

  // User Monitoring
  async monitorUser(userId: string, action: string, details?: any) {
    return this.request('/monitor-user', {
      method: 'POST',
      body: JSON.stringify({ userId, action, details }),
    });
  }

  // Get Users
  async getUsers() {
    return this.request('/users');
  }

  // Agent Actions
  async executeAgentAction(action: string, userId: string, reason?: string) {
    return this.request('/agent/action', {
      method: 'POST',
      body: JSON.stringify({ action, userId, reason }),
    });
  }

  // Get Agent Status
  async getAgentStatus() {
    return this.request('/agent/status');
  }

  // System Health
  async getSystemHealth() {
    return this.request('/system-health');
  }

  // NC4 Reporting
  async submitNC4Report(data: {
    incidentType: string;
    severity: string;
    description: string;
    organization?: string;
  }) {
    return this.request('/nc4/report', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Get NC4 Reports
  async getNC4Reports() {
    return this.request('/nc4/reports');
  }

  // Dashboard Stats
  async getDashboardStats() {
    return this.request('/dashboard/stats');
  }
}

export const api = new NetGuardianAPI();