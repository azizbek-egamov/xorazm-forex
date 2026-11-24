"use client"

import { useState } from "react"
import Image from "next/image"
import { Bot, ChevronDown, Gift, Instagram, Menu, Phone, Send, Sparkles, X } from "lucide-react"
import { siteContacts } from "@/lib/site-data"

const links = [
  ["Akademiya", "academy"],
  ["Kurslar", "courses"],
  ["Prop hisoblar", "prop-accounts"],
  ["Natijalar", "results"],
  ["Aloqa", "contact"],
] as const

export default function CorporateHeader() {
  const [open, setOpen] = useState(false)
  const [phoneDropdown, setPhoneDropdown] = useState(false)

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      {/* Top Marketing / Free Lessons Lead-Magnet Bar */}
      <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-900 px-3 py-2 text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between text-xs sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 truncate font-semibold">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Gift className="h-3 w-3 text-amber-300" />
            </span>
            <span className="truncate">
              0 dan boshlovchilar uchun: <strong className="text-amber-300">BEPUL darsliklar</strong> va tahlillar Telegram kanalimizda!
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={siteContacts.telegramChannel}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-bold text-white transition hover:bg-white hover:text-red-800"
            >
              <Send className="h-3 w-3" />
              <span>Kanalga o‘tish</span>
            </a>
            <a
              href={siteContacts.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hidden items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90 transition hover:bg-white hover:text-pink-600 sm:inline-flex"
            >
              <Instagram className="h-3 w-3" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
          aria-label="Bosh sahifaga qaytish"
        >
          <Image
            src="/images/xorazm-logo-cropped.png"
            alt="Xorazm Forex"
            width={64}
            height={64}
            priority
            className="h-12 w-12 object-contain"
          />
          <div className="hidden text-left sm:block">
            <strong className="block text-lg font-black leading-none tracking-tight text-slate-950">
              XORAZM FOREX
            </strong>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-red-700">
              Trading Academy
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Asosiy navigatsiya">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="text-sm font-bold text-slate-600 transition hover:text-red-700"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Telegram AI Bot Pill */}
          <a
            href={siteContacts.telegramAiBot}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-indigo-400/40 bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 px-3 py-2.5 text-xs font-black text-cyan-300 shadow-sm transition hover:border-cyan-400 hover:text-white md:flex"
            title="Telegram AI Bot: Tariflar va Hisob xaridi (@xorazmforexadminAI_bot)"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300"></span>
            </span>
            <Bot className="h-3.5 w-3.5 text-cyan-400" />
            <span>AI Bot: Tariflar & Xarid</span>
          </a>

          {/* Telegram Free Channel Pill */}
          <a
            href={siteContacts.telegramChannel}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2.5 text-xs font-black text-sky-800 transition hover:bg-sky-100 xl:flex"
            title="Telegram kanalimizda bepul darsliklar"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600"></span>
            </span>
            <Send className="h-3.5 w-3.5 text-sky-600" />
            <span>Bepul darsliklar</span>
          </a>

          {/* Phone Dropdown Desktop */}
          <div className="relative hidden xl:block">
            <button
              onClick={() => setPhoneDropdown(!phoneDropdown)}
              onBlur={() => setTimeout(() => setPhoneDropdown(false), 200)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-800 transition hover:border-red-200 hover:bg-red-50/50"
            >
              <Phone className="h-3.5 w-3.5 text-red-700" />
              <span>{siteContacts.officePhones[0].number}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {phoneDropdown && (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                <p className="px-2 pb-1 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  O‘quv masalalari / Ofis
                </p>
                {siteContacts.officePhones.map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between rounded-xl p-2 font-bold text-slate-800 hover:bg-red-50 hover:text-red-700"
                  >
                    <span>{phone.number}</span>
                    <span className="text-[10px] font-semibold text-slate-400">Ofis</span>
                  </a>
                ))}
                <div className="my-2 border-t border-slate-100" />
                <p className="px-2 pb-1 text-[10px] font-black uppercase tracking-wider text-red-700">
                  Prop hisoblar bo‘yicha
                </p>
                <a
                  href={`tel:${siteContacts.propManagerPhone.raw}`}
                  className="flex items-center justify-between rounded-xl bg-red-50/70 p-2 font-black text-red-800 hover:bg-red-100"
                >
                  <span>{siteContacts.propManagerPhone.number}</span>
                  <span className="text-[10px] uppercase text-red-700 font-extrabold">Prop Menedjer</span>
                </a>
              </div>
            )}
          </div>

          {/* Direct CTA */}
          <button
            onClick={() => goTo("courses")}
            className="hidden rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white shadow-md shadow-red-700/20 transition hover:bg-red-800 sm:block"
          >
            Kursni tanlash
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen((value) => !value)}
            className="rounded-xl border border-slate-200 p-3 text-slate-800 lg:hidden"
            aria-expanded={open}
            aria-label="Mobil menyu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="mobile-menu-enter max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-5 shadow-2xl lg:hidden">
          {/* Telegram AI Bot in Mobile */}
          <a
            href={siteContacts.telegramAiBot}
            target="_blank"
            rel="noreferrer"
            className="mb-3 flex items-center justify-between rounded-2xl border border-indigo-500/40 bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 p-4 text-white shadow-lg shadow-indigo-950/20"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <strong className="block text-sm font-black text-cyan-300">TELEGRAM AI BOT</strong>
                  <span className="rounded bg-cyan-400/20 px-1 py-0.2 text-[9px] font-bold text-cyan-200">24/7</span>
                </div>
                <span className="text-xs text-slate-300 block">Tariflar ma’lumoti va hisoblar xaridi</span>
                <span className="text-[10px] text-cyan-400 font-mono">@xorazmforexadminAI_bot</span>
              </div>
            </div>
            <span className="rounded-lg bg-cyan-400 px-2.5 py-1 text-[11px] font-black text-slate-950">
              O‘tish →
            </span>
          </a>

          {/* Quick Lead-Magnet in Mobile */}
          <a
            href={siteContacts.telegramChannel}
            target="_blank"
            rel="noreferrer"
            className="mb-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 p-4 text-white shadow-lg shadow-sky-600/20"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Gift className="h-5 w-5" />
              </span>
              <div>
                <strong className="block text-sm font-black">BEPUL DARSLIKLAR</strong>
                <span className="text-xs text-sky-100">Telegram kanalimizda o‘rganing</span>
              </div>
            </div>
            <Send className="h-5 w-5" />
          </a>

          {/* Nav Links */}
          <div className="space-y-1">
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="block w-full rounded-xl px-4 py-3 text-left font-bold text-slate-700 transition hover:bg-red-50 hover:text-red-700"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Phone Numbers block in Mobile */}
          <div className="mt-5 space-y-3 border-t border-slate-200 pt-5">
            <div>
              <p className="px-2 text-[11px] font-black uppercase tracking-wider text-slate-400">
                O‘quv masalalari / Ofis raqamlari
              </p>
              <div className="mt-2 space-y-2">
                {siteContacts.officePhones.map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-red-200 hover:bg-red-50"
                  >
                    <span className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 text-red-700" />
                      {phone.number}
                    </span>
                    <span className="text-xs text-slate-500">Ofis</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="px-2 text-[11px] font-black uppercase tracking-wider text-red-700">
                Prop trading hisoblari
              </p>
              <a
                href={`tel:${siteContacts.propManagerPhone.raw}`}
                className="mt-2 flex items-center justify-between rounded-xl border-2 border-red-300 bg-red-50 px-4 py-3.5 text-sm font-black text-red-900 transition hover:bg-red-100"
              >
                <span className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-red-700" />
                  {siteContacts.propManagerPhone.number}
                </span>
                <span className="rounded-full bg-red-700 px-2.5 py-0.5 text-[10px] uppercase text-white font-extrabold">
                  PROP MENEDJER
                </span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={siteContacts.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 p-3 text-sm font-bold text-slate-700 transition hover:bg-pink-50 hover:text-pink-700"
              >
                <Instagram className="h-4 w-4 text-pink-600" />
                <span>Instagram</span>
              </a>
              <a
                href={siteContacts.telegramChannel}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 p-3 text-sm font-bold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
              >
                <Send className="h-4 w-4 text-sky-600" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
