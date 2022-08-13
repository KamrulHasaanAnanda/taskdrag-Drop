const mongoose = require('mongoose')
const { Schema } = mongoose;

const TodoSchema = new Schema({
    todoName:{
        type:String,
       
    },
    status: {
        type: String,
        enum : ['todo','inProgress',"done"],
        default: 'todo'
    },
  

})
const Todo = mongoose.model('todos',TodoSchema);

module.exports = Todo