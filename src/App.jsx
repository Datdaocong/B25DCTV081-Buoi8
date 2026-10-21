import { Component } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import Clock from './components/Clock'
import NoteBuoi9 from './components/NoteBuoi9'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id: 1, name: 'Nguyễn Văn An', email: 'an@ptit.edu.vn', major: 'CNTT', gpa: 3.5 },
        { id: 2, name: 'Trần Thị Bình', email: 'binh@ptit.edu.vn', major: 'ATTT', gpa: 3.8 },
        { id: 3, name: 'Lê Văn Cường', email: 'cuong@ptit.edu.vn', major: 'CNTT', gpa: 3.2 }
      ],
      searchTerm: '',
      showClock: true,
      currentTab: 'all'
    }
  }

  handleAddStudent = (newStudent) => {
    this.setState((prevState) => ({
      students: [...prevState.students, newStudent]
    }))
  }

  handleRemoveStudent = (id) => {
    this.setState((prevState) => ({
      students: prevState.students.filter((sv) => sv.id !== id)
    }))
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleToggleClock = () => {
    this.setState((prevState) => ({
      showClock: !prevState.showClock
    }))
  }

  handleTabChange = (tab) => {
    this.setState({ currentTab: tab })
  }

  render() {
    const { students, searchTerm, showClock, currentTab } = this.state

    const filteredStudents = students.filter((sv) =>
      sv.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    )

    return (
      <div className="container">
        <header className="header">
          <div className="student-info">
            <span className="badge-primary">Mã SV: B25DCTV081</span>
            <span className="badge-secondary">Học phần: Lập trình Web</span>
          </div>
          <h1>Bài tập Buổi 8: Class Component – State, Lifecycle & Form</h1>
        </header>

        <nav className="tab-navigation">
          <button
            type="button"
            className={currentTab === 'all' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => this.handleTabChange('all')}
          >
            Tất cả bài tập
          </button>
          <button
            type="button"
            className={currentTab === 'student' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => this.handleTabChange('student')}
          >
            Bài 1: Quản lý sinh viên
          </button>
          <button
            type="button"
            className={currentTab === 'clock' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => this.handleTabChange('clock')}
          >
            Bài 2: Đồng hồ & Lifecycle
          </button>
          <button
            type="button"
            className={currentTab === 'notes' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => this.handleTabChange('notes')}
          >
            Bài 3: Ghi chú Buổi 9
          </button>
        </nav>

        <main className="content">
          {(currentTab === 'all' || currentTab === 'student') && (
            <section className="exercise-section">
              <div className="section-title">
                <h2>Bài 1: Quản lý sinh viên (Class Component)</h2>
              </div>

              <div className="search-bar card">
                <label htmlFor="search">Tìm kiếm sinh viên theo tên:</label>
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={this.handleSearchChange}
                  placeholder="Nhập tên sinh viên cần tìm..."
                  className="search-input"
                />
              </div>

              <div className="student-layout">
                <div className="student-form-col">
                  <StudentForm onAdd={this.handleAddStudent} />
                </div>
                <div className="student-list-col">
                  <StudentList
                    students={filteredStudents}
                    onRemove={this.handleRemoveStudent}
                  />
                </div>
              </div>
            </section>
          )}

          {(currentTab === 'all' || currentTab === 'clock') && (
            <section className="exercise-section">
              <div className="section-title">
                <h2>Bài 2: Đồng hồ & Lifecycle</h2>
              </div>
              <div className="card">
                <div className="clock-toggle-bar">
                  <button
                    type="button"
                    onClick={this.handleToggleClock}
                    className="btn btn-primary"
                  >
                    {showClock ? 'Ẩn đồng hồ (Gỡ khỏi DOM)' : 'Hiện đồng hồ (Gắn vào DOM)'}
                  </button>
                </div>
                {showClock ? (
                  <Clock />
                ) : (
                  <p className="clock-hidden-text">Đồng hồ đang bị ẩn (đã kích hoạt componentWillUnmount).</p>
                )}
              </div>
            </section>
          )}

          {(currentTab === 'all' || currentTab === 'notes') && (
            <section className="exercise-section">
              <div className="section-title">
                <h2>Bài 3: Chuẩn bị thảo luận Buổi 9</h2>
              </div>
              <NoteBuoi9 />
            </section>
          )}
        </main>
      </div>
    )
  }
}

export default App
