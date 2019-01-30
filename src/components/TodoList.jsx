import React from "react";

class TodoList extends React.Component {

  componentDidMount() {
    console.log('componentDidMount !');
  }

  componentDidUnMount() {
    console.log('componentDidUnMount !');
  }

  render() {
    const {title, items} = this.props;

    return (
      <div className="TodoList" style={{backgroundColor: '#ccc'}}>
        <h3>{title}</h3>
        <ul>
          {items.map((item, index) => {

            const {name, completed} = item;

            return (<li key={`todo-item-${index}`}><input type="checkbox" checked={completed}/>{name}</li>)

          })}
        </ul>
      </div>
    );
  }
};

export default TodoList;
