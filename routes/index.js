const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: import your diagnostics route
const diagnostics = require('./diagnostics');

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
// TODO: Initialize diagnostics route
router.use('/diagnostics', diagnostics);

// * It's done when I have created a `fetch()` request on the front end that will send a POST request to `/api/diagnostics` every time a user attempts to submit an invalid form.


module.exports = router;
