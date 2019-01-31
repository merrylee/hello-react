import React, {Component} from "react";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

const Preview = props => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(props.value),
      }}
    />
  );
};

class MarkEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleTextChange = ({target}) => {
    console.log(target.value);
    this.setState({value: target.value});
  };

  render() {
    return (
      <div>
        <h2>마크다운 에디터</h2>
        <Preview value={this.state.value} />
        <textarea onChange={this.handleTextChange} />
      </div>
    );
  }
}

export default MarkEditor;
