const router = require('express').Router();


router.get("/", (req, res) => {
    res.render("profile", {layout: "dashboard"})
})








module.exports = router;