DESIGN A COMPLETE NetGuardian AI DASHBOARD - INSIDER THREAT DETECTION SYSTEM

PROJECT OVERVIEW:
Design a professional cybersecurity dashboard for "NetGuardian AI" - an insider threat detection system that monitors authorized users within organizations. The core concept is: "Kenyan organizations spend millions on firewalls to keep hackers out, but the people stealing millions already have a badge and a password."

COLOR PALETTE:
- Primary Dark: #0a192f (deep navy background)
- Secondary Dark: #16213e (darker navy)
- Accent Blue: #00d4ff (bright cyan - primary accent)
- Success Green: #00cec9 (teal for safe/passed)
- Warning Yellow: #fdcb6e (for suspicious)
- Danger Red: #ff4757 (for critical threats)
- Text White: #ffffff (primary text)
- Text Gray: #aaa (secondary text)

TYPOGRAPHY:
- Headers: 'Segoe UI', 'Arial', sans-serif (bold, 24-48px)
- Body: 'Segoe UI', 'Tahoma', sans-serif (14-16px)
- Monospace: 'Courier New', monospace (for code/logs)

REQUIRED SCREENS:

SCREEN 1: LOGIN PAGE
- Dark gradient background (135deg, #1a1a2e to #16213e)
- Centered login card with glass morphism effect (blur, white border)
- NetGuardian AI logo/header at top with 🛡️ icon
- Username field with icon
- Password field with icon
- "Login" button with cyan gradient and hover animation
- "Sign Up Now" link below
- Demo credentials box showing: admin / Admin@123
- Cyber grid background effect (dashed lines)

SCREEN 2: REGISTRATION PAGE
- Similar dark theme
- Registration form with:
  - Username field
  - Email field
  - Full name field
  - Password field (with strength indicator)
  - Confirm password field
  - Department dropdown (IT, HR, Finance, Marketing, Engineering, Operations)
  - Role dropdown (User, Analyst, Manager, Administrator)
  - "Create Account" button
  - "Back to Login" link

SCREEN 3: MAIN DASHBOARD
- Header with:
  - NetGuardian AI logo/title
  - Insider threat warning banner: "Kenyan organizations spend millions on firewalls to keep hackers out, but the people stealing millions already have a badge and a password."
  - Two stat boxes showing: "EQUITY BANK: KES 1.5B stolen" and "SHA FRAUD: KES 11B lost"

- 4 Metric Cards in a row:
  - Card 1: 👥 Total Users with large number
  - Card 2: 🚨 Active Threats with large number
  - Card 3: 🛑 Auto-Blocks with large number
  - Card 4: ✅ Protected with large number

- Real Insider Threat Cases section (2 columns):
  - Left card: Equity Bank case with red left border, showing KES 1.5B, 47 transactions, manager on leave
  - Right card: SHA Fraud case with orange left border, showing KES 11B, 35 fake C-sections, no theatre

- Live Threat Alerts section with scrolling feed:
  - Critical alerts (red background)
  - High alerts (orange background)
  - Medium alerts (yellow background)
  - Low alerts (blue background)
  Each alert shows type, user, time, and "View Details" button

- NC4 Reporting expander section with:
  - Incident type dropdown
  - Severity slider
  - Description text area
  - "Submit NC4 Report" button (red gradient)

SCREEN 4: PRE-DATABASE SECURITY GATE (File Analysis Page)
- Large animated security gate component showing 4 layers:
  - Layer 1: File Type Verification with "Is this really a PDF?" label
  - Layer 2: YARA Malware Scan with "2,500+ rules" label
  - Layer 3: AI Behavioral Analysis with "94% accuracy" label
  - Layer 4: Agent Decision with "PASS/BLOCK in 3s" label

- Upload area:
  - Dashed border box with cyan
  - Large upload icon
  - "Drop File for Analysis" text
  - File type badges: EXE, DLL, PDF, DOC, ZIP

- Quick Stats sidebar showing:
  - Threats Today count
  - Files Scanned count
  - Active AI Models count
  - YARA Rules count

- File info display (after upload):
  - Filename card
  - File size card
  - File type card

SCREEN 5: SCAN RESULTS VIEW
- Security Gate result banner showing either:
  - GREEN PASSED: "File CLEAN - Stored to database"
  - RED BLOCKED: "Threat BLOCKED - Quarantined, never reached database"

- Verdict card with animated glow:
  - Large icon (🚨 for critical, 🔴 for high, ⚠️ for suspicious, 🟡 for low, ✅ for safe)
  - Verdict text (CRITICAL THREAT / HIGH RISK / SUSPICIOUS / LOW RISK / SAFE)
  - Risk score (0-100)
  - Confidence percentage

- Detection reasons panel showing each reason with red left border

- 5 Technical Analysis Tabs:
  Tab 1: File Features
    - Basic Properties: File Size, Entropy, File Type
    - Structural Analysis: Sections, Imports, Strings Found
  
  Tab 2: Indicators
    - Suspicious Indicators (with status indicators)
    - Network Indicators (URLs found, IPs found)
  
  Tab 3: AI Analysis
    - Confidence progress bar
    - Anomaly detection status
    - Models used list
    - Color-coded risk assessment
  
  Tab 4: YARA Rules
    - Total matches count
    - Severity distribution (Critical/High/Medium)
    - Risk boost
    - Expandable rule details
  
  Tab 5: Raw JSON Data

- Action buttons row:
  - "View Report" button
  - "Print Report" button
  - "Report to NC4" button (if high risk)
  - Auto-blocked notification banner

SCREEN 6: USER MONITORING
- User Risk Distribution pie chart with:
  - Red segment for High Risk
  - Yellow segment for Medium Risk
  - Green segment for Low Risk

- User cards in a scrollable list:
  Each card has:
  - User name
  - Risk level indicator (color dot)
  - Last action text
  - Login time
  - Department
  - Status (active/blocked)
  - "View User" button

- Expanded user profile view showing:
  - User avatar with risk color background
  - Status and Risk Level metrics
  - Recent activity timeline
  - File access history
  - Login locations map/ip list

- Risk summary sidebar with:
  - High/Medium/Low user counts
  - Protected users count
  - Blocked users count
  - "Generate Risk Report" button

SCREEN 7: THREAT HISTORY
- Threat Level Distribution pie chart
- Threats by Hour line chart
- Threats Over Time bar chart
- Detailed threat history table with columns:
  - Time, User, Threat Level, Verdict, File, Action, Confidence, Risk Score
- Export options (CSV, JSON, PDF)

SCREEN 8: SYSTEM HEALTH
- Status cards showing:
  - Overall Status (green/red)
  - Version
  - Uptime
  - API Response Time
  - Total Threats
  - Auto-Blocks
  - Blocked Users
  - Active Scans

- AI Model Status table showing:
  - Enhanced Rule Engine (98.2%)
  - Anomaly Detector (97.5%)
  - Entropy Analyzer (95.8%)
  - PE Structure Analyzer (94.3%)
  - YARA Rules Engine (99.1%)
  Each with status indicators

- CPU/Memory usage gauges
- System logs expander

SCREEN 9: AGENT CONTROL PANEL
- 3 tabs:
  Tab 1: Agent Dashboard
    - Agent API status
    - Poll interval
    - WhatsApp connection status
    - Voice call status
    - Pending reviews count with severity breakdown
  
  Tab 2: Pending Reviews
    - List of threats needing human review
    - Each item shows user, threat level, timestamp
    - Action buttons: Approve Block, Call User, Dismiss
  
  Tab 3: Manual Controls
    - User selection dropdown
    - Reason text area
    - Send WhatsApp Alert button
    - Initiate Voice Call button
    - Block User button
    - Unblock User button

- Recent Agent Activity log

SCREEN 10: NC4 REPORTING
- NC4 incident reporting form with:
  - Incident type dropdown (5 types)
  - Severity slider (LOW to CRITICAL)
  - Description text area
  - Submit button

- Report confirmation view showing:
  - Success message
  - Incident ID
  - JSON-formatted report data
  - Timestamp

DESIGN REQUIREMENTS:
- All screens must have dark theme with cyan accents
- Glass morphism effects (blur, transparency) for cards
- Smooth hover animations on all interactive elements
- Pulse animation for critical alerts
- Shake animation for blocked notifications
- Professional, clean layout - no clutter
- Mobile-responsive design considerations
- All text must be readable (high contrast)
- Icons should be consistent (emoji or Font Awesome style)
- Cyber/security aesthetic with subtle grid backgrounds
- Kenyan context elements (NC4 logo, KES references)
- Arthur-inspired agent personality in tooltips/help text

DELIVERABLE FORMAT:
- Complete Figma file with all 10 screens
- Interactive prototype linking screens:
  - Login → Dashboard
  - Dashboard → File Analysis → Scan Results
  - Dashboard → User Monitoring → User Profile
  - Dashboard → Threat History
  - Dashboard → System Health
  - Dashboard → Agent Control
- Component library with:
  - Button styles (primary, secondary, danger)
  - Card styles (metric, user, alert)
  - Form elements
  - Chart components
  - Navigation elements
- Design system documentation
- Mobile views for key screens

BRANDING ELEMENTS:
- Logo: "NetGuardian AI" with 🛡️ shield icon
- Tagline: "Insider Threat Protection"
- Version badge: "v2.0"
- NC4 compliance badge
- "© 2026 WRRIC Hackathon" footer

INSPIRATION:
- Modern cybersecurity dashboards (malware.ai style)
- Dark theme with neon accents
- Professional, trustworthy aesthetic
- Kenyan tech innovation vibe