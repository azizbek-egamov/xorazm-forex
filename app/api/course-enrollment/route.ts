import { type NextRequest, NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8105645545:AAEQzQv7sgGiM8cq9wc_mg6I5h2ubuzBCmQ"
const TELEGRAM_CHAT_ID = "-1002590393047"

async function validateAndProcessImage(file: File): Promise<File> {
  // Check file type
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
  if (!allowedTypes.includes(file.type)) {
    throw new Error("Faqat JPEG, PNG yoki WebP formatdagi rasmlar qabul qilinadi")
  }

  // Check file size (max 10MB for Telegram)
  const maxSize = 10 * 1024 * 1024 // 10MB
  if (file.size > maxSize) {
    throw new Error("Rasm hajmi 10MB dan oshmasligi kerak")
  }

  // Check minimum file size (avoid empty files)
  if (file.size < 1024) {
    // 1KB minimum
    throw new Error("Rasm fayli juda kichik")
  }

  return file
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const courseName = formData.get("courseName") as string
    const coursePrice = formData.get("coursePrice") as string
    const fullName = formData.get("fullName") as string
    const phone = formData.get("phone") as string
    const receiptImage = formData.get("receiptImage") as File

    // Validate required fields
    if (!courseName || !coursePrice || !fullName || !phone || !receiptImage) {
      return NextResponse.json({ error: "Barcha maydonlar to'ldirilishi shart" }, { status: 400 })
    }

    try {
      await validateAndProcessImage(receiptImage)
    } catch (imageError) {
      return NextResponse.json({ error: imageError.message }, { status: 400 })
    }

    // Format message for Telegram
    const telegramMessage = `
🎓 *YANGI KURS YOZILISHI* 🎓

👤 *Ism:* ${fullName}
📞 *Telefon:* ${phone}
📚 *Kurs:* ${courseName}
💰 *Narx:* ${coursePrice}

📅 *Vaqt:* ${new Date().toLocaleString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

🎯 *Manbaa:* Xorazm Forex sayti
💳 *To'lov cheki:* Quyida
    `.trim()

    // First send the text message
    const textResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    })

    if (!textResponse.ok) {
      const errorData = await textResponse.json()
      console.error("Telegram Text API Error:", errorData)
      throw new Error("Telegram xabar yuborishda xatolik")
    }

    const imageFormData = new FormData()
    imageFormData.append("chat_id", TELEGRAM_CHAT_ID)
    imageFormData.append("photo", receiptImage, receiptImage.name)
    imageFormData.append("caption", `💳 ${fullName} - ${courseName} kursi uchun to'lov cheki`)

    const imageResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
      method: "POST",
      body: imageFormData,
    })

    if (!imageResponse.ok) {
      const errorData = await imageResponse.json()
      console.error("Telegram Image API Error:", errorData)

      if (errorData.error_code === 400) {
        if (errorData.description?.includes("PHOTO_INVALID_DIMENSIONS")) {
          throw new Error("Rasm o'lchami noto'g'ri. Iltimos, boshqa rasm yuklang.")
        } else if (errorData.description?.includes("PHOTO_INVALID")) {
          throw new Error("Rasm fayli buzilgan. Iltimos, boshqa rasm tanlang.")
        }
      }
      throw new Error("Telegram rasm yuborishda xatolik")
    }

    return NextResponse.json({
      success: true,
      message: "Kursga yozilish so'rovi muvaffaqiyatli yuborildi!",
    })
  } catch (error) {
    console.error("Course enrollment error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Kursga yozilishda xatolik yuz berdi",
      },
      { status: 500 },
    )
  }
}
