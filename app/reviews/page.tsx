import { reviews } from '@/data/reviews'
import { Star, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Reviews - Jaipur Cardiac Centre',
  description: 'Check reviews and ratings from Google and social media about Jaipur Cardiac Centre.',
}

export default function Reviews() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Reviews & Ratings</h1>
          <p className="text-gray-600 text-lg">
            What patients say about their experience at Jaipur Cardiac Centre
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Overall Rating</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-7xl font-bold text-primary mb-4">4.9</div>
                <div className="flex justify-center gap-2 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={32} className="fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-600 font-medium">Out of 5.0 Stars</p>
              </div>
              <div className="text-center md:border-l md:border-r md:border-gray-200">
                <p className="text-5xl font-bold text-primary mb-2">500+</p>
                <p className="text-gray-600 font-medium">Total Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">98%</p>
                <p className="text-gray-600 font-medium">Would Recommend</p>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <div className="flex gap-1 mb-3">
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="font-bold text-gray-900">{review.author}</p>
                  </div>
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold flex-shrink-0">Verified</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Location Info */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our clinic location and contact information
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Jaipur Cardiac Centre</h3>
                <p className="text-gray-700 text-lg">52 Janak Marg, Hanuman Nagar Extension, Jaipur, Rajasthan, 302012</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-2">PHONE</p>
                <p className="text-gray-900 font-medium">+91 8107667788</p>
                <p className="text-gray-900 font-medium">+91 9414262690</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-2">EMAIL</p>
                <p className="text-gray-900 font-medium">drraghven10@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-2">HOURS</p>
                <p className="text-gray-900 font-medium">Monday - Saturday</p>
                <p className="text-gray-900 font-medium">10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center mb-8">
            <div className="text-center">
              <p className="text-gray-600 text-xl">🗺️ Google Maps Location</p>
              <p className="text-gray-500 mt-2">Embed your Google Maps here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-600 text-lg">Helpful answers to questions we often receive</p>
          </div>
          <div className="space-y-5">
            {[
              {
                q: 'How do I book an appointment?',
                a: 'You can book an appointment by calling us at +91 8107667788 or filling out the contact form on our website.',
              },
              {
                q: 'What should I bring for my first visit?',
                a: 'Please bring your medical records, insurance information, and a valid ID. Fill out the patient intake form for faster processing.',
              },
              {
                q: 'Do you accept insurance?',
                a: 'Yes, we accept most major insurance plans. Please call us to confirm if your insurance is accepted.',
              },
              {
                q: 'How long does a typical consultation take?',
                a: 'A typical consultation takes 30-45 minutes depending on your condition and the tests required.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow-sm border-l-4 border-primary">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Experience Quality Care?
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Join thousands of satisfied patients who have benefited from Dr. Raghvendra's expertise in cardiac care.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-600 text-white px-8 h-12">
            <Link href="/contact">Book Your Appointment Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
