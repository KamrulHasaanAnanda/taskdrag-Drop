const express = require("express");
const { AddTodo, deletTodo, AddInProgress, AddInDone,allTodo } = require("../Controlers/Todos");
const {checkInprogres, checkTodo} = require("./checkStatus");


const router = express.Router();


// post user
router.post("/add-todo",AddTodo)
router.get("/all-todo",allTodo)
// router.delete('/delete-todo/:id',deletTodo)
// router.get("/allUsers", getUsers)
router.post('/add-in-progress/:id',checkTodo,AddInProgress)
router.post('/add-in-done/:id',checkInprogres,AddInDone)
router.get('/',(req,res)=>{
   
    res.json({message:"start succes"})
})



module.exports = router