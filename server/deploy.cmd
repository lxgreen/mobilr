@echo off
set _7Z=c:\Program Files\7-Zip\7z.exe
cd application
"%_7Z%" a ..\app.zip .\*
cd ..
copy /b nw.exe+app.zip launchr.exe
del app.zip
rmdir .\bin
mkdir bin
echo D | xcopy locales bin\locales
xcopy *.dll bin  
xcopy *.bin bin  
xcopy *.pak bin  
xcopy *.dat bin
mv launchr.exe bin