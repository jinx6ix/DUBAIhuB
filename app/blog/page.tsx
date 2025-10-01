"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const title = post.title[language].toLowerCase()
    const excerpt = post.excerpt[language].toLowerCase()
    const category = post.category[language].toLowerCase()
    const query = searchQuery.toLowerCase()

    return title.includes(query) || excerpt.includes(query) || category.includes(query)
  })

  const categories = Array.from(new Set(blogPosts.map((post) => post.category[language])))

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>{t.blog.metaTitle}</title>
        <meta name="description" content={t.blog.heroDescription} />
        <meta
          name="keywords"
          content="Dubai services blog, household tips Dubai, childcare advice Dubai, salon tips Dubai, cleaning tips, nanny guide, beauty services Dubai"
        />
        <link rel="canonical" href="https://duba-ihu-b.vercel.app/blog" />
        <meta property="og:title" content={t.blog.metaTitle} />
        <meta property="og:description" content={t.blog.heroDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://duba-ihu-b.vercel.app/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.blog.metaTitle} />
        <meta name="twitter:description" content={t.blog.heroDescription} />
      </head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
                {t.blog.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8">{t.blog.heroDescription}</p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t.blog.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {t.blog.allPosts}
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">{t.blog.noResults}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.imageAlt[language]}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </Link>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category[language]}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title[language]}</Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt[language]}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={post.publishedDate}>
                            {new Date(post.publishedDate).toLocaleDateString(language === "ar" ? "ar-AE" : "en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime[language]}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="ghost" className="w-full group">
                        <Link href={`/blog/${post.slug}`}>
                          {t.blog.readMore}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-4">{t.blog.ctaTitle}</h2>
              <p className="text-lg text-balance mb-8 opacity-90">{t.blog.ctaDescription}</p>
              <Button asChild size="lg" variant="secondary">
                <a
                  href="https://wa.me/971521985893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  {t.blog.ctaButton}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
