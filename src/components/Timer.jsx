import React from 'react';
import './Timer.css';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mtNow: moment()
    }
  }
  checkExpired = () => {
    const { expireDate } = this.props;
    const mtNow = this.state.mtNow;
    const mtExpire = moment(expireDate);

    const isExpired = mtNow < mtExpire;
  }

  componentDidMount() {
    if(!this.checkExpired()) {
      this.nTimer = setInterval(() => {
        this.setState({
          mtNow: moment()
        })
      }, 1000);
    }
  }

  ComponentDidUpdate() {
    if(this.checkExpired()) {
      clearInterval(this.nTimer);
    }
  }

  render() {
    const { expireDate } = this.props;
    const mtNow = this.state.mtNow;
    const mtExpire = moment(expireDate);

    const isExpired = mtNow < mtExpire;

    return (
        <div className="Timer">
          <div>{`현재시간은 ${mtNow.format('a h:mm')}`}</div>

          {isExpired ? (<div>{`${mtExpire.fromNow()}에 강의를 종료합니다`}</div>)
            : (<div>강의가 종료되었습니다.</div>)
          }
        </div>
        )
    }
}

export default Timer;
