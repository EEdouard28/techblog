const router = require("express").Router();
const { User, Blog } = require("../../models");
const withAuth = require("../../utils/auth");

//need to plug in with Auth in req.session.userId ..n
router.post("/", withAuth, async (req, res) => {
  // const body = req.body;
  // console.log(body);
  try {
    const newBlog = await Blog.create({ title: req.body.title, body: req.body.body, userId: req.session.userId });
    res.json(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", (req, res) => {
  console.log("HIT THIS ROUTE")
  res.json({
    message: "Hello from get blog"
  });
})

module.exports = router;
