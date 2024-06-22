const router = require('express').Router();
const { getUserById } = require('../service/userService');


router.get('/:id', getUserById);



module.exports = router;