// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();


// membuat koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect(function(err){
    if (err){
        console.log(`koneksi error ${err}`);
        return;
    }else{
        console.log("koneksi berhasil");
    }
});


// exports db
module.exports = db;