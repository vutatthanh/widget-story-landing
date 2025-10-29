# Images Directory

Thư mục này chứa tất cả hình ảnh sử dụng cho website Widget Story.

## Cấu trúc thư mục

```
public/images/
├── hero/           # Ảnh cho phần Hero section
├── features/       # Ảnh minh họa cho các tính năng
├── testimonials/   # Ảnh đại diện người dùng, reviews
├── icons/          # Icons, logos phụ
├── backgrounds/    # Ảnh nền, patterns
└── README.md       # File hướng dẫn này
```

## Quy tắc đặt tên

- Sử dụng tên file có ý nghĩa, dễ hiểu
- Sử dụng dấu gạch ngang (-) thay vì khoảng trắng
- Ví dụ: `hero-widget-app.jpg`, `feature-story-book.png`

## Định dạng ảnh khuyến nghị

- **Hero images**: 1200x800px (tỷ lệ 3:2)
- **Feature images**: 600x400px (tỷ lệ 3:2)
- **Icons**: 64x64px hoặc 128x128px (SVG khuyến nghị)
- **Backgrounds**: 1920x1080px hoặc lớn hơn

## Cách sử dụng trong code

```jsx
import Image from "next/image";

// Sử dụng ảnh từ thư mục images
<Image
  src="/images/hero/widget-app.jpg"
  alt="Widget Story App"
  width={600}
  height={400}
  className="object-cover"
/>;
```

## Tối ưu hóa

- Sử dụng Next.js Image component để tự động tối ưu
- Nén ảnh trước khi upload (khuyến nghị < 500KB)
- Sử dụng WebP format khi có thể
