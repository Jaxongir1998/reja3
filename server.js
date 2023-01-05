console.log("Web Serverni Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR", err);
    }else {
        user = JSON.parse(data)
    }
});



//1: kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {

});

app.get("/author", (req, res) =>{
res.render("author", {user: user});
});


app.get("/", function (req, res) {
    res.render("harid");
    });

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
console.log(`The server is runnig successfully on port: ${PORT}`);
});