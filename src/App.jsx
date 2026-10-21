import { Component } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import Clock from './components/Clock'
import './App.css'

class App extends Component {
  state = {
    students: [
      { id: 1, name: 'Nguyễn Văn An', email: 'an@ptit.edu.vn', major: 'CNTT', gpa: 3.5 },
      { id: 2, name: 'Trần Thị Bình', email: 'binh@ptit.edu.vn', major: 'ATTT', gpa: 3.8 },
      { id: 3, name: 'Lê Văn Cường', email: 'cuong@ptit.edu.vn', major: 'CNTT', gpa: 3.2 }
    ],
    search: '',
    showClock: true
  }

  add = (sv) => {
    this.setState((p) => ({
      students: [...p.students, sv]
    }))
  }

  remove = (id) => {
    this.setState((p) => ({
      students: p.students.filter((s) => s.id !== id)
    }))
  }

  render() {
    const filteredStudents = this.state.students.filter((s) =>
      s.name.toLowerCase().includes(this.state.search.toLowerCase())
    )

    return (
      <div className="container">
        <h2>Quản lý sinh viên - B25DCTV081</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên..."
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
        </div>

        <StudentForm onAdd={this.add} />
        <StudentList items={filteredStudents} onRemove={this.remove} />

        <hr />

        <h2>Đồng hồ & Lifecycle</h2>
        <button onClick={() => this.setState((p) => ({ showClock: !p.showClock }))}>
          {this.state.showClock ? 'Ẩn đồng hồ' : 'Hiện đồng hồ'}
        </button>

        {this.state.showClock && <Clock />}
      </div>
    )
  }
}

export default App
