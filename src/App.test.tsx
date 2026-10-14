import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from './App';

describe('portfolio page', () => {
  afterEach(() => vi.unstubAllEnvs());

  it('offers the reference sections with a clear contact action', () => {
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '16991146820');
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Lucas Petrocini',
    );
    expect(screen.getByRole('heading', { name: /soluções & projetos/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /stack e ferramentas/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /onde já atuei/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeTruthy();
    const quoteLink = screen.getByRole('link', { name: /solicitar orçamento/i });
    expect(quoteLink.getAttribute('href')).toContain(
      'https://wa.me/5516991146820?text=',
    );
  });
});
