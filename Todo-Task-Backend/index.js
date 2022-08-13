const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const todoRoutes = require("./routes/todoRoutes");

const userRouter = require('./Routes/userRoute')

const app = express();







const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


 const uri = 'mongodb://localhost:27017/Todo'

 mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }).then(()=>{
    console.log("Successfully connect to MongoDB.");
 }).catch(err=>{
    console.log(err)
    process.exit();
 })

 
 app.use('/api',todoRoutes)
app.use("/api/auth", userRouter);





 app.listen(PORT, () => {
    console.log(`Server is running on. http://localhost:${PORT}`);
  });
  

