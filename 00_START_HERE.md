# 🎯 START HERE - Bắt Đầu Tại Đây

Chào mừng đến với **Widget Story Landing Page** project! 🚀

Đây là file hướng dẫn nhanh để bạn bắt đầu trong 5 phút.

---

## ⚡ Bắt Đầu Nhanh (5 Phút)

### Step 1: Cài đặt & Chạy (2 phút)
```bash
cd /Users/thanhvu/Project/working-demo/widget-story-landing
npm install
npm run dev
```
✅ Mở http://localhost:3000 để xem kết quả

### Step 2: Tùy chỉnh Cơ Bản (3 phút)
Chỉnh sửa những điều sau:

**1. Thay link iOS App Store:**
- Tìm: `https://apps.apple.com/your-app-link`
- Thay thành: `https://apps.apple.com/app/...id...`

**2. Thay tên ứng dụng:**
- Mở: `app/page.jsx`
- Tìm: `Widget Story`
- Thay thành: Tên ứng dụng của bạn

**3. Thay màu sắc (tuỳ chọn):**
- Mở: `tailwind.config.js`
- Thay `colors.primary` từ `#7C3AED` thành màu mong muốn

---

## 📚 Tài Liệu Đầy Đủ

Hãy đọc các file markdown này theo thứ tự:

1. **[INDEX.md](INDEX.md)** ← Chỉ mục tất cả tài liệu
2. **[QUICK_START.md](QUICK_START.md)** ← Chi tiết bắt đầu nhanh
3. **[CUSTOMIZATION.md](CUSTOMIZATION.md)** ← Cách tùy chỉnh chi tiết
4. **[DEPLOYMENT.md](DEPLOYMENT.md)** ← Cách deploy lên Vercel
5. **[ARCHITECTURE.md](ARCHITECTURE.md)** ← Kiến trúc ứng dụng
6. **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** ← Tóm tắt dự án

---

## 🎯 Các Bước Tiếp Theo

### Ngay lập tức (5 phút)
- ✅ Chạy `npm run dev`
- ✅ Mở http://localhost:3000
- ✅ Xem landing page hoạt động

### Trong vòng 1 giờ
- 📝 Cập nhật link iOS App Store
- 🎨 Thay đổi màu sắc (nếu muốn)
- 📱 Test trên mobile (F12 → Device Emulation)

### Trong vòng 1 ngày
- 💾 Thay nội dung tính năng
- 🖼️ Thay hình hero
- ✨ Thay đổi thêm chi tiết khác

### Trong vòng 1 tuần
- 🚀 Deploy lên Vercel
- 🌐 Cấu hình domain (nếu có)
- 📊 Setup analytics

---

## 📦 Cấu Trúc Project

```
widget-story-landing/
├── app/
│   ├── page.jsx          # ← 🎯 Landing page chính
│   ├── layout.jsx        # ← Root layout + SEO
│   └── globals.css       # ← Styles
│
├── 📖 Documentation files (*.md)
├── ⚙️ Config files (*.js, *.json)
└── 📁 public/            # Cho images, icons
```

---

## 🚀 Deploy lên Vercel (5 Phút)

### Option 1: Web UI (Dễ nhất)
1. Mở https://vercel.com
2. Login/Signup
3. Click "New Project"
4. Chọn repository từ GitHub
5. Deploy ✅

### Option 2: CLI
```bash
npm i -g vercel
vercel
```

---

## ❓ FAQ

**Q: Làm sao mà tôi không thấy thay đổi?**
A: Restart dev server (`Ctrl + C` → `npm run dev`)

**Q: Làm sao để thêm hình ảnh?**
A: Xem [CUSTOMIZATION.md](CUSTOMIZATION.md#3️⃣-thay-đổi-hình-ảnh-hero)

**Q: Làm sao để thêm section mới?**
A: Xem [CUSTOMIZATION.md](CUSTOMIZATION.md#thêm-section-mới)

**Q: Deploy bị lỗi?**
A: Xem [DEPLOYMENT.md](DEPLOYMENT.md#⚠️-troubleshooting)

---

## 🎨 Giao Diện

Landing page bao gồm:
- ✅ Navbar (sticky)
- ✅ Hero Section (tiêu đề + nút CTA)
- ✅ Features Section (6 tính năng)
- ✅ Stats Section (thống kê)
- ✅ CTA Section (kêu gọi hành động)
- ✅ Footer (links + social media)

---

## ⚙️ Tech Stack

- **Next.js 14** - Framework React
- **React 18** - UI Library
- **Tailwind CSS 3** - Styling
- **Vercel** - Hosting

---

## 💡 Quick Tips

1. **Hot Reload**: Thay đổi tệp → Tự động cập nhật (không cần restart)
2. **Responsive**: Nhấn F12 → Device Emulation để test mobile
3. **Colors**: https://color-picker.com để chọn màu
4. **Images**: https://unsplash.com cho hình free
5. **Emojis**: https://emojipedia.org để chọn icon

---

## 📞 Cần Giúp?

| Vấn Đề | Xem File |
|--------|----------|
| Bắt đầu | [QUICK_START.md](QUICK_START.md) |
| Tùy chỉnh | [CUSTOMIZATION.md](CUSTOMIZATION.md) |
| Deploy | [DEPLOYMENT.md](DEPLOYMENT.md) |
| Kiến trúc | [ARCHITECTURE.md](ARCHITECTURE.md) |
| Tất cả | [INDEX.md](INDEX.md) |

---

## 🎯 Next Action

👉 **Chạy lệnh này ngay:**
```bash
npm run dev
```

Sau đó mở http://localhost:3000 và xem trang landing page của bạn! 🎉

---

**Happy building! 🚀✨**

*Tôi ở đây để giúp bạn thành công!*
