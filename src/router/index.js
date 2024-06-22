const router = require('express').Router();
const linksRouter = require('./links-router');
const userRouter = require('./user-router');



router.use('/links', linksRouter);
router.use('/users', userRouter)

// router.get('/links/:username', getLinksForUserCustomer);

// router.get('/links', getLinks);

// router.post();

// router.put();

// router.delete();

// router.use('/links', )

module.exports = router;