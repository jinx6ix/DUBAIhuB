"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Sparkles, Clock, Shield, Star, ChefHat, Sparkle, Baby, Home, CheckCircle2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export default function HomePage() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const services = [
    {
      icon: Sparkles,
      title: t.home.cleaningTitle,
      description: t.home.cleaningDescription,
      href: "/household-services#cleaning",
      price: `${t.common.aed} 35/${t.common.aedPerHour.split("/")[1]}`,
    },
    {
      icon: ChefHat,
      title: t.home.cookingTitle,
      description: t.home.cookingDescription,
      href: "/household-services#cooking",
      price: `${t.common.aed} 35/${t.common.aedPerHour.split("/")[1]}`,
    },
    {
      icon: Baby,
      title: t.home.childcareTitle,
      description: t.home.childcareDescription,
      href: "/household-services#childcare",
      price: `${t.common.aed} 35/${t.common.aedPerHour.split("/")[1]}`,
    },
    {
      icon: Sparkle,
      title: t.home.salonTitle,
      description: t.home.salonDescription,
      href: "/salon-services",
      price: `${t.common.from} ${t.common.aed} 80/${t.common.aedPerHour.split("/")[1]}`,
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: t.home.verifiedProfessionals,
      description: t.home.verifiedDescription,
    },
    {
      icon: Clock,
      title: t.home.flexibleRates,
      description: t.home.flexibleDescription,
    },
    {
      icon: Star,
      title: t.home.qualityGuaranteed,
      description: t.home.qualityDescription,
    },
    {
      icon: Home,
      title: t.home.servingAreas,
      description: t.home.servingDescription,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Ahmed",
      location: "Dubai Marina",
      rating: 5,
      text: "Excellent service! The cleaning staff was professional and thorough. My apartment has never looked better. Highly recommend!",
    },
    {
      name: "Mohammed Al-Rashid",
      location: "Downtown Dubai",
      rating: 5,
      text: "We hired a cook for a family gathering. The food was delicious and the service was impeccable. Will definitely use again.",
    },
    {
      name: "Emma Wilson",
      location: "Jumeirah",
      rating: 5,
      text: "The nanny service is outstanding. Our children love their caregiver and we have complete peace of mind. Thank you!",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance mb-6">{t.home.heroTitle}</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                {t.home.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <a href="https://wa.me/971521985893" target="_blank" rel="noopener noreferrer">
                    {t.home.bookWhatsApp}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                  <Link href="/household-services">{t.home.viewAllServices}</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t.home.verifiedWorkers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t.home.perHour}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t.home.sameDayAvailable}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t.home.ourServices}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                {t.home.servicesDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <p className="text-primary font-semibold mb-4">{service.price}</p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href={service.href}>
                        {t.home.learnMore}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t.home.whyChoose}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                {t.home.whyChooseDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t.home.howItWorks}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                {t.home.howItWorksDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-xl mb-2">{t.home.step1Title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.home.step1Description}</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-xl mb-2">{t.home.step2Title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.home.step2Description}</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-xl mb-2">{t.home.step3Title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.home.step3Description}</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/contact">{t.home.getStarted}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t.home.testimonials}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                {t.home.testimonialsDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">{t.home.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-balance opacity-90">{t.home.ctaDescription}</p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <a href="https://wa.me/971521985893" target="_blank" rel="noopener noreferrer">
                {t.home.whatsappNow}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
