'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: '✨',
      title: 'Tạo Câu Chuyện Dễ Dàng',
      description: 'Giao diện trực quan cho phép bạn tạo câu chuyện tương tác chỉ trong vài phút',
    },
    {
      icon: '🎨',
      title: 'Tùy Chỉnh Toàn Diện',
      description: 'Chọn từ hàng trăm templates, màu sắc và effects độc đáo',
    },
    {
      icon: '🔗',
      title: 'Chia Sẻ Dễ Dàng',
      description: 'Chia sẻ công việc của bạn với bạn bè qua link hoặc mạng xã hội',
    },
    {
      icon: '💬',
      title: 'Tương Tác Thực Thời',
      description: 'Nhận phản hồi từ người xem và xem họ tương tác với câu chuyện',
    },
    {
      icon: '📱',
      title: 'Tối Ưu Mobile',
      description: 'Tận hưởng trải nghiệm hoàn hảo trên bất kỳ thiết bị nào',
    },
    {
      icon: '🚀',
      title: 'Luôn Cập Nhật',
      description: 'Các tính năng mới được thêm vào mỗi tháng',
    },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Widget Story Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl text-gray-900">Widget Story</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition">
                Tính Năng
              </Link>
              <Link href="#download" className="text-gray-600 hover:text-gray-900 transition">
                Tải Ứng Dụng
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link
                href="#features"
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Tính Năng
              </Link>
              <Link
                href="#download"
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Tải Ứng Dụng
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Tạo Câu Chuyện{' '}
                  <span className="gradient-text">Tương Tác</span> Của Riêng Bạn
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Widget Story là nền tảng cho phép bạn tạo và chia sẻ các câu chuyện hấp dẫn
                  với widgets tương tác. Không cần kỹ năng lập trình, chỉ cần tượng tưởng!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://apps.apple.com/your-app-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg-custom transition transform hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 13.5c-.91 0-1.82-.45-1.82-1.31h5.38c.14-2.2-.56-3.86-1.82-4.87-1.23-1.02-2.75-.97-4.02.14-1.56 1.36-1.73 3.85 0 5.35 1.27 1.1 2.61 1.34 4.03.58.77-.43 1.24-1.05 1.38-1.93h-5.38c.05.96.81 1.31 1.73 1.31h2.1v2.64h-2.9c-2.33 0-3.25-1.46-3.25-4.18v-2.5c0-2.72.92-4.18 3.25-4.18h2.9V6h-2.1c-.92 0-1.68.35-1.73 1.31h5.38c-.14-.88-.61-1.5-1.38-1.93-1.42-.76-2.76-.52-4.03.58-1.73 1.5-1.56 3.99 0 5.35 1.27 1.11 2.79 1.16 4.02.14 1.26-1.01 1.96-2.67 1.82-4.87h-5.38c0 .86.91 1.31 1.82 1.31h2.9v2.64h-2.1z" />
                  </svg>
                  Tải iOS
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 transition"
                >
                  Khám Phá Thêm
                </Link>
              </div>
            </div>

            <div className="relative h-96 sm:h-[500px]">
              <div className="absolute inset-0 gradient-primary rounded-2xl opacity-10 blur-3xl"></div>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg-custom">
                <Image
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=800&fit=crop"
                  alt="Widget Story App"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Tính Năng Nổi Bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tất cả những gì bạn cần để tạo các câu chuyện tương tác tuyệt vời
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg-custom transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">100K+</div>
              <p className="text-lg text-gray-600">Người Dùng Hoạt Động</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">500K+</div>
              <p className="text-lg text-gray-600">Câu Chuyện Được Tạo</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">5M+</div>
              <p className="text-lg text-gray-600">Người Xem Hàng Tháng</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Sẵn Sàng Bắt Đầu?
            </h2>
            <p className="text-xl text-white/90">
              Tải Widget Story ngay hôm nay và bắt đầu tạo các câu chuyện tương tác tuyệt vời
            </p>
          </div>

          <Link
            href="https://apps.apple.com/your-app-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary font-semibold rounded-lg hover:shadow-lg-custom transition transform hover:scale-105"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.05 13.5c-.91 0-1.82-.45-1.82-1.31h5.38c.14-2.2-.56-3.86-1.82-4.87-1.23-1.02-2.75-.97-4.02.14-1.56 1.36-1.73 3.85 0 5.35 1.27 1.1 2.61 1.34 4.03.58.77-.43 1.24-1.05 1.38-1.93h-5.38c.05.96.81 1.31 1.73 1.31h2.1v2.64h-2.9c-2.33 0-3.25-1.46-3.25-4.18v-2.5c0-2.72.92-4.18 3.25-4.18h2.9V6h-2.1c-.92 0-1.68.35-1.73 1.31h5.38c-.14-.88-.61-1.5-1.38-1.93-1.42-.76-2.76-.52-4.03.58-1.73 1.5-1.56 3.99 0 5.35 1.27 1.11 2.79 1.16 4.02.14 1.26-1.01 1.96-2.67 1.82-4.87h-5.38c0 .86.91 1.31 1.82 1.31h2.9v2.64h-2.1z" />
            </svg>
            Tải Ngay trên App Store
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/logo.png" 
                  alt="Widget Story" 
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-bold text-white">Widget Story</span>
              </div>
              <p className="text-sm text-gray-500">
                Tạo câu chuyện tương tác tuyệt vời
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Ứng Dụng</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    iOS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Android (Sắp Có)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Pháp Lý</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Chính Sách Bảo Mật
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Điều Khoản Dịch Vụ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © 2025 Widget Story. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.05c0-2.77 1.69-4.28 4.16-4.28 1.18 0 2.2.09 2.49.13v2.88h-1.71c-1.34 0-1.6.64-1.6 1.57v2.05h3.2l-.41 3.54h-2.79V20h-2.84z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
