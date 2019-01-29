import React from "react";

const Todos = (props) => {

  console.log('>>>>>>>>>>>', props);

  return (
    <div className="Todos">
      <h3>{props.title}</h3>
      <dl>
        {props.items.map((item, index)=> {
          return <dd key={index}><input type="checkbox"/>{item}</dd>;
        })}
      </dl>
    </div>
  );
};

export default Todos;
