const router = require('express').Router();
const { getLinksForUser, getLinksForUserCustomer } = require('../service/linksService');



router.get('/:id', getLinksForUser);

router.get('/:username', getLinksForUserCustomer);

// router.get('/links', getLinks);

// router.post();

// router.put();

// router.delete();

router.use('/links', )

export default router;