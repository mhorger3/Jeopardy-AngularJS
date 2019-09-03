var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var mysql = require('mysql'); // require mysql module
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'finalproject',
    database: 'CS275_finalproject'
});
app.use(express.static("."));
app.use(bodyParser.json());

app.listen(8080, function(){
    console.log('Server started');
});

con.connect(function(err) {
    if (err) {
    console.log(err);
    console.log("Error connecting to database");
    }
    else {
    console.log("Database successfully connected");
    }
});

app.get('/', function(req, res){
    res.sendFile('/index.html'); // send the beginning file over the server
});

// handle updating the score
app.get('/updateScore', function(req, res){
    var user = req.query.user;
    var score = req.query.score;
    var output;
    con.query('Update gameState set playerScore = ' + score + ' where player = \'' + user + '\';', function(err,result,fields) {
        if (err){
            console.log(err);
            console.log('Error during query processing');
        }else{
            console.log('Here is the result : ', result);
            res.status(200).send("OK");
            res.end();
        }
    });
});

// start the game
app.get('/startGame', function(req, res){
    var player1 = req.query.player1;
    var player2 = req.query.player2;
    var player3 = req.query.player3;
    con.query('insert into gameState values (\'' + player1 + '\', 0);', function(err,result,fields) {
        if (err){
            console.log(err);
            console.log('Error during query processing');
        }else{
            console.log('Here is the result : ', result);
        }
    });
    con.query('insert into gameState values (\'' + player2 + '\', 0);', function(err,result,fields) {
        if (err){
            console.log(err);
            console.log('Error during query processing');
        }else{
            console.log('Here is the result : ', result);
        }
    });

    con.query('insert into gameState values (\'' + player3 + '\', 0);', function(err,result,fields) {
        if (err){
            console.log(err);
            console.log('Error during query processing');
        }else{
            console.log('Here is the result : ', result);
        }
    });


    res.status(200).send("OK");
    res.end();
})
