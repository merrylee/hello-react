import React from "react";
import TodoListItem from "../components/TodoListItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    // this.handleTitleClick = this.handleTitleClick().bind(this); //새로운함수반환.
  }

  componentDidMount() {
    console.log("componentDidMount !");
  }

  componentDidUnMount() {
    console.log("componentDidUnMount !");
  }

  handleTitleClick = () => {
    console.log("thisclick");
  };

  render() {
    const {title, items} = this.props;

    return (
      <div className="TodoList" style={{backgroundColor: "#ccc"}}>
        <h3 onClick={() => this.handleTitleClick(this)}>{title}</h3>
        <ul>
          {items.map((item, index) => {
            return <TodoListItem {...item} index={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
