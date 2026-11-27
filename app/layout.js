import './globals.css'

export const metadata = {
  title: 'Savage Trader',
  description: 'Mobile-first Deriv demo trading dashboard',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
