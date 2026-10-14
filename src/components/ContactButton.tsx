import { createWhatsAppUrl } from '../lib/contact';

type ContactButtonProps = {
  phoneNumber?: string;
  className?: string;
};

export function ContactButton({ phoneNumber, className = '' }: ContactButtonProps) {
  const url = createWhatsAppUrl(phoneNumber);

  if (!url) {
    return (
      <a
        className={`button button-primary ${className}`}
        href="mailto:lucaspetrocinireis@gmail.com"
      >
        Solicitar Orçamento
      </a>
    );
  }

  return (
    <a
      className={`button button-primary ${className}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      Solicitar Orçamento <span aria-hidden="true">↗</span>
    </a>
  );
}
