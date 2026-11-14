"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import { useEffect, useState, type ReactNode } from "react"
import { createPortal } from "react-dom"

export type GalleryItem = {
  src: string
  alt: string
  width: number
  height: number
}

type Props = {
  items: GalleryItem[]
  index: number
  imageClassName: string
  buttonClassName?: string
  overlay?: ReactNode
  priority?: boolean
  fill?: boolean
  sizes?: string
}

export default function GalleryImage({
  items,
  index,
  imageClassName,
  buttonClassName = "",
  overlay,
  priority = false,
  fill = false,
  sizes,
}: Props) {
  const [current, setCurrent] = useState<number | null>(null)
  const item = items[index]

  useEffect(() => {
    if (current === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCurrent(null)
      if (event.key === "ArrowLeft") setCurrent((value) => value === null ? null : (value - 1 + items.length) % items.length)
      if (event.key === "ArrowRight") setCurrent((value) => value === null ? null : (value + 1) % items.length)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [current, items.length])

  const active = current === null ? null : items[current]
  const previous = () => setCurrent((value) => value === null ? null : (value - 1 + items.length) % items.length)
  const next = () => setCurrent((value) => value === null ? null : (value + 1) % items.length)

  return (
    <>
      <button
        type="button"
        onClick={() => setCurrent(index)}
        aria-label={`${item.alt} rasmini kattalashtirish`}
        className={`group/image relative block overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200 ${buttonClassName}`}
      >
        {fill ? (
          <Image src={item.src} alt={item.alt} fill priority={priority} sizes={sizes} className={imageClassName} />
        ) : (
          <Image src={item.src} alt={item.alt} width={item.width} height={item.height} priority={priority} sizes={sizes} className={imageClassName} />
        )}
        <span className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full border border-white/45 bg-white/90 text-slate-900 opacity-0 shadow-lg backdrop-blur transition duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100 group-focus-visible/image:translate-y-0 group-focus-visible/image:opacity-100">
          <Expand className="h-4 w-4" />
        </span>
        {overlay}
      </button>

      {active && createPortal(
        <div
          className="gallery-backdrop fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Rasmlar galereyasi"
          onMouseDown={(event) => event.target === event.currentTarget && setCurrent(null)}
        >
          <button type="button" onClick={() => setCurrent(null)} aria-label="Galereyani yopish" className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white hover:text-slate-950 md:right-7 md:top-7">
            <X className="h-5 w-5" />
          </button>

          {items.length > 1 && (
            <button type="button" onClick={previous} aria-label="Oldingi rasm" className="absolute left-3 z-10 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white hover:text-slate-950 md:left-7">
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          <figure className="gallery-card w-full max-w-6xl">
            <div className="relative mx-auto flex max-h-[82vh] min-h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-black/20">
              <Image src={active.src} alt={active.alt} width={active.width} height={active.height} className="max-h-[82vh] w-auto max-w-full object-contain" />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm text-white/80">
              <span>{active.alt}</span>
              {items.length > 1 && <span className="shrink-0 font-bold text-white">{(current ?? 0) + 1} / {items.length}</span>}
            </figcaption>
          </figure>

          {items.length > 1 && (
            <button type="button" onClick={next} aria-label="Keyingi rasm" className="absolute right-3 z-10 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white hover:text-slate-950 md:right-7">
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>,
        document.body,
      )}
    </>
  )
}
