'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../lib/contexts/LanguageContext'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { t, isLoading } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Don't render until language is loaded
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 hover:bg-white/98 hover:shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Widget Story Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Widget Story</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 transform">
                {t('nav.features')}
              </Link>
              <Link href="#download" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 transform">
                {t('nav.download')}
              </Link>
              <LanguageSwitcher />
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
                {t('nav.features')}
              </Link>
              <Link
                href="#download"
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                {t('nav.download')}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t('hero.title')}{' '}
                  <span className="gradient-text animate-pulse">{t('hero.titleHighlight')}</span> {t('hero.titleSuffix')}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  href="https://apps.apple.com/your-app-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg-custom transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-pulse hover:animate-none"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 13.5c-.91 0-1.82-.45-1.82-1.31h5.38c.14-2.2-.56-3.86-1.82-4.87-1.23-1.02-2.75-.97-4.02.14-1.56 1.36-1.73 3.85 0 5.35 1.27 1.1 2.61 1.34 4.03.58.77-.43 1.24-1.05 1.38-1.93h-5.38c.05.96.81 1.31 1.73 1.31h2.1v2.64h-2.9c-2.33 0-3.25-1.46-3.25-4.18v-2.5c0-2.72.92-4.18 3.25-4.18h2.9V6h-2.1c-.92 0-1.68.35-1.73 1.31h5.38c-.14-.88-.61-1.5-1.38-1.93-1.42-.76-2.76-.52-4.03.58-1.73 1.5-1.56 3.99 0 5.35 1.27 1.11 2.79 1.16 4.02.14 1.26-1.01 1.96-2.67 1.82-4.87h-5.38c0 .86.91 1.31 1.82 1.31h2.9v2.64h-2.1z" />
                  </svg>
                  {t('hero.downloadIos')}
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  {t('hero.exploreMore')}
                </Link>
              </div>
            </div>

            <div className={`relative h-96 sm:h-[500px] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="absolute inset-0 gradient-primary rounded-2xl opacity-10 blur-3xl animate-pulse"></div>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg-custom transform hover:scale-105 transition-all duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=800&fit=crop"
                  alt="Widget Story App"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Floating Widget Icons */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center text-2xl animate-bounce delay-700">
                  📱
                </div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-xl animate-bounce delay-1000">
                  📖
                </div>
                <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center text-lg animate-bounce delay-1200">
                  🎨
                </div>
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
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t('features.items').map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-md hover:shadow-lg-custom transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-200/30 rounded-full animate-ping delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className={`space-y-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
              <div className="text-5xl font-bold gradient-text animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 cursor-pointer">50K+</div>
              <p className="text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">{t('stats.widgetsCreated')}</p>
            </div>
            <div className={`space-y-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
              <div className="text-5xl font-bold gradient-text animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 cursor-pointer">10K+</div>
              <p className="text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">{t('stats.storyBooksPublished')}</p>
            </div>
            <div className={`space-y-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
              <div className="text-5xl font-bold gradient-text animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 cursor-pointer">1M+</div>
              <p className="text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">{t('stats.shares')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white animate-pulse hover:animate-none">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 hover:text-white transition-colors duration-300">
              {t('cta.description')}
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="https://apps.apple.com/your-app-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary font-semibold rounded-lg hover:shadow-lg-custom transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-bounce hover:animate-none group"
            >
              <svg
                className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 13.5c-.91 0-1.82-.45-1.82-1.31h5.38c.14-2.2-.56-3.86-1.82-4.87-1.23-1.02-2.75-.97-4.02.14-1.56 1.36-1.73 3.85 0 5.35 1.27 1.1 2.61 1.34 4.03.58.77-.43 1.24-1.05 1.38-1.93h-5.38c.05.96.81 1.31 1.73 1.31h2.1v2.64h-2.9c-2.33 0-3.25-1.46-3.25-4.18v-2.5c0-2.72.92-4.18 3.25-4.18h2.9V6h-2.1c-.92 0-1.68.35-1.73 1.31h5.38c-.14-.88-.61-1.5-1.38-1.93-1.42-.76-2.76-.52-4.03.58-1.73 1.5-1.56 3.99 0 5.35 1.27 1.11 2.79 1.16 4.02.14 1.26-1.01 1.96-2.67 1.82-4.87h-5.38c0 .86.91 1.31 1.82 1.31h2.9v2.64h-2.1z" />
              </svg>
              {t('cta.downloadAppStore')}
            </Link>
          </div>
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
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">{t('footer.app')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    {t('footer.ios')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    {t('footer.androidComing')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    {t('footer.privacyPolicy')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    {t('footer.termsOfService')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                {t('footer.copyright')}
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
