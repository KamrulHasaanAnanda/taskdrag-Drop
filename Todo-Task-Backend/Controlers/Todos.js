const Todo = require('../Models/Todo')

const AddTodo=async(req,res)=>{
const {todoName}=req.body
if (!todoName) {
    res
      .status(500)
      .json({ status: 'error', error: 'Please Write a todo name' })
  }
  try {
    const result = await new Todo({ todoName }).save()
    console.log(result, 'result')

    res.status(200).json({ result })
  } catch (err) {
    res.send(err)
  }
} 

const allTodo = async(req,res)=>{
    console.log("dfdjhfjd")
    const result = await Todo.find({})
    res.send(result)
}

const deletTodo = async(req,res)=>{
    console.log("Delete Todo")
}

const AddInProgress= async(req,res)=>{

    const id =req.params.id
    await Todo.findByIdAndUpdate(id,{status:"inProgress"},{upsert:true},(err,docs)=>{
        if(err){
            res.send(err)
        }
        res.json({status:"success",message:"add in progress successfully"})
    }).clone()

}




const AddInDone= async(req,res)=>{
    const id =req.params.id
    await Todo.findByIdAndUpdate(id,{status:"done"},{upsert:true},(err,docs)=>{
        if(err){
            res.send(err)
        }
        res.json({status:"success",message:"add in done successfully"})
    }).clone()
}


const deletInDone = async(req,res)=>{
    console.log("Delete Todo")
}





module.exports = {
    AddTodo,
    deletTodo,AddInProgress,
    allTodo,
    AddInDone,deletInDone
  }
  