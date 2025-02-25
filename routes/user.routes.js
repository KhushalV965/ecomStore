const express = require('express');
const router = express.Router();

const { signup, signing, signout, getProfile } = require('../controllers/user.controller');
const { isAuthenticated } = require('../middlewares/auth.middlewares');

router.post('/signup', signup);
router.post('/login', signing);
router.post('/logout', signout);
router.get('/profile', isAuthenticated, getProfile);




module.exports = router;