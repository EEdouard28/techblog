const router = require('express').Router();


router.get("/", (req, res) => {
    res.render("all", {layout: "main"})
})








module.exports = router;