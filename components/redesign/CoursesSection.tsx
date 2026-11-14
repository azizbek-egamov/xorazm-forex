"use client"

import { useState } from "react"
import { ArrowRight, Check, Clock3, Users } from "lucide-react"
import { courses, formatPrice } from "@/lib/site-data"
import OrderModal, { type OrderProduct } from "./OrderModal"
import Reveal from "./Reveal"

export default function CoursesSection() {
  const [product, setProduct] = useState<OrderProduct | null>(null)

  return (
    <section id="courses" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl"><p className="section-kicker">Ta’lim dasturlari</p><h2 className="section-title">Maqsadingizga mos kursni tanlang</h2><p className="section-copy">Boshlang‘ich guruhdan premium individualgacha — har bir dastur aniq natija va amaliy ko‘nikmaga yo‘naltirilgan.</p></Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={index * 70} className={`${index >= 3 ? "lg:col-span-3" : "lg:col-span-2"}`}>
            <article className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${course.featured ? "border-red-300 bg-gradient-to-br from-red-50 to-white text-slate-950 shadow-lg" : "border-slate-200 bg-white text-slate-950"}`}>
              {course.featured && <span className="absolute right-5 top-5 rounded-full bg-red-700 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">Eng to‘liq paket</span>}
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{course.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-black tracking-tight">{course.name}</h3>
              <p className="mt-3 min-h-[52px] leading-6 text-slate-600">{course.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2 border-y border-slate-200 py-4 text-xs font-bold text-slate-600"><span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-red-600" />{course.duration}</span><span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-red-600" />{course.format}</span></div>
              <ul className="mt-6 flex-1 space-y-3">{course.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700"><span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700"><Check className="h-3 w-3" /></span>{feature}</li>)}</ul>
              <div className="mt-7"><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Kurs narxi</p><p className="mt-1 text-2xl font-black">{formatPrice(course.price)}</p></div>
              <button onClick={() => setProduct({ kind: "course", title: `${course.name} kursi`, subtitle: `${course.duration} • ${course.format}`, price: course.price })} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-lg">Kursga yozilish<ArrowRight className="h-4 w-4" /></button>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
      <OrderModal product={product} onClose={() => setProduct(null)} />
    </section>
  )
}

