import React, { useEffect } from "react";
import Card from "./Card";

function Todos({ getTodos, todoData, progressData, doneTodoData, dragOver }) {
  useEffect(() => {
    getTodos();
  }, []);

  const dragStart = (e) => {
    let target = e.target;
    e.dataTransfer.setData("todo_id", e.target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  let todo = todoData?.map((todo) => (
    <div
      key={todo.todoName}
      className="inside"
      id={`${todo._id}`}
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {<h2>{todo.todoName}</h2>}
    </div>
  ));

  let progress = progressData?.map((progress) => (
    <div
      key={progress.todoName}
      className="inside progressBackground"
      id={`${progress._id}`}
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {<h2>{progress.todoName}</h2>}
    </div>
  ));
  let doneList = doneTodoData?.map((progress) => (
    <div
      key={progress.todoName}
      className="inside doneBackground"
      id={`${progress._id}`}
      draggable={false}
    >
      {<h2>{progress.todoName}</h2>}
    </div>
  ));
  return (
    <div className="todos">
      <Card title={"To do"} dragOver={dragOver}>
        {todo}
      </Card>
      <Card
        title={"In progress"}
        titleClass="progressBackground"
        dragOver={dragOver}
      >
        {progress}
      </Card>
      <Card title={"Done"} dragOver={dragOver} titleClass="doneBackground">
        {doneList}
      </Card>
    </div>
  );
}

export default Todos;
