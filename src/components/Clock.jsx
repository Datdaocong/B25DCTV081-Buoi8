import { Component } from 'react'

class Clock extends Component {
  state = {
    time: new Date(),
    count: 0
  }

  componentDidMount() {
    console.log('Clock: componentDidMount')
    this.timer = setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Clock: componentDidUpdate')
    if (prevState.count !== this.state.count) {
      document.title = `Đã bấm ${this.state.count} lần`
    }
  }

  componentWillUnmount() {
    console.log('Clock: componentWillUnmount')
    clearInterval(this.timer)
  }

  render() {
    console.log('Clock: render')
    return (
      <div className="clock-box">
        <h3>{this.state.time.toLocaleTimeString()}</h3>
        <button
          onClick={() => this.setState((p) => ({ count: p.count + 1 }))}
        >
          Đã bấm: {this.state.count} (Đổi tiêu đề trang)
        </button>
      </div>
    )
  }
}

export default Clock
