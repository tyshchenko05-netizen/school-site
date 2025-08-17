import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok:false, error:"Method not allowed" });

  try {
    const data = req.body || {};
    const token = process.env.TG_BOT_TOKEN!;
    const chatId = process.env.TG_CHAT_ID!;
    if (!token || !chatId) return res.status(500).json({ ok:false, error:"Missing TG env vars" });

    const price = data?.pricePerMonth ? `${Number(data.pricePerMonth).toLocaleString("ru-RU")} ₽` : "—";
    const lines = [
      "🆕 Новая заявка",
      `Курс: ${data.course || "—"}`,
      `Возраст: ${data.age || "—"} | Направление: ${data.category || "—"}`,
      `Родитель: ${data.parentName || "—"}`,
      `Телефон: ${data.phone || "—"}`,
      `E-mail: ${data.email || "—"}`,
      `Ребёнок: ${data.childName || "—"}`,
      `Время: ${data.timePref || "—"}`,
      `Второе направление: ${data.secondCourse || "—"}`,
      `Второй ребёнок: ${data.secondChild ? "Да" : "Нет"}`,
      `Цена/мес: ${price}`,
    ].join("\n");

    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines, disable_web_page_preview: true }),
    });

    if (!resp.ok) throw new Error(`Telegram API ${resp.status}`);
    res.status(200).json({ ok:true });
  } catch (e:any) {
    res.status(500).json({ ok:false, error:e.message || "unknown" });
  }
}
