@echo off
REM NetGuardian AI - Quick Start Script for Windows
REM This script helps you get started quickly after downloading

echo.
echo ===========================================
echo NetGuardian AI Dashboard - Quick Start
echo ===========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo X Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js installed
node --version

REM Check if pnpm is installed
pnpm --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo [!] pnpm is not installed. Installing pnpm...
    call npm install -g pnpm
    echo [OK] pnpm installed
) else (
    echo [OK] pnpm installed
)

REM Check if package.json exists
if not exist "package.json" (
    echo.
    echo X package.json not found!
    echo Make sure you're in the project root directory.
    pause
    exit /b 1
)

echo [OK] package.json found

REM Check critical files
echo.
echo Checking critical files...

set MISSING=0

if exist "index.html" (
    echo   [OK] index.html
) else (
    echo   [X] MISSING: index.html
    set /a MISSING+=1
)

if exist "vite.config.ts" (
    echo   [OK] vite.config.ts
) else (
    echo   [X] MISSING: vite.config.ts
    set /a MISSING+=1
)

if exist "src\main.tsx" (
    echo   [OK] src\main.tsx
) else (
    echo   [X] MISSING: src\main.tsx
    set /a MISSING+=1
)

if exist "src\app\App.tsx" (
    echo   [OK] src\app\App.tsx
) else (
    echo   [X] MISSING: src\app\App.tsx
    set /a MISSING+=1
)

if exist "src\app\routes.ts" (
    echo   [OK] src\app\routes.ts
) else (
    echo   [X] MISSING: src\app\routes.ts
    set /a MISSING+=1
)

if %MISSING% gtr 0 (
    echo.
    echo X %MISSING% critical file(s) missing!
    echo Please re-download the project from Figma Make.
    pause
    exit /b 1
)

echo.
echo [OK] All critical files present
echo.

REM Install dependencies
echo Installing dependencies...
echo This may take a few minutes...
echo.

call pnpm install

if errorlevel 1 (
    echo.
    echo X Failed to install dependencies
    echo Try running: pnpm install
    pause
    exit /b 1
)

echo.
echo [OK] Dependencies installed successfully!
echo.
echo Starting development server...
echo.
echo The app will open at http://localhost:5173
echo Press Ctrl+C to stop the server
echo.

call pnpm dev

pause
