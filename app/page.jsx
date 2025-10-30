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
      <section className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-pink-400/15 to-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400/8 to-orange-500/8 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  New: Premium Features Available
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  {t('hero.title')}{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">{t('hero.titleHighlight')}</span> {t('hero.titleSuffix')}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  {t('hero.description')}
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  href="https://apps.apple.com/your-app-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <Image
                    src="/images/icons/appstore_download.png"
                    alt={t('cta.downloadAppStore')}
                    width={496}
                    height={172}
                    className="w-[180px] h-auto"
                    priority
                  />
                </Link>
                <Link
                  href="#features"
                  className="group inline-flex items-center justify-center h-[62px] px-8 border-2 border-gray-300 text-gray-900 font-bold text-lg rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {t('hero.exploreMore')}
                </Link>
              </div>
            </div>

            <div className={`relative h-[500px] sm:h-[600px] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/20">
                <Image
                  src="/images/hero/s1.png"
                  alt="Widget Story App"
                  fill
                  className="object-scale-down"
                  priority
                />
                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-lg animate-bounce delay-700">
                  📱
                </div>
                <div className="absolute bottom-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-bounce delay-1000">
                  📖
                </div>
                <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-xl shadow-lg animate-bounce delay-1200">
                  🎨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Core Features
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('features.title')}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t('features.items').map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-gray-100 overflow-hidden ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl z-20"></div>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  {feature.description}
                </p>
                <div className="absolute top-1 left-0 right-0 bottom-0 rounded-b-2xl border-2 border-transparent group-hover:border-blue-200 group-hover:border-t-0 transition-colors duration-300 pointer-events-none z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/20 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-500/20 rounded-full animate-ping delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Trusted by Millions
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Join our growing community of creative users worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
              <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">50K+</div>
              <p className="text-xl text-blue-200 font-medium">{t('stats.widgetsCreated')}</p>
            </div>
            <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
              <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">10K+</div>
              <p className="text-xl text-blue-200 font-medium">{t('stats.storyBooksPublished')}</p>
            </div>
            <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
              <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">1M+</div>
              <p className="text-xl text-blue-200 font-medium">{t('stats.shares')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {t('premium.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('premium.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {t('premium.features').map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-200 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t('premium.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('cta.description')}
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="https://apps.apple.com/your-app-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/25"
            >
              <Image
                src="/images/icons/appstore_download_light.png"
                alt={t('cta.downloadAppStore')}
                width={496}
                height={172}
                className="w-[220px] h-auto"
              />
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
                <Image 
                  src="/logo.png" 
                  alt="Widget Story" 
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg object-cover"
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
                  <Link href="/privacy" className="hover:text-white transition">
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
