const User = require('../model/user');

exports.postAddUser = async (req, res, next) => {
    const { name, phone, email } = req.body;
    try {
        const user = await User.create({ name, phone, email });
        res.status(201).json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add user' });
    }
};
  
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.getUserById = async (req, res, next) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};