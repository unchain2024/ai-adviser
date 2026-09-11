export const FREE_DOMAINS = [
  "gmail.com",
  "yahoo.co.jp",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "outlook.jp",
  "icloud.com",
  "me.com",
  "mail.com",
  "aol.com",
  "protonmail.com",
  "ymail.com",
];

export function isFreeMail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  return FREE_DOMAINS.includes(domain ?? "");
}

/**
 * Google 予約スケジュール。フォーム送信後の「日程を選ぶ」の遷移先。
 * 30分・オンラインの無料相談枠。
 */
export const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ12BTecGVMzTtjw2TiO0fDHabaesMn9hWUCmu-oVQrB8iouEPv0zo5Ygd2lGnv57sCzOMozsIKZ";
