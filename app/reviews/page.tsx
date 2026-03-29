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
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Reviews & Ratings</h1>
            <p className="text-gray-600 text-sm md:text-base">
              What patients say about their experience at Jaipur Cardiac Centre
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Overall Rating</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-3">4.9</div>
                  <div className="flex justify-center gap-1 mb-3">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                  <p className="text-gray-600 font-medium text-xs md:text-sm">Out of 5.0 Stars</p>
                </div>
                <div className="text-center md:border-l md:border-r md:border-gray-200 flex flex-col justify-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-1">500+</p>
                  <p className="text-gray-600 font-medium text-xs md:text-sm">Total Reviews</p>
                </div>
                <div className="text-center flex flex-col justify-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-1">98%</p>
                  <p className="text-gray-600 font-medium text-xs md:text-sm">Would Recommend</p>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3 gap-4 flex-col sm:flex-row">
                    <div>
                      <div className="flex gap-1 mb-2">
                        {Array(review.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                      </div>
                      <p className="font-bold text-gray-900 text-sm md:text-base">{review.author}</p>
                    </div>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0">Verified</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-xs md:text-sm">"{review.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Location Info */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Visit Us</h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Our clinic location and contact information
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 mb-6 shadow-sm">
              <div className="flex items-start gap-4 mb-6 flex-col sm:flex-row">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Jaipur Cardiac Centre</h3>
                  <p className="text-gray-700 text-sm md:text-base">52 Janak Marg, Hanuman Nagar Extension, Jaipur, Rajasthan, 302012</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-2">PHONE</p>
                  <p className="text-gray-900 font-medium text-xs md:text-sm">+91 8107667788</p>
                  <p className="text-gray-900 font-medium text-xs md:text-sm">+91 9414262690</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-2">EMAIL</p>
                  <p className="text-gray-900 font-medium text-xs md:text-sm">drraghven10@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-2">HOURS</p>
                  <p className="text-gray-900 font-medium text-xs md:text-sm">Monday - Saturday</p>
                  <p className="text-gray-900 font-medium text-xs md:text-sm">10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-lg h-64 md:h-80 flex items-center justify-center mb-6">
              <div className="text-center">
                <p className="text-gray-600 text-lg">🗺️ Google Maps Location</p>
                <p className="text-gray-500 mt-2 text-sm">Embed your Google Maps here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Common Questions</h2>
              <p className="text-gray-600 text-sm md:text-base">Helpful answers to questions we often receive</p>
            </div>
            <div className="space-y-4">
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
                <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience Quality Care?
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
              Join thousands of satisfied patients who have benefited from Dr. Raghvendra's expertise in cardiac care.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-600 text-white px-6 h-11">
              <Link href="/contact">Book Your Appointment Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
