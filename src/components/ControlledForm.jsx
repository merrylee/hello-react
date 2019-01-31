import React, {Component} from "react";

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: "",
    };
  }

  //input의 입력값을 갖고 enter를 치면, submit발생. 입력받은 값을 alert으로 찍기.
  handleSubmit(event) {
    console.log(event);
    alert(`입력값을 서버로 전송합니다: ${this.state.value}`);
    event.preventDefault();
  }

  handleInputChange = ({target}) => {
    console.log(target.value);
    this.setState({value: target.value});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ControlledForm;
