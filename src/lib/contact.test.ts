import { describe, expect, it } from 'vitest';
import { createWhatsAppUrl } from './contact';

describe('createWhatsAppUrl', () => {
  it('opens a Brazilian local number with an initial quote request', () => {
    const url = createWhatsAppUrl('16 991146820');

    expect(url).not.toBeNull();
    const parsed = new URL(url!);
    expect(`${parsed.origin}${parsed.pathname}`).toBe('https://wa.me/5516991146820');
    expect(parsed.searchParams.get('text')).toBe(
      'Olá, Lucas! Encontrei seu portfólio e gostaria de solicitar um orçamento para um projeto.',
    );
  });

  it('removes formatting and encodes the Portuguese introduction', () => {
    expect(createWhatsAppUrl('+55 (11) 99999-9999')).toContain(
      'https://wa.me/5511999999999?text=',
    );
  });

  it('returns null when no phone number is configured', () => {
    expect(createWhatsAppUrl(undefined)).toBeNull();
  });

  it('accepts a message specific to a portfolio case', () => {
    const url = createWhatsAppUrl('16991146820', 'Vi a Clara Nutrição.');
    expect(new URL(url!).searchParams.get('text')).toBe('Vi a Clara Nutrição.');
  });
});
