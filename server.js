/**
 * Cinema\server.js 
 * express server 구동을 위한 설정
 * 
 */
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

//절대 경로를 사용한 정적 파일 제공; angular output folder 등록
app.use(express.static(path.join(__dirname, 'dist')));

let port = 3000;
app.set('port', port);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

const server = http.createServer(app);
server.listen(port, () => console.log(`[${Date()}] Running on localhost:${port}`));