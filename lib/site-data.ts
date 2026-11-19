export type Course = {
  id: string
  name: string
  eyebrow: string
  price: number
  duration: string
  format: string
  summary: string
  features: string[]
  featured?: boolean
}

export type PropAccount = {
  amount: string
  price: number
  featured?: boolean
  targetProfit?: string
  targetPercent?: string
  dailyLoss?: string
  totalLoss?: string
  payoutNote?: string
  dailyRange?: string
  badge?: string
}

export type PropCategory = {
  id: "imtihonli" | "imtihonsiz"
  label: string
  title: string
  tagline: string
  description: string
  rules: string[]
  accounts: PropAccount[]
}

export const courses: Course[] = [
  {
    id: "start",
    name: "START",
    eyebrow: "Boshlang‘ich guruh",
    price: 6_000_000,
    duration: "1,5 oy",
    format: "Oflayn guruh",
    summary: "Treydingni mutlaqo 0 dan tizimli o‘rganish uchun asosiy dastur.",
    features: [
      "Bozor va platforma bilan ishlash",
      "Texnik tahlil asoslari",
      "Risk menejment va savdo rejasi",
      "Amaliy mashg‘ulotlar va mentor nazorati",
    ],
  },
  {
    id: "zeta",
    name: "ZETA",
    eyebrow: "To‘liq yechim",
    price: 15_000_000,
    duration: "1,5 oy",
    format: "Oflayn guruh",
    summary: "0 dan ta’lim va savdoni boshlash uchun kerakli vositalar bir paketda.",
    features: [
      "START dasturi va PRO kursidan 5 kunlik modul",
      "$400–500 qiymatdagi savdo robotlari",
      "Kerakli dasturiy ta’minotlar to‘plami",
      "Amaliyot uchun $100 real hisob depoziti",
    ],
    featured: true,
  },
  {
    id: "pro",
    name: "PRO",
    eyebrow: "Premium individual",
    price: 37_000_000,
    duration: "1,5 oy",
    format: "Individual",
    summary: "Katta ustoz bilan yakkama-yakka chuqurlashtirilgan ta’lim.",
    features: [
      "Individual darslar va shaxsiy nazorat",
      "Amaliyot uchun $500 real hisob depoziti",
      "Algotrading va avtomatlashtirish",
      "Ustozning shaxsiy instrumentlari va metodlari",
    ],
  },
  {
    id: "online-group",
    name: "ONLAYN GURUH",
    eyebrow: "Musofirdagilar uchun",
    price: 3_000_000,
    duration: "1 oy",
    format: "Telegram LIVE",
    summary: "Joylashuvingizdan qat’i nazar, 0 dan jonli guruh darslari.",
    features: [
      "Telegram guruhida jonli LIVE darslar",
      "0 dan boshlab tushunarli dastur",
      "Savol-javob va amaliy topshiriqlar",
      "Dars materiallaridan doimiy foydalanish",
    ],
  },
  {
    id: "online-individual",
    name: "ONLAYN INDIVIDUAL",
    eyebrow: "Sardorbek Vaisov bilan",
    price: 10_000_000,
    duration: "25–30 dars",
    format: "Yakkama-yakka LIVE",
    summary: "Shaxsiy jadval va maqsadingizga mos individual onlayn ta’lim.",
    features: [
      "Sardorbek Vaisov bilan jonli darslar",
      "Shaxsiy savdo rejasini ishlab chiqish",
      "Uy vazifalari va individual tahlil",
      "Natijaga qarab moslashtiriladigan dastur",
    ],
  },
]

export const propCategories: PropCategory[] = [
  {
    id: "imtihonli",
    label: "IMTIHONLI PROP",
    title: "IMTIHONli PROP hisoblar",
    tagline: "O‘Z MAHORATINGIZNI KOMPANIYA PULLARIDA KO‘RSATING VA DAROMAD OLING!",
    description: "Kompaniya mablag‘ida savdo qiling. 9% profit bajargach real hisobga o‘tasiz va birinchi payoutda to‘lov to‘liq qaytariladi!",
    rules: [
      "Target (9%): Imtihondan o‘tish uchun 9% daromad",
      "100% Refund: Birinchi payoutda prop puli qaytariladi",
      "Pul yechish: Real hisobda 14 kundan keyin",
      "Kunlik zarar: 4% max | Umumiy zarar: 6% max",
    ],
    accounts: [
      {
        amount: "$12 500",
        price: 1_300_000,
        targetProfit: "$1 125",
        targetPercent: "9%",
        dailyLoss: "4% ($500)",
        totalLoss: "6% ($750)",
        payoutNote: "14 kunda / to‘lov qaytadi",
      },
      {
        amount: "$25 000",
        price: 2_500_000,
        targetProfit: "$2 250",
        targetPercent: "9%",
        dailyLoss: "4% ($1 000)",
        totalLoss: "6% ($1 500)",
        featured: true,
        badge: "Ommabop",
        payoutNote: "14 kunda / to‘lov qaytadi",
      },
      {
        amount: "$50 000",
        price: 4_800_000,
        targetProfit: "$4 500",
        targetPercent: "9%",
        dailyLoss: "4% ($2 000)",
        totalLoss: "6% ($3 000)",
        featured: true,
        badge: "Tavsiya",
        payoutNote: "14 kunda / to‘lov qaytadi",
      },
      {
        amount: "$100 000",
        price: 8_200_000,
        targetProfit: "$9 000",
        targetPercent: "9%",
        dailyLoss: "4% ($4 000)",
        totalLoss: "6% ($6 000)",
        payoutNote: "14 kunda / to‘lov qaytadi",
      },
      {
        amount: "$200 000",
        price: 14_000_000,
        targetProfit: "$18 000",
        targetPercent: "9%",
        dailyLoss: "4% ($8 000)",
        totalLoss: "6% ($12 000)",
        badge: "VIP Kapital",
        payoutNote: "14 kunda / to‘lov qaytadi",
      },
    ],
  },
  {
    id: "imtihonsiz",
    label: "REAL IMTIHONSIZ",
    title: "REAL IMTIHONsiz hisoblar",
    tagline: "Darhol real hisob bilan savdo qiling va daromad oling!",
    description: "Hech qanday imtihon va sinovlarsiz, xarid qilgan kuningizdan darhol real kapitalda savdoni boshlang!",
    rules: [
      "1-pul yechish: 21 kundan keyin",
      "Keyingi yechishlar: Har 14 kunda muntazam",
      "Imtihonsiz: To‘g‘ridan-to‘g‘ri real savdo",
      "Cheklanmagan: Cheksiz payoutlar",
      "Kunlik minus: 3% max | Umumiy minus: 6% max",
    ],
    accounts: [
      {
        amount: "$10 000",
        price: 4_400_000,
        dailyLoss: "3% ($300)",
        totalLoss: "6% ($600)",
        payoutNote: "21 kun / har 14 kunda",
      },
      {
        amount: "$25 000",
        price: 9_000_000,
        dailyLoss: "3% ($750)",
        totalLoss: "6% ($1 500)",
        featured: true,
        badge: "Ommabop",
        payoutNote: "21 kun / har 14 kunda",
      },
      {
        amount: "$50 000",
        price: 15_000_000,
        dailyLoss: "3% ($1 500)",
        totalLoss: "6% ($3 000)",
        featured: true,
        badge: "Tavsiya",
        payoutNote: "21 kun / har 14 kunda",
      },
      {
        amount: "$100 000",
        price: 28_000_000,
        dailyLoss: "3% ($3 000)",
        totalLoss: "6% ($6 000)",
        badge: "VIP Kapital",
        payoutNote: "21 kun / har 14 kunda",
      },
    ],
  },
]

export const formatPrice = (value: number) =>
  `${String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so‘m`

export const siteContacts = {
  officePhones: [
    { number: "+998 97 560 06 00", raw: "+998975600600", label: "Ofis / O‘quv masalalari" },
    { number: "+998 55 601 29 18", raw: "+998556012918", label: "Ofis / O‘quv masalalari" },
  ],
  propManagerPhone: {
    number: "+998 87 460 06 00",
    raw: "+998874600600",
    label: "PROP MENEDJER",
    note: "Prop hisoblar va kapital masalalari",
  },
  telegramChannel: "https://t.me/thexorazmforex",
  telegramAdmin: "https://t.me/xfprop",
  instagram: "https://instagram.com/xorazmforex.uz",
  youtube: "https://youtube.com/@vaisovs",
  address: "Urganch shahri, A. Qodiriy ko‘chasi, 11-uy",
  workHours: "Dushanba–Shanba, 09:00–19:00",
  googleMapsIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1522.2928723424325!2d60.63995473338329!3d41.549629518668034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc91f3161d24d%3A0x8e2c995863977411!2sXORAZM%20FOREX%20-%20TREYDING%20AKADEMIYASI!5e1!3m2!1sen!2sus!4v1794642382135!5m2!1sen!2sus",
}


