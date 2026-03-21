import { doctorProfile } from '@/data/doctorProfile'
import { Award, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Dr. Raghvendra Choudhary - Jaipur Cardiac Centre',
  description:
    'Meet Dr. Raghvendra Choudhary - DM Cardiology, 25+ years experience, expert in interventional cardiology and complex cardiac procedures.',
}

export default function Doctor() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Dr. Raghvendra Choudhary</h1>
          <p className="text-lg text-gray-100 mt-2">Consultant Interventional Cardiologist | DM Cardiology</p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left - Bio */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">Professional Profile</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{doctorProfile.bio}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 bg-light p-6 rounded-lg mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15000+</div>
                  <p className="text-sm text-gray-600">Cardiac Cases</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10000+</div>
                  <p className="text-sm text-gray-600">Angioplasties</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <p className="text-sm text-gray-600">Years Exp.</p>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <GraduationCap className="text-primary" size={28} />
                  Education
                </h3>
                <div className="space-y-4">
                  {doctorProfile.education.map((edu, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                      <p className="font-bold text-lg">{edu.degree}</p>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Expertise */}
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Award className="text-primary" size={28} />
                  Clinical Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctorProfile.expertise.map((exp, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-light p-3 rounded">
                      <span className="text-primary text-xl flex-shrink-0">✓</span>
                      <p className="text-gray-700">{exp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Info Box */}
            <div>
              <div className="bg-light rounded-lg p-8 sticky top-20">
                <div className="text-center mb-8">
                  <div className="text-7xl mb-4">👨‍⚕️</div>
                  <h3 className="text-2xl font-bold text-secondary">{doctorProfile.name}</h3>
                  <p className="text-primary font-semibold mt-2">{doctorProfile.title}</p>
                  <p className="text-gray-600 mt-1">{doctorProfile.experience}</p>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">📞 Phone</p>
                    <a
                      href={`tel:${doctorProfile.contact.phone1}`}
                      className="text-primary font-semibold hover:underline block"
                    >
                      {doctorProfile.contact.phone1}
                    </a>
                    <a
                      href={`tel:${doctorProfile.contact.phone2}`}
                      className="text-primary font-semibold hover:underline block"
                    >
                      {doctorProfile.contact.phone2}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">📧 Email</p>
                    <a
                      href={`mailto:${doctorProfile.contact.email}`}
                      className="text-primary font-semibold hover:underline break-all"
                    >
                      {doctorProfile.contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">📍 Address</p>
                    <p className="text-gray-700 text-sm">{doctorProfile.contact.address}</p>
                  </div>
                </div>

                <Button asChild className="w-full mt-6" size="lg">
                  <a href="/contact">Book Appointment</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-12 flex items-center gap-2">
            <Briefcase className="text-primary" size={32} />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {doctorProfile.experience_timeline.map((exp, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{exp.position}</h3>
                    <p className="text-gray-700 font-semibold">{exp.institution}</p>
                  </div>
                  <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-8">Research & Publications</h2>
          <div className="space-y-4">
            {doctorProfile.research.map((item, idx) => (
              <div key={idx} className="bg-light p-6 rounded-lg border-l-4 border-primary">
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctorProfile.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-primary text-2xl flex-shrink-0">⭐</span>
                <p className="text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
