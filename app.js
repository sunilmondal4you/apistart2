/**
 * Created by abc on 14/05/2016.
 */

var express= require("express");

var app= new express();

app.get("/", function(req, res){
    res.send("Hello");
});

app.get("/a", function(req, res){
    res.send("We wellcome...");
});

app.get("/b", function(req, res){
    res.send("what is your Name?");
});

app.get("/a/b", function(req, res){
    res.send("Where are you from?");
});

app.get("/a/b/c", function(req, res){
    res.send("what are you doing?");
});

app.post("/a", function(req, res){
    res.send("We wellcome you.");
});

app.post("/b", function(req, res){
    res.send("My name is Sunil");
});

app.post("/a/b", function(req, res){
    res.send("I am from West Bengal.");
});

app.listen(3000, function () {
    console.log("Server Started");
});