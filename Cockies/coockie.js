const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const sessionOptions = {
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    };

// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++
//     }else{
//          req.session.count = 1
//     }
   
//     res.send(`You sent a request ${req.session.count} times`);
// });


app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req,res) =>{
    let { name } = req.query;
    req.session.name = name;
    if(name == "undefined"){
       req.flash("error","User not registered!");
    }else{
       req.flash("success","User registered successfully!");
    }
    res.redirect("/hello");
});

app.get("/hello", (req,res) =>{
    res.render("./page.ejs",{name: req.session.name,msg: req.flash("success"),errmsg: req.flash("error")});
});

app.listen(3030, () =>{
    console.log("app is listening to port 3030");
});
