# B25DCTV081 - Buoi8

- Họ tên / Mã SV: B25DCTV081
- Học phần: Lập trình Web
- Bài tập về nhà Buổi 8: Class Component – State, Lifecycle, Sự kiện và Form

## Hướng dẫn chạy

```bash
cd "Buoi 8"
npm install
npm run dev
```

## Nội dung bài tập

### 1. Quản lý sinh viên (Class Component)
- Form nhập: Họ tên, Email, Ngành, GPA (thang điểm 4).
- Validate: Họ tên tối thiểu 3 ký tự, email đúng định dạng, GPA từ 0 đến 4. Lỗi hiện bên cạnh/dưới ô nhập.
- Tìm kiếm sinh viên theo tên.
- Danh sách hiển thị dạng bảng (dùng `map` và `key`).
- Nút Xóa có hộp thoại xác nhận `window.confirm`.

### 2. Đồng hồ & Lifecycle
- Nút Ẩn/Hiện đồng hồ để kiểm tra `componentDidMount` và `componentWillUnmount`.
- Ghi log ra Console các phương thức lifecycle: `constructor`, `render`, `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.
- Đổi tiêu đề `document.title` theo số lần bấm nút trong `componentDidUpdate`.

### 3. Chuẩn bị Buổi 9 (3 điểm rườm rà của Class Component)
1. Cú pháp dài dòng: Luôn phải viết `constructor`, `super(props)`, kế thừa `Component`, hàm `render()`.
2. Từ khóa `this` phức tạp: Phải bind `this` hoặc dùng arrow function, rất dễ quên và sinh lỗi `this is undefined`.
3. Vòng đời phân mảnh: Logic của một chức năng (như timer) phải chia ra ở cả `componentDidMount` và `componentWillUnmount`, khó gom nhóm và tái sử dụng.
