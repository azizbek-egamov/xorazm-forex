"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import {
  BarChart3,
  BookOpenCheck,
  Bot,
  CheckCircle2,
  Clock3,
  Gift,
  GraduationCap,
  Instagram,
  Loader2,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Youtube,
} from "lucide-react"
import GalleryImage, { type GalleryItem } from "./GalleryImage"
import Reveal from "./Reveal"
import { siteContacts } from "@/lib/site-data"

const academyImages: GalleryItem[] = [
  { src: "/images/corporate/trading-office.webp", alt: "Xorazm Forex trading ofisi", width: 1512, height: 2016 },
  { src: "/images/corporate/mentor-student.webp", alt: "Mentor va Xorazm Forex bitiruvchisi", width: 1512, height: 2016 },
]

const resultsImages: GalleryItem[] = [
  { src: "/images/corporate/graduates-one.webp", alt: "Xorazm Forex bitiruvchilari", width: 1512, height: 2016 },
  { src: "/images/corporate/graduates-two.webp", alt: "Sertifikat olgan o‘quvchilar", width: 1512, height: 2016 },
  { src: "/images/corporate/graduates-three.webp", alt: "Ta’lim natijalari", width: 1512, height: 2016 },
  { src: "/images/corporate/gallery-0080.webp", alt: "Sardorbek Vaisov xalqaro tadbir zalida", width: 640, height: 640 },
  { src: "/images/corporate/gallery-0081.webp", alt: "Sardorbek Vaisov shahar markazida", width: 640, height: 640 },
  { src: "/images/corporate/gallery-0231.webp", alt: "Xalqaro tadbirdagi mehmondo‘stlik", width: 1800, height: 2400 },
  { src: "/images/corporate/gallery-0239.webp", alt: "Alpari tadbirida professional uchrashuv", width: 1320, height: 2868 },
  { src: "/images/corporate/gallery-0240.webp", alt: "Alpari tadbiridagi hamkorlar bilan", width: 1320, height: 2868 },
  { src: "/images/corporate/gallery-0251.webp", alt: "Xalqaro hamkorlar bilan uchrashuv", width: 1800, height: 2400 },
  { src: "/images/corporate/gallery-0359.webp", alt: "Jamoa bilan tadbirdan lavha", width: 1800, height: 2400 },
  { src: "/images/corporate/gallery-0518.webp", alt: "Xorazm Forex amaliy ta’lim muhiti", width: 1800, height: 2400 },
]

const proofImages: GalleryItem[] = [
  { src: "/images/corporate/international-team.webp", alt: "Xorazm Forex xalqaro tadbir ishtirokchilari bilan", width: 4032, height: 3024 },
  { src: "/images/corporate/industry-event.webp", alt: "Treyding industriyasi tadbiri", width: 1512, height: 2016 },
  { src: "/images/corporate/corporate-office.webp", alt: "Xorazm Forex zamonaviy ofisi", width: 1512, height: 2016 },
]

export function AcademySection() {
  const benefits = [
    [BookOpenCheck, "Tizimli ta’lim", "Har bir dastur bosqichma-bosqich qurilgan va amaliy topshiriqlar bilan mustahkamlanadi."],
    [Target, "Individual yondashuv", "O‘quvchining tajribasi, maqsadi va savdo uslubiga qarab yo‘l xaritasi tuziladi."],
    [ShieldCheck, "Risk birinchi o‘rinda", "Kapitalni himoya qilish, intizom va risk menejment har bir kursning asosidir."],
  ]

  return (
    <section id="academy" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="grid grid-cols-2 gap-4">
          <Reveal direction="left">
            <GalleryImage
              items={academyImages}
              index={0}
              sizes="(max-width: 1024px) 45vw, 350px"
              buttonClassName="h-[420px] w-full rounded-3xl"
              imageClassName="h-full w-full object-cover transition duration-700 group-hover/image:scale-[1.035]"
            />
          </Reveal>
          <div className="grid gap-4">
            <Reveal direction="right" delay={90}>
              <GalleryImage
                items={academyImages}
                index={1}
                sizes="(max-width: 1024px) 45vw, 350px"
                buttonClassName="h-[202px] w-full rounded-3xl"
                imageClassName="h-full w-full object-cover transition duration-700 group-hover/image:scale-[1.035]"
              />
            </Reveal>
            <Reveal direction="right" delay={170} className="flex h-[202px] flex-col justify-end rounded-3xl bg-red-700 p-6 text-white shadow-lg shadow-red-900/10">
              <GraduationCap className="h-8 w-8" />
              <p className="mt-5 text-2xl font-black">Nazariya emas, amaliy tizim.</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={80}>
          <p className="section-kicker">Akademiya haqida</p>
          <h2 className="section-title">Treydingni tartibli kasbiy ko‘nikmaga aylantiramiz</h2>
          <p className="section-copy">
            Xorazm Forex yangi boshlovchidan professional darajagacha bo‘lgan treyderlar uchun ta’lim, texnologiya va kapital yechimlarini bir joyda taqdim etadi.
          </p>
          <div className="mt-8 space-y-5">
            {benefits.map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof BookOpenCheck
              return (
                <div key={title as string} className="flex gap-4 transition duration-300 hover:translate-x-1">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700">
                    <ItemIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-black text-slate-950">{title as string}</h3>
                    <p className="mt-1 leading-6 text-slate-600">{text as string}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const steps = [
    ["01", "Yo‘nalishni tanlang", "Kurs yoki prop hisob — maqsadingizga mos yechimni solishtiring."],
    ["02", "Arizani yuboring", "Onlayn to‘lov qiling yoki markazda naqd to‘lash uchun joy band qiling."],
    ["03", "Operator bilan bog‘laning", "Jamoamiz tafsilotlarni tekshiradi va keyingi qadamlarni tushuntiradi."],
    ["04", "Natijaga ishlang", "Ta’limni yoki prop hisobdagi savdoni aniq reja bilan boshlang."],
  ]

  return (
    <section className="border-y border-red-100 bg-red-50/50 py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <p className="section-kicker">Qanday ishlaydi?</p>
            <h2 className="section-title">Tanlovdan boshlanishgacha 4 aniq qadam</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 75} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl md:p-8">
                  <span className="text-sm font-black text-red-700">{number}</span>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <Reveal>
            <p className="section-kicker">Ta’lim muhiti</p>
            <h2 className="section-title">O‘quvchilar, ustozlar va real ish jarayoni</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="section-copy">
              Akademiyadagi darslar monitor oldidagi amaliyot, individual tahlil va yakuniy sertifikatlash bilan olib boriladi.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {resultsImages.slice(0, 3).map((item, index) => (
            <Reveal key={item.src} delay={index * 90} className={index === 1 ? "md:-translate-y-5" : ""}>
              <GalleryImage
                items={resultsImages}
                index={index}
                sizes="(max-width: 768px) 100vw, 33vw"
                buttonClassName="w-full rounded-3xl shadow-sm"
                imageClassName="aspect-[4/5] w-full object-cover transition duration-700 group-hover/image:scale-105"
                overlay={
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-20">
                    <p className="font-bold text-white">{item.alt}</p>
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={140} className="mt-10 border-t border-slate-200 pt-7">
          <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-700">Fotogalereya</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">Yana tadbirlar va akademiya hayotidan</h3>
            </div>
            <p className="text-sm text-slate-500">Rasmni bosib to‘liq ko‘ring</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {resultsImages.slice(3).map((item, offset) => {
              const index = offset + 3
              return (
                <GalleryImage
                  key={item.src}
                  items={resultsImages}
                  index={index}
                  sizes="(max-width: 640px) 50vw, 25vw"
                  buttonClassName="h-36 w-full rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:h-44"
                  imageClassName="h-full w-full object-cover transition duration-500 group-hover/image:scale-105"
                />
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function CorporateProofSection() {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <GalleryImage
              items={proofImages}
              index={0}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              buttonClassName="min-h-[460px] w-full rounded-3xl"
              imageClassName="object-cover transition duration-700 group-hover/image:scale-[1.025]"
              overlay={
                <>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">Professional aloqalar</p>
                    <h2 className="mt-3 text-3xl font-black">Xalqaro treyding hamjamiyati bilan tajriba almashinuvi</h2>
                  </div>
                </>
              }
            />
          </Reveal>
          <div className="grid gap-4">
            {proofImages.slice(1).map((item, offset) => (
              <Reveal key={item.src} direction="right" delay={90 + offset * 90}>
                <GalleryImage
                  items={proofImages}
                  index={offset + 1}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  buttonClassName="h-[275px] w-full rounded-3xl"
                  imageClassName="h-full w-full object-cover transition duration-700 group-hover/image:scale-[1.035]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function RiskAndFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    ["Kurslar kimlar uchun?", "Dasturlar mutlaqo yangi boshlovchilardan tajribali treyderlargacha moslashtirilgan. START va onlayn guruh mutlaqo 0 dan boshlanadi."],
    ["Onlayn darslar jonlimi?", "Ha. Onlayn guruh Telegram orqali jonli LIVE tarzida o‘tiladi, individual formatda esa Sardorbek Vaisov bilan 25–30 ta yakkama-yakka jonli dars olib boriladi."],
    ["Prop hisob nima va qanday ishlaydi?", "Prop hisob — belgilangan risk qoidalariga amal qilgan holda katta savdo kapitalidan foydalanish imkonini beruvchi hisob. Muvaffaqiyatli savdodan sof foyda sizga to‘lanadi."],
    ["Prop hisob turlari va qoidalari qanday?", "Bizda 2 xil rasmiy hisob mavjud: 1) IMTIHONLI — 9% foyda qilingach to‘lov 100% qaytariladi va 14 kundan keyin pul yechiladi; 2) REAL IMTIHONSIZ — darhol real hisob, birinchi yechish 21 kundan keyin va keyingilari har 14 kunda cheklanmagan payoutlar bilan."],
    ["Prop hisobni qancha vaqtda rasmiylashtiramiz?", "Prop hisoblar va konsultatsiya arizasi qabul qilingach, 15–20 daqiqa ichida prop menejerimiz tomonidan to‘liq rasmiylashtirib beriladi."],
    ["To‘lov usullari qanday?", "To‘lovlarni sayt orqali onlayn (UzCard, Visa karta chekini yuklash orqali) yoki Urganch shahridagi markazimizga tashrif buyurib naqd amalga oshirishingiz mumkin."],
    ["Daromad kafolatlanadimi?", "Yo‘q. Treyding yuqori moliyaviy risk bilan bog‘liq bo‘lib, natija bilim, qat’iy intizom, bozor holati va risk menejment qoidalariga amal qilishga bog‘liq."],
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
        <Reveal>
          <p className="section-kicker">Muhim ma’lumot</p>
          <h2 className="section-title">Savollarga aniq javoblar</h2>
          <p className="mt-3 text-slate-600 leading-7">
            Ta’lim dasturlari, prop hisoblar va to‘lov shartlari haqida eng ko‘p beriladigan savollar.
          </p>
          <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 p-6">
            <BarChart3 className="h-7 w-7 text-red-700" />
            <h3 className="mt-4 text-lg font-black text-red-950">Risk haqida ogohlantirish</h3>
            <p className="mt-2 leading-7 text-red-900/80">
              Treyding yuqori moliyaviy risk bilan bog‘liq. Ta’lim va konsultatsiya daromadni kafolatlamaydi. Faqat yo‘qotishga tayyor mablag‘ bilan savdo qiling.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-3.5">
            {faqs.map(([question, answer], index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-red-300 bg-red-50/30 shadow-md ring-1 ring-red-200"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-black text-slate-950 transition sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{question}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-transform duration-300 ${
                        isOpen
                          ? "rotate-45 bg-red-700 text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-700"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pt-1 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ContactSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [topic, setTopic] = useState("Kurslar bo‘yicha konsultatsiya")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) {
      setError("Iltimos, ismingiz va telefon raqamingizni kiriting")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: `Yo‘nalish: ${topic}\nXabar: ${message.trim() || "Xabar qoldirilmadi"}`,
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Arizani yuborishda xatolik yuz berdi")
      }

      setSuccess(true)
      setName("")
      setPhone("")
      setMessage("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xatolik yuz berdi")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-[#f7f7f5] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="text-center md:text-left">
            <p className="section-kicker">Bog‘lanish</p>
            <h2 className="section-title">Savollaringiz bormi? Mutaxassis bilan maslahatlashing</h2>
            <p className="section-copy mt-3 max-w-2xl">
              O‘quv kurslari yoki Prop trading hisoblari bo‘yicha savollaringiz bo‘lsa, quyidagi raqamlarga qo‘ng‘iroq qiling yoki ariza qoldiring.
            </p>
          </div>
        </Reveal>

        {/* Lead Magnet Telegram and Contacts Row */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Box 1: Bepul Darsliklar Telegram Banner */}
          <Reveal delay={80} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-sky-300 bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 p-7 text-white shadow-xl shadow-sky-600/15">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-300">
                  <Gift className="h-3.5 w-3.5" />
                  BEPUL DARSLIKLAR
                </div>
                <h3 className="mt-4 text-2xl font-black">
                  Treydingni 0 dan bepul o‘rganishni xohlaysizmi?
                </h3>
                <p className="mt-3 text-sm leading-6 text-sky-100">
                  Bizning rasmiy Telegram kanalimizda boshlovchilar uchun bepul video darsliklar, jonli bozor tahlillari va foydali ma’lumotlar doimiy ulashib boriladi.
                </p>
              </div>
              <div className="mt-6 pt-4">
                <a
                  href={siteContacts.telegramChannel}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white px-5 py-4 font-black text-sky-700 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-sky-50"
                >
                  <Send className="h-5 w-5 text-sky-600" />
                  <span>Kanalga a’zo bo‘lish</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Box 2: Ofis & O'quv masalalari */}
          <Reveal delay={120} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-red-700">
                  <GraduationCap className="h-3.5 w-3.5" />
                  O‘QUV MASALALARI
                </div>
                <h3 className="mt-4 text-xl font-black text-slate-950">Ofis raqamlari</h3>
                <p className="mt-2 text-sm text-slate-600">
                  START, ZETA, PRO va onlayn kurslar bo‘yicha to‘liq ma’lumot va ro‘yxatdan o‘tish:
                </p>
                <div className="mt-5 space-y-3">
                  {siteContacts.officePhones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.raw}`}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 font-black text-slate-900 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                    >
                      <span className="flex items-center gap-2.5 text-base">
                        <Phone className="h-4 w-4 text-red-700" />
                        {phone.number}
                      </span>
                      <span className="text-xs font-bold text-slate-400">Ofis</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-5 border-t border-slate-100 pt-3 text-xs text-slate-500">
                Ish vaqti: {siteContacts.workHours}
              </div>
            </div>
          </Reveal>

          {/* Box 3: PROP MENEDJER */}
          <Reveal delay={160} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-red-200 bg-gradient-to-br from-red-50 via-white to-red-50/70 p-7 shadow-sm transition hover:shadow-lg">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-700 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                  <UserCheck className="h-3.5 w-3.5" />
                  PROP MENEDJER
                </div>
                <h3 className="mt-4 text-xl font-black text-slate-950">Prop hisoblar va kapital</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Tayyor va imtihonli prop hisoblarni xarid qilish, qoidalar va konsultatsiya:
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={`tel:${siteContacts.propManagerPhone.raw}`}
                    className="flex items-center justify-between rounded-2xl bg-red-700 p-4 font-black text-white shadow-lg shadow-red-700/20 transition hover:-translate-y-0.5 hover:bg-red-800"
                  >
                    <span className="flex items-center gap-2.5 text-base">
                      <Phone className="h-4 w-4" />
                      {siteContacts.propManagerPhone.number}
                    </span>
                    <span className="text-[10px] font-black uppercase text-red-200">Qo‘ng‘iroq</span>
                  </a>
                  <a
                    href={siteContacts.telegramAdmin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3.5 font-bold text-slate-800 transition hover:border-slate-400"
                  >
                    <span className="flex items-center gap-2.5 text-sm">
                      <Send className="h-4 w-4 text-sky-600" />
                      Telegram: @iamvaisov
                    </span>
                    <span className="text-xs text-slate-400">Admin</span>
                  </a>
                </div>
              </div>
              <div className="mt-5 border-t border-red-100 pt-3 text-xs text-red-800">
                15–20 daqiqada rasmiylashtirish xizmati
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact Form and Information Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* Interactive Form */}
          <Reveal delay={180}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700">
                <MessageSquare className="h-4 w-4" />
                Bepul maslahat olish
              </div>
              <h3 className="mt-2 text-2xl font-black text-slate-950">Arizangizni qoldiring</h3>
              <p className="mt-1 text-sm text-slate-600">
                Ma’lumotlaringizni qoldiring, mutaxassislarimiz sizga tez orada qo‘ng‘iroq qilib barcha savollaringizga javob beradi.
              </p>

              {success ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                  <h4 className="mt-3 text-lg font-black text-emerald-950">Arizangiz muvaffaqiyatli qabul qilindi!</h4>
                  <p className="mt-1 text-sm text-emerald-800">
                    Tez orada menejerimiz siz bilan bog‘lanadi.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 rounded-xl bg-emerald-700 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-800"
                  >
                    Yangi ariza yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Ism va familiyangiz *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Sardorbek Vaisov"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-red-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Telefon raqamingiz *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-red-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Sizni nima qiziqtiradi?
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-red-600 focus:bg-white"
                    >
                      <option value="Kurslar bo‘yicha konsultatsiya">O‘quv kurslari (START, ZETA, PRO)</option>
                      <option value="Onlayn ta’lim bo‘yicha">Onlayn ta’lim (Telegram LIVE / Individual)</option>
                      <option value="Prop hisob sotib olish">Prop trading hisoblar (Katta kapital)</option>
                      <option value="Algotrading va robotlar">Savdo robotlari va Algotrading</option>
                      <option value="Boshqa savol">Boshqa masalalar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Qo‘shimcha savol yoki izoh (ixtiyoriy)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Savolingizni yozing..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-red-600 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-4 text-sm font-black text-white shadow-lg shadow-red-700/20 transition hover:bg-red-800 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Yuborilmoqda...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Arizani yuborish</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Social and Location details */}
          <Reveal delay={220} className="flex flex-col justify-between space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h4 className="text-lg font-black text-slate-950">Ijtimoiy tarmoqlarimiz</h4>
              <p className="mt-1 text-sm text-slate-600">
                Jonli natijalar, savdo tahlillari va ta’lim jarayonlarini rasmiy sahifalarimizda kuzatib boring:
              </p>

              <div className="mt-5 space-y-3">
                {/* Official Telegram AI Bot */}
                <a
                  href={siteContacts.telegramAiBot}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border-2 border-indigo-500/40 bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 p-4 font-bold text-white shadow-lg shadow-indigo-950/30 transition hover:brightness-110 hover:border-cyan-400"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-md">
                      <Bot className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="block text-sm text-cyan-300">Rasmiy Telegram AI Bot</strong>
                        <span className="rounded bg-cyan-400/20 px-1.5 py-0.5 text-[10px] font-black text-cyan-200">24/7 ONLINE</span>
                      </div>
                      <span className="text-xs text-slate-300 block">Tariflar, hisoblar xaridi va arizalarni qabul qilish</span>
                      <span className="text-[11px] text-cyan-400 font-mono">@xorazmforexadminAI_bot</span>
                    </div>
                  </span>
                  <span className="rounded-xl bg-cyan-400 px-3 py-1.5 text-xs font-black text-slate-950">Boshlash →</span>
                </a>

                <a
                  href={siteContacts.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-pink-200 bg-pink-50/60 p-4 font-bold text-slate-900 transition hover:bg-pink-100"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white">
                      <Instagram className="h-5 w-5" />
                    </span>
                    <div>
                      <strong className="block text-sm">Instagram</strong>
                      <span className="text-xs text-slate-500">@xorazmforex.uz</span>
                    </div>
                  </span>
                  <span className="text-xs font-bold text-pink-700">Kuzatish →</span>
                </a>

                <a
                  href={siteContacts.telegramChannel}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-sky-200 bg-sky-50/70 p-4 font-bold text-slate-900 transition hover:bg-sky-100"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white">
                      <Send className="h-5 w-5" />
                    </span>
                    <div>
                      <strong className="block text-sm">Telegram Kanal</strong>
                      <span className="text-xs text-slate-500">@thexorazmforex (Bepul darslar)</span>
                    </div>
                  </span>
                  <span className="text-xs font-bold text-sky-700">Qo‘shilish →</span>
                </a>

                <a
                  href={siteContacts.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-red-200 bg-red-50/60 p-4 font-bold text-slate-900 transition hover:bg-red-100"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
                      <Youtube className="h-5 w-5" />
                    </span>
                    <div>
                      <strong className="block text-sm">YouTube</strong>
                      <span className="text-xs text-slate-500">@vaisovs</span>
                    </div>
                  </span>
                  <span className="text-xs font-bold text-red-700">Tomosha qilish →</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h4 className="text-lg font-black text-slate-950">Markazimiz manzili</h4>
              <p className="mt-3 flex items-start gap-2.5 text-sm text-slate-700">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                <span>{siteContacts.address}</span>
              </p>
              <p className="mt-2 flex items-center gap-2.5 text-sm text-slate-700">
                <Clock3 className="h-5 w-5 shrink-0 text-red-700" />
                <span>{siteContacts.workHours}</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Google Maps Interactive Iframe */}
        <Reveal delay={240} className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="flex flex-col justify-between gap-2 border-b border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-700" />
                <h4 className="font-black text-slate-950">Xorazm Forex Akademiyasi — Google Xaritada</h4>
              </div>
              <span className="text-xs text-slate-500">Urganch shahri, A. Qodiriy ko‘chasi, 11</span>
            </div>
            <div className="relative h-[420px] w-full bg-slate-100">
              <iframe
                src={siteContacts.googleMapsIframe}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Xorazm Forex Google Maps"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-red-950 py-14 text-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-4">
          {/* Brand info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/xorazm-logo-cropped.png"
                alt="Xorazm Forex"
                width={64}
                height={64}
                className="h-12 w-12 rounded-lg bg-white p-1 object-contain"
              />
              <div>
                <strong className="block text-lg font-black">XORAZM FOREX</strong>
                <span className="text-xs uppercase tracking-widest text-red-300">Trading Academy</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-red-100/70">
              Professional treyding ta’limi, algotrading va prop kapital yechimlari.
            </p>
          </div>

          {/* O'quv masalalari / Ofis */}
          <div>
            <h3 className="font-black text-white">O‘quv masalalari (Ofis)</h3>
            <p className="mt-3 text-xs text-red-200/80">Kurslar va ta’lim bo‘yicha:</p>
            <div className="mt-3 space-y-2">
              {siteContacts.officePhones.map((phone) => (
                <a
                  key={phone.number}
                  href={`tel:${phone.raw}`}
                  className="block text-sm font-bold text-white transition hover:text-red-300"
                >
                  {phone.number}
                </a>
              ))}
            </div>
            <p className="mt-4 flex items-start gap-2 text-xs text-red-100/70">
              <Clock3 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-300" />
              {siteContacts.workHours}
            </p>
          </div>

          {/* Prop Menedjer & Manzil */}
          <div>
            <h3 className="font-black text-white">Prop Trading Bo‘limi</h3>
            <p className="mt-3 text-xs text-red-200/80">PROP MENEDJER:</p>
            <a
              href={`tel:${siteContacts.propManagerPhone.raw}`}
              className="mt-1 block text-base font-black text-amber-300 transition hover:underline"
            >
              {siteContacts.propManagerPhone.number}
            </a>
            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-200/80">Manzil:</h4>
              <p className="mt-1 text-xs leading-5 text-red-100/70">
                {siteContacts.address}
              </p>
            </div>
          </div>

          {/* Social Channels */}
          <div>
            <h3 className="font-black text-white">Ijtimoiy tarmoqlar</h3>
            <p className="mt-3 text-xs text-red-200/80">Bepul darslar va tahlillar:</p>
            <div className="mt-4 flex gap-3">
              <a
                aria-label="Telegram AI Bot"
                href={siteContacts.telegramAiBot}
                target="_blank"
                rel="noreferrer"
                title="AI Bot: Tariflar va Xarid"
                className="rounded-xl border border-cyan-400/50 bg-cyan-500/10 p-3 text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-slate-950"
              >
                <Bot className="h-5 w-5" />
              </a>
              <a
                aria-label="Instagram"
                href={siteContacts.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 p-3 text-red-100 transition hover:-translate-y-0.5 hover:bg-white hover:text-red-900"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                aria-label="Telegram"
                href={siteContacts.telegramChannel}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 p-3 text-red-100 transition hover:-translate-y-0.5 hover:bg-white hover:text-red-900"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                aria-label="YouTube"
                href={siteContacts.youtube}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 p-3 text-red-100 transition hover:-translate-y-0.5 hover:bg-white hover:text-red-900"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <a
              href={siteContacts.telegramAiBot}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-slate-900/80 px-3.5 py-2 text-xs font-bold text-cyan-300 transition hover:border-cyan-400 hover:bg-slate-900"
            >
              <Bot className="h-3.5 w-3.5 text-cyan-400" />
              <span>AI Bot: @xorazmforexadminAI_bot</span>
            </a>
            <a
              href={siteContacts.telegramChannel}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-red-800/80 px-4 py-2 text-xs font-bold text-amber-200 transition hover:bg-red-800"
            >
              <Gift className="h-3.5 w-3.5" />
              <span>Telegramda bepul darslar</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-red-100/60 sm:flex-row">
          <p>© 2026 Xorazm Forex. Barcha huquqlar himoyalangan.</p>
          <p>Ta’lim va konsultatsiya xizmatlari. Daromad kafolatlanmaydi.</p>
        </div>
      </div>
    </footer>
  )
}
