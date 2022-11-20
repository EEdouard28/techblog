const router = require("express").Router();
const { Blog, User, Comment } = require("../models/");


router.get("/", async (req, res) => {
  try {
    // const blogData = await Blog.findAll({ include: [User] });
    // const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("blog", { layout: "dashboard" });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
