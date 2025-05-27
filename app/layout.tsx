import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Xorazm Forex',
  description: 'Treyding akademiyasi',
  generator: 'ardentsoft.uz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
