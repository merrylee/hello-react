import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const Page = styled.div`
  /*  position: relative;
  width: 100px;
  margin: 0 auto;*/
  display: flex;
  justify-content: center;
  align-item: center;
  align-self: center;
  min-height: 80vh;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <h2>Home</h2>
      </Page>
    );
  }

  ComponentDidMount() {
    console.log("index didmounted");
  }

  ComponentWillUpdate() {
    console.log("index update");
  }

  componentWillUnmount() {
    console.log("index unmount");
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <h2>About</h2>
      </Page>
    );
  }

  ComponentDidMount() {
    console.log("About didmounted");
  }

  ComponentWillUpdate() {
    console.log("About update");
  }

  componentWillUnmount() {
    console.log("About unmount");
  }
}

const AppRouter = () => (
  <Router>
    <div className="App-router">
      <Navigation />

      <Route path="/" exact component={Index} />
      <Route path="/about/" strict component={About} />
      {/*<Route path="/users/" component={Users} />*/}
      <Route path="/todolist/" component={TodoList} />
    </div>
  </Router>
);

export default AppRouter;
