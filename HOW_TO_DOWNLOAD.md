# 📥 How to Download NetGuardian AI Dashboard

## 🎯 Quick Answer

**Look for a "Download" or "Export" button in the Figma Make interface**, usually in the top-right corner or in a menu.

---

## 📍 Where to Find the Download Button

### Option 1: Top Toolbar
Look for buttons like:
- **"Download"** 
- **"Export"**
- **"Download Project"**
- **"Export to ZIP"**

Usually located in the **top-right corner** of the interface.

### Option 2: Menu Options
Click on:
- **File** → Download / Export
- **Three dots menu (⋮)** → Download
- **Share** → Download
- **Project Settings** → Export

### Option 3: Right-Click
- Right-click on the project name
- Look for "Download" or "Export" option

---

## 📦 What You'll Get

The download will be a **ZIP file** containing all ~92 project files:
- ✅ All React components (13 pages)
- ✅ Backend server code
- ✅ Styling and configuration
- ✅ Documentation files
- ✅ Package dependencies list

**File size:** Approximately 1-5 MB (without node_modules)

---

## 🚀 After Downloading

### Step 1: Extract the ZIP
```bash
# On Mac/Linux
unzip netguardian-ai-dashboard.zip
cd netguardian-ai-dashboard

# On Windows
# Right-click → Extract All
# Then navigate to the folder
```

### Step 2: Run Quick Start Script

**On Mac/Linux:**
```bash
chmod +x quick-start.sh
./quick-start.sh
```

**On Windows:**
```cmd
quick-start.bat
```

This script will:
1. ✅ Check if Node.js is installed
2. ✅ Install pnpm if needed
3. ✅ Verify all critical files exist
4. ✅ Install dependencies
5. ✅ Start the development server

### Step 3: Manual Setup (Alternative)

If you prefer manual setup:

```bash
# 1. Install dependencies
pnpm install

# 2. Start dev server
pnpm dev

# 3. Open browser
# Go to http://localhost:5173
```

---

## ✅ Verify Your Download

After extracting, you should see this structure:

```
netguardian-ai-dashboard/
├── 📄 index.html
├── 📄 package.json
├── 📄 vite.config.ts
├── 📄 README.md
├── 📄 LOCAL_SETUP.md
├── 📄 quick-start.sh
├── 📄 quick-start.bat
├── 📁 src/
│   ├── 📄 main.tsx
│   ├── 📁 app/
│   ├── 📁 styles/
│   └── 📁 utils/
├── 📁 supabase/
└── 📁 node_modules/ (after pnpm install)
```

**Check the `FILE_LIST.txt` for complete file listing.**

---

## 🆘 Troubleshooting Download Issues

### Can't Find Download Button?
1. Look in **File** menu
2. Try **Share** or **Export** menu
3. Check Figma Make documentation
4. Look for an **overflow menu** (⋮ or ...)

### Download is Incomplete?
1. Check if download finished completely
2. Verify ZIP file size (should be 1-5 MB)
3. Try downloading again
4. Use a different browser

### ZIP Won't Extract?
1. Make sure download is complete
2. Try a different extraction tool:
   - **Mac:** Built-in Archive Utility or The Unarchiver
   - **Windows:** Built-in extractor, 7-Zip, or WinRAR
   - **Linux:** `unzip` command
3. Check if ZIP file is corrupted (re-download)

### Missing Files After Extraction?
1. Check `FILE_LIST.txt` to see what's missing
2. Re-download the project
3. Make sure extraction completed without errors
4. Check extraction destination folder

---

## 🔧 Alternative: Manual File Copy

If download doesn't work, you can manually copy files:

1. **Create a new folder** on your computer
2. **Copy each file** from the Figma Make file browser
3. **Maintain the directory structure** as shown in `FILE_LIST.txt`
4. **Focus on critical files first**:
   - `package.json`
   - `index.html`
   - `vite.config.ts`
   - Everything in `src/`
   - Everything in `supabase/`

---

## 📋 File Count Check

After download, verify you have all files:

**Mac/Linux:**
```bash
find . -type f -not -path "./node_modules/*" | wc -l
```

**Windows PowerShell:**
```powershell
(Get-ChildItem -Recurse -File -Exclude node_modules).Count
```

**Expected:** ~92 files (excluding node_modules)

---

## 🎓 First Time Using?

### Prerequisites Checklist
- [ ] **Node.js 18+** installed ([Download](https://nodejs.org/))
- [ ] **Internet connection** (for downloading packages)
- [ ] **Code editor** (VS Code recommended)
- [ ] **Terminal/Command Prompt** access

### Recommended Tools
1. **Node.js** - JavaScript runtime
2. **pnpm** - Fast package manager
3. **VS Code** - Code editor
4. **Git** - Version control (optional)

---

## 🚀 Quick Commands Reference

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 📞 Need More Help?

1. **Read** `LOCAL_SETUP.md` for detailed setup instructions
2. **Read** `README.md` for project overview
3. **Read** `BACKEND_README.md` for API documentation
4. **Check** `DOWNLOAD_GUIDE.md` for additional tips
5. **Run** `quick-start.sh` or `quick-start.bat` for automated setup

---

## 🎉 Success Indicators

You'll know everything worked when:
1. ✅ `pnpm install` completes without errors
2. ✅ `pnpm dev` starts the server
3. ✅ Browser opens to `http://localhost:5173`
4. ✅ You see the NetGuardian AI login page
5. ✅ You can navigate between all 10 screens

---

## 📊 What You're Getting

### Complete Full-Stack Application
- **10 Screens** - All functional pages
- **AI Backend** - Threat detection engine
- **Real-time Data** - Live monitoring
- **NC4 Integration** - Kenya compliance
- **Dark Theme** - Professional UI
- **Responsive** - Works on all devices

### Technologies Included
- React 18 + TypeScript
- React Router 7
- Tailwind CSS 4
- Recharts visualization
- Supabase backend
- Hono web server
- 50+ UI components

---

## 🇰🇪 Made for Kenya

This dashboard includes:
- Kenya flag colors (Black, Red, Green)
- NC4 reporting integration
- KES currency support
- Local case studies (Equity Bank, SHA)
- Kenyan cybercrime hotline

---

**Ready to download? Look for that Download/Export button! 🚀**

For step-by-step local setup after download, see **LOCAL_SETUP.md**
