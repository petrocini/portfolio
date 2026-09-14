import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactButton } from './ContactButton';

describe('ContactButton', () => {
  it('links to WhatsApp when a number is configured', () => {
    render(<ContactButton phoneNumber="+55 (11) 99999-9999" />);

    expect(
      screen
        .getByRole('link', { name: /conversar sobre um projeto/i })
        .getAttribute('href'),
    ).toContain('https://wa.me/5511999999999?text=');
  });

  it('falls back to email without a configured number', () => {
    render(<ContactButton />);

    expect(
      screen.getByRole('link', { name: /falar por e-mail/i }).getAttribute('href'),
    ).toBe('mailto:lucaspetrocinireis@gmail.com');
  });
});
