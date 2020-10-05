var mysql = require('mysql');

console.log('Get connection ...');

var conn = mysql.createConnection({
    database: '',
    host: "",
    user: "",
    password: ""
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});