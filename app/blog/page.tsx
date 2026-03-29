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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Heart Health Blog</h1>
          <p className="text-gray-600 text-lg">
            Expert insights on cardiac health, prevention, and disease management
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {blog.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow border-l-4 border-primary"
              >
                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-primary" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={16} className="text-primary" />
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-700 mb-5 text-sm leading-relaxed">{post.excerpt}</p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-semibold hover:underline flex items-center gap-2 text-sm"
                >
                  Read Full Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our articles organized by topic
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Prevention', 'Education', 'Recovery', 'Treatment'].map((category) => (
              <div
                key={category}
                className="bg-white border border-gray-200 p-8 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <p className="font-bold text-gray-900 text-lg">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Have Questions About Your Heart Health?
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Consult with Dr. Raghvendra for personalized advice and treatment plans tailored to your needs.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-600 text-white px-8 h-12">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
