import { type NextRequest, NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8105645545:AAEQzQv7sgGiM8cq9wc_mg6I5h2ubuzBCmQ"
const TELEGRAM_CHAT_ID = "-1002590393047"

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json()

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Barcha maydonlar to'ldirilishi shart" }, { status: 400 })
    }

    // Format message for Telegram
    const telegramMessage = `
🔥 *YANGI MIJOZ MUROJAATI* 🔥

👤 *Ism:* ${name}
📞 *Telefon:* ${phone}
💬 *Xabar:* ${message}

📅 *Vaqt:* ${new Date().toLocaleString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

🎯 *Manbaa:* Xorazm Forex sayti
    `.trim()

    // Send to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
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

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      console.error("Telegram API Error:", errorData)
      throw new Error("Telegram xabar yuborishda xatolik")
    }

    return NextResponse.json({
      success: true,
      message: "Xabar muvaffaqiyatli yuborildi!",
    })
  } catch (error) {
    console.error("Send telegram error:", error)
    return NextResponse.json({ error: "Xabar yuborishda xatolik yuz berdi" }, { status: 500 })
  }
}
