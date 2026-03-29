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
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dr. Raghvendra Choudhary</h1>
            <p className="text-gray-600 text-sm md:text-base">Consultant Interventional Cardiologist | DM Cardiology</p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              {/* Left - Bio */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Professional Profile</h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">{doctorProfile.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">15000+</div>
                    <p className="text-gray-600 text-xs md:text-sm">Cardiac Cases</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">10000+</div>
                    <p className="text-gray-600 text-xs md:text-sm">Angioplasties</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">25+</div>
                    <p className="text-gray-600 text-xs md:text-sm">Years Experience</p>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="text-primary" size={24} />
                    Education
                  </h3>
                  <div className="space-y-3">
                    {doctorProfile.education.map((edu, idx) => (
                      <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                        <p className="font-bold text-gray-900 text-sm md:text-base">{edu.degree}</p>
                        <p className="text-gray-600 text-xs md:text-sm">{edu.institution}</p>
                        <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Expertise */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="text-primary" size={24} />
                    Clinical Expertise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {doctorProfile.expertise.map((exp, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
                        <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
                        <p className="text-gray-700 text-xs md:text-sm">{exp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Info Box */}
              <div>
                <div className="bg-gray-50 rounded-lg p-6 md:sticky md:top-20">
                  <div className="text-center mb-6">
                    <div className="text-5xl md:text-6xl mb-3">👨‍⚕️</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{doctorProfile.name}</h3>
                    <p className="text-primary font-semibold mt-2 text-xs md:text-sm">{doctorProfile.title}</p>
                    <p className="text-gray-600 mt-2 text-xs md:text-sm">{doctorProfile.experience}</p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600 font-semibold mb-1">PHONE</p>
                      <a
                        href={`tel:${doctorProfile.contact.phone1}`}
                        className="text-primary font-semibold hover:underline block text-xs md:text-sm"
                      >
                        {doctorProfile.contact.phone1}
                      </a>
                      <a
                        href={`tel:${doctorProfile.contact.phone2}`}
                        className="text-primary font-semibold hover:underline block text-xs md:text-sm"
                      >
                        {doctorProfile.contact.phone2}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold mb-1">EMAIL</p>
                      <a
                        href={`mailto:${doctorProfile.contact.email}`}
                        className="text-primary font-semibold hover:underline break-all text-xs md:text-sm"
                      >
                        {doctorProfile.contact.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold mb-1">ADDRESS</p>
                      <p className="text-gray-700 text-xs md:text-sm">{doctorProfile.contact.address}</p>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-6 bg-primary hover:bg-primary-600 text-white h-11">
                    <Link href="/contact">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-gray-50 py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Briefcase className="text-primary" size={28} />
              Professional Experience
            </h2>
            <div className="space-y-4">
              {doctorProfile.experience_timeline.map((exp, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start gap-4 flex-col sm:flex-row">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600 font-medium mt-1 text-xs md:text-sm">{exp.institution}</p>
                    </div>
                    <span className="bg-gray-50 text-primary px-3 py-1 rounded text-xs font-semibold flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Research & Publications</h2>
            <div className="space-y-3">
              {doctorProfile.research.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 md:p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-secondary text-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctorProfile.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-primary text-xl md:text-2xl flex-shrink-0 mt-1">⭐</span>
                  <p className="text-gray-100 text-sm md:text-base leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
