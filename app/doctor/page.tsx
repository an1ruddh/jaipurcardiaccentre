import { doctorProfile } from '@/data/doctorProfile'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Dr. Raghvendra Choudhary - Jaipur Cardiac Centre',
  description: 'Meet Dr. Raghvendra Choudhary - DM Cardiology, 25+ years experience in interventional cardiology',
}

export default function DoctorPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{doctorProfile.name}</h1>
          <p className="text-gray-600 text-lg">{doctorProfile.title}</p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Profile</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {doctorProfile.bio}
              </p>

              {/* Education */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <div className="space-y-3">
                  {doctorProfile.education.map((edu, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-4">
                      <p className="font-bold text-gray-900">{edu.degree}</p>
                      <p className="text-gray-600 text-sm">{edu.institution}, {edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Expertise</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {doctorProfile.expertise.map((exp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">+</span>
                      <span className="text-gray-700">{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements</h3>
                <ul className="space-y-2">
                  {doctorProfile.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2">
                      <span className="text-primary flex-shrink-0">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white p-8 rounded-lg border border-gray-200 sticky top-20">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">Dr</div>
                  <h3 className="text-xl font-bold text-gray-900">{doctorProfile.name}</h3>
                  <p className="text-primary font-semibold text-sm mt-2">{doctorProfile.title}</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-1">PHONE</p>
                    <a href={`tel:${doctorProfile.contact.phone1}`} className="text-primary font-semibold hover:text-primary-600 text-sm block">
                      {doctorProfile.contact.phone1}
                    </a>
                    <a href={`tel:${doctorProfile.contact.phone2}`} className="text-primary font-semibold hover:text-primary-600 text-sm block">
                      {doctorProfile.contact.phone2}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-1">EMAIL</p>
                    <a href={`mailto:${doctorProfile.contact.email}`} className="text-primary font-semibold hover:text-primary-600 text-sm break-all">
                      {doctorProfile.contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-1">ADDRESS</p>
                    <p className="text-gray-700 text-sm">{doctorProfile.contact.address}</p>
                  </div>
                </div>

                <Button asChild className="w-full mt-6 bg-primary hover:bg-primary-600 text-white h-12">
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
