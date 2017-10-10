/**
 * Cinema\server.js 
 * express server 구동을 위한 설정
 * 
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//MongoDB와 상호 작용하기위한 API 파일
const db_api = require('./server/routes/mongodb');

// Parsers 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//절대 경로를 사용한 정적 파일 제공; angular output folder 등록
app.use(express.static(path.join(__dirname, 'dist')));

// DB API location
app.use('/api', db_api);

let port = 4200;
app.set('port', port);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

const server = http.createServer(app);
server.listen(port, () => console.log(`[${Date()}] Running on localhost:${port}`));