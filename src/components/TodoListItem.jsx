import React from "react";
import {Checkbox, Button} from "antd";

class TodoListItem extends React.Component {
  render() {
    const {index, name, completed} = this.props;

    return (
      <li className="TodoListItem" key={`todo-item-${index}`}>
        <Checkbox checked={completed} />
        <span>{name}</span>
        <Button>수정</Button>
        <Button className={"btn-delete"}>삭제</Button>
      </li>
    );
  }
}

export default TodoListItem;
