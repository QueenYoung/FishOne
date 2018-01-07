import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Countdown extends Component {
  state = {
    seconds: '',
    minutes: '',
    hours: '',
    days: 0,
    words: ''
  }
  endTime = '2018/1/6'
  componentDidMount() {
    this.setState(this.timeRemaining());
    this.updateTimer = setInterval(() => {
      this.setState(this.timeRemaining())
    }, 1000);
  }

  toggle = ({ target }) => {
    target.classList.add('is-loading');
    target.classList.remove('is-loading');
    document.querySelector('.navbar').style.transform = 'translateY(-72px)';
  }

  componentWillUnmount() {
    clearInterval(this.updateTimer);
  }

  timeRemaining() {
    const remaining = (Date.parse(this.endTime) - Date.now()) / 1000;
    if (remaining <= 0) {
      return {
        words: '生日快乐!! 🎂 快点我!'
      }
    }
    const seconds = Math.trunc(remaining) % 60 + '';
    const minutes = Math.trunc((remaining / 60)) % 60 + '';
    const hours = Math.trunc((remaining / 60 / 60)) % 24 + '';
    const days = Math.trunc((remaining / 24 / 60 / 60)) + '';
    return {
      seconds,
      minutes,
      hours,
      days
    }
  }
  render() {
    const { seconds, minutes, hours, days, words } = this.state;
    return (
      <div className="navbar-item">
        {
          words ? <Link to="/summary">
              <button type="button"
              onClick={this.toggle}
              className="button is-light"
            >{words}</button>
          </Link>
            : <div style={{ fontFamily: 'monospace' }}>
                <span role="img" aria-label="cake">🎂</span>
                <span>{days}</span>:
                <span>{hours.padStart(2, '0')}</span>:
                <span>{minutes.padStart(2, '0')}</span>:
                <span>{seconds.padStart(2, '0')}</span>
              </div>
        }
      </div>
    );
  }
}

export default Countdown;
