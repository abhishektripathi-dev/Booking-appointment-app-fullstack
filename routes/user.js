const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);
router.post("/add-item", userController.postAddUser);

module.exports = router;