import React, {Component} from "react";
import {Button, Input, Modal} from "antd";
import "./Counter.less";

const Search = Input.Search;

class Counter extends Component {
  // state = {
  //   count: 0,
  // };

  constructor(props) {
    super(props);

    this.count = 0;
    this.state = {
      open: false,
      list: [1, 2, 3, 4, 5],
    };
  }

  handleClick = e => {
    // this.setState(prevState => {
    //   return {count: prevState.count + 1};
    // });
    // this.setState(prevState => {
    //   return {count: prevState.count + 1};
    // });
    // this.setState(prevState => {
    //   return {count: prevState.count + 1};
    // });
    // this.setState(prevState => {
    //   return {count: prevState.count + 1};
    // });

    this.count = this.count + 1;

    if (this.count === 10) {
      this.forceUpdate();
    }

    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <div className="Counter">
        <header className="App-header">
          {/*{this.state.count}*/}
          {this.count}

          <Input.Search
            className={"Search"}
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
            style={{width: 320}}
          />

          <Button onClick={this.handleClick}>카운터</Button>
        </header>
      </div>
    );
  }
}

export default Counter;
