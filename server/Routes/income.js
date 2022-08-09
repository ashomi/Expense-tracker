const express = require("express")
const router = express.Router();
const {addIncome} = require('../Controllers/income')

router.post('/addicomes',addIncome)


module.exports = router