import { testimonials } from '@/data/testimonials'
import { Star } from 'lucide-react'

export const metadata = {
  title: 'Patient Testimonials - Jaipur Cardiac Centre',
  description: 'Read success stories from patients treated by Dr. Raghvendra Choudhary at Jaipur Cardiac Centre.',
}

export default function Testimonials() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Patient Testimonials</h1>
          <p className="text-lg text-gray-100 mt-4">
            Real stories from patients who experienced excellent cardiac care
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary card-hover"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.condition}</p>
                    <p className="text-xs text-gray-500">Age: {testimonial.age}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '100%', label: 'Patient Satisfaction' },
              { number: '15000+', label: 'Patients Treated' },
              { number: '10000+', label: 'Successful Procedures' },
              { number: '25+', label: 'Years of Excellence' },
            ].map((metric, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary mb-2">{metric.number}</div>
                <p className="text-gray-700 font-semibold">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Join Our Family of Satisfied Patients</h2>
          <p className="text-gray-700 text-lg mb-8">
            Experience expert cardiac care with Dr. Raghvendra Choudhary. Book your appointment today and take the
            first step towards better heart health.
          </p>
          <a href="/contact" className="btn-primary">
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}
