"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, ChefHat, Baby, Shirt, CheckCircle2, Clock, Shield, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HouseholdServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      id: "cleaning",
      icon: Sparkles,
      title: t.householdServices.cleaningTitle,
      description: t.householdServices.cleaningDescription,
      price: t.householdServices.cleaningPrice,
      features: t.householdServices.cleaningFeatures,
    },
    {
      id: "cooking",
      icon: ChefHat,
      title: t.householdServices.cookingTitle,
      description: t.householdServices.cookingDescription,
      price: t.householdServices.cookingPrice,
      features: t.householdServices.cookingFeatures,
    },
    {
      id: "childcare",
      icon: Baby,
      title: t.householdServices.childcareTitle,
      description: t.householdServices.childcareDescription,
      price: t.householdServices.childcarePrice,
      features: t.householdServices.childcareFeatures,
    },
    {
      id: "laundry",
      icon: Shirt,
      title: t.householdServices.laundryTitle,
      description: t.householdServices.laundryDescription,
      price: t.householdServices.laundryPrice,
      features: t.householdServices.laundryFeatures,
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-6">
                {t.householdServices.heroTitle}
              </h1>
              <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed">
                {t.householdServices.heroDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t.householdServices.verifiedWorkers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t.householdServices.flexibleHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t.householdServices.affordableRates}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service) => (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-8 p-8">
                        <div>
                          <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                            <service.icon className="h-7 w-7 text-primary" />
                          </div>
                          <h2 className="font-serif text-3xl font-bold mb-3">{service.title}</h2>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                          <div className="flex items-center gap-2 mb-6">
                            <Clock className="h-5 w-5 text-primary" />
                            <span className="text-lg font-semibold text-primary">{service.price}</span>
                          </div>
                          <Button asChild size="lg">
                            <a href="https://wa.me/971521985893" target="_blank" rel="noopener noreferrer">
                              {t.householdServices.bookWhatsApp}
                            </a>
                          </Button>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-4">{t.householdServices.servicesInclude}</h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
                {t.householdServices.benefitsTitle}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{t.householdServices.safetyTitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.householdServices.safetyDescription}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{t.householdServices.experienceTitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.householdServices.experienceDescription}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{t.householdServices.flexibilityTitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.householdServices.flexibilityDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
              {t.householdServices.ctaTitle}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-balance opacity-90">
              {t.householdServices.ctaDescription}
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="https://wa.me/971521985893" target="_blank" rel="noopener noreferrer">
                {t.home.whatsappNow}
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
