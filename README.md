# B25DCTV081 - Buoi8

## Thông tin sinh viên & Học phần
- Mã sinh viên: B25DCTV081
- Học phần: Lập trình Web
- Nội dung: Buổi 8 – Class Component: State, Lifecycle, Sự kiện & Form

---

## Hướng dẫn cài đặt và chạy ứng dụng

```bash
cd "Buoi 8"
npm install
npm run dev
```

Sau khi chạy lệnh trên, truy cập đường dẫn hiển thị trên terminal (mặc định: `http://localhost:5173/`).

---

## Nội dung bài tập đã hoàn thành

### Bài 1: Quản lý sinh viên (Class Component)
- Sử dụng đầy đủ cú pháp Class Component: `class`, `constructor`, `super(props)`, `this.state`, `this.setState`.
- Form nhập liệu sinh viên dạng **Controlled Form**:
  - Các trường: Họ tên, Email, Ngành học (select), Điểm GPA.
  - Quản lý đồng bộ qua state và phương thức `handleChange` dùng cú pháp `[e.target.name]: e.target.value`.
- **Validation**:
  - Họ tên: tối thiểu 3 ký tự.
  - Email: đúng định dạng email tiêu chuẩn regex.
  - GPA: kiểm tra kiểu số hợp lệ trong khoảng 0.0 đến 4.0.
  - Hiển thị thông báo lỗi cụ thể ngay dưới từng ô nhập.
- **Danh sách sinh viên**:
  - Duyệt và render qua hàm `map` kết hợp thuộc tính `key` ổn định (`sv.id`).
  - Hiển thị thông báo "Chưa có sinh viên nào trong danh sách" khi danh sách trống hoặc kết quả tìm kiếm không khớp.
- **Tính năng nâng cao**:
  - Tìm kiếm theo tên sinh viên trong thời gian thực.
  - Xóa sinh viên có hộp thoại xác nhận `window.confirm`.
  - Cập nhật state mảng đúng chuẩn bất biến (immutable) bằng `setState(prevState => ...)`.

### Bài 2: Đồng hồ & Lifecycle (Class Component)
- Nút bấm Ẩn/Hiện đồng hồ để kiểm thử chu trình gắn vào DOM (Mounting) và gỡ khỏi DOM (Unmounting).
- Ghi log rõ ràng từng phương thức vòng đời ra trình duyệt (F12 Console):
  - `constructor`: Khởi tạo state ban đầu.
  - `render`: Trả về JSX hiển thị giao diện.
  - `componentDidMount`: Đăng ký `setInterval` cập nhật giờ mỗi giây.
  - `componentDidUpdate`: Kiểm tra thay đổi và cập nhật tiêu đề trang `document.title`.
  - `componentWillUnmount`: Xóa bỏ bộ đếm với `clearInterval` để tránh rò rỉ bộ nhớ.
- Nút bấm tăng số lượt click và tự động đổi `document.title` theo dạng "Đã bấm X lần" thông qua `componentDidUpdate`.

### Bài 3: Chuẩn bị thảo luận Buổi 9 (Class Component vs Hooks)
1. **Cú pháp dài dòng và nhiều nghi thức rườm rà**: Component kiểu lớp đòi hỏi phải khai báo `constructor`, gọi `super(props)`, kế thừa `Component`, khai báo hàm `render()`.
2. **Từ khóa `this` dễ gây nhầm lẫn**: Khi truyền hàm xử lý sự kiện cho React, ngữ cảnh `this` bị mất nếu không bind thủ công hoặc viết dưới dạng arrow function, dẫn đến lỗi runtime phổ biến.
3. **Logic bị phân tán theo vòng đời**: Cùng một nghiệp vụ (như timer hoặc fetch dữ liệu) bị chia cắt ra nhiều phương thức khác nhau (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`), gây khó khăn trong việc bảo trì và không thể tách ra tái sử dụng thuận tiện như Custom Hook.
