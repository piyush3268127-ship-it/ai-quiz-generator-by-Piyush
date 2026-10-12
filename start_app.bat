@echo off
title NCERT MasterQuiz Launcher
echo ===================================================
echo     Launching NCERT MasterQuiz Application...
echo ===================================================
echo Opening in your default web browser...

REM Try default browser first, fallback to msedge or chrome
start "" "%~dp0index.html"

echo.
echo Application launched! You can close this window at any time.
pause
