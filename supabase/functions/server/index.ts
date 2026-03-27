import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.ts";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

// ============================================
// AI THREAT DETECTION AGENT
// ============================================

// Simulated AI threat analysis engine
function analyzeFileThreat(file: any) {
  const { name, size, type } = file;
  const suspiciousExtensions = ['.exe', '.dll', '.bat', '.cmd', '.ps1', '.vbs', '.js', '.jar', '.msi', '.scr'];
  const suspiciousKeywords = ['malware', 'trojan', 'virus', 'ransomware', 'keylogger', 'backdoor', 'phishing', 'hack'];
  
  let riskScore = 0;
  let threats: string[] = [];
  let confidence = 95;
  
  // Check file extension
  const fileExt = name.toLowerCase().substring(name.lastIndexOf('.'));
  if (suspiciousExtensions.includes(fileExt)) {
    riskScore += 30;
    threats.push(`Suspicious file extension: ${fileExt}`);
  }
  
  // Check filename for suspicious keywords
  const lowerName = name.toLowerCase();
  suspiciousKeywords.forEach(keyword => {
    if (lowerName.includes(keyword)) {
      riskScore += 25;
      threats.push(`Suspicious filename containing: "${keyword}"`);
    }
  });
  
  // Check file size (unusually large or small)
  if (size > 100 * 1024 * 1024) { // > 100MB
    riskScore += 15;
    threats.push('Unusually large file size');
  } else if (size < 1024 && suspiciousExtensions.includes(fileExt)) {
    riskScore += 20;
    threats.push('Suspiciously small executable');
  }
  
  // Random anomaly detection (simulating ML model)
  if (Math.random() > 0.7) {
    riskScore += Math.floor(Math.random() * 20);
    threats.push('Behavioral anomaly detected');
  }
  
  // Determine threat level
  let threatLevel = 'Safe';
  let action = 'allowed';
  if (riskScore >= 70) {
    threatLevel = 'Critical';
    action = 'blocked';
    confidence = 94;
  } else if (riskScore >= 50) {
    threatLevel = 'High';
    action = 'quarantined';
    confidence = 87;
  } else if (riskScore >= 30) {
    threatLevel = 'Medium';
    action = 'flagged';
    confidence = 78;
  } else {
    confidence = 96;
  }
  
  return {
    threatLevel,
    riskScore: Math.min(riskScore, 100),
    threats,
    action,
    confidence,
    timestamp: new Date().toISOString(),
    analysisId: `SCAN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  };
}

// Monitor user behavior for insider threats
function analyzeUserBehavior(actions: any[]) {
  let riskScore = 0;
  let alerts: string[] = [];
  
  // Count suspicious patterns
  const downloadCount = actions.filter(a => a.action === 'download').length;
  const accessAttempts = actions.filter(a => a.action === 'access_denied').length;
  const afterHours = actions.filter(a => {
    const hour = new Date(a.timestamp).getHours();
    return hour < 6 || hour > 22;
  }).length;
  
  if (downloadCount > 50) {
    riskScore += 30;
    alerts.push(`Excessive file downloads: ${downloadCount} files`);
  }
  
  if (accessAttempts > 3) {
    riskScore += 40;
    alerts.push(`Multiple unauthorized access attempts: ${accessAttempts}`);
  }
  
  if (afterHours > 10) {
    riskScore += 25;
    alerts.push(`Unusual after-hours activity: ${afterHours} actions`);
  }
  
  let riskLevel = 'low';
  if (riskScore >= 70) riskLevel = 'critical';
  else if (riskScore >= 50) riskLevel = 'high';
  else if (riskScore >= 30) riskLevel = 'medium';
  
  return { riskScore: Math.min(riskScore, 100), riskLevel, alerts };
}

// ============================================
// API ENDPOINTS
// ============================================

// Health check endpoint
app.get("/make-server-30fe5f13/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// File Analysis - Analyze uploaded files for threats
app.post("/make-server-30fe5f13/analyze-file", async (c) => {
  try {
    const body = await c.req.json();
    const { file, user } = body;
    
    if (!file) {
      return c.json({ error: 'No file provided' }, 400);
    }
    
    console.log(`Analyzing file: ${file.name} for user: ${user || 'unknown'}`);
    
    // Run AI threat analysis
    const analysis = analyzeFileThreat(file);
    
    // Store in KV store
    const scanKey = `scan:${analysis.analysisId}`;
    await kv.set(scanKey, {
      ...analysis,
      file,
      user: user || 'anonymous',
      scanDate: new Date().toISOString()
    });
    
    // Store in threat history if risky
    if (analysis.riskScore >= 30) {
      const threatKey = `threat:${Date.now()}`;
      await kv.set(threatKey, {
        time: new Date().toLocaleTimeString(),
        user: user || 'anonymous',
        level: analysis.threatLevel,
        verdict: analysis.action.toUpperCase(),
        file: file.name,
        action: analysis.action,
        confidence: `${analysis.confidence}%`,
        riskScore: analysis.riskScore,
        timestamp: new Date().toISOString()
      });
    }
    
    console.log(`Analysis complete: ${analysis.threatLevel} - Risk Score: ${analysis.riskScore}`);
    
    return c.json({
      success: true,
      analysis
    });
  } catch (error) {
    console.error('Error analyzing file:', error);
    return c.json({ error: 'Failed to analyze file', details: error.message }, 500);
  }
});

// Get Scan Results
app.get("/make-server-30fe5f13/scans", async (c) => {
  try {
    const scans = await kv.getByPrefix('scan:');
    return c.json({
      success: true,
      scans: scans.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    });
  } catch (error) {
    console.error('Error fetching scans:', error);
    return c.json({ error: 'Failed to fetch scans' }, 500);
  }
});

// Get Threat History
app.get("/make-server-30fe5f13/threats", async (c) => {
  try {
    const threats = await kv.getByPrefix('threat:');
    return c.json({
      success: true,
      threats: threats.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    });
  } catch (error) {
    console.error('Error fetching threats:', error);
    return c.json({ error: 'Failed to fetch threats' }, 500);
  }
});

// User Monitoring - Track user activities
app.post("/make-server-30fe5f13/monitor-user", async (c) => {
  try {
    const body = await c.req.json();
    const { userId, action, details } = body;
    
    if (!userId || !action) {
      return c.json({ error: 'Missing required fields' }, 400);
    }
    
    // Store user action
    const actionKey = `user-action:${userId}:${Date.now()}`;
    await kv.set(actionKey, {
      userId,
      action,
      details,
      timestamp: new Date().toISOString()
    });
    
    // Get recent actions for this user
    const userActions = await kv.getByPrefix(`user-action:${userId}`);
    
    // Analyze behavior
    const behaviorAnalysis = analyzeUserBehavior(userActions);
    
    // Update user risk profile
    const userKey = `user:${userId}`;
    await kv.set(userKey, {
      userId,
      riskScore: behaviorAnalysis.riskScore,
      riskLevel: behaviorAnalysis.riskLevel,
      alerts: behaviorAnalysis.alerts,
      lastUpdated: new Date().toISOString()
    });
    
    return c.json({
      success: true,
      behaviorAnalysis
    });
  } catch (error) {
    console.error('Error monitoring user:', error);
    return c.json({ error: 'Failed to monitor user' }, 500);
  }
});

// Get monitored users
app.get("/make-server-30fe5f13/users", async (c) => {
  try {
    const users = await kv.getByPrefix('user:');
    return c.json({
      success: true,
      users: users.sort((a, b) => b.riskScore - a.riskScore)
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return c.json({ error: 'Failed to fetch users' }, 500);
  }
});

// Agent Control - Manage agent status
app.post("/make-server-30fe5f13/agent/action", async (c) => {
  try {
    const body = await c.req.json();
    const { action, userId, reason } = body;
    
    if (!action || !userId) {
      return c.json({ error: 'Missing required fields' }, 400);
    }
    
    const actionKey = `agent-action:${Date.now()}`;
    await kv.set(actionKey, {
      action,
      userId,
      reason,
      timestamp: new Date().toISOString(),
      status: 'completed'
    });
    
    console.log(`Agent action: ${action} for user ${userId}`);
    
    return c.json({
      success: true,
      message: `Action ${action} completed for user ${userId}`
    });
  } catch (error) {
    console.error('Error executing agent action:', error);
    return c.json({ error: 'Failed to execute action' }, 500);
  }
});

// Get agent status
app.get("/make-server-30fe5f13/agent/status", async (c) => {
  try {
    const threats = await kv.getByPrefix('threat:');
    const users = await kv.getByPrefix('user:');
    const scans = await kv.getByPrefix('scan:');
    
    const highRiskUsers = users.filter(u => u.riskLevel === 'critical' || u.riskLevel === 'high');
    const criticalThreats = threats.filter(t => t.level === 'Critical');
    
    return c.json({
      success: true,
      status: {
        active: true,
        totalScans: scans.length,
        totalThreats: threats.length,
        totalUsers: users.length,
        highRiskUsers: highRiskUsers.length,
        criticalThreats: criticalThreats.length,
        lastUpdate: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error fetching agent status:', error);
    return c.json({ error: 'Failed to fetch agent status' }, 500);
  }
});

// System Health Metrics
app.get("/make-server-30fe5f13/system-health", async (c) => {
  try {
    const threats = await kv.getByPrefix('threat:');
    const scans = await kv.getByPrefix('scan:');
    
    // Calculate metrics
    const now = Date.now();
    const last24h = threats.filter(t => 
      (now - new Date(t.timestamp).getTime()) < 24 * 60 * 60 * 1000
    );
    
    const blockedThreats = threats.filter(t => t.verdict === 'BLOCKED').length;
    const totalScans = scans.length;
    const detectionRate = totalScans > 0 ? ((blockedThreats / totalScans) * 100).toFixed(1) : '0';
    
    return c.json({
      success: true,
      health: {
        cpuUsage: Math.floor(Math.random() * 30) + 40, // Simulated
        memoryUsage: Math.floor(Math.random() * 20) + 60, // Simulated
        networkTraffic: Math.floor(Math.random() * 50) + 100, // Simulated MB/s
        activeConnections: Math.floor(Math.random() * 500) + 1000,
        threatsBlocked24h: last24h.length,
        detectionRate: `${detectionRate}%`,
        uptime: '99.9%',
        lastScan: scans.length > 0 ? scans[scans.length - 1].timestamp : new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error fetching system health:', error);
    return c.json({ error: 'Failed to fetch system health' }, 500);
  }
});

// NC4 Reporting - Submit incident reports
app.post("/make-server-30fe5f13/nc4/report", async (c) => {
  try {
    const body = await c.req.json();
    const { incidentType, severity, description, organization } = body;
    
    if (!incidentType || !severity || !description) {
      return c.json({ error: 'Missing required fields' }, 400);
    }
    
    const reportId = `NC4-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const reportKey = `nc4-report:${reportId}`;
    
    await kv.set(reportKey, {
      reportId,
      incidentType,
      severity,
      description,
      organization: organization || 'Unknown',
      status: 'submitted',
      submittedAt: new Date().toISOString()
    });
    
    console.log(`NC4 Report submitted: ${reportId}`);
    
    return c.json({
      success: true,
      reportId,
      message: 'Report submitted successfully to NC4',
      status: 'submitted'
    });
  } catch (error) {
    console.error('Error submitting NC4 report:', error);
    return c.json({ error: 'Failed to submit report' }, 500);
  }
});

// Get NC4 reports
app.get("/make-server-30fe5f13/nc4/reports", async (c) => {
  try {
    const reports = await kv.getByPrefix('nc4-report:');
    return c.json({
      success: true,
      reports: reports.sort((a, b) => 
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      )
    });
  } catch (error) {
    console.error('Error fetching NC4 reports:', error);
    return c.json({ error: 'Failed to fetch reports' }, 500);
  }
});

// Dashboard Stats
app.get("/make-server-30fe5f13/dashboard/stats", async (c) => {
  try {
    const threats = await kv.getByPrefix('threat:');
    const users = await kv.getByPrefix('user:');
    const scans = await kv.getByPrefix('scan:');
    
    const now = Date.now();
    const last24h = threats.filter(t => 
      (now - new Date(t.timestamp).getTime()) < 24 * 60 * 60 * 1000
    );
    
    const criticalThreats = threats.filter(t => t.level === 'Critical').length;
    const highRiskUsers = users.filter(u => u.riskLevel === 'critical' || u.riskLevel === 'high').length;
    const blockedThreats = threats.filter(t => t.verdict === 'BLOCKED').length;
    
    return c.json({
      success: true,
      stats: {
        totalThreats: threats.length,
        criticalThreats,
        highRiskUsers,
        totalScans: scans.length,
        blockedThreats,
        threats24h: last24h.length,
        activeUsers: users.length,
        lastUpdate: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return c.json({ error: 'Failed to fetch stats' }, 500);
  }
});

Deno.serve(app.fetch);