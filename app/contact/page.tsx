"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    hours: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      hours: "",
      message: "",
    })

    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-6">{t.contact.heroTitle}</h1>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">{t.contact.heroDescription}</p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl font-bold mb-6">{t.contact.requestServiceTitle}</h2>
                    {submitStatus === "success" && (
                      <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-3 rounded-lg mb-6">
                        {t.contact.successMessage}
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            {t.contact.fullName} {t.contact.required}
                          </Label>
                          <Input
                            id="name"
                            placeholder={t.contact.fullNamePlaceholder}
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            {t.contact.phoneNumber} {t.contact.required}
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder={t.contact.phoneNumberPlaceholder}
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t.contact.emailAddress} {t.contact.required}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t.contact.emailPlaceholder}
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">
                          {t.contact.serviceType} {t.contact.required}
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleChange("service", value)}
                          required
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder={t.contact.selectService} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cleaning">{t.contact.cleaningService}</SelectItem>
                            <SelectItem value="cooking">{t.contact.cookingService}</SelectItem>
                            <SelectItem value="childcare">{t.contact.childcareService}</SelectItem>
                            <SelectItem value="laundry">{t.contact.laundryService}</SelectItem>
                            <SelectItem value="hair">{t.contact.hairService}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">
                            {t.contact.preferredDate} {t.contact.required}
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleChange("date", e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hours">
                            {t.contact.numberOfHours} {t.contact.required}
                          </Label>
                          <Select
                            value={formData.hours}
                            onValueChange={(value) => handleChange("hours", value)}
                            required
                          >
                            <SelectTrigger id="hours">
                              <SelectValue placeholder={t.contact.selectHours} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2">{t.contact.hours2}</SelectItem>
                              <SelectItem value="3">{t.contact.hours3}</SelectItem>
                              <SelectItem value="4">{t.contact.hours4}</SelectItem>
                              <SelectItem value="5">{t.contact.hours5}</SelectItem>
                              <SelectItem value="6">{t.contact.hours6}</SelectItem>
                              <SelectItem value="8">{t.contact.hours8}</SelectItem>
                              <SelectItem value="custom">{t.contact.hoursCustom}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t.contact.additionalDetails}</Label>
                        <Textarea
                          id="message"
                          placeholder={t.contact.additionalDetailsPlaceholder}
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? t.contact.submitting : t.contact.submitRequest}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">{t.contact.formDisclaimer}</p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">{t.contact.contactInfoTitle}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{t.contact.whatsapp}</p>
                          <a
                            href="https://wa.me/971521985893"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            +254 576 629 68
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{t.contact.phone}</p>
                          <a href="tel:+25457662968" className="text-sm text-muted-foreground hover:text-primary">
                            +254 576 629 68
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{t.contact.email}</p>
                          <a
                            href="mailto:info@dubaiservicehub.ae"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            info@dubaiservicehub.ae
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{t.contact.location}</p>
                          <p className="text-sm text-muted-foreground">{t.contact.locationValue}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{t.contact.workingHours}</p>
                          <p className="text-sm text-muted-foreground whitespace-pre-line">
                            {t.contact.workingHoursValue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{t.contact.quickResponseTitle}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {t.contact.quickResponseDescription}
                    </p>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="https://wa.me/971521985893" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {t.contact.whatsappNow}
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{t.contact.serviceAreasTitle}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.contact.serviceAreasDescription}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">{t.contact.faqTitle}</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t.contact.faq1Question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.contact.faq1Answer}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t.contact.faq2Question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.contact.faq2Answer}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t.contact.faq3Question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.contact.faq3Answer}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t.contact.faq4Question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.contact.faq4Answer}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
