import { Component } from 'react'

class StudentForm extends Component {
  state = {
    name: '',
    email: '',
    major: 'CNTT',
    gpa: '',
    errors: {}
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  validate = () => {
    const errors = {}
    if (this.state.name.trim().length < 3) {
      errors.name = 'Họ tên tối thiểu 3 ký tự'
    }
    if (!/^\S+@\S+\.\S+$/.test(this.state.email)) {
      errors.email = 'Email không hợp lệ'
    }
    const gpaNum = parseFloat(this.state.gpa)
    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4) {
      errors.gpa = 'GPA phải từ 0 đến 4'
    }
    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors })
    if (Object.keys(errors).length > 0) return

    this.props.onAdd({
      id: Date.now(),
      name: this.state.name,
      email: this.state.email,
      major: this.state.major,
      gpa: this.state.gpa
    })

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
      <form onSubmit={this.handleSubmit} className="form-box">
        <h3>Thêm sinh viên</h3>
        <div className="form-group">
          <label>Họ tên: </label>
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email: </label>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Ngành: </label>
          <select name="major" value={major} onChange={this.handleChange}>
            <option value="CNTT">CNTT</option>
            <option value="ATTT">ATTT</option>
            <option value="DTVT">DTVT</option>
          </select>
        </div>

        <div className="form-group">
          <label>GPA: </label>
          <input
            name="gpa"
            type="number"
            step="0.1"
            value={gpa}
            onChange={this.handleChange}
          />
          {errors.gpa && <span className="error">{errors.gpa}</span>}
        </div>

        <button type="submit">Thêm</button>
      </form>
    )
  }
}

export default StudentForm
