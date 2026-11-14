import { ArrowDown, ArrowRight, CheckCircle2, Gift, Phone, Send, Sparkles } from "lucide-react"
import GalleryImage, { type GalleryItem } from "./GalleryImage"
import { siteContacts } from "@/lib/site-data"

const heroImages: GalleryItem[] = [
  { src: "/images/corporate/hero-sardorbek.webp", alt: "Sardorbek Vaisov — Xorazm Forex asoschisi", width: 1512, height: 2016 },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] pt-24 sm:pt-28">
      <div className="absolute inset-y-0 right-0 hidden w-[34%] bg-red-700 lg:block" />
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
      <div className="relative mx-auto grid min-h-[740px] max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:py-24">
        <div className="hero-copy relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-700" />
            Professional trading academy
          </div>

          <h1 className="text-balance text-5xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
            Bilimdan strategiyaga. <span className="text-red-700">Strategiyadan kapitalga.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Treydingni 0 dan o‘rganing, tajribali mentorlar bilan amaliyot qiling va maqsadingizga mos kurs yoki prop hisobni tanlang.
          </p>

          {/* Eye-catching Free Course Lead Magnet Button */}
          <div className="mt-8">
            <a
              href={siteContacts.telegramChannel}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3.5 rounded-2xl border-2 border-sky-400 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 px-6 py-4 text-white shadow-xl shadow-sky-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 transition group-hover:scale-110 group-hover:rotate-6">
                <Send className="h-5 w-5 text-white" />
              </span>
              <div className="text-left">
                <span className="block text-[11px] font-black uppercase tracking-wider text-sky-100">
                  🎁 Maxsus bepul taklif
                </span>
                <span className="block text-base font-black">
                  Telegramda bepul darsliklarni olish
                </span>
              </div>
              <span className="ml-2 rounded-full bg-amber-400 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow-sm">
                Bepul
              </span>
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-7 py-4 font-bold text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-red-800"
            >
              Kurslarni ko‘rish
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#prop-accounts"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-900 transition hover:border-slate-500 hover:bg-slate-50"
            >
              Prop hisob tanlash
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 border-t border-slate-300 pt-7 sm:grid-cols-3">
            {["5 ta ta’lim formati", "$1K–$400K prop kapital", "Urganch va onlayn"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-red-700" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual relative z-10 mx-auto w-full max-w-[570px] lg:mr-0">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border-2 border-red-700/30" />
          <GalleryImage
            items={heroImages}
            index={0}
            priority
            sizes="(max-width: 1024px) 90vw, 570px"
            buttonClassName="w-full rounded-[2rem] bg-slate-100 shadow-2xl"
            imageClassName="aspect-[4/5] w-full object-cover object-center transition duration-700 group-hover/image:scale-[1.025]"
            overlay={
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-7 pt-24 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Founder & mentor</p>
                <h2 className="mt-2 text-2xl font-black">Sardorbek Vaisov</h2>
                <p className="mt-1 text-sm text-slate-300">Xorazm Forex asoschisi</p>
              </div>
            }
          />

          {/* Quick info badge */}
          <div className="relative z-20 ml-auto mr-5 mt-4 hidden max-w-[360px] rounded-2xl border border-red-100 bg-white p-5 shadow-xl md:block">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-red-700">Tezkor aloqa</p>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </div>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-900">
              Ofis: <a href="tel:+998975600600" className="text-red-700 hover:underline">+998 97 560 06 00</a>
            </p>
            <p className="text-xs text-slate-500">
              Prop Menedjer: <a href="tel:+998874600600" className="font-bold text-slate-800 hover:underline">+998 87 460 06 00</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
