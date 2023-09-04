const path = require ("path");

const mainController={
    showHome:(req, res)=>{
        res.render("home");
    },
    showlogin:(req, res)=>{
        res.render("login")
    },
    showregister:(req, res)=>{
        res.render("register")
    }
};

module.exports = mainController;
