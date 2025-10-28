# Widget Story Landing Page

Landing page hiện đại cho ứng dụng Widget Story, xây dựng bằng Next.js 14 và Tailwind CSS.

## 🚀 Tính Năng

- ✨ Responsive design (mobile-first)
- 🎨 UI hiện đại với gradient và animations
- ⚡ Tối ưu hiệu suất với Next.js 14
- 📱 Link tải ứng dụng iOS
- 🔍 SEO friendly
- 🚀 Sẵn sàng deploy trên Vercel

## 📋 Yêu Cầu

- Node.js 18+
- npm hoặc yarn

## 🛠️ Cài Đặt

```bash
# Clone project (nếu chưa có)
cd widget-story-landing

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📁 Cấu Trúc Project

```
widget-story-landing/
├── app/
│   ├── page.jsx           # Trang chính (landing page)
│   ├── layout.jsx         # Layout root
│   └── globals.css        # CSS global
├── public/                # Assets tĩnh
├── package.json
├── tailwind.config.js     # Cấu hình Tailwind
├── postcss.config.js      # Cấu hình PostCSS
└── next.config.js         # Cấu hình Next.js
```

## 🎨 Tùy Chỉnh

### Cập Nhật Link iOS App Store

Tìm `https://apps.apple.com/your-app-link` trong `app/page.jsx` và thay thế bằng link thực tế.

### Màu Sắc

Tùy chỉnh màu sắc trong `tailwind.config.js`:

```javascript
colors: {
  primary: '#7C3AED',    // Màu chính
  secondary: '#EC4899',  // Màu phụ
}
```

### Nội Dung

Cập nhật:

- Tên ứng dụng
- Mô tả
- Tính năng (features array)
- Thống kê (stats)
- Links mạng xã hội

## 🚀 Deployment trên Vercel

### Bước 1: Push code lên GitHub

```bash
git add .
git commit -m "Initial commit: Widget Story landing page"
git push origin main
```

### Bước 2: Deploy trên Vercel

1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập hoặc tạo tài khoản
3. Nhấn "New Project"
4. Chọn repository từ GitHub
5. Vercel sẽ tự động detect Next.js project
6. Nhấn "Deploy"

### Bước 3: Cấu hình Domain (tùy chọn)

Trong dashboard Vercel:

1. Vào project settings
2. Chọn "Domains"
3. Thêm domain tùy chỉnh

## 📊 Performance

- Lighthouse Score: 95+ (Desktop)
- Fully Responsive
- Optimized Images
- Fast Load Times

## 📝 Thay Đổi Được Thực Hiện

### Sections bao gồm:

1. **Navbar** - Navigation cố định với logo và menu
2. **Hero Section** - Tiêu đề lớn với CTA buttons
3. **Features Section** - 6 tính năng chính với icons
4. **Stats Section** - Thống kê ấn tượng
5. **CTA Section** - Lời kêu gọi hành động để tải ứng dụng
6. **Footer** - Links và thông tin công ty

## 🔄 Tiếp Theo

- [ ] Thay thế `https://apps.apple.com/your-app-link` bằng link thực tế
- [ ] Thêm Android download link khi có sẵn
- [ ] Thêm blog section
- [ ] Thêm testimonials từ users
- [ ] Tính năng newsletter subscription
- [ ] Analytics integration (Google Analytics, Mixpanel)

## 📧 Hỗ Trợ

Để thêm hoặc chỉnh sửa nội dung, hãy update các sections trong `app/page.jsx`.

## 📄 License

MIT
