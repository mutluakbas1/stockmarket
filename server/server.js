var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
app.use(express.json());




// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'marketstock',
    port: 3306,
    password: 'Hasanmutlu12?',
    database: 'marketstock'
});


// connect to database
dbConn.connect();


// Retrieve all users 
app.get('/market', function (req, res) {


    dbConn.query('SELECT * FROM market ', function (error, results, fields) {
        
        if (error) {
            throw error;
        }

        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "X-Requested-With");
        req.header('Content-Type', 'application/json');
        req.json = true;

        console.log("cagrildi...");
        console.log(results);

        return res.send(results);
    })
});



// Retrieve yarisma with id 
app.get('/market/:id', function (req, res) {

    console.log(id + "code buraya geliyor")
    let id  = req.params.id ;


    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }

    dbConn.query('SELECT * FROM market WHERE id=?', id, function (error, results, fields) {
        if (error) throw error;

        return res.send(results);
    });
});

// Retrieve market with id 
app.post('/market/ekle/:id', function (req, res) {

    console.log(JSON.stringify(req.params, null, 4));

    let id  = req.params.id ;
    console.log("Id: " + id);

    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }

    dbConn.query('UPDATE market SET adet = adet+1 WHERE id=?', id, function (error, results, fields) {
        if (error) throw error;

        return res.send(results);
    });
});



// Retrieve market with id 
app.post('/market/cikar/:id', function (req, res) {

    let id  = req.params.id ;

    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }

    dbConn.query('UPDATE market SET adet = adet-1 WHERE id=?', id, function (error, results, fields) {
        if (error) throw error;

        return res.send(results);
    });
});


 

 




// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;