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
