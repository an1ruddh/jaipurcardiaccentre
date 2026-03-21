import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jaipur Cardiac Centre - Dr. Raghvendra Choudhary',
  description:
    'Best Cardiologist in Jaipur. Advanced cardiac care, angioplasty, pacemaker implantation, and comprehensive heart disease treatment.',
  keywords: 'Cardiologist Jaipur, Heart Specialist, Cardiac Centre, Dr. Raghvendra Choudhary',
  authors: [{ name: 'Dr. Raghvendra Choudhary' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
