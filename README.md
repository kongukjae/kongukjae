npm install express-generator -g

<!-- pm2 상태가 안좋을 때 -->
2021.03.15 : 조치 npm install pm2 <-- 재설치

<!-- ESlint -->
2021.03.15 : create new branch "lint"

<!-- use to prettier -->
npx prettier ./myapp/**/**/ --write

<!-- eslint * prettier 연동하기 -->
npm install eslint-config-prettier eslint-plugin-prettier

<!-- lint 자동화 -->
npm install husky : git hook
husky 작동에 문제 있음 해결해야 -> lint 자동화 가능