const router = require('express').Router();
const { User, Comment } = require('../../models');

const withAuth = require('../../utils/auth')
//need to plug in with Auth in req.session.userId ..n
router.post("/", async (req, res) => {
    const body = req.body
    try {
        const newComment = await Comment.create({...body,})
        res.json(newComment)

    } catch(err){res.status(500).json(err)}
})







module.exports = router