import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactButton } from './ContactButton';

describe('ContactButton', () => {
  it('links to WhatsApp when a number is configured', () => {
    const { container } = render(<ContactButton phoneNumber="+55 (11) 99999-9999" />);

    expect(container.querySelector('a')?.getAttribute('href')).toContain(
      'https://wa.me/5511999999999?text=',
    );
  });

  it('falls back to email without a configured number', () => {
    const { container } = render(<ContactButton />);

    expect(container.querySelector('a')?.getAttribute('href')).toBe(
      'mailto:lucaspetrocinireis@gmail.com',
    );
  });
});
