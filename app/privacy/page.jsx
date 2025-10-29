'use client'

import Image from 'next/image'
import Link from 'next/link'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { useLanguage } from '../../lib/contexts/LanguageContext'

export default function PrivacyPolicy() {
  const { t, isLoading } = useLanguage()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Widget Story Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Widget Story
              </span>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            {t('privacy.title')}
          </h1>
          <p className="text-center text-gray-600 mb-8">
            {t('privacy.subtitle')}
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <p className="text-blue-800 font-medium">
                {t('privacy.intro')}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-400 pl-4">
                {t('privacy.sections.informationWeCollect.title')}
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {t('privacy.sections.informationWeCollect.personalInfo.title')}
              </h3>
              <p className="mb-4">{t('privacy.sections.informationWeCollect.personalInfo.description')}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {t('privacy.sections.informationWeCollect.personalInfo.items').map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {t('privacy.sections.informationWeCollect.appData.title')}
              </h3>
              <p className="mb-4">{t('privacy.sections.informationWeCollect.appData.description')}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {t('privacy.sections.informationWeCollect.appData.items').map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {t('privacy.sections.informationWeCollect.technicalInfo.title')}
              </h3>
              <p className="mb-4">{t('privacy.sections.informationWeCollect.technicalInfo.description')}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {t('privacy.sections.informationWeCollect.technicalInfo.items').map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-400 pl-4">
                {t('privacy.sections.howWeUseInfo.title')}
              </h2>
              <p className="mb-4">{t('privacy.sections.howWeUseInfo.description')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t('privacy.sections.howWeUseInfo.items').map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-400 pl-4">
                {t('privacy.sections.dataSharing.title')}
              </h2>
              <p className="mb-4">{t('privacy.sections.dataSharing.description')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t('privacy.sections.dataSharing.items').map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-400 pl-4">
                {t('privacy.sections.dataSecurity.title')}
              </h2>
              <p className="mb-4">{t('privacy.sections.dataSecurity.description')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t('privacy.sections.dataSecurity.items').map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-400 pl-4">
                {t('privacy.sections.userRights.title')}
              </h2>
              <p className="mb-4">{t('privacy.sections.userRights.description')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t('privacy.sections.userRights.items').map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-400 pl-4">
                {t('privacy.sections.childrenPrivacy.title')}
              </h2>
              <p className="text-gray-700">{t('privacy.sections.childrenPrivacy.description')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-400 pl-4">
                {t('privacy.sections.policyChanges.title')}
              </h2>
              <p className="mb-4">{t('privacy.sections.policyChanges.description')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t('privacy.sections.policyChanges.items').map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </section>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('privacy.sections.contact.title')}
              </h2>
              <p className="mb-4">{t('privacy.sections.contact.description')}</p>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <strong>{t('privacy.sections.contact.email')}:</strong> contact@widgetstory.com
                </li>
                <li className="text-gray-700">
                  <strong>{t('privacy.sections.contact.website')}:</strong> https://widgetstory.com
                </li>
              </ul>
              <p className="mt-4 text-gray-600 italic">
                {t('privacy.sections.contact.responseTime')}
              </p>
            </div>

            <div className="text-center text-gray-500 text-sm border-t pt-6">
              <p><strong>{t('privacy.lastUpdated')}:</strong> November 1, 2025</p>
              <p><strong>{t('privacy.version')}:</strong> 1.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
