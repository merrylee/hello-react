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

  componentDidMount() {
    setInterval(() => {
      this.setState({
        mtNow: moment()
      })
    }, 1000);
  }

  render() {
    const { expireDate } = this.props;
    const mtNow = this.state.mtNow;
    const mtExpire = moment(expireDate);

    return (
      <div className="Timer">
        <div>{`현재시간은 ${mtNow.format('a h:mm')}`}</div>
        <div>{`${mtExpire.fromNow()}에 강의를 종료합니다`}</div>
      </div>
    )

  }

}

export default Timer;
