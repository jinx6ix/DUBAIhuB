"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const { language } = useLanguage()
  const t = getTranslation(language)

  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category[language] === post.category[language])
    .slice(0, 3)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title[language],
          text: post.excerpt[language],
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    }
  }

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[language],
    description: post.excerpt[language],
    image: post.image,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Organization",
      name: post.author[language],
    },
    publisher: {
      "@type": "Organization",
      name: "Dubai Service Hub",
      logo: {
        "@type": "ImageObject",
        url: "https://duba-ihu-b.vercel.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://duba-ihu-b.vercel.app/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>{`${post.title[language]} | Dubai Service Hub Blog`}</title>
        <meta name="description" content={post.excerpt[language]} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://duba-ihu-b.vercel.app/blog/${post.slug}`} />
        <meta property="og:title" content={post.title[language]} />
        <meta property="og:description" content={post.excerpt[language]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://duba-ihu-b.vercel.app/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.publishedDate} />
        <meta property="article:author" content={post.author[language]} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title[language]} />
        <meta name="twitter:description" content={post.excerpt[language]} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>

      <article className="min-h-screen">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.blog.backToBlog}
            </Link>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.imageAlt[language]}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <Badge className="mb-4">{post.category[language]}</Badge>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
                {post.title[language]}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <span>
                    {t.blog.by} {post.author[language]}
                  </span>
                </div>
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

              <Button onClick={handleShare} variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                {t.blog.shareArticle}
              </Button>
            </header>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none dark:prose-invert
                prose-headings:font-serif prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-ol:my-6
                prose-li:text-foreground prose-li:leading-relaxed
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content[language] }}
            />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="font-serif text-3xl font-bold mb-8">{t.blog.relatedPosts}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <div className="relative h-40 w-full">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.imageAlt[language]}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      </Link>
                      <CardHeader>
                        <CardTitle className="line-clamp-2 text-lg">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                            {relatedPost.title[language]}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{relatedPost.excerpt[language]}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

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
      </article>
    </>
  )
}
