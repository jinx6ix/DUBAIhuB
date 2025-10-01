"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">{t.nav.brandName}</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">{t.footer.description}</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/household-services" className="hover:text-accent transition-colors">
                  {t.footer.householdServices}
                </Link>
              </li>
              <li>
                <Link href="/salon-services" className="hover:text-accent transition-colors">
                  {t.footer.salonServices}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  {t.footer.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/household-services#cleaning" className="hover:text-accent transition-colors">
                  {t.home.cleaningTitle}
                </Link>
              </li>
              <li>
                <Link href="/household-services#cooking" className="hover:text-accent transition-colors">
                  {t.home.cookingTitle}
                </Link>
              </li>
              <li>
                <Link href="/household-services#childcare" className="hover:text-accent transition-colors">
                  {t.home.childcareTitle}
                </Link>
              </li>
              <li>
                <Link href="/salon-services#hair" className="hover:text-accent transition-colors">
                  {t.home.salonTitle}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{t.footer.areas}</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <a
                  href="https://wa.me/971521985893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +254 576 629 68
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+25457662968" className="hover:text-accent transition-colors">
                  +254 576 629 68
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@dubaiservicehub.ae" className="hover:text-accent transition-colors">
                  info@dubaiservicehub.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t.nav.brandName}. {t.footer.rights}
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
