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
  dailyRange?: string
}

export type PropCategory = {
  id: "premium" | "challenge" | "lite"
  label: string
  title: string
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
    id: "premium",
    label: "REAL PREMIUM",
    title: "Imtihonsiz tayyor real hisoblar",
    description: "Darhol savdoni boshlash uchun tayyor hisob. Foyda targeti mavjud emas.",
    rules: ["Maksimal umumiy zarar: 8%", "Pul yechish: 14 kundan keyin", "Foydadan ulush: 80% gacha"],
    accounts: [
      { amount: "$1 000", price: 1_000_000 },
      { amount: "$2 500", price: 1_500_000 },
      { amount: "$5 000", price: 3_000_000 },
      { amount: "$10 000", price: 5_500_000, featured: true },
      { amount: "$25 000", price: 10_500_000, featured: true },
      { amount: "$50 000", price: 20_000_000 },
      { amount: "$75 000", price: 30_000_000 },
      { amount: "$100 000", price: 45_000_000 },
    ],
  },
  {
    id: "challenge",
    label: "IMTIHONLI",
    title: "Imtihon orqali katta kapital",
    description: "Belgilangan target va risk qoidalarini bajarib real prop hisobga o‘ting.",
    rules: ["Kunlik maksimal zarar: 3%", "Umumiy maksimal zarar: 6%", "Foyda targeti: 10%"],
    accounts: [
      { amount: "$5 000", price: 800_000 },
      { amount: "$10 000", price: 1_300_000 },
      { amount: "$15 000", price: 1_800_000 },
      { amount: "$25 000", price: 2_600_000, featured: true },
      { amount: "$50 000", price: 4_500_000, featured: true },
      { amount: "$100 000", price: 7_300_000 },
      { amount: "$200 000", price: 12_500_000 },
      { amount: "$400 000", price: 35_000_000 },
    ],
  },
  {
    id: "lite",
    label: "REAL LITE",
    title: "Qulay narxdagi real hisoblar",
    description: "Kichikroq kapitaldan boshlash va intizomli savdo uchun lite format.",
    rules: ["Kunlik maksimal zarar: 3%", "Umumiy maksimal zarar: 4%", "Pul yechish: 10 kundan keyin"],
    accounts: [
      { amount: "$2 500", price: 500_000, dailyRange: "$15–25" },
      { amount: "$5 000", price: 800_000, dailyRange: "$25–50" },
      { amount: "$10 000", price: 1_700_000, dailyRange: "$50–100", featured: true },
      { amount: "$25 000", price: 3_000_000, dailyRange: "$100–250", featured: true },
      { amount: "$50 000", price: 5_000_000, dailyRange: "$250–500" },
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
  telegramAdmin: "https://t.me/iamvaisov",
  instagram: "https://instagram.com/xorazmforex.uz",
  youtube: "https://youtube.com/@vaisovs",
  address: "Urganch shahri, A. Qodiriy ko‘chasi, 11-uy",
  workHours: "Dushanba–Shanba, 09:00–19:00",
  googleMapsIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1522.2928723424325!2d60.63995473338329!3d41.549629518668034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc91f3161d24d%3A0x8e2c995863977411!2sXORAZM%20FOREX%20-%20TREYDING%20AKADEMIYASI!5e1!3m2!1sen!2sus!4v1794642382135!5m2!1sen!2sus",
}


