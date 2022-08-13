import React from "react";

function Card({ dragOver, children, title, titlecolor, titleClass }) {
  return (
    <div className="todo-1">
      <h1 className={`${titleClass}`} style={{ background: `${titlecolor}` }}>
        {title}
      </h1>

      {children}
    </div>
  );
}

export default Card;
