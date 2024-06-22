const { getUserDetails, createUserDetails } = require('../repository/users'); 

async function getUserById(req, res) {
    // const id = req.id;
    const data = await getUserDetails();
    res.json({ data });
}

async function createUser(req, res) {
    try {
        await createUserDetails();
        res.status(200).send();
    } catch (err) {
        res.status(400).send();
    }
}

module.exports = {
    getUserById,
    createUser
};