import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dubaiservicehub.ae"),
  title: {
    default: "Dubai Service Hub | Hourly Workers & Salon Services in Dubai",
    template: "%s | Dubai Service Hub",
  },
  description:
    "Premium hourly worker services in Dubai. Hire professional cleaners, cooks, nannies, and childcare specialists. Expert salon services at your doorstep. Trusted, verified, and affordable.",
  keywords: [
    "Dubai hourly workers",
    "Dubai cleaning services",
    "Dubai cook hire",
    "Dubai nanny services",
    "Dubai childcare",
    "Dubai salon services",
    "Dubai home services",
    "hourly maid Dubai",
    "part-time workers Dubai",
    "Dubai domestic help",
  ],
  authors: [{ name: "Dubai Service Hub" }],
  creator: "Dubai Service Hub",
  publisher: "Dubai Service Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://dubaiservicehub.ae",
    title: "Dubai Service Hub | Hourly Workers & Salon Services in Dubai",
    description:
      "Premium hourly worker services in Dubai. Hire professional cleaners, cooks, nannies, and childcare specialists. Expert salon services at your doorstep.",
    siteName: "Dubai Service Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Service Hub | Hourly Workers & Salon Services in Dubai",
    description:
      "Premium hourly worker services in Dubai. Hire professional cleaners, cooks, nannies, and childcare specialists.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://dubaiservicehub.ae" />
        <Suspense fallback={null}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Dubai Service Hub",
                description: "Premium hourly worker and salon services in Dubai",
                url: "https://dubaiservicehub.ae",
                telephone: "+971-XX-XXX-XXXX",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dubai",
                  addressCountry: "AE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "25.2048",
                  longitude: "55.2708",
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "07:00",
                  closes: "22:00",
                },
                priceRange: "AED 50-200 per hour",
                areaServed: {
                  "@type": "City",
                  name: "Dubai",
                },
              }),
            }}
          />
        </Suspense>
      </head>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
