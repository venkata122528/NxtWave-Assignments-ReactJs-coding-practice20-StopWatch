// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutesTime: 0, secondsTime: 0}

  componentWillUnmount() {
    clearInterval(this.uniqId)
  }

  onClickStart = () => {
    const {minutesTime, secondsTime} = this.state

    if (secondsTime === 59) {
      this.setState({minutesTime: minutesTime + 1, secondsTime: 0})
    } else {
      this.uniqId = setInterval(this.increaseSeconds, 1000)
    }
  }

  increaseSeconds = () => {
    const {secondsTime, minutesTime} = this.state

    if (secondsTime === 59) {
      this.setState({minutesTime: minutesTime + 1, secondsTime: 0})
    } else {
      this.setState({secondsTime: secondsTime + 1})
    }
  }

  onClickStop = () => {
    clearInterval(this.uniqId)
  }

  onClickReset = () => {
    clearInterval(this.uniqId)
    this.setState({minutesTime: 0, secondsTime: 0})
  }

  render() {
    const {minutesTime, secondsTime} = this.state

    return (
      <div className="mainContainer">
        <div className="stopWatchContainer">
          <h1 className="mainHeading">Stopwatch</h1>
          <div className="timerCardContainer">
            <div className="timerContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timerImage"
              />
              <p className="timerTitle">Timer</p>
            </div>
            <h1 className="stopWatchTime">
              {minutesTime <= 9 ? `0${minutesTime}` : minutesTime}:
              {secondsTime <= 9 ? `0${secondsTime}` : secondsTime}
            </h1>
            <div className="buttonsContainer">
              <button
                className="startButton"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="stopButton"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="resetButton"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
