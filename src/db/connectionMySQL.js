const mysql = require('mysql');

var conn = mysql.createConnection({
    database: "",
    host: "",
    user: "",
    password: ""
});

conn.connect( err => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log("Connected!");
    }
});