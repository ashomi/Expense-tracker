const express = require("express");
const {postUser, LoginUser }=  require("../Controllers/auth");
const router = express.Router();
//signup
router.post('/register',postUser);
//login
router.post('/login',LoginUser)

module.exports = router;

