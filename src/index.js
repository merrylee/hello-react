import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function tick() {
  console.log("tick");
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

const nTimer = setInterval(tick, 1000);

const nTimer2 = setTimeout(function() {
  clearInterval(nTimer);
}, 5000);

// setInterval(tick, 1000);

/*
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const MyElem = <p>HTML태그를쓴 컴포넌트</p>;
const MyCom = () => <p>HTML태그를쓴 컴포넌트</p>;

console.log(MyElem, MyCom());

ReactDOM.render(<App />, document.getElementById("root"));

class MyClassCom extends React.Component {
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트</p>
        <MyCom />
      </div>
    );
  }
}
// console.log(myCom);
// console.log(myElem, myCom(), <myCom />);
console.log(MyClassCom);
console.log(<MyClassCom />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
