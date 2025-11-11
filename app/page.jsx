'use client'

import { AppWindow, Ban, Book, BookText, Bookmark, Brain, KeyRound, Lamp, Palette, RefreshCw, Share2, Smartphone, Sparkles } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../lib/contexts/LanguageContext'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { t, isLoading } = useLanguage()
  const [quotes, setQuotes] = useState([])
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [isQuoteDark, setIsQuoteDark] = useState(false)
  const [isQuoteTransitioning, setIsQuoteTransitioning] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    // Load quotes from public/quotes.json
    fetch('/quotes.json')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setQuotes(data)
          setQuoteIndex(Math.floor(Math.random() * data.length))
          setIsQuoteDark(Math.random() > 0.5)
        }
      })
      .catch(() => {})
  }, [])

  // Tự động random quote mỗi 5 giây
  useEffect(() => {
    if (!quotes || quotes.length === 0) return;
    const interval = setInterval(() => {
      setIsQuoteTransitioning(true)
      setTimeout(() => {
        let next = Math.floor(Math.random() * quotes.length)
        if (quotes.length > 1 && next === quoteIndex) {
          next = (next + 1) % quotes.length
        }
        setQuoteIndex(next)
        setIsQuoteDark(prev => !prev)
        setIsQuoteTransitioning(false)
      }, 220) // thời gian fade-out trước khi đổi nội dung
    }, 5000)
    return () => clearInterval(interval);
  }, [quotes, quoteIndex]);

  // Don't render until language is loaded
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const featuresList = [
    { icon: <Smartphone className="w-7 h-7" />, title: t('features.items')[0].title, description: t('features.items')[0].description },
    { icon: <BookText className="w-7 h-7" />, title: t('features.items')[1].title, description: t('features.items')[1].description },
    { icon: <Bookmark className="w-7 h-7" />, title: t('features.items')[2].title, description: t('features.items')[2].description },
    { icon: <Lamp className="w-7 h-7" />, title: t('features.items')[3].title, description: t('features.items')[3].description },
    { icon: <Palette className="w-7 h-7" />, title: t('features.items')[4].title, description: t('features.items')[4].description },
    { icon: <Share2 className="w-7 h-7" />, title: t('features.items')[5].title, description: t('features.items')[5].description },
  ];

  const premiumList = [
    { icon: <KeyRound className="w-7 h-7" />, title: t('premium.features')[0].title, description: t('premium.features')[0].description },
    { icon: <Sparkles className="w-7 h-7" />, title: t('premium.features')[1].title, description: t('premium.features')[1].description },
    { icon: <Book className="w-7 h-7" />, title: t('premium.features')[2].title, description: t('premium.features')[2].description },
    { icon: <Brain className="w-7 h-7" />, title: t('premium.features')[3].title, description: t('premium.features')[3].description },
    { icon: <AppWindow className="w-7 h-7" />, title: t('premium.features')[4].title, description: t('premium.features')[4].description },
    { icon: <RefreshCw className="w-7 h-7" />, title: t('premium.features')[5].title, description: t('premium.features')[5].description },
    { icon: <Ban className="w-7 h-7" />, title: t('premium.features')[6].title, description: t('premium.features')[6].description },
  ];

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
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.features')}
              </Link>
              <Link
                href="#download"
                className="block text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.download')}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher onAction={() => setIsMenuOpen(false)} />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start md:items-center">
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
                  href="https://apps.apple.com/app/id6754702288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-0 focus:shadow-none"
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
                  className="group inline-flex items-center justify-center h-[62px] px-8 border-2 border-black border-dashed text-gray-900 font-bold text-lg rounded-[10px] hover:border-black hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 mx-auto sm:mx-0 w-auto"
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
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-lg animate-bounce delay-700">📱</div>
                <div className="absolute bottom-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-bounce delay-1000">📖</div>
                <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-xl shadow-lg animate-bounce delay-1200">🎨</div>
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
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-5 shadow-xl hover:shadow-2xl bg-slate-900 transition-all duration-500 transform hover:-translate-y-3 group border border-slate-700 overflow-hidden ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 flex items-center justify-center text-white">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-blue-100 transition-colors duration-300 relative z-10">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section - only one, big, centered, auto-change */}
      <section className="py-20 px-4 flex justify-center items-center bg-gray-50">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Great Minds Quotes</h2>
            <p className="text-lg text-gray-600 mt-3">{t?.('greatmind.quoteSectionSub') || 'Những câu nói truyền cảm hứng từ các vĩ nhân'}</p>
          </div>
          {quotes.length > 0 && (
            (() => {
              const q = quotes[quoteIndex] || quotes[0];
              const authorName = (q.authorId || '').replaceAll('_', ' ');
              const avatarSrc = `/images/authors/${q.authorId}.webp`;
              return (
                <div
                  key={q.authorId + q.text}
                  className={`mx-auto px-6 py-7 rounded-[20px] shadow-lg flex items-center transition-all duration-700 ${
                    isQuoteDark
                      ? 'bg-slate-900 border border-slate-700'
                      : 'bg-white border border-gray-100'
                  } ${isVisible ? 'scale-100' : 'scale-95'} ${isQuoteTransitioning ? 'opacity-0 translate-y-2 blur-[1px]' : 'opacity-100 translate-y-0 blur-0'}`}
                  style={{ maxWidth: 550, minHeight: 190, maxHeight: 210, overflow: 'hidden' }}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full border-4 overflow-hidden shadow-sm ${isQuoteDark ? 'border-white bg-slate-700' : 'border-white bg-gray-200'}`}
                    >
                      <Image 
                        src={avatarSrc} 
                        alt={authorName} 
                        width={64} 
                        height={64} 
                        sizes="64px"
                        quality={70}
                        loading="lazy"
                        className="w-16 h-16 object-cover" 
                      />
                    </div>
                  </div>
                  <div className="ml-7 flex-1 min-w-0">
                    <div className="flex flex-col">
                      <span className={`text-[20px] font-bold leading-tight truncate ${isQuoteDark ? 'text-white' : 'text-gray-900'}`}>{authorName}</span>
                      <span className={`text-[13px] truncate ${isQuoteDark ? 'text-gray-300' : 'text-gray-500'}`}>{q.category || 'Quote'}</span>
                      <div className="mt-4">
                        <p className={`text-[22px] italic leading-snug transition-colors duration-500 ${isQuoteDark ? 'text-white' : 'text-gray-800'} line-clamp-2`} 
                          style={{ lineHeight: 1.35, minHeight: 60, maxHeight: 58, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                          “{q.text}”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()
          )}
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {t('premium.title') && <>{t('premium.title')}{' '}</>}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">{t('premium.titleHighlight')}</span>
              {t('premium.titleSuffix') && <>{' '}{t('premium.titleSuffix')}</>}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('premium.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {premiumList.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 overflow-hidden ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-purple-500">{feature.icon}</div>
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
      <section id="download" className="py-20 px-4 bg-white border-t">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="mb-8 text-3xl sm:text-4xl font-bold text-gray-900 text-center">{t('cta.title')}</h2>
          <Link
            href="https://apps.apple.com/app/id6754702288"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-0 focus:shadow-none"
          >
            <Image
              src="/images/icons/appstore_download.png"
              alt={t('cta.downloadAppStore')}
              width={496}
              height={172}
              className="w-[220px] h-auto"
              priority
            />
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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
            <div>
              <h4 className="font-semibold text-white mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:contact@widgetstory.com" className="hover:text-white transition cursor-pointer underline decoration-dotted underline-offset-2">
                  contact@widgetstory.com
                  </a>
                </li>
                <li>
                  <a href="https://widgetstory.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition cursor-pointer underline decoration-dotted underline-offset-2">
                    widgetstory.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © 2025 Widget Story. All rights reserved.
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
