import React from "react";
import {Checkbox} from "antd";

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
      <li className="TodoListItem" key={`todo-item-${index}`}>
        {/*        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleCheckbox}
        />*/}
        <Checkbox checked={completed} />
        <span>{name}</span>
      </li>
    );
  }
}

export default TodoListItem;
