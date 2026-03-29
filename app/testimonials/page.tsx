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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Patient Testimonials</h1>
          <p className="text-gray-600 text-lg">
            Real stories from patients who experienced excellent cardiac care
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow border-t-4 border-primary"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.condition}</p>
                    <p className="text-xs text-gray-500">Age: {testimonial.age}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed text-sm">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Success Metrics</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by thousands of patients with a proven track record of excellent results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '100%', label: 'Patient Satisfaction' },
              { number: '15000+', label: 'Patients Treated' },
              { number: '10000+', label: 'Successful Procedures' },
              { number: '25+', label: 'Years of Excellence' },
            ].map((metric, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-5xl font-bold text-primary mb-3">{metric.number}</div>
                <p className="text-gray-700 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Family of Satisfied Patients
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Experience expert cardiac care with Dr. Raghvendra Choudhary. Book your appointment today and take the first step towards better heart health.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-600 text-white px-8 h-12">
            <Link href="/contact">Schedule Your Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
