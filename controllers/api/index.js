const router = require('express').Router();

// const homeRoutes = require('./user-routes');
const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');


// router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
