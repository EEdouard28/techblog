const router = require('express').Router();
const {Blog, User, Comment} = require("../models")

router.get("/", async (req, res) => {
    try {
        const postData = await Blog.findAll({})

        const blogs = postData.map(blog => blog.get({plain: true}))

        res.render("all", {layout: "main", blogs});
    } catch (err){
        res.json(err);
    };
});


router.get("/login", (req, res) => {
    if(req.session.loggedIn){
        res.redirect("/")
        return 
    }
    res.render("login",{layout: "main", loggedIn: req.session.loggedIn})
})

router.get("/signup", (req, res) => {
    if(req.session.loggedIn){
        res.redirect("/")
        return 
    }
    res.render("signup",{layout: "main"})
})



module.exports = router;