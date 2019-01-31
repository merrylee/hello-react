import React, {PureComponent} from "react";
import {Button, Input, Modal} from "antd";
import "./Counter.less";

const Search = Input.Search;

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      open: false,
      list: [1, 2, 3, 4, 5],
    };
  }

  handleClick = e => {
    const {list} = this.state;
    // let num = Math.random() * 1000;
    // num = Math.ceil(num);

    // list.push(Math.ceil(num));
    const num = list.filter(n => {
      return n % 2 === 1;
    });

    this.setState({list: num});
  };

  render() {
    return (
      <div className="Counter">
        <header className="App-header">
          {this.state.list.map((item, idx) => {
            return <div key={`list-item${idx}`}>{item}</div>;
          })}
          <Button onClick={this.handleClick}>카운터</Button>
        </header>
      </div>
    );
  }
}

export default Counter;
