# 🎯 START HERE - NetGuardian AI Dashboard

Welcome! This guide will help you download and run your NetGuardian AI Dashboard locally.

---

## 📥 STEP 1: Download the Project

### Where is the Download Button?

Look for a **"Download"** or **"Export"** button in the Figma Make interface:
- Usually in the **top-right corner**
- Or in the **File** menu → Download/Export
- Or in the **Share** menu → Download

👉 **Detailed instructions:** Read [HOW_TO_DOWNLOAD.md](./HOW_TO_DOWNLOAD.md)

---

## 📦 STEP 2: Extract the Files

After downloading the ZIP file:

**On Windows:**
1. Right-click the ZIP file
2. Click "Extract All"
3. Choose a location
4. Click "Extract"

**On Mac:**
1. Double-click the ZIP file
2. It will extract automatically

**On Linux:**
```bash
unzip netguardian-ai-dashboard.zip
```

---

## 🚀 STEP 3: Run the Application

### Option A: Automated Setup (Recommended)

**Windows:**
1. Open the extracted folder
2. Double-click `quick-start.bat`
3. Wait for installation and server to start
4. Browser will open automatically

**Mac/Linux:**
1. Open Terminal
2. Navigate to the folder: `cd path/to/netguardian-ai-dashboard`
3. Run: `chmod +x quick-start.sh`
4. Run: `./quick-start.sh`
5. Browser will open automatically

### Option B: Manual Setup

```bash
# 1. Open terminal/command prompt
# 2. Navigate to project folder
cd path/to/netguardian-ai-dashboard

# 3. Install pnpm (if you don't have it)
npm install -g pnpm

# 4. Install dependencies
pnpm install

# 5. Start development server
pnpm dev

# 6. Open browser to http://localhost:5173
```

---

## ✅ STEP 4: Verify Everything Works

You should see:
1. ✅ Development server running at `http://localhost:5173`
2. ✅ NetGuardian AI login page with dark theme
3. ✅ Cyan accents and glass morphism effects
4. ✅ Kenyan flag colors (black, red, green stripe)

Try these actions:
- **Login** - Enter any email/password to access dashboard
- **Navigate** - Click through all 10 pages in the sidebar
- **File Analysis** - Upload a test file to see AI detection
- **Backend Test** - Click the test button to verify API connection

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **START_HERE.md** | This file - Quick start guide |
| **HOW_TO_DOWNLOAD.md** | Detailed download instructions |
| **LOCAL_SETUP.md** | Complete local development setup |
| **README.md** | Project overview and features |
| **BACKEND_README.md** | Backend API documentation |
| **DOWNLOAD_GUIDE.md** | After-download setup guide |
| **FILE_LIST.txt** | Complete list of all files |

---

## 🎯 Quick Reference

### What You Need
- ✅ Node.js 18 or higher ([Download](https://nodejs.org/))
- ✅ Internet connection
- ✅ ~500 MB disk space

### Installation Commands
```bash
pnpm install     # Install dependencies
pnpm dev         # Start dev server
pnpm build       # Build for production
pnpm preview     # Preview production build
```

### Default Port
```
http://localhost:5173
```

---

## 🛡️ What's Included

### 10 Application Screens
1. **Login** - Authentication page
2. **Registration** - User sign-up
3. **Dashboard** - Main overview with live threats
4. **File Analysis** - AI-powered file scanning
5. **Scan Results** - Analysis history
6. **User Monitoring** - Behavioral tracking
7. **Threat History** - Security timeline
8. **System Health** - Infrastructure status
9. **Agent Control** - AI agent management
10. **NC4 Reporting** - Kenya compliance reporting

### Technology Stack
- **Frontend:** React 18 + TypeScript + Tailwind CSS 4
- **Backend:** Supabase + Hono + Edge Functions
- **Routing:** React Router 7
- **Charts:** Recharts
- **Icons:** Lucide React
- **Animations:** Motion (Framer Motion)

### Features
- 🤖 AI-powered threat detection
- 📊 Real-time data visualization
- 🇰🇪 Kenya-focused (NC4, KES, flag colors)
- 🎨 Dark theme with glass morphism
- 📱 Fully responsive design
- 🔐 Complete security dashboard

---

## 🆘 Troubleshooting

### Can't Download?
➡️ Read [HOW_TO_DOWNLOAD.md](./HOW_TO_DOWNLOAD.md)

### Files Missing After Download?
➡️ Check [FILE_LIST.txt](./FILE_LIST.txt) - should have ~92 files
➡️ Re-download from Figma Make

### Server Won't Start?
➡️ Make sure Node.js is installed: `node --version`
➡️ Delete `node_modules` and run `pnpm install` again
➡️ Check if port 5173 is available

### Can't Find a File?
➡️ Check [FILE_LIST.txt](./FILE_LIST.txt) for complete listing
➡️ Verify folder structure matches the expected layout

### Need Detailed Help?
➡️ Read [LOCAL_SETUP.md](./LOCAL_SETUP.md) for comprehensive guide

---

## 🎓 First Time Developer?

### Never Used Node.js?
1. Download from [nodejs.org](https://nodejs.org/)
2. Install (use default options)
3. Verify: Open terminal and type `node --version`
4. Should see something like `v18.x.x` or higher

### Never Used Terminal/Command Line?
**Windows:**
1. Press `Win + R`
2. Type `cmd` and press Enter

**Mac:**
1. Press `Cmd + Space`
2. Type `terminal` and press Enter

**Linux:**
1. Press `Ctrl + Alt + T`

### Never Installed Packages?
Don't worry! The `quick-start` scripts do everything automatically:
- Install pnpm (package manager)
- Install all dependencies
- Start the server
- Open in browser

Just run the script and wait! ☕

---

## 🇰🇪 About This Project

**NetGuardian AI** is a comprehensive insider threat detection dashboard built for the Kenyan cybersecurity market.

### Key Features
- **AI Threat Detection** - Behavioral analysis engine
- **NC4 Integration** - Kenya compliance reporting
- **Real-time Monitoring** - Live threat alerts
- **File Analysis** - Automated scanning
- **User Tracking** - Behavioral profiling

### Built For
- WRRIC Hackathon 2026
- Kenyan cybersecurity professionals
- Educational and demonstration purposes

### Local Context
- Kenya flag color scheme
- NC4 (National Computer and Cybercrime Coordination Committee)
- Case studies: Equity Bank, SHA fraud
- KES currency references
- Kenyan cybercrime hotline: +254 716148341

---

## 🎉 Ready to Go!

### The 3-Step Process

```
1. DOWNLOAD  →  2. EXTRACT  →  3. RUN
     ↓              ↓            ↓
  (ZIP file)   (Folder)    (pnpm dev)
```

### Expected Timeline
- **Download:** 30 seconds
- **Extract:** 10 seconds
- **First install:** 2-3 minutes (downloads packages)
- **Subsequent starts:** 5 seconds

### You'll Know It Works When...
✅ Terminal shows "Local: http://localhost:5173"
✅ Browser opens automatically
✅ You see the NetGuardian AI login page
✅ Dark theme with cyan accents
✅ Can navigate all 10 pages

---

## 📞 Questions?

1. **How to download?** → [HOW_TO_DOWNLOAD.md](./HOW_TO_DOWNLOAD.md)
2. **How to setup?** → [LOCAL_SETUP.md](./LOCAL_SETUP.md)
3. **What's included?** → [README.md](./README.md)
4. **How does backend work?** → [BACKEND_README.md](./BACKEND_README.md)
5. **Which files do I need?** → [FILE_LIST.txt](./FILE_LIST.txt)

---

## 🚀 Let's Get Started!

**Step 1:** Find the Download/Export button in Figma Make
**Step 2:** Extract the ZIP file
**Step 3:** Run `quick-start.bat` (Windows) or `quick-start.sh` (Mac/Linux)

**That's it! Welcome to NetGuardian AI! 🇰🇪**

---

© 2026 WRRIC - Hackathon
