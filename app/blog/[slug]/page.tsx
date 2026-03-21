import Link from 'next/link'
import { blog } from '@/data/blog'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

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
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center gap-2 text-gray-100 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
        </div>
      </section>

      {/* Article */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b text-gray-600">
            <div className="flex items-center gap-2">
              <User size={18} className="text-primary" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} className="text-primary" />
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
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
                    <h2 key={idx} className="text-2xl font-bold text-secondary mt-6 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-secondary mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="list-disc list-inside mb-4">
                      <li>{paragraph.replace('- ', '')}</li>
                    </ul>
                  )
                } else if (paragraph.startsWith('| ')) {
                  return (
                    <div key={idx} className="overflow-x-auto mb-4">
                      <table className="w-full border-collapse border border-gray-300">
                        <tbody>
                          <tr>
                            {paragraph.split('|').map((cell, i) => (
                              <td key={i} className="border border-gray-300 p-2">
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
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </article>
          </div>

          {/* CTA Box */}
          <div className="bg-light p-8 rounded-lg mb-12">
            <h3 className="text-xl font-bold text-secondary mb-4">Need Expert Guidance?</h3>
            <p className="text-gray-700 mb-4">
              Consult with Dr. Raghvendra for personalized cardiac care and treatment.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-secondary mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow card-hover border-l-4 border-primary"
                  >
                    <p className="text-xs text-primary font-semibold mb-2">{related.category}</p>
                    <h4 className="font-bold text-secondary hover:text-primary transition-colors mb-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-600">{related.excerpt}</p>
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
