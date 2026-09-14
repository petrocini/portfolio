import { describe, expect, it } from 'vitest';
import { createWhatsAppUrl } from './contact';

describe('createWhatsAppUrl', () => {
  it('removes formatting and encodes the Portuguese introduction', () => {
    expect(createWhatsAppUrl('+55 (11) 99999-9999')).toContain(
      'https://wa.me/5511999999999?text=',
    );
  });

  it('returns null when no phone number is configured', () => {
    expect(createWhatsAppUrl(undefined)).toBeNull();
  });
});
