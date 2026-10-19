import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ClaraLanding } from './ClaraLanding';

describe('Clara Nutrição concept page', () => {
  afterEach(() => vi.unstubAllEnvs());

  it('identifies the fictional case and directs business inquiries to Lucas', () => {
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '16991146820');
    render(<ClaraLanding />);

    expect(screen.getByText('Projeto conceito')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Nutrição que cabe na vida que você tem',
    );
    const inquiry = screen.getByRole('link', {
      name: /quero uma landing page assim/i,
    });
    expect(inquiry.getAttribute('href')).toContain('https://wa.me/5516991146820?text=');
  });
});
