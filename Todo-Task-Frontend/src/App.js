import "./App.css";
import Input from "./components/Input";
import Todos from "./components/Todos";

import { toast, ToastContainer } from 'react-toastify';

import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import TodoServices from "./apis/TodoServices";
function App() {

  const [todoData, settodoData] = useState();
  const [progressData, setprogressData] = useState();
  const [doneTodoData, setdoneTodoData] = useState();
  const drop = (e) => {
    e.preventDefault();
    let target = e.target;
    const todo_id = e.dataTransfer.getData("todo_id");
    const todo = document.getElementById(todo_id);
    todo.style.display = "block";
    console.log("target", target.childNodes[0].className);

    if (target.tagName === "H2" || target.tagName === "H1" ||target.className==="inputs" || target.className==="todos" || target.className==="App") {
      toast.error("You can't drop here!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
        savedata(todo_id, target.childNodes[0].innerText);
        let newClass = `${todo.className} ${target.childNodes[0].className}`
        todo.className = newClass
        // console.log('todo.className :>> ', newClass);
      target.appendChild(todo);
    }
  };
  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  let savedata = async (id, place) => {
    // console.log('place :>> ', place);
    if (place === "In progress") {
      let res = await TodoServices.addInProgress(id);
      if (res.status === 200) {
        toast.success("Added to in progress!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else if (place === "Done") {
      // console.log("place :>> ", place);

      let res = await TodoServices.addInDone(id);
      //   console.log("res :>> ", res);
      if (res.status === 200) {
        toast.success("Added to done!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      // console.log("res :>> ", res);
    }
  };

  let getTodos = async()=>{
    let res = await TodoServices.get();
    let tData =  res?.filter(r=>r.todoName && r.status === "todo");
    let pData =  res?.filter(r=>r.todoName && r.status === "inProgress");
    let doneData =  res?.filter(r=>r.todoName && r.status === "done");


    // console.log('data', data)
    settodoData(tData);
    setprogressData(pData)
    setdoneTodoData(doneData)
  
    // console.log(res.data);
  }
  return (
    <div className="App" onDrop={drop}  onDragOver={dragOver}>
      <Input getTodos={getTodos}/>

      <Todos getTodos={getTodos} dragOver={dragOver} todoData={todoData} progressData={progressData} doneTodoData={doneTodoData}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
