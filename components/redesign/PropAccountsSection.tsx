"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Phone,
  Send,
  ShieldCheck,
  UserCheck,
  Crown,
  Zap,
  Target,
  RefreshCw,
  Calendar,
  Infinity as InfinityIcon,
  AlertTriangle,
  FileText,
  Eye,
  X,
  Sparkles
} from "lucide-react"
import { formatPrice, propCategories, siteContacts, type PropCategory } from "@/lib/site-data"
import OrderModal, { type OrderProduct } from "./OrderModal"
import Reveal from "./Reveal"

export default function PropAccountsSection() {
  const [activeId, setActiveId] = useState<PropCategory["id"]>("imtihonli")
  const [product, setProduct] = useState<OrderProduct | null>(null)
  const [previewPoster, setPreviewPoster] = useState<string | null>(null)

  const active = propCategories.find((category) => category.id === activeId) ?? propCategories[0]

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
              Katta kapital bilan savdo qilish uchun yangilangan rasmiy prop hisoblarni tanlang. Imtihonli yoki darhol real savdo — barcha hisoblar uchun <strong>XF jamoasi 100% kafolat</strong> beradi!
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
                  Prop hisob tanlashda yordam kerakmi?
                </h3>
                <p className="max-w-xl text-sm leading-6 text-slate-600">
                  Imtihonli yoki real hisob tanlash, qoidalar va rasmiylashtirish bo‘yicha maxsus <strong>PROP MENEDJER</strong> bilan to‘g‘ridan-to‘g‘ri bog‘laning.
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
                  href={siteContacts.telegramAiBot}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 px-6 py-4 font-black text-white shadow-lg shadow-sky-500/25 transition duration-300 hover:-translate-y-0.5 hover:from-sky-600 hover:to-sky-700"
                >
                  <Bot className="h-5 w-5" />
                  <span>Telegram bot</span>
                </a>
                <a
                  href={siteContacts.telegramAdmin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-300 bg-white px-5 py-4 font-bold text-slate-800 transition hover:border-slate-500 hover:bg-slate-50"
                >
                  <Send className="h-4 w-4 text-sky-600" />
                  <span>Admin: @xfprop</span>
                </a>
              </div>
            </div>

            {/* AI Assistant Info Ribbon */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-red-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700 border border-red-100">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    <span className="text-red-700 font-black">Telegram bot</span> barcha tariflar bo‘yicha ma’lumot beradi, hisoblarni sotadi va buyurtmangizni 24/7 qabul qiladi!
                  </p>
                  <span className="text-[11px] text-slate-500">
                    Kutishsiz, avtomatik narxlar kalkulyatori va hisob xaridi.
                  </span>
                </div>
              </div>
              <a
                href={siteContacts.telegramAiBot}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-red-700 px-5 py-2.5 text-xs font-black text-white shadow-md shadow-red-700/20 transition hover:bg-red-800"
              >
                <Bot className="h-4 w-4" />
                <span>Botga o‘tish</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* 2 Category Switcher Buttons */}
        <Reveal delay={130} className="mt-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:grid-cols-2 max-w-2xl mx-auto">
          {propCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveId(category.id)}
              className={`flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm md:text-base font-black tracking-wide transition ${
                activeId === category.id
                  ? category.id === "imtihonli"
                    ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-lg shadow-cyan-900/20"
                    : "bg-gradient-to-r from-red-700 to-rose-600 text-white shadow-lg shadow-red-900/20"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {category.id === "imtihonli" ? (
                <Zap className="h-4 w-4 text-yellow-300" />
              ) : (
                <Crown className="h-4 w-4 text-yellow-300" />
              )}
              <span>{category.label}</span>
            </button>
          ))}
        </Reveal>

        {/* Accounts Container */}
        <Reveal delay={170} className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          
          {/* Header Card with Rules and 100% Guarantee */}
          <div
            key={`header-${active.id}`}
            className={`tab-panel-enter grid gap-6 border-b border-slate-200 p-6 md:grid-cols-[1.2fr_1fr] md:p-8 ${
              active.id === "imtihonli"
                ? "bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/40"
                : "bg-gradient-to-br from-red-50/80 via-white to-rose-50/40"
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${
                    active.id === "imtihonli"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {active.label}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setPreviewPoster(
                      active.id === "imtihonli"
                        ? "/images/imtihonli-prop.jpg"
                        : "/images/real-imtihonsiz.jpg"
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-red-700 underline"
                >
                  <Eye className="h-3.5 w-3.5" />
                  Rasmiy plakatni ko‘rish
                </button>
              </div>

              <h3 className="mt-3 text-2xl font-black text-slate-950 md:text-3xl">
                {active.title}
              </h3>
              <p className="mt-2 text-sm md:text-base font-bold text-slate-700">
                {active.tagline}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                {active.description}
              </p>
            </div>

            {/* 100% Kafolat Card & Key Points */}
            <div className="flex flex-col justify-between gap-4">
              <div className="flex items-center gap-3 rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white shadow-md">
                  <Crown className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-black tracking-wider text-amber-900 uppercase">
                    XF JAMOASI
                  </div>
                  <div className="text-base font-black text-slate-950">
                    100% KAFOLAT BERADI
                  </div>
                  <div className="text-xs text-slate-600">
                    Bigger Capital, Bigger Opportunities
                  </div>
                </div>
              </div>

              {/* Rules List */}
              <div className="grid gap-2 sm:grid-cols-2">
                {active.rules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 text-xs font-bold text-slate-700 shadow-sm"
                  >
                    <ShieldCheck className="h-4 w-4 shrink-0 text-red-600" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accounts Grid */}
          <div key={active.id} className="tab-panel-enter bg-slate-50/60 p-4 sm:p-6 lg:p-8">
            <div
              className={`grid gap-5 ${
                active.accounts.length === 5
                  ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
                  : "sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {active.accounts.map((account) => (
                <article
                  key={`${active.id}-${account.amount}`}
                  className={`relative flex min-h-[380px] flex-col justify-between rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    account.featured
                      ? active.id === "imtihonli"
                        ? "border-2 border-cyan-500 bg-gradient-to-b from-cyan-50/60 via-white to-white shadow-md ring-2 ring-cyan-500/10"
                        : "border-2 border-red-600 bg-gradient-to-b from-red-50/60 via-white to-white shadow-md ring-2 ring-red-600/10"
                      : "border border-slate-200 bg-white shadow-sm hover:border-slate-300"
                  }`}
                >
                  {account.badge && (
                    <span
                      className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-sm ${
                        active.id === "imtihonli" ? "bg-cyan-600" : "bg-red-700"
                      }`}
                    >
                      {account.badge}
                    </span>
                  )}

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Savdo kapitali
                    </p>
                    <h4 className="mt-2 text-3xl font-black text-slate-950">
                      {account.amount}
                    </h4>

                    {/* Parameters from flyers */}
                    <div className="mt-4 space-y-2 rounded-xl bg-slate-50 p-3 border border-slate-200 text-xs">
                      {account.targetProfit && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 flex items-center gap-1">
                            <Target className="h-3.5 w-3.5 text-cyan-600" />
                            Target (9%):
                          </span>
                          <strong className="font-black text-amber-700">
                            {account.targetProfit}
                          </strong>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 flex items-center gap-1">
                          <AlertTriangle className="h-3.5 w-3.5 text-red-600" />
                          Kunlik minus:
                        </span>
                        <strong className="font-bold text-slate-800">
                          {account.dailyLoss}
                        </strong>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 flex items-center gap-1">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                          Umumiy minus:
                        </span>
                        <strong className="font-bold text-slate-800">
                          {account.totalLoss}
                        </strong>
                      </div>

                      {account.payoutNote && (
                        <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-[11px] text-emerald-700">
                          <span className="flex items-center gap-1">
                            <RefreshCw className="h-3 w-3" />
                            To‘lov tartibi:
                          </span>
                          <span className="font-semibold">{account.payoutNote}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      {active.id === "imtihonli" ? "Prop narxi" : "Hisob narxi"}
                    </p>
                    <p
                      className={`mt-1 text-xl font-black ${
                        active.id === "imtihonli" ? "text-cyan-700" : "text-red-700"
                      }`}
                    >
                      {formatPrice(account.price)}
                    </p>
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
                      className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg ${
                        active.id === "imtihonli"
                          ? "bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 shadow-cyan-900/20"
                          : "bg-gradient-to-r from-red-700 to-rose-600 hover:from-red-600 hover:to-rose-500 shadow-red-900/20"
                      }`}
                    >
                      Sotib olish
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Comparison Table View */}
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-red-600" />
                  {active.label} — Taqqoslash jadvali
                </h4>
                <span className="text-xs text-slate-500 font-mono">xorazmforex.uz</span>
              </div>
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-100 text-[11px] uppercase font-black text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Hisob miqdori</th>
                    <th className="py-2.5 px-3">Narxi</th>
                    {active.id === "imtihonli" && (
                      <th className="py-2.5 px-3">Realga o‘tish (9%)</th>
                    )}
                    <th className="py-2.5 px-3">Kunlik minus</th>
                    <th className="py-2.5 px-3">Umumiy minus</th>
                    <th className="py-2.5 px-3 text-center">Amal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {active.accounts.map((acc, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 font-black text-slate-950 text-sm">
                        {acc.amount}
                      </td>
                      <td className="py-3 px-3 font-bold text-red-700">
                        {formatPrice(acc.price)}
                      </td>
                      {active.id === "imtihonli" && (
                        <td className="py-3 px-3 font-bold text-amber-700">
                          {acc.targetProfit}
                        </td>
                      )}
                      <td className="py-3 px-3 text-slate-600">{acc.dailyLoss}</td>
                      <td className="py-3 px-3 text-slate-600">{acc.totalLoss}</td>
                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={() =>
                            setProduct({
                              kind: "prop",
                              title: `${active.label} — ${acc.amount}`,
                              subtitle: active.title,
                              price: acc.price,
                              serviceFee: 200_000,
                            })
                          }
                          className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-red-700 transition"
                        >
                          Tanlash
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
            Menedjer aloqasi: <a href={`tel:${siteContacts.propManagerPhone.raw}`} className="underline">{siteContacts.propManagerPhone.number}</a> | Telegram: <a href={siteContacts.telegramAdmin} target="_blank" rel="noreferrer" className="underline">@xfprop</a>
          </div>
        </Reveal>
      </div>

      {/* Poster Lightbox Modal */}
      {previewPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setPreviewPoster(null)}
        >
          <div
            className="relative max-w-3xl w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewPoster(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white transition hover:bg-black border border-slate-600"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-[75vh] w-full">
              <Image
                src={previewPoster}
                alt="Rasmiy Tarif Plakati"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <OrderModal product={product} onClose={() => setProduct(null)} />
    </section>
  )
}
