"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, CheckCircle2, Clock, Home, Star, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function SalonServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      id: "hair",
      icon: Scissors,
      title: t.salonServices.hairTitle,
      description: t.salonServices.hairDescription,
      price: t.salonServices.hairPrice,
      features: t.salonServices.hairFeatures,
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
                {t.salonServices.heroTitle}
              </h1>
              <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed">
                {t.salonServices.heroDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t.salonServices.certifiedStylists}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t.salonServices.premiumProducts}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t.salonServices.atYourDoorstep}</span>
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
                              {t.home.bookWhatsApp}
                            </a>
                          </Button>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-4">{t.salonServices.servicesInclude}</h3>
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

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
                {t.salonServices.benefitsTitle}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{t.salonServices.comfortTitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.salonServices.comfortDescription}</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{t.salonServices.expertsTitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.salonServices.expertsDescription}</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{t.salonServices.productsTitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.salonServices.productsDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">{t.salonServices.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-balance opacity-90">{t.salonServices.ctaDescription}</p>
            <Button asChild size="lg" variant="secondary">
              <a href="https://wa.me/971521985893" target="_blank" rel="noopener noreferrer">
                {t.salonServices.whatsappNow}
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
