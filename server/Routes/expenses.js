const express = require("express");
const router = express.Router();
const {addExpense} = require('../Controllers/expenses')



router.post('/addexpenses',addExpense)

module.exports = router