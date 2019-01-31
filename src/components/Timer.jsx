import React from "react";
import "./Timer.less";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mtNow: moment(),
    };
  }

  checkExpired = () => {
    const {expireDate} = this.props;
    const mtNow = this.state.mtNow;
    const mtExpire = moment(expireDate);
    const isExpired = mtExpire < mtNow;
    return isExpired; //종료되었으면TRUE
  }; //종료되었으면 TRUE리턴.

  componentDidMount() {
    console.log("didmount");
    if (!this.checkExpired()) {
      console.log("didmount-check");
      this.nTimer = setInterval(() => {
        this.setState({
          mtNow: moment(),
        });
      }, 1000);
    }
  }

  ComponentDidUpdate() {
    console.log("didupdate");
    if (this.checkExpired()) {
      console.log("didupdate-check!");
      clearInterval(this.nTimer);
    }
  }

  render() {
    const {expireDate, onExpired} = this.props;
    const mtNow = this.state.mtNow;
    const mtExpire = moment(expireDate);
    const isExpired = mtExpire < mtNow;

    return (
      <div className="Timer">
        <div>{`현재시간은 ${mtNow.format("a h:mm")}`}</div>

        {isExpired ? (
          <div>강의가 종료되었습니다.</div>
        ) : (
          <div>{`${mtExpire.fromNow()}에 강의를 종료합니다`}</div>
        )}
      </div>
    );
  }
}

export default Timer;
