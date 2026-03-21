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
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Heart Health Blog</h1>
          <p className="text-lg text-gray-100 mt-4">
            Expert insights on cardiac health, prevention, and disease management
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {blog.map((post) => (
              <article
                key={post.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary card-hover"
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
                <h2 className="text-2xl font-bold text-secondary mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-700 mb-4">{post.excerpt}</p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-semibold hover:underline flex items-center gap-2"
                >
                  Read Full Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['Prevention', 'Education', 'Recovery', 'Treatment'].map((category) => (
              <div
                key={category}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer card-hover"
              >
                <p className="font-semibold text-secondary">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Have Questions About Your Heart Health?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Consult with Dr. Raghvendra for personalized advice and treatment plans.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Schedule a Consultation</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
