pbjs -t static-module -w commonjs -o ../client/assets/script/Def/Proto.js proto/*.proto & ^
pbts -o ../client/assets/script/Def/Proto.d.ts ../client/assets/script/Def/Proto.js & ^
xcopy .\proto\define.json ..\client\assets\resources\ProtoDefine.json /Y & ^
xcopy .\proto ..\server\lualib\def\proto /Y & ^
pause