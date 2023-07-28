const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlerwares/authMiddleware');
const registerMiddleware = require('../middlerwares/registerMiddleware');

const router = express.Router();

router.route('/signup').post(registerMiddleware,authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get( authMiddleware,authController.getDashboardPage);
router.route('/:id').delete(authController.deleteUser);

module.exports = router;
