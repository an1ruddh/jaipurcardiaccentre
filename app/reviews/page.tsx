import { reviews } from '@/data/reviews'
import { Star, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Reviews - Jaipur Cardiac Centre',
  description: 'Check reviews and ratings from Google and social media about Jaipur Cardiac Centre.',
}

export default function Reviews() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Reviews & Ratings</h1>
          <p className="text-lg text-gray-100 mt-4">
            What patients say about their experience at Jaipur Cardiac Centre
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light rounded-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Overall Rating</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">4.9</div>
                <div className="flex justify-center gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-600 font-semibold">Out of 5.0 Stars</p>
              </div>
              <div className="text-center border-l border-r">
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-gray-600 font-semibold">Total Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-gray-600 font-semibold">Would Recommend</p>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex gap-1 mb-2">
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="font-bold text-secondary">{review.author}</p>
                  </div>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">Verified</span>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Location Info */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Visit Us</h2>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-primary flex-shrink-0" size={28} />
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Jaipur Cardiac Centre</h3>
                <p className="text-gray-700 text-lg">52 Janak Marg, Hanuman Nagar Extension, Jaipur, Rajasthan, 302012</p>
              </div>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Phone:</strong> +91 8107667788, +91 9414262690
              </p>
              <p>
                <strong>Email:</strong> drraghven10@gmail.com
              </p>
              <p>
                <strong>Hours:</strong> Monday - Saturday, 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center mb-8">
            <div className="text-center">
              <p className="text-gray-600 text-xl">🗺️ Google Maps Integration</p>
              <p className="text-gray-500 mt-2">Embed your Google Maps location here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Common Questions</h2>
          <div className="space-y-6">
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
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-lg font-bold text-secondary mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Experience Quality Care?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Join thousands of satisfied patients who have benefited from Dr. Raghvendra's expertise.
          </p>
          <a href="/contact" className="btn-primary">
            Book Your Appointment Now
          </a>
        </div>
      </section>
    </main>
  )
}
