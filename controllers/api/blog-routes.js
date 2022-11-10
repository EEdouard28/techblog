const router = require('express').Router();
const { User, Blog } = require('../../models');

const withAuth = require('../../utils/auth')
//need to plug in with Auth in req.session.userId ..n
router.post("/", withAuth, async (req, res) => {
    const body = req.body
    try {
        const newBlog = await Blog.create({...body, userId:req.session.userId})
        res.json(newBlog)

    } catch(err){res.status(500).json(err)}
})







module.exports = router