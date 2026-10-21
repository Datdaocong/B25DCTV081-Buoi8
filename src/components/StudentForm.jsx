import { Component } from 'react'

class StudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      major: 'CNTT',
      gpa: '',
      errors: {}
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  validate = () => {
    const errors = {}
    const { name, email, gpa } = this.state

    if (!name.trim()) {
      errors.name = 'Họ tên không được để trống'
    } else if (name.trim().length < 3) {
      errors.name = 'Họ tên tối thiểu 3 ký tự'
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      errors.email = 'Email không được để trống'
    } else if (!emailPattern.test(email)) {
      errors.email = 'Email không hợp lệ'
    }

    if (gpa === '' || gpa === null) {
      errors.gpa = 'GPA không được để trống'
    } else {
      const gpaNum = parseFloat(gpa)
      if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4) {
        errors.gpa = 'GPA phải từ 0 đến 4'
      }
    }

    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors })

    if (Object.keys(errors).length > 0) {
      return
    }

    const newStudent = {
      id: Date.now(),
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      major: this.state.major,
      gpa: parseFloat(this.state.gpa)
    }

    this.props.onAdd(newStudent)

    this.setState({
      name: '',
      email: '',
      major: 'CNTT',
      gpa: '',
      errors: {}
    })
  }

  render() {
    const { name, email, major, gpa, errors } = this.state

    return (
      <div className="card">
        <h3>Thêm sinh viên mới</h3>
        <form onSubmit={this.handleSubmit} className="student-form">
          <div className="form-group">
            <label htmlFor="name">Họ và tên:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Ví dụ: Nguyễn Văn An"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Ví dụ: an@ptit.edu.vn"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="major">Ngành học:</label>
            <select
              id="major"
              name="major"
              value={major}
              onChange={this.handleChange}
            >
              <option value="CNTT">Công nghệ thông tin (CNTT)</option>
              <option value="ATTT">An toàn thông tin (ATTT)</option>
              <option value="DTVT">Điện tử viễn thông (DTVT)</option>
              <option value="DPT">Đa phương tiện (ĐPT)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="gpa">Điểm GPA (thang 4):</label>
            <input
              id="gpa"
              type="number"
              step="0.01"
              name="gpa"
              value={gpa}
              onChange={this.handleChange}
              placeholder="0.0 - 4.0"
              className={errors.gpa ? 'input-error' : ''}
            />
            {errors.gpa && <p className="error-text">{errors.gpa}</p>}
          </div>

          <button type="submit" className="btn btn-primary">
            Thêm sinh viên
          </button>
        </form>
      </div>
    )
  }
}

export default StudentForm
