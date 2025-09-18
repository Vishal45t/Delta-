const express = require("express");
const router = express.Router({mergeParams : true});
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const UserController = require("../controllers/users.js");

router.get("/signup",(req,res) =>{
    res.render("../views/users/signup.ejs");
});

router.post("/signup",wrapAsync(UserController.signupPost));


router.get("/login",UserController.Loginrender);

router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),(UserController.LoginPost)
);

router.get("/logout",UserController.Logoutrender);

module.exports = router;
