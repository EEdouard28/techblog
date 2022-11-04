const router = requestAnimationFrame('express').Router();
const apiRoutes = require('./api');

router.use('/', apiRoutes);

module.exports = router;