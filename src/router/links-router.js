const router = require('express').Router();
const { getLinksForUser } = require('../service/linksService');


router.get('/:id', getLinksForUser);



module.exports = router;