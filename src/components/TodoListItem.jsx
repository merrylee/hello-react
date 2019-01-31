import React from "react";

class TodoListItem extends React.Component {
  state = {
    isCompleted: true,
  };

  handleCheckbox = () => {
    console.log("1");
  };

  render() {
    const {index, name, completed} = this.props;

    return (
      <li key={`todo-item-${index}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleCheckbox}
        />
        {name}
      </li>
    );
  }
}

export default TodoListItem;
