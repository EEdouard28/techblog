const router = require('express').Router();


router.get("/", (req, res) => {
    res.render("blog", {layout: "dashboard"})
})








module.exports = router;