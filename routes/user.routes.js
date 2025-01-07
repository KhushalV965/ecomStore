const express = require('express');
const router = express.Router();

const { signup, signing, signout, getProfile } = require('../controllers/user.controller');
const { isAuthenticated } = require('../middlewares/auth.middlewares');

router.post('/signup', signup);





module.exports = router;