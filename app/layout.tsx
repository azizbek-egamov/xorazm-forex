import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Xorazm Forex — Treyding Akademiyasi | Forex, Prop Trading, Algo & Copy Trading",
  description: "Xorazm Forex — professional treyding akademiyasi. Forex savdoni 0 dan o'rganing, prop hisoblar, algo-treyding, savdo robotlari va copy-treyding bilan katta kapitalga chiqing. O'zbekiston bo'yicha ishonchli ta'lim.",
  keywords: "forex kurslari, treyding o'rganish, forex akademiya, xorazm forex, prop trading, prop hisob, algo treyding, savdo robotlari, forex robot, copy trading, trading bot, mt4 robot, mt5 robot, avtomatik treyding, forex signallar, treyding kurslari o'zbekiston, forex o'qitish, katta kapital bilan treyding, vaisov",
  generator: 'ardentsoft.uz',
  openGraph: {
    title: "Xorazm Forex — Treyding Akademiyasi",
    description: "Forex savdoni 0 dan o'rganing. Prop hisoblar, algo-treyding, savdo robotlari va copy-treyding bilan katta kapitalga chiqing.",
    type: "website",
    locale: "uz_UZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xorazm Forex — Treyding Akademiyasi",
    description: "Professional treyding kurslari O'zbekistonda",
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
