# Hướng Dẫn Tùy Chỉnh Widget Story Landing Page

## 🎨 Tùy Chỉnh Màu Sắc

### Thay Đổi Màu Chính

Mở file `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#7C3AED',    // 👈 Thay đổi màu ở đây (hiện tại là tím)
      secondary: '#EC4899',  // 👈 Màu phụ (hiện tại là hồng)
    },
  },
},
```

**Ví dụ màu sắc phổ biến:**

- `#FF6B6B` - Đỏ nóng
- `#4ECDC4` - Xanh lam
- `#F7B731` - Vàng
- `#5F27CD` - Tím đậm
- `#00D2D3` - Xanh ngọc

### Áp Dụng Màu Mới

Sau khi thay đổi:

```bash
# Dừng dev server (Ctrl + C)
# Chạy lại dev server để thấy thay đổi
npm run dev
```

---

## ✏️ Tùy Chỉnh Nội Dung

### 1️⃣ Thay Đổi Tên Ứng Dụng

Tìm và thay thế `Widget Story` trong `app/page.jsx`:

**Navbar:**

```jsx
<span className="font-bold text-xl text-gray-900">Widget Story</span>
```

**Meta tags** trong `app/layout.jsx`:

```javascript
title: "Widget Story - Ứng dụng tạo câu chuyện...";
```

### 2️⃣ Cập Nhật Mô Tả Ứng Dụng

Trong Hero Section (`app/page.jsx`):

```jsx
<p className="text-xl text-gray-600 leading-relaxed">
  // ✏️ Thay thế text này bằng mô tả của bạn Widget Story là nền tảng cho phép
  bạn tạo...
</p>
```

### 3️⃣ Thay Đổi Hình Ảnh Hero

Trong `app/page.jsx`, tìm:

```jsx
<Image
  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=800&fit=crop"
  alt="Widget Story App"
  // 👆 Thay URL này bằng hình của bạn
/>
```

**Nguồn hình ảnh:**

- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

### 4️⃣ Cập Nhật Danh Sách Tính Năng

Tìm array `features` trong `app/page.jsx`:

```jsx
const features = [
  {
    icon: "✨",
    title: "Tạo Câu Chuyện Dễ Dàng",
    description: "Giao diện trực quan...",
  },
  // 👆 Thay đổi tính năng ở đây
  // Thêm icon emoji mới, tiêu đề, mô tả
];
```

**Danh sách emoji phổ biến:**

```
✨ ⭐ 🌟 💫 ✨ 🎯 🎨 🎭 🎪 🎬 🎸 🎹 🎺 🎻
🚀 🔥 💎 👑 🏆 🎖️ 📱 💻 🖥️ ⌚ 📡 🔗 🔐 🔒
❤️ 💚 💙 💛 🧡 💜 💘 💝 💖 💗 💓 💕
```

### 5️⃣ Cập Nhật Thống Kê

Tìm Stats Section trong `app/page.jsx`:

```jsx
<div className="space-y-2">
  <div className="text-5xl font-bold gradient-text">100K+</div>
  <p className="text-lg text-gray-600">Người Dùng Hoạt Động</p>
  // 👆 Thay số liệu của bạn
</div>
```

### 6️⃣ Thay Link Tải iOS

**Tìm và thay thế:**

```
https://apps.apple.com/your-app-link
```

**Thành:**

```
https://apps.apple.com/app/widget-story/id1234567890
```

---

## 🔧 Tùy Chỉnh Cấu Trúc & Layout

### Thêm Section Mới

Ví dụ thêm section "Testimonials":

```jsx
{
  /* Testimonials Section */
}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Người Dùng Nói Gì Về Chúng Tôi
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-gray-50 rounded-lg p-6">
        <p className="text-gray-600 mb-4">
          "Widget Story thực sự tuyệt vời! Dễ sử dụng và có rất nhiều tính
          năng."
        </p>
        <p className="font-semibold">Nguyễn Văn A</p>
        <p className="text-sm text-gray-500">Người dùng từ TP. HCM</p>
      </div>
    </div>
  </div>
</section>;
```

### Bỏ Đi Section

Xóa khối comment block:

```jsx
{
  /* Features Section */
}
<section>...</section>;
```

Hoặc comment lại:

```jsx
{
  /* <section>...</section> */
}
```

---

## 🎯 Tùy Chỉnh Typography & Font

### Thay Đổi Font

Trong `app/globals.css`:

```css
body {
  /* Font hiện tại */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", ...;

  /* Thay bằng font Google Fonts, ví dụ: */
  /* font-family: 'Poppins', sans-serif; */
}
```

**Để thêm Google Fonts:**

1. Mở `app/layout.jsx`
2. Thêm vào `<head>`:

```jsx
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
```

---

## 📱 Responsive Design

Landing page đã responsive, nhưng có thể tùy chỉnh:

```jsx
{
  /* Desktop only */
}
<div className="hidden md:block">Content chỉ trên desktop</div>;

{
  /* Mobile only */
}
<div className="md:hidden">Content chỉ trên mobile</div>;
```

---

## 🔗 Thêm Navigation Links

Cập nhật Footer hoặc Navbar:

```jsx
<Link href="/about" className="hover:text-white transition">
  Về Chúng Tôi
</Link>
```

---

## 💾 Lưu & Kiểm Tra

Sau mỗi thay đổi:

```bash
# Lưu file (tự động nếu dùng IDE)

# Dev server sẽ tự reload (hot reload)
# Mở http://localhost:3000 để xem thay đổi

# Nếu không update, restart dev server:
# Ctrl + C, rồi npm run dev
```

---

## 📸 Thay Đổi Logo

### Thay Logo Trong Navbar & Footer

Hiện tại dùng text `W` + gradient background.

**Để thay bằng hình ảnh:**

1. Thêm logo vào `public/` folder (VD: `logo.png`)

2. Thay thế code này:

```jsx
{
  /* Cũ - Text logo */
}
<div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-lg">W</span>
</div>;

{
  /* Mới - Image logo */
}
<Image
  src="/logo.png"
  alt="Widget Story"
  width={40}
  height={40}
  className="rounded-lg"
/>;
```

---

## 🎬 Advanced: Custom Components

Tạo component riêng để tái sử dụng:

**`app/components/Button.jsx`:**

```jsx
export function CTAButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg-custom transition transform hover:scale-105"
    >
      {children}
    </Link>
  );
}
```

**Sử dụng:**

```jsx
import { CTAButton } from "@/app/components/Button";

<CTAButton href="https://apps.apple.com/...">Tải iOS</CTAButton>;
```

---

## 🔍 SEO Optimization

Cập nhật `app/layout.jsx`:

```javascript
export const metadata = {
  title: "Widget Story - Tạo Câu Chuyện Tương Tác",
  description: "Mô tả dài hơn cho Google...",
  keywords: "widget, story, interactive, app, iOS",
  openGraph: {
    title: "Widget Story",
    description: "Tạo câu chuyện tương tác",
    images: ["https://your-domain.com/og-image.png"],
  },
};
```

---

## ❓ Troubleshooting

**Q: Thay đổi không hiển thị?**

- A: Restart dev server (Ctrl + C, npm run dev)

**Q: Màu gradient không đúng?**

- A: Kiểm tra `tailwind.config.js` và clear cache browser (Ctrl + Shift + R)

**Q: Hình ảnh bị broken?**

- A: Kiểm tra URL hoặc thử dùng hình từ Unsplash/Pexels

---

**Cần thêm tùy chỉnh gì nữa? Hãy cập nhật `app/page.jsx`!** 🚀
