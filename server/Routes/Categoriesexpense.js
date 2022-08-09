const express = require("express")
const router = express.Router();
const {AddCategory} = require("../Controllers/categories")

router.post('/addcategory',AddCategory)


module.exports = router