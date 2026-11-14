import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Xorazm Forex — Professional Treyding Akademiyasi",
  description: "Treydingni 0 dan o‘rganing, individual va guruh kurslarini tanlang yoki maqsadingizga mos prop hisob bilan katta kapitalda savdoni boshlang.",
  icons: {
    icon: [
      { url: '/favicon-white.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon-white.png',
    apple: '/favicon-white.png',
  },
  keywords: "forex kurslari, treyding o'rganish, forex akademiya, xorazm forex, prop trading, prop hisob, algo treyding, savdo robotlari, forex robot, copy trading, trading bot, mt4 robot, mt5 robot, avtomatik treyding, forex signallar, treyding kurslari o'zbekiston, forex o'qitish, katta kapital bilan treyding, vaisov",
  generator: 'ardentsoft.uz',
  openGraph: {
    title: "Xorazm Forex — Professional Treyding Akademiyasi",
    description: "Treyding ta’limi, algotrading va prop hisoblar — barchasi bir joyda.",
    type: "website",
    locale: "uz_UZ",
    images: [{ url: '/images/xorazm-logo.png', width: 600, height: 600, alt: 'Xorazm Forex Logo' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xorazm Forex — Professional Treyding Akademiyasi",
    description: "Professional treyding kurslari va prop kapital yechimlari.",
    images: ['/images/xorazm-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  )
}
