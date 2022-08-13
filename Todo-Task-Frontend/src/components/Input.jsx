import React, { useReducer } from "react";
import { toast } from "react-toastify";
import TodoServices from "../apis/TodoServices";

function Input({ getTodos }) {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      todoName: "",
    }
  );

  let addTodo = async () => {
    console.log("state.todoName", state.todoName);
    let res = await TodoServices.add({ todoName: state.todoName });
    if (res.status === 200) {
      setState({ todoName: "" });
      getTodos();
      toast.success("To do added!", {
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
  };
  return (
    <div className="inputs">
      <input
        type={"text"}
        placeholder="Write your task"
        name="todoName"
        value={state.todoName}
        onChange={(e) => setState({ todoName: e.target.value })}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Input;
