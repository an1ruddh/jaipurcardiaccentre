import { testimonials } from '@/data/testimonials'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Patient Testimonials - Jaipur Cardiac Centre',
  description: 'Read success stories from patients treated by Dr. Raghvendra Choudhary at Jaipur Cardiac Centre.',
}

export default function Testimonials() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Patient Testimonials</h1>
            <p className="text-gray-600 text-sm md:text-base">
              Real stories from patients who experienced excellent cardiac care
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow border-t-4 border-primary"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{testimonial.condition}</p>
                      <p className="text-xs text-gray-500">Age: {testimonial.age}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed text-xs md:text-sm">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Success Metrics</h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Trusted by thousands of patients with a proven track record of excellent results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '100%', label: 'Patient Satisfaction' },
                { number: '15000+', label: 'Patients Treated' },
                { number: '10000+', label: 'Successful Procedures' },
                { number: '25+', label: 'Years of Excellence' },
              ].map((metric, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.number}</div>
                  <p className="text-gray-700 font-medium text-xs md:text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Family of Satisfied Patients
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
              Experience expert cardiac care with Dr. Raghvendra Choudhary. Book your appointment today and take the first step towards better heart health.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-600 text-white px-6 h-11">
              <Link href="/contact">Schedule Your Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
