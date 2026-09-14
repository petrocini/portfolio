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
        Falar por e-mail
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
      Conversar sobre um projeto <span aria-hidden="true">↗</span>
    </a>
  );
}
