import Link from 'next/link'
import { blog } from '@/data/blog'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const generateStaticParams = async () => {
  return blog.map((post) => ({
    slug: post.slug,
  }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = blog.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} - Jaipur Cardiac Centre`,
    description: post.excerpt,
  }
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const post = blog.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = blog.filter((p) => p.slug !== params.slug).slice(0, 3)

  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center gap-2 text-primary hover:text-primary-600 mb-6 transition-colors font-medium">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{post.title}</h1>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-8 mb-10 pb-8 border-b border-gray-200 text-gray-600">
            <div className="flex items-center gap-2">
              <User size={18} className="text-primary" />
              <span className="text-sm">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} className="text-primary" />
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none mb-12">
            <article className="text-gray-700 leading-relaxed">
              {post.content.split('\n').map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="list-disc list-inside mb-4 space-y-2">
                      <li className="text-sm">{paragraph.replace('- ', '')}</li>
                    </ul>
                  )
                } else if (paragraph.startsWith('| ')) {
                  return (
                    <div key={idx} className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-300">
                        <tbody>
                          <tr>
                            {paragraph.split('|').map((cell, i) => (
                              <td key={i} className="border border-gray-300 p-3 text-sm">
                                {cell.trim()}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )
                } else if (paragraph.trim()) {
                  return (
                    <p key={idx} className="mb-5 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </article>
          </div>

          {/* CTA Box */}
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Expert Guidance?</h3>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              Consult with Dr. Raghvendra for personalized cardiac care and treatment recommendations.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-600 text-white px-6 h-10">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow border-l-4 border-primary"
                  >
                    <p className="text-xs text-primary font-semibold mb-2">{related.category}</p>
                    <h4 className="font-bold text-gray-900 hover:text-primary transition-colors mb-3 text-sm">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  )
}
