#!/bin/bash
# NetGuardian AI - Quick Start Script
# This script helps you get started quickly after downloading

echo "🛡️  NetGuardian AI Dashboard - Quick Start"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "⚠️  pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
    echo "✅ pnpm installed"
else
    echo "✅ pnpm version: $(pnpm --version)"
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found!"
    echo "Make sure you're in the project root directory."
    exit 1
fi

echo "✅ package.json found"

# Check critical files
echo ""
echo "Checking critical files..."
MISSING_FILES=0

FILES=(
    "index.html"
    "vite.config.ts"
    "src/main.tsx"
    "src/app/App.tsx"
    "src/app/routes.ts"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ MISSING: $file"
        MISSING_FILES=$((MISSING_FILES + 1))
    fi
done

if [ $MISSING_FILES -gt 0 ]; then
    echo ""
    echo "❌ $MISSING_FILES critical file(s) missing!"
    echo "Please re-download the project from Figma Make."
    exit 1
fi

echo ""
echo "✅ All critical files present"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."
echo ""

pnpm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Starting development server..."
    echo ""
    echo "The app will open at http://localhost:5173"
    echo "Press Ctrl+C to stop the server"
    echo ""
    pnpm dev
else
    echo ""
    echo "❌ Failed to install dependencies"
    echo "Try running: pnpm install"
    exit 1
fi
