"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Send, ShieldCheck, UserCheck } from "lucide-react"
import { formatPrice, propCategories, siteContacts, type PropCategory } from "@/lib/site-data"
import OrderModal, { type OrderProduct } from "./OrderModal"
import Reveal from "./Reveal"

export default function PropAccountsSection() {
  const [activeId, setActiveId] = useState<PropCategory["id"]>("premium")
  const [product, setProduct] = useState<OrderProduct | null>(null)
  const active = propCategories.find((category) => category.id === activeId)!

  return (
    <section id="prop-accounts" className="scroll-mt-20 bg-[#f7f7f5] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <Reveal>
            <p className="section-kicker">Prop trading</p>
            <h2 className="section-title">O‘zingizga mos prop hisobni tanlang</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-copy lg:pb-2">
              Katta kapital bilan savdo qilish uchun hisob turini, shartlarini va narxini solishtiring. Har bir xaridga rasmiylashtirish va konsultatsiya xizmati qo‘shiladi.
            </p>
          </Reveal>
        </div>

        {/* Dedicated PROP MENEDJER Highlight Card */}
        <Reveal delay={110} className="mt-8">
          <div className="overflow-hidden rounded-3xl border-2 border-red-200 bg-gradient-to-br from-red-50 via-white to-red-100/50 p-6 shadow-md md:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-700 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                  <UserCheck className="h-3.5 w-3.5" />
                  PROP MENEDJER
                </div>
                <h3 className="text-xl font-black text-slate-950 sm:text-2xl">
                  Prop hisob tanlashda qiynalyapsizmi?
                </h3>
                <p className="max-w-xl text-sm leading-6 text-slate-600">
                  Imtihonli yoki tayyor real hisob tanlash, qoidalar va rasmiylashtirish bo‘yicha maxsus <strong>PROP MENEDJER</strong> bilan to‘g‘ridan-to‘g‘ri bog‘laning.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href={`tel:${siteContacts.propManagerPhone.raw}`}
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-red-700 px-6 py-4 font-black text-white shadow-lg shadow-red-700/25 transition duration-300 hover:-translate-y-0.5 hover:bg-red-800"
                >
                  <Phone className="h-5 w-5" />
                  <span>{siteContacts.propManagerPhone.number}</span>
                </a>
                <a
                  href={siteContacts.telegramAdmin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-300 bg-white px-5 py-4 font-bold text-slate-800 transition hover:border-slate-500 hover:bg-slate-50"
                >
                  <Send className="h-4 w-4 text-sky-600" />
                  <span>Telegramda yozish</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Category Switcher */}
        <Reveal delay={130} className="mt-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm md:grid-cols-3">
          {propCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveId(category.id)}
              className={`rounded-xl px-5 py-4 text-sm font-black tracking-wide transition ${
                activeId === category.id
                  ? "bg-red-700 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {category.label}
            </button>
          ))}
        </Reveal>

        {/* Accounts Table / Cards */}
        <Reveal delay={170} className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div key={`header-${active.id}`} className="tab-panel-enter grid gap-6 border-b border-slate-200 bg-gradient-to-br from-red-50 via-white to-white p-6 md:grid-cols-[1fr_1.4fr] md:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-700">{active.label}</p>
              <h3 className="mt-3 text-2xl font-black text-slate-950 md:text-3xl">{active.title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">{active.description}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {active.rules.map((rule) => (
                <div key={rule} className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-red-700" />
                  <p className="mt-3 text-sm font-bold leading-6 text-slate-700">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div key={active.id} className="tab-panel-enter bg-slate-50/60 p-4 sm:p-6 lg:p-7">
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {active.accounts.map((account) => (
                <article
                  key={`${active.id}-${account.amount}`}
                  className={`relative flex min-h-[300px] flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    account.featured
                      ? "border-2 border-red-600 bg-gradient-to-b from-red-50/70 to-white shadow-md ring-2 ring-red-600/10"
                      : "border border-slate-200 bg-white shadow-sm hover:border-slate-300"
                  }`}
                >
                  {account.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-red-700 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-sm">
                      Tavsiya
                    </span>
                  )}
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Savdo kapitali</p>
                  <h4 className="mt-2 text-3xl font-black text-slate-950">{account.amount}</h4>
                  <div className="mt-5 space-y-2 text-sm text-slate-600">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                      {active.rules[0]}
                    </p>
                    {account.dailyRange && (
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                        Kunlik tavsiya: {account.dailyRange}
                      </p>
                    )}
                  </div>
                  <div className="mt-auto pt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Hisob narxi</p>
                    <p className="mt-1 text-xl font-black text-slate-950">{formatPrice(account.price)}</p>
                    <button
                      onClick={() =>
                        setProduct({
                          kind: "prop",
                          title: `${active.label} — ${account.amount}`,
                          subtitle: active.title,
                          price: account.price,
                          serviceFee: 200_000,
                        })
                      }
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-700 px-4 py-3 text-sm font-black text-white shadow-md shadow-red-700/20 transition hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-lg"
                    >
                      Sotib olish
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Consultation fee info */}
        <Reveal delay={220} className="mt-5 flex flex-col justify-between gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-950 sm:flex-row sm:items-center">
          <div>
            <strong>Rasmiylashtirish va konsultatsiya:</strong>{" "}
            <span>Onlayn — 200 000 so‘m • Markazda — 300 000 so‘m</span>
          </div>
          <div className="text-xs text-red-900 font-bold">
            Menedjer aloqasi: <a href={`tel:${siteContacts.propManagerPhone.raw}`} className="underline">{siteContacts.propManagerPhone.number}</a>
          </div>
        </Reveal>
      </div>

      <OrderModal product={product} onClose={() => setProduct(null)} />
    </section>
  )
}
