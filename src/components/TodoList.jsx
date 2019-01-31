import React from "react";
import TodoListItem from "../components/TodoListItem";
import "./TodoList.less";

class TodoList extends React.Component {
  static defaultProps = {
    items: [
      {name: "React 개발에 필요한 환경을 구축한다.", completed: true},
      {
        name: "새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8",
        completed: true,
      },
      {name: "개발 편의를 위한 VSCode IDE를 익힌다.", completed: false},
      {name: "기본적인 Git 사용법을 익힌다.", completed: false},
      {
        name: "PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.",
        completed: true,
      },
      {name: "React로 간단한 노트 앱을 만들어본다.", completed: false},
    ],
  };

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
