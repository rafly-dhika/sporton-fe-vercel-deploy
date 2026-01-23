@echo off
set msg=Update %date% %time%
git add .
git commit -m "%msg%"
git push
pause
