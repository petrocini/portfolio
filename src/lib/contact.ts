export const contactMessage =
  'Olá, Lucas! Encontrei seu portfólio e gostaria de solicitar um orçamento para um projeto.';

export function createWhatsAppUrl(
  phoneNumber?: string,
  message = contactMessage,
): string | null {
  const digits = phoneNumber?.replace(/\D/g, '') ?? '';
  const internationalNumber =
    digits.length === 10 || digits.length === 11 ? `55${digits}` : digits;

  return internationalNumber
    ? `https://wa.me/${internationalNumber}?text=${encodeURIComponent(message)}`
    : null;
}
