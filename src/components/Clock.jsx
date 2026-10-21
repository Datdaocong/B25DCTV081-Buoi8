import { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      clickCount: 0
    }
    console.log('Clock: constructor')
  }

  componentDidMount() {
    console.log('Clock: componentDidMount')
    this.timer = setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Clock: componentDidUpdate')
    if (prevState.clickCount !== this.state.clickCount) {
      document.title = `Đã bấm ${this.state.clickCount} lần`
    }
  }

  componentWillUnmount() {
    console.log('Clock: componentWillUnmount')
    clearInterval(this.timer)
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1
    }))
  }

  render() {
    console.log('Clock: render')
    const { time, clickCount } = this.state

    return (
      <div className="clock-box">
        <h4>Đồng hồ thời gian thực</h4>
        <div className="clock-display">
          {time.toLocaleTimeString()}
        </div>
        <p className="clock-hint">
          Hãy mở Console (F12) để xem log của các phương thức Lifecycle: constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount.
        </p>
        <div className="clock-action">
          <button
            type="button"
            onClick={this.handleButtonClick}
            className="btn btn-secondary"
          >
            Bấm tôi để đổi document.title (Số lần: {clickCount})
          </button>
        </div>
      </div>
    )
  }
}

export default Clock
