import Link from 'next/link'
import { blog } from '@/data/blog'
import { Calendar, User, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Blog - Jaipur Cardiac Centre',
  description: 'Read expert articles on cardiac health, prevention tips, and heart disease management from Dr. Raghvendra Choudhary.',
}

export default function BlogPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Heart Health Blog</h1>
            <p className="text-gray-600 text-sm md:text-base">
              Expert insights on cardiac health, prevention, and disease management
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {blog.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow border-l-4 border-primary"
                >
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 mb-3 text-xs md:text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User size={14} className="text-primary" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={14} className="text-primary" />
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-700 mb-4 text-xs md:text-sm leading-relaxed">{post.excerpt}</p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary font-semibold hover:underline flex items-center gap-2 text-xs md:text-sm"
                  >
                    Read Full Article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Browse by Category</h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Explore our articles organized by topic
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Prevention', 'Education', 'Recovery', 'Treatment'].map((category) => (
                <div
                  key={category}
                  className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
                >
                  <p className="font-bold text-gray-900 text-sm md:text-base">{category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have Questions About Your Heart Health?
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
              Consult with Dr. Raghvendra for personalized advice and treatment plans tailored to your needs.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-600 text-white px-6 h-11">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
