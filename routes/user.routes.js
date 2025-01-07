const express = require('express');
const router = express.Router();

const { signup, signing, signout, getProfile } = require('../controllers/user.controller');
const { isAuthenticated } = require('../middlewares/auth.middlewares');






module.exports = router;