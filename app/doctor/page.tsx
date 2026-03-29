import { doctorProfile } from '@/data/doctorProfile'
import { Award, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Dr. Raghvendra Choudhary - Jaipur Cardiac Centre',
  description:
    'Meet Dr. Raghvendra Choudhary - DM Cardiology, 25+ years experience, expert in interventional cardiology and complex cardiac procedures.',
}

export default function Doctor() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Dr. Raghvendra Choudhary</h1>
          <p className="text-gray-600 text-lg">Consultant Interventional Cardiologist | DM Cardiology</p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left - Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Professional Profile</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{doctorProfile.bio}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 bg-gray-50 p-8 rounded-lg mb-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15000+</div>
                  <p className="text-gray-600 text-sm">Cardiac Cases</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10000+</div>
                  <p className="text-gray-600 text-sm">Angioplasties</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
              </div>

              {/* Education */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <GraduationCap className="text-primary" size={32} />
                  Education
                </h3>
                <div className="space-y-4">
                  {doctorProfile.education.map((edu, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-6 py-2">
                      <p className="font-bold text-gray-900 text-lg">{edu.degree}</p>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Expertise */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Award className="text-primary" size={32} />
                  Clinical Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctorProfile.expertise.map((exp, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <span className="text-primary text-xl flex-shrink-0 mt-0.5">✓</span>
                      <p className="text-gray-700 text-sm">{exp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Info Box */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 sticky top-20">
                <div className="text-center mb-8">
                  <div className="text-7xl mb-4">👨‍⚕️</div>
                  <h3 className="text-2xl font-bold text-gray-900">{doctorProfile.name}</h3>
                  <p className="text-primary font-semibold mt-2 text-sm">{doctorProfile.title}</p>
                  <p className="text-gray-600 mt-2 text-sm">{doctorProfile.experience}</p>
                </div>

                <div className="space-y-5 pt-8 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-2">PHONE</p>
                    <a
                      href={`tel:${doctorProfile.contact.phone1}`}
                      className="text-primary font-semibold hover:underline block text-sm"
                    >
                      {doctorProfile.contact.phone1}
                    </a>
                    <a
                      href={`tel:${doctorProfile.contact.phone2}`}
                      className="text-primary font-semibold hover:underline block text-sm"
                    >
                      {doctorProfile.contact.phone2}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-2">EMAIL</p>
                    <a
                      href={`mailto:${doctorProfile.contact.email}`}
                      className="text-primary font-semibold hover:underline break-all text-sm"
                    >
                      {doctorProfile.contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-2">ADDRESS</p>
                    <p className="text-gray-700 text-sm">{doctorProfile.contact.address}</p>
                  </div>
                </div>

                <Button asChild className="w-full mt-8 bg-primary hover:bg-primary-600 text-white h-12">
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <Briefcase className="text-primary" size={36} />
            Professional Experience
          </h2>
          <div className="space-y-5">
            {doctorProfile.experience_timeline.map((exp, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-600 font-medium mt-1">{exp.institution}</p>
                  </div>
                  <span className="bg-gray-50 text-primary px-4 py-2 rounded text-sm font-semibold flex-shrink-0">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Research & Publications</h2>
          <div className="space-y-4">
            {doctorProfile.research.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-secondary text-white py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctorProfile.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-primary text-2xl flex-shrink-0 mt-1">⭐</span>
                <p className="text-gray-100 text-lg leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
