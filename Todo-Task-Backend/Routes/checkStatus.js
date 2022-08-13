const Todo = require("../Models/Todo")


 const checkInprogres = async(req,res,next)=>{
    const id= req.params.id
    const todo = await Todo.findById(id)

    if(todo){
        if(todo?.status==="inProgress"){
            next()
    
        }
        else if(todo?.status=="done"){
            res.json({message:"you already done your todo"})
    
        }
        else{
            res.status(500).json({status:"error",message:" Please complete in progress Process"})
        }
    
    }
    else{
        res.status(500).json({status:"error",message:"This Id has  no todo"})
    }
    

}
const checkTodo = async(req,res,next)=>{
    const id= req.params.id
    const todo = await Todo.findById(id)
  if(todo)
  {
     
    if(todo?.status==="todo"){
        next()
    }
    else if(todo?.status=="inProgress"){
        res.json({message:"you already in inprogress Process"})

    }
   
  }
  else{
    res.status(500).json({status:"error",message:"This Id  has no todo"})
}
  

}
module.exports={
    checkInprogres,
    checkTodo
}