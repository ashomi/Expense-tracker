const express = require("express")
const router = express.Router();
const {addCaledar,getCalendar} = require('../Controllers/calendar')

router.post('/addcalendars',addCaledar);
router.get('/',getCalendar)

module.exports =router