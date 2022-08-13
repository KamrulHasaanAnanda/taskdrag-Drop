const express = require("express");
const {addUser,loginUser, getUsers, getAlluser} = require('../controlers/userControlers');
// const auth = require("../middleware/auth");
const router = express.Router();


// post user
router.post("/register",addUser)
// router.get("/:id", getUsers);
router.post('/login',loginUser)
router.get("/user-show/:id",getUsers)
router.get('/allUsers/:id',getAlluser)



module.exports = router