import './globals.css'

export const metadata = {
  title: 'Widget Story - Ứng dụng tạo widget đẹp mắt cho điện thoại',
  description: 'Widget Story - Ứng dụng di động cho phép bạn tạo các widget tùy chỉnh với ảnh, hiệu ứng, lịch và đồng hồ. Tạo câu chuyện hình ảnh và chia sẻ dễ dàng!',
  keywords: 'widget story, mobile app, widget creator, story book, greatmind, theme customization',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Widget Story - Tạo Widget Đẹp Mắt',
    description: 'Tạo widget đẹp mắt, kể câu chuyện bằng hình ảnh và chia sẻ dễ dàng',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=630&fit=crop',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        {/* Safari specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Widget Story" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Force favicon refresh for Safari */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
      </head>
      <body className="bg-white">{children}</body>
    </html>
  )
}
