"use client"

import { useState } from "react"
import { Gift, Instagram, MessageCircle, Phone, Send, X } from "lucide-react"
import { siteContacts } from "@/lib/site-data"

export default function FloatingLeadBar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Contacts Menu */}
      {expanded && (
        <div className="mb-1 flex w-72 flex-col gap-2 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-black uppercase tracking-wider text-red-700">Tezkor aloqa</span>
            <button
              onClick={() => setExpanded(false)}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label="Yopish"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Telegram Free Courses */}
          <a
            href={siteContacts.telegramChannel}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 p-3 text-white transition hover:brightness-105"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <Gift className="h-5 w-5 text-amber-300" />
            </span>
            <div className="text-left">
              <strong className="block text-xs font-black">BEPUL DARSLIKLAR</strong>
              <span className="text-[11px] text-sky-100">Telegram kanalimizda</span>
            </div>
          </a>

          {/* Office Phone */}
          <a
            href={`tel:${siteContacts.officePhones[0].raw}`}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs font-bold text-slate-800 transition hover:bg-red-50 hover:text-red-700"
          >
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-red-700" />
              {siteContacts.officePhones[0].number}
            </span>
            <span className="text-[10px] text-slate-400">Ofis</span>
          </a>

          {/* Prop Manager */}
          <a
            href={`tel:${siteContacts.propManagerPhone.raw}`}
            className="flex items-center justify-between rounded-xl border border-red-200 bg-red-50/70 p-2.5 text-xs font-black text-red-900 transition hover:bg-red-100"
          >
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-red-700" />
              {siteContacts.propManagerPhone.number}
            </span>
            <span className="text-[9px] uppercase font-extrabold text-red-700">Prop Menedjer</span>
          </a>

          {/* Instagram */}
          <a
            href={siteContacts.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-100 p-2 text-xs font-bold text-slate-700 transition hover:bg-pink-50 hover:text-pink-700"
          >
            <Instagram className="h-4 w-4 text-pink-600" />
            <span>Instagram: @xorazmforex.uz</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Buttons */}
      <div className="flex items-center gap-2">
        {/* Free Lesson Direct Button */}
        <a
          href={siteContacts.telegramChannel}
          target="_blank"
          rel="noreferrer"
          className="group hidden items-center gap-2.5 rounded-full border-2 border-sky-400 bg-gradient-to-r from-sky-500 to-sky-600 py-2.5 pl-3.5 pr-4 text-xs font-black text-white shadow-xl shadow-sky-500/30 transition duration-300 hover:scale-105 sm:inline-flex"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-300"></span>
          </span>
          <Gift className="h-4 w-4 text-amber-300 transition group-hover:rotate-12" />
          <span>BEPUL DARSLIKLAR</span>
        </a>

        {/* Quick Menu Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-700 text-white shadow-2xl shadow-red-700/40 transition duration-300 hover:scale-110 hover:bg-red-800"
          aria-label="Tezkor aloqa"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-amber-400 text-[9px] font-black text-slate-950 items-center justify-center">!</span>
          </span>
          {expanded ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </div>
  )
}

