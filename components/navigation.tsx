"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = getTranslation(language)

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/household-services", label: t.nav.householdServices },
    { href: "/salon-services", label: t.nav.salonServices },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: language === "en" ? "Blog" : "المدونة" },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold text-primary">{t.nav.brandName}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button asChild size="sm">
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                {t.nav.bookNow}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <Button asChild className="w-full" size="sm">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Phone className="mr-2 h-4 w-4" />
                {t.nav.bookNow}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
