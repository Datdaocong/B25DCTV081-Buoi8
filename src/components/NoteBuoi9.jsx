import { Component } from 'react'

class NoteBuoi9 extends Component {
  render() {
    return (
      <div className="card notes-card">
        <h3>Chuẩn bị Buổi 9: Thảo luận Class Component vs Hooks</h3>
        <p className="subtitle">
          3 điểm nhận thấy rườm rà hoặc dễ mắc lỗi khi triển khai với Class Component:
        </p>
        <ol className="notes-list">
          <li>
            <strong>Cú pháp dài dòng và nhiều nghi thức:</strong> Phải viết <code>constructor</code>, <code>super(props)</code>, kế thừa <code>Component</code>, và gọi <code>render()</code> cho mọi component dù đơn giản.
          </li>
          <li>
            <strong>Xử lý từ khóa <code>this</code> phức tạp:</strong> Các hàm xử lý sự kiện phải bind <code>this</code> thủ công trong constructor hoặc dùng cú pháp arrow function thuộc tính lớp; nếu sơ suất sẽ gặp lỗi <code>TypeError: Cannot read properties of undefined</code>.
          </li>
          <li>
            <strong>Logic bị chia cắt theo vòng đời (Lifecycle):</strong> Một chức năng như đồng hồ hoặc gọi API bị xé lẻ ra ở <code>componentDidMount</code>, <code>componentDidUpdate</code> và <code>componentWillUnmount</code>; việc cập nhật state bất đồng bộ đòi hỏi dùng callback <code>setState(prev =&gt; ...)</code> và việc tái sử dụng logic có state giữa các component rất khó khăn.
          </li>
        </ol>
      </div>
    )
  }
}

export default NoteBuoi9
