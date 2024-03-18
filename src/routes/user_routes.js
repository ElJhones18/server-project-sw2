const userController = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();

router.post('/new-user', userController.createUser)
router.get('/', userController.listUsers)
router.get('/:id', userController.getUser)
router.patch('/edit/:id', userController.editUser)
// router.put('/new-user', userController.editUser)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router;