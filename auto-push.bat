@echo off
setlocal
echo ========================================================
echo   Auto Push to GitHub (Trigger Vercel Auto-Deploy)
echo ========================================================
echo.

set "PATH=C:\laragon\bin\git\cmd;C:\laragon\bin\nodejs\node-v22.12.0-win-x64;%PATH%"

cd /d "%~dp0"

echo [1/3] Memeriksa perubahan file...
git status -s

echo.
set /p msg="Masukkan pesan update (atau tekan ENTER untuk default): "
if "%msg%"=="" set "msg=update: update portal Bank Indonesia %date% %time%"

echo.
echo [2/3] Menambahkan dan commit perubahan...
git add .
git commit -m "%msg%"

echo.
echo [3/3] Mendorong ke GitHub (main)...
git push origin main

echo.
echo ========================================================
echo  SUKSES! Kode telah terdorong ke GitHub.
echo  Vercel akan otomatis mendeteksi dan melakukan auto-deploy!
echo ========================================================
pause
