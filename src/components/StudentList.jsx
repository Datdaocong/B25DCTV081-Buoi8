import { Component } from 'react'

class StudentList extends Component {
  handleDelete = (id, name) => {
    const isConfirmed = window.confirm(`Bạn có chắc chắn muốn xóa sinh viên "${name}" không?`)
    if (isConfirmed) {
      this.props.onRemove(id)
    }
  }

  render() {
    const { students } = this.props

    if (students.length === 0) {
      return (
        <div className="card">
          <h3>Danh sách sinh viên</h3>
          <p className="empty-message">Chưa có sinh viên nào trong danh sách.</p>
        </div>
      )
    }

    return (
      <div className="card">
        <div className="card-header">
          <h3>Danh sách sinh viên</h3>
          <span className="badge">Tổng số: {students.length}</span>
        </div>

        <div className="table-responsive">
          <table className="student-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>Ngành học</th>
                <th>GPA</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {students.map((sv, index) => (
                <tr key={sv.id}>
                  <td>{index + 1}</td>
                  <td><strong>{sv.name}</strong></td>
                  <td>{sv.email}</td>
                  <td>
                    <span className="major-tag">{sv.major}</span>
                  </td>
                  <td>{Number(sv.gpa).toFixed(2)}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.handleDelete(sv.id, sv.name)}
                      className="btn btn-danger"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default StudentList
