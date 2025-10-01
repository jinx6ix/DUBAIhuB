"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="font-serif text-4xl font-bold mb-8">{t.terms.title}</h1>
            <p className="text-muted-foreground">{t.terms.lastUpdated}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.terms.agreementTitle}</h2>
            <p className="leading-relaxed">{t.terms.agreementText}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.terms.servicesTitle}</h2>
            <p className="leading-relaxed">{t.terms.servicesText}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.terms.bookingTitle}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {t.terms.bookingItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.terms.responsibilitiesTitle}</h2>
            <p className="leading-relaxed">{t.terms.responsibilitiesText}</p>
            <ul className="list-disc pl-6 space-y-2">
              {t.terms.responsibilitiesItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.terms.liabilityTitle}</h2>
            <p className="leading-relaxed">{t.terms.liabilityText}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.terms.disputeTitle}</h2>
            <p className="leading-relaxed">{t.terms.disputeText}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.terms.changesTitle}</h2>
            <p className="leading-relaxed">{t.terms.changesText}</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">{t.terms.contactTitle}</h2>
            <p className="leading-relaxed">{t.terms.contactText}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
