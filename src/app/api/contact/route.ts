import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { company, name, email, plan, industry, employees, message } = body;

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook URL not configured" },
      { status: 500 },
    );
  }

  const embed = {
    title: "新規お問い合わせ",
    color: 0x000000,
    fields: [
      { name: "会社名", value: company || "未入力", inline: true },
      { name: "お名前", value: name || "未入力", inline: true },
      { name: "メールアドレス", value: email || "未入力" },
      { name: "ご検討プラン", value: plan || "未選択", inline: true },
      { name: "業種", value: industry || "未選択", inline: true },
      { name: "従業員数", value: employees || "未選択", inline: true },
      { name: "ご相談内容", value: message || "未入力" },
    ],
    timestamp: new Date().toISOString(),
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ embeds: [embed] }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
