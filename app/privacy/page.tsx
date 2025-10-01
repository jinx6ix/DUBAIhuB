"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="font-serif text-4xl font-bold mb-8">{t.privacy.title}</h1>
            <p className="text-muted-foreground">{t.privacy.lastUpdated}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.privacy.introTitle}</h2>
            <p className="leading-relaxed">{t.privacy.introText}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.privacy.collectionTitle}</h2>
            <p className="leading-relaxed">{t.privacy.collectionText}</p>
            <ul className="list-disc pl-6 space-y-2">
              {t.privacy.collectionItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.privacy.useTitle}</h2>
            <p className="leading-relaxed">{t.privacy.useText}</p>
            <ul className="list-disc pl-6 space-y-2">
              {t.privacy.useItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.privacy.sharingTitle}</h2>
            <p className="leading-relaxed">{t.privacy.sharingText}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.privacy.securityTitle}</h2>
            <p className="leading-relaxed">{t.privacy.securityText}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.privacy.rightsTitle}</h2>
            <p className="leading-relaxed">{t.privacy.rightsText}</p>
            <ul className="list-disc pl-6 space-y-2">
              {t.privacy.rightsItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.privacy.contactTitle}</h2>
            <p className="leading-relaxed">{t.privacy.contactText}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
