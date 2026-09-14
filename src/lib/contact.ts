export const contactMessage =
  'Olá, Lucas! Encontrei seu portfólio e gostaria de conversar sobre um projeto.';

export function createWhatsAppUrl(phoneNumber?: string): string | null {
  const digits = phoneNumber?.replace(/\D/g, '') ?? '';

  return digits
    ? `https://wa.me/${digits}?text=${encodeURIComponent(contactMessage)}`
    : null;
}
