
const express = require("express");
const path = require("path");
const mysql = require("mysql");

const db = mysql.createConnection({
    //assuming that you are using the loacl hoat as host and root as user , 
    //if not make nessescary changes to this code
    host: "localhost",
    user: "root",
    password: " enter your password",
    database: "enter your database name",
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MYSQL CONNECTED")
    }
})

module.exports=db;