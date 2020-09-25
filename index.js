const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const urlencoder = bodyparser.urlencoded({extended : false});

var username, email, phonenumber, location, pizza, size, extra, price;

app.post("/pizza", urlencoder, function(req, res) {
    username = req.body.username;
    email = req.body.email;
    phonenumber = req.body.phonenumber;
    location = req.body.location;
    pizza = req.body.pizza;
    size = req.body.size;
    extra = req.body.others;
    price = req.body.checkout;
    console.log(typeof phonenumber);

    let con = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "12345",
        database : "chatbot"
    });
     
    con.connect(function(err){
        if (err) throw err;
        console.log("connected");
        let sql = `insert into user_details values('${username}', '${email}', '${phonenumber}', '${location}', '${pizza}', '${size}', 
        '${extra}', '${price}');`;
        con.query(sql, function(err) {
            if (err) throw err;
            console.log("column inserted");
        })
    })
});

    

app.listen(8080);
