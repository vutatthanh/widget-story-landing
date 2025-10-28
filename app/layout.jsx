import './globals.css'

export const metadata = {
  title: 'Widget Story - Ứng dụng tạo câu chuyện với widgets tương tác',
  description: 'Widget Story - Nền tảng tạo và chia sẻ các câu chuyện hấp dẫn với widgets tương tác. Trải nghiệm sáng tạo một cách dễ dàng và vui vẻ.',
  keywords: 'widget story, interactive stories, creative app, mobile app',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Widget Story - Ứng dụng tạo câu chuyện',
    description: 'Tạo và chia sẻ câu chuyện hấp dẫn với widgets tương tác',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-adf4e66e5bb8?w=1200&h=630&fit=crop',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="bg-white">{children}</body>
    </html>
  )
}
