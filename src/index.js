import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const myElem = <p>이렇게써도되는거냐?</p>;

const MyCom = () => <p>나도몰라..OTL</p>;

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

ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
