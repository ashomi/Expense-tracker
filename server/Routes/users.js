const express = require("express")
const router = express.Router();
const {verifyAdmin, verifyUser} = require("../Utils/verifyToken")
const {allUsers,deleteAll,deleteUser,editauser,singleuser} = require("../Controllers/users");

//singleuser
router.get('/:id',verifyUser,singleuser);
//all users
router.get('/users',verifyAdmin,allUsers);
//update a user
router.put('/:id',verifyUser,editauser);
//delete a user
router.delete('/:id',verifyUser,deleteUser);
//delete all users
router.delete('/deleteall',verifyAdmin,deleteAll)
module.exports = router;