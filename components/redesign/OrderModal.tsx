"use client"

import { useEffect, useMemo, useState, type FormEvent } from "react"
import { Building2, Check, Copy, CreditCard, Loader2, Phone, Upload, X } from "lucide-react"
import { formatPrice, siteContacts } from "@/lib/site-data"

export type OrderProduct = {
  kind: "course" | "prop"
  title: string
  subtitle?: string
  price: number
  serviceFee?: number
}

type Props = {
  product: OrderProduct | null
  onClose: () => void
}

const cards = {
  uzcard: { label: "UzCard", number: "5614 6835 1622 0100", holder: "Vaisova M" },
  visa: { label: "Visa", number: "4916 9903 2213 1886", holder: "Xxx" },
} as const

export default function OrderModal({ product, onClose }: Props) {
  const [step, setStep] = useState<"details" | "payment" | "success">("details")
  const [method, setMethod] = useState<"online" | "cash">("online")
  const [card, setCard] = useState<keyof typeof cards>("uzcard")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [visitTime, setVisitTime] = useState("")
  const [receipt, setReceipt] = useState<File | null>(null)
  const [accepted, setAccepted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const total = useMemo(() => (product ? product.price + (product.serviceFee ?? 0) : 0), [product])

  useEffect(() => {
    if (!product) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose()
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [product, onClose])

  useEffect(() => {
    if (!product) {
      setStep("details")
      setMethod("online")
      setName("")
      setPhone("")
      setVisitTime("")
      setReceipt(null)
      setAccepted(false)
      setError("")
    }
  }, [product])

  if (!product) return null

  const copyCard = async () => {
    await navigator.clipboard.writeText(cards[card].number.replaceAll(" ", ""))
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const submitCashOrder = async () => {
    const response = await fetch("/api/send-telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        message: `Kurs: ${product.title}\nNarx: ${formatPrice(product.price)}\nTo'lov: markazda naqd\nTashrif vaqti: ${visitTime || "Operator bilan kelishiladi"}`,
      }),
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.error || "Arizani yuborib bo‘lmadi")
  }

  const submitOnlineOrder = async () => {
    if (!receipt) throw new Error("To‘lov chekini yuklang")
    const body = new FormData()
    body.append("courseName", `${product.kind === "prop" ? "PROP" : "KURS"}: ${product.title}${product.subtitle ? ` — ${product.subtitle}` : ""}`)
    body.append("coursePrice", `${formatPrice(total)} (${cards[card].label})`)
    body.append("fullName", name)
    body.append("phone", phone)
    body.append("receiptImage", receipt)
    const response = await fetch("/api/course-enrollment", { method: "POST", body })
    const data = await response.json()
    if (!response.ok) throw new Error(data.error || "To‘lovni tasdiqlab bo‘lmadi")
  }

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    if (!name.trim() || !phone.trim() || !accepted) return
    setLoading(true)
    setError("")
    try {
      if (method === "cash") await submitCashOrder()
      else await submitOnlineOrder()
      setStep("success")
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Xatolik yuz berdi")
    } finally {
      setLoading(false)
    }
  }

  const chooseReceipt = (file?: File) => {
    setError("")
    if (!file) return
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Faqat JPG, PNG yoki WebP rasm yuklang")
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("Rasm hajmi 10 MB dan oshmasligi kerak")
      return
    }
    setReceipt(file)
  }

  return (
    <div className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="order-title" className="modal-card max-h-[94vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur md:px-7">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-red-700">Buyurtmani rasmiylashtirish</p>
            <h2 id="order-title" className="text-xl font-black text-slate-950 md:text-2xl">{product.title}</h2>
            {product.subtitle && <p className="mt-1 text-sm text-slate-500">{product.subtitle}</p>}
          </div>
          <button onClick={onClose} aria-label="Oynani yopish" className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {step === "success" ? (
          <div className="px-6 py-12 text-center md:px-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-950">Arizangiz qabul qilindi!</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">
              Operatorimiz ma’lumotlarni tekshirib, tez orada siz bilan bog‘lanadi.
            </p>
            <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
              <p className="font-bold">Tezkor aloqa:</p>
              <p className="mt-1">
                {product.kind === "prop" ? (
                  <>
                    PROP MENEDJER:{" "}
                    <a href={`tel:${siteContacts.propManagerPhone.raw}`} className="font-black text-red-700 underline">
                      {siteContacts.propManagerPhone.number}
                    </a>
                  </>
                ) : (
                  <>
                    Ofis:{" "}
                    <a href={`tel:${siteContacts.officePhones[0].raw}`} className="font-black text-red-700 underline">
                      {siteContacts.officePhones[0].number}
                    </a>
                  </>
                )}
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-red-700 px-8 py-3 font-bold text-white transition hover:bg-red-800"
            >
              Yopish
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-6 p-5 md:p-7">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-slate-950">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-slate-600">Mahsulot narxi</span>
                <strong className="text-lg">{formatPrice(product.price)}</strong>
              </div>
              {!!product.serviceFee && <div className="mt-2 flex items-center justify-between gap-4 text-sm"><span className="text-slate-600">Onlayn xizmat haqi</span><span>{formatPrice(product.serviceFee)}</span></div>}
              {!!product.serviceFee && <div className="mt-4 flex items-center justify-between border-t border-red-200 pt-4"><span className="font-semibold">Jami</span><strong className="text-xl text-red-700">{formatPrice(total)}</strong></div>}
            </div>

            {step === "details" && (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-bold text-slate-700">Ism va familiya<input value={name} onChange={(event) => setName(event.target.value)} required className="w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-red-600 focus:ring-4 focus:ring-red-100" placeholder="To‘liq ismingiz" /></label>
                  <label className="space-y-2 text-sm font-bold text-slate-700">Telefon raqam<input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required className="w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-red-600 focus:ring-4 focus:ring-red-100" placeholder="+998 90 123 45 67" /></label>
                </div>

                {product.kind === "course" && (
                  <div>
                    <p className="mb-3 text-sm font-bold text-slate-700">To‘lov usulini tanlang</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <button type="button" onClick={() => setMethod("online")} className={`rounded-2xl border p-4 text-left transition ${method === "online" ? "border-red-600 bg-red-50 ring-2 ring-red-100" : "border-slate-200 hover:border-slate-400"}`}><CreditCard className="mb-3 h-5 w-5 text-red-700" /><strong className="block text-slate-950">Hozir onlayn to‘layman</strong><span className="mt-1 block text-xs text-slate-500">Karta orqali to‘lov va chek</span></button>
                      <button type="button" onClick={() => setMethod("cash")} className={`rounded-2xl border p-4 text-left transition ${method === "cash" ? "border-red-600 bg-red-50 ring-2 ring-red-100" : "border-slate-200 hover:border-slate-400"}`}><Building2 className="mb-3 h-5 w-5 text-red-700" /><strong className="block text-slate-950">Markazda naqd to‘layman</strong><span className="mt-1 block text-xs text-slate-500">Joyni oldindan band qilish</span></button>
                    </div>
                  </div>
                )}

                {method === "cash" && product.kind === "course" && <label className="block space-y-2 text-sm font-bold text-slate-700">Qulay tashrif vaqti<input value={visitTime} onChange={(event) => setVisitTime(event.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-red-600 focus:ring-4 focus:ring-red-100" placeholder="Masalan: Dushanba, 15:00" /></label>}

                <label className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-600"><input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} className="mt-1 h-4 w-4 accent-red-700" /><span>Ommaviy oferta, shaxsiy ma’lumotlarni qayta ishlash va xizmat shartlariga roziman.</span></label>

                {method === "cash" ? (
                  <button type="submit" disabled={!name || !phone || !accepted || loading} className="flex w-full items-center justify-center rounded-xl bg-red-700 px-5 py-3.5 font-bold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-50">{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Joyni band qilish</button>
                ) : (
                  <button type="button" onClick={() => setStep("payment")} disabled={!name || !phone || !accepted} className="w-full rounded-xl bg-red-700 px-5 py-3.5 font-bold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-50">To‘lovga o‘tish</button>
                )}
              </>
            )}

            {step === "payment" && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  {(Object.keys(cards) as Array<keyof typeof cards>).map((key) => <button type="button" key={key} onClick={() => setCard(key)} className={`rounded-xl border px-4 py-3 font-bold transition ${card === key ? "border-red-600 bg-red-50 text-red-800 ring-2 ring-red-100" : "border-slate-200 text-slate-600"}`}>{cards[key].label}</button>)}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{cards[card].label} karta raqami</p>
                  <div className="mt-3 flex items-center justify-between gap-3"><span className="font-mono text-lg font-black tracking-wider text-slate-950 sm:text-xl">{cards[card].number}</span><button type="button" onClick={copyCard} aria-label="Karta raqamini nusxalash" className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:text-red-700"><Copy className="h-4 w-4" /></button></div>
                  <p className="mt-3 text-sm text-slate-500">Karta egasi: <strong className="text-slate-800">{cards[card].holder}</strong></p>
                  {copied && <p className="mt-2 text-sm font-semibold text-emerald-700">Karta raqami nusxalandi</p>}
                </div>
                <label className="block cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center transition hover:border-red-400 hover:bg-red-50/40">
                  <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => chooseReceipt(event.target.files?.[0])} className="sr-only" />
                  <Upload className="mx-auto h-7 w-7 text-red-700" />
                  <strong className="mt-3 block text-slate-900">{receipt ? receipt.name : "To‘lov chekini yuklang"}</strong>
                  <span className="mt-1 block text-xs text-slate-500">JPG, PNG yoki WebP — 10 MB gacha</span>
                </label>
                {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-800">{error}</p>}
                <div className="grid grid-cols-2 gap-3"><button type="button" onClick={() => setStep("details")} className="rounded-xl border border-slate-300 px-4 py-3 font-bold text-slate-700 transition hover:bg-slate-50">Orqaga</button><button type="submit" disabled={!receipt || loading} className="flex items-center justify-center rounded-xl bg-red-700 px-4 py-3 font-bold text-white transition hover:bg-red-800 disabled:opacity-50">{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Tasdiqlash</button></div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
