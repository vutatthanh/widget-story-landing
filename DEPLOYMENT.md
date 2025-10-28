# Hướng Dẫn Deploy Widget Story Landing Page lên Vercel

## 📋 Yêu Cầu Trước Khi Deploy

- ✅ GitHub account
- ✅ Vercel account
- ✅ Project Next.js đã được push lên GitHub

## 🚀 Các Bước Deploy

### Bước 1: Chuẩn Bị Project Trên Máy Tính

```bash
# Vào thư mục project
cd /Users/thanhvu/Project/working-demo/widget-story-landing

# Cài đặt dependencies (nếu chưa có)
npm install

# Kiểm tra build có lỗi không
npm run build

# Nếu build thành công, tất cả đều sẵn sàng!
```

### Bước 2: Khởi Tạo Git & Push lên GitHub

```bash
# Khởi tạo git repository (nếu chưa có)
git init

# Thêm remote origin
git remote add origin https://github.com/USERNAME/widget-story-landing.git

# Thêm tất cả files
git add .

# Tạo commit đầu tiên
git commit -m "Initial commit: Widget Story landing page"

# Push lên GitHub
git branch -M main
git push -u origin main
```

> **Lưu ý:** Thay `USERNAME` bằng GitHub username của bạn

### Bước 3: Deploy trên Vercel

#### Cách 1: Thông Qua Dashboard Vercel (Dễ Nhất)

1. **Truy cập Vercel**

   - Mở https://vercel.com
   - Đăng nhập hoặc tạo account (có thể dùng GitHub account)

2. **Tạo Project Mới**

   - Nhấn nút "Add New..." → "Project"
   - Hoặc trực tiếp nhấn "New Project"

3. **Kết Nối GitHub**

   - Chọn GitHub repository `widget-story-landing`
   - Nếu lần đầu, Vercel sẽ yêu cầu cấp quyền

4. **Cấu Hình Project**

   - **Framework Preset:** Next.js (tự động detect)
   - **Root Directory:** `./` (mặc định)
   - **Build Command:** `npm run build` (tự động)
   - **Output Directory:** `.next` (tự động)
   - **Install Command:** `npm install` (tự động)

5. **Environment Variables (Tùy Chọn)**

   - Nhấn "Environment Variables"
   - Thêm các biến:
     ```
     NEXT_PUBLIC_IOS_APP_LINK = https://apps.apple.com/your-app-link
     ```

6. **Deploy**
   - Nhấn nút "Deploy"
   - Chờ 1-2 phút để hoàn thành
   - Vercel sẽ cấp cho bạn URL công khai

#### Cách 2: Thông Qua Vercel CLI (Nâng Cao)

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel

# Lần đầu sẽ hỏi:
# - Confirm project name: widget-story-landing
# - Confirm deployment? (Y/n): Y
# - Override settings? (y/N): N

# Lần tiếp theo chỉ cần chạy:
vercel --prod
```

### Bước 4: Cấu Hình Domain (Tùy Chọn)

Nếu bạn có domain riêng:

1. **Trong Vercel Dashboard**

   - Vào Project Settings
   - Chọn "Domains"
   - Nhấn "Add Domain"
   - Nhập domain của bạn (VD: `widget-story.com`)

2. **Cấu Hình DNS**

   - Vercel sẽ hướng dẫn thêm DNS records
   - Thường là CNAME record trỏ đến `cname.vercel.com`

3. **Xác Nhận**
   - Đợi DNS propagate (5-48 giờ)
   - Sau đó truy cập domain để kiểm tra

## 📝 Sau Khi Deploy

### Kiểm Tra Deployment

- ✅ Truy cập URL công khai từ Vercel
- ✅ Test responsive trên mobile
- ✅ Kiểm tra tất cả links hoạt động
- ✅ Test link tải iOS

### Cập Nhật Nội Dung

Khi cần cập nhật nội dung:

```bash
# 1. Chỉnh sửa files (VD: app/page.jsx)
# 2. Commit và push lên GitHub
git add .
git commit -m "Update landing page content"
git push origin main

# 3. Vercel tự động redeploy
# (Kiểm tra ở Vercel Dashboard → Deployments)
```

## 🔧 Tối Ưu Hóa Deployment

### Enable Analytics (Tùy Chọn)

Trong Vercel Dashboard:

1. Vào Project Settings
2. Chọn "Analytics"
3. Bật Analytics để xem traffic

### Custom Domain Email

1. Settings → Domains
2. Thêm email forwarding (nếu upgrade account)

### Environment Variables

Để thêm biến environment mà không muốn commit vào git:

1. Settings → Environment Variables
2. Thêm biến mới:
   - Name: `NEXT_PUBLIC_IOS_APP_LINK`
   - Value: `https://apps.apple.com/app-link-thực-tế`
   - Environments: Production, Preview, Development

## ⚠️ Troubleshooting

### Build Lỗi: "Module Not Found"

```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Bị Reject

- Kiểm tra `.gitignore` - có thể file bị ignore không cần thiết
- Kiểm tra `package.json` - tất cả dependencies phải được list

### Image Không Hiển Thị

- Kiểm tra image URL có hợp lệ không
- Vercel hỗ trợ Next.js Image Optimization tự động

## 📊 Monitoring & Logs

### Xem Logs Deployment

1. Vercel Dashboard → Project
2. Chọn "Deployments"
3. Nhấn vào deployment muốn xem
4. Xem "Build Logs" hoặc "Runtime Logs"

### Kiểm Tra Performance

- Vercel Analytics
- Lighthouse (Chrome DevTools)
- Web Vitals

## 🔒 Security Best Practices

- ✅ Không commit `.env` files
- ✅ Dùng Environment Variables cho secrets
- ✅ Enable HTTPS (tự động trên Vercel)
- ✅ Cấu hình security headers (đã trong `vercel.json`)

## 🆘 Cần Giúp?

### Tài Liệu Chính Thức

- Next.js: https://nextjs.org/docs/deployment
- Vercel: https://vercel.com/docs
- Tailwind: https://tailwindcss.com/docs

### Common Issues

**Q: Deploy thành công nhưng trang blank?**

- A: Kiểm tra browser console có error không

**Q: Build timeout?**

- A: Upgrade account Vercel (free tier có giới hạn)

**Q: Domain không hoạt động?**

- A: Chờ DNS propagate hoặc kiểm tra DNS settings

---

**Ready? Let's go! 🚀**
