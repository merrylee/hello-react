import React, {Component} from "react";
import logo from "./logo.svg";
// import "./App.css";
import LectureGoalList from "./components/LectureGoalList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>*/}
        {/*        <div>
          <h3>강의 목표</h3>
          <ul>
            <li>React 개발에 필요한 환경을 구축한다.</li>
            <li>새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8</li>
            <li>개발 편의를 위한 VSCode IDE를 익힌다.</li>
            <li>기본적인 Git 사용법을 익힌다.</li>
            <li>PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.</li>
            <li>React로 간단한 노트 앱을 만들어본다.</li>
          </ul>
        </div>*/}
        <LectureGoalList />
      </div>
    );
  }
}

export default App;
