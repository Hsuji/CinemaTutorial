/**
 * Cinema\server\routes\mongodb.js
 * mongoDB connect 작업만 하고 그외 작업은 이 파일은 모듈로 받아서 작업해보쟈!
 */
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/cinema', (err, db) => {
        if(err) return console.log(`mongodb connect err [${err}]`);
        closure(db);
        console.log(`mongodb connect success!`);
    });
};

//Error handling 오류처리
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object'? err.message : err;
    res.status(501).json(response);
};

// Response handling 응답처리
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
// url : http://localhost:4200/api/getusers 
router.get('/getusers', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//insert users


module.exports = router;
