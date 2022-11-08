const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

//render through mainlayout when not logged in(get routes)
router.use('/', homeRoutes);
//Post puts and deletes
router.use('/api', apiRoutes);

//render through dashboard layout when logged in(get routes)
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
})

module.exports = router;