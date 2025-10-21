import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employee Management',
  description: 'A simple employee management app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
