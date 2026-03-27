# 📥 NetGuardian AI - Download & Setup Guide

## 🎯 How to Download This Project

### Option 1: Download from Figma Make
1. Look for the **Download** button in the Figma Make interface (usually top-right)
2. Click **Download Project** or **Export**
3. Save the ZIP file to your computer
4. Extract the ZIP file to a folder

### Option 2: Manual File Download
If there's an option to download individual files, make sure you get ALL of these:

## 📋 Required Files Checklist

### Root Files
- [ ] `package.json` - Dependencies and scripts
- [ ] `vite.config.ts` - Vite configuration
- [ ] `vite-plugin-figma-assets.ts` - Custom Figma assets plugin
- [ ] `index.html` - Entry HTML file
- [ ] `postcss.config.mjs` - PostCSS configuration
- [ ] `.gitignore` - Git ignore rules
- [ ] `.env.example` - Environment variables template
- [ ] `README.md` - Project documentation
- [ ] `LOCAL_SETUP.md` - Setup instructions
- [ ] `BACKEND_README.md` - Backend API docs
- [ ] `ATTRIBUTIONS.md` - Credits

### Source Files (`src/`)
- [ ] `src/main.tsx` - React entry point
- [ ] `src/app/App.tsx` - Main app component
- [ ] `src/app/routes.ts` - Router configuration

### Components (`src/app/components/`)
- [ ] `src/app/components/login-page.tsx`
- [ ] `src/app/components/registration-page.tsx`
- [ ] `src/app/components/dashboard-page.tsx`
- [ ] `src/app/components/file-analysis-page.tsx`
- [ ] `src/app/components/scan-results-page.tsx`
- [ ] `src/app/components/user-monitoring-page.tsx`
- [ ] `src/app/components/threat-history-page.tsx`
- [ ] `src/app/components/system-health-page.tsx`
- [ ] `src/app/components/agent-control-page.tsx`
- [ ] `src/app/components/nc4-reporting-page.tsx`
- [ ] `src/app/components/root-layout.tsx`
- [ ] `src/app/components/backend-test-page.tsx`
- [ ] `src/app/components/Presentation.tsx`
- [ ] `src/app/components/figma/ImageWithFallback.tsx`

### UI Components (`src/app/components/ui/`)
All files in this directory (50+ components)

### Styles (`src/styles/`)
- [ ] `src/styles/index.css`
- [ ] `src/styles/tailwind.css`
- [ ] `src/styles/theme.css`
- [ ] `src/styles/fonts.css`

### Utilities
- [ ] `src/utils/api.ts` - API client
- [ ] `utils/supabase/info.tsx` - Supabase config

### Backend (`supabase/`)
- [ ] `supabase/functions/server/index.tsx` - Main server
- [ ] `supabase/functions/server/kv_store.tsx` - KV store utilities

### Imports
- [ ] `src/imports/cybersentry-ai-dashboard.md`

## 🚀 After Downloading

### Step 1: Extract Files
```bash
# Navigate to your downloads folder
cd ~/Downloads

# Extract the ZIP
unzip netguardian-ai-dashboard.zip

# Navigate to the project
cd netguardian-ai-dashboard
```

### Step 2: Install Dependencies
```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install project dependencies
pnpm install
```

### Step 3: Run the App
```bash
# Start development server
pnpm dev
```

### Step 4: Open in Browser
Open `http://localhost:5173` in your browser

## 📁 Expected Directory Structure

After extraction, your folder should look like this:

```
netguardian-ai-dashboard/
├── index.html
├── package.json
├── vite.config.ts
├── vite-plugin-figma-assets.ts
├── postcss.config.mjs
├── .gitignore
├── .env.example
├── README.md
├── LOCAL_SETUP.md
├── BACKEND_README.md
├── ATTRIBUTIONS.md
├── DOWNLOAD_GUIDE.md
├── src/
│   ├── main.tsx
│   ├── app/
│   │   ├── App.tsx
│   │   ├── routes.ts
│   │   └── components/
│   │       ├── login-page.tsx
│   │       ├── registration-page.tsx
│   │       ├── dashboard-page.tsx
│   │       ├── file-analysis-page.tsx
│   │       ├── scan-results-page.tsx
│   │       ├── user-monitoring-page.tsx
│   │       ├── threat-history-page.tsx
│   │       ├── system-health-page.tsx
│   │       ├── agent-control-page.tsx
│   │       ├── nc4-reporting-page.tsx
│   │       ├── root-layout.tsx
│   │       ├── backend-test-page.tsx
│   │       ├── Presentation.tsx
│   │       ├── figma/
│   │       │   └── ImageWithFallback.tsx
│   │       └── ui/
│   │           └── (50+ component files)
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   ├── utils/
│   │   └── api.ts
│   └── imports/
│       └── cybersentry-ai-dashboard.md
├── utils/
│   └── supabase/
│       └── info.tsx
└── supabase/
    └── functions/
        └── server/
            ├── index.tsx
            └── kv_store.tsx
```

## ✅ Verification Checklist

After downloading, verify:
- [ ] `package.json` exists and has all dependencies
- [ ] `src/main.tsx` exists
- [ ] `index.html` exists
- [ ] All 10 page components exist in `src/app/components/`
- [ ] `src/styles/` has all CSS files
- [ ] `supabase/functions/server/index.tsx` exists

## 🔧 Troubleshooting

### Missing Files?
If files are missing after download:
1. Re-download from Figma Make
2. Check if ZIP extraction was complete
3. Look in the Figma Make interface for an "Export All" option

### Can't Find Download Button?
Try:
- File → Download/Export
- Three dots menu (⋮) → Download
- Right-click on project → Download
- Share → Download

### ZIP File Won't Extract?
- Make sure the download completed fully
- Try a different extraction tool (7-Zip, WinRAR, or built-in OS extractor)
- Check if the ZIP file is corrupted

## 📞 Need Help?

If you're having trouble downloading:
1. Check Figma Make documentation
2. Look for a Help or Support section
3. Try the "Export" or "Download Project" menu option

## 🎉 Next Steps

Once downloaded and extracted:
1. Read `LOCAL_SETUP.md` for detailed setup
2. Read `README.md` for project overview
3. Run `pnpm install && pnpm dev`
4. Open `http://localhost:5173`

---

**Happy Coding! 🇰🇪**
