const { getUserDetails, createUserDetails } = require('../repository/users'); 

async function getUserById(req, res) {
    const id = req.params.id;
    const data = await getUserDetails(id);
    res.json({ data });
}

async function createUser(req, res) {
    try {
        const userDetails = req.body;
        await createUserDetails(userDetails);
        res.status(200).send();
    } catch (err) {
        res.status(400).send();
    }
}

module.exports = {
    getUserById,
    createUser
};