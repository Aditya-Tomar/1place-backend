const router = require('express').Router();
const { getUserById, createUser } = require('../service/userService');


router.get('/:id', getUserById);
router.post('/', createUser)


module.exports = router;