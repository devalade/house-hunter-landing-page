import './globals.css'
import { Lexend } from 'next/font/google'

const inter = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'House Hunter',
  description: 'Everything you need about finding your place to live will be here, where it will be easier for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
