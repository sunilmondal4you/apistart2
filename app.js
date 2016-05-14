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

app.listen(3000, function () {
    console.log("Server Started");
});