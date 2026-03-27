# 🚀 NetGuardian AI - Local Setup Guide

## Prerequisites

Before running the application locally, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (recommended) or **npm** or **yarn**

### Install pnpm (if not already installed)
```bash
npm install -g pnpm
```

## 📦 Installation Steps

### 1. Clone or Download the Project
If you haven't already, navigate to your project directory:
```bash
cd netguardian-ai-dashboard
```

### 2. Install Dependencies
Using **pnpm** (recommended):
```bash
pnpm install
```

Or using **npm**:
```bash
npm install
```

Or using **yarn**:
```bash
yarn install
```

### 3. Start the Development Server
Using **pnpm**:
```bash
pnpm dev
```

Or using **npm**:
```bash
npm run dev
```

Or using **yarn**:
```bash
yarn dev
```

### 4. Open in Browser
Once the server starts, open your browser and navigate to:
```
http://localhost:5173
```

The port may vary (5174, 5175, etc.) if 5173 is already in use. Check the terminal output for the exact URL.

## 🎯 Available Scripts

- **`pnpm dev`** - Start development server with hot reload
- **`pnpm build`** - Build for production
- **`pnpm preview`** - Preview production build locally

## 🔧 Project Structure

```
netguardian-ai-dashboard/
├── index.html                 # Entry HTML file
├── src/
│   ├── main.tsx              # React entry point
│   ├── app/
│   │   ├── App.tsx           # Main application component
│   │   ├── routes.ts         # React Router configuration
│   │   └── components/       # All React components
│   ├── styles/               # CSS and styling files
│   ├── utils/                # Utility functions
│   └── imports/              # Imported assets
├── supabase/                 # Backend server (Supabase Edge Functions)
├── package.json              # Dependencies and scripts
├── vite.config.ts           # Vite configuration
└── LOCAL_SETUP.md           # This file
```

## 🌐 Available Pages/Routes

Once running, you can access these routes:

- `/` - Login Page
- `/register` - Registration Page
- `/dashboard` - Main Dashboard
- `/file-analysis` - File Analysis Tool
- `/scan-results` - Scan Results History
- `/user-monitoring` - User Monitoring
- `/threat-history` - Threat History
- `/system-health` - System Health Monitoring
- `/agent-control` - Agent Control Panel
- `/nc4-reporting` - NC4 Incident Reporting
- `/backend-test` - Backend API Testing

## 🔐 Backend Integration

The application connects to a Supabase backend. The backend is already configured and running at:
```
https://ixiskqkefgwhsysyzzcd.supabase.co/functions/v1/make-server-30fe5f13
```

### Backend Features:
- ✅ AI-powered threat detection
- ✅ File analysis
- ✅ User monitoring
- ✅ NC4 reporting
- ✅ Real-time threat alerts

See `BACKEND_README.md` for detailed API documentation.

## 🎨 Features

### 🛡️ Security Features
- AI-powered insider threat detection
- Real-time file scanning
- User behavior monitoring
- Automated threat blocking
- NC4 compliance reporting

### 🇰🇪 Kenya-Specific Features
- Kenyan flag color scheme (Black, Red, Green)
- NC4 (National Computer and Cybercrime Coordination Committee) integration
- Local case studies (Equity Bank, SHA)
- KES currency references
- Kenyan cybercrime hotline (+254 716148341)

### 🎯 Technical Features
- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS v4 for styling
- Recharts for data visualization
- Glass morphism UI design
- Fully responsive design
- Dark theme with cyan accents

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output.

### Module Not Found Errors
Try clearing node_modules and reinstalling:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors
Ensure you're using Node.js v18 or higher:
```bash
node --version
```

### Images Not Loading
The app uses `figma:asset` imports for images. In local development, these should work automatically with Vite's asset handling.

## 📝 Development Tips

### Hot Reload
Vite provides instant hot module replacement (HMR). Save any file and see changes immediately in the browser.

### TypeScript
The project is fully typed with TypeScript. Check for type errors in your IDE or by running:
```bash
pnpm build
```

### Styling
The project uses Tailwind CSS v4. Custom theme tokens are defined in `/src/styles/theme.css`.

## 🚀 Production Build

To create a production build:
```bash
pnpm build
```

The build output will be in the `dist/` directory.

To preview the production build locally:
```bash
pnpm preview
```

## 📞 Support

For issues or questions:
1. Check the `BACKEND_README.md` for API documentation
2. Review the code in `/src/app/components/` for component details
3. Check browser console for errors

## 🎉 Quick Start Summary

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser to http://localhost:5173

# Login with any credentials (demo mode)
```

**That's it! You're ready to use NetGuardian AI locally! 🇰🇪**
