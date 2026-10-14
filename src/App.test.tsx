import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('portfolio page', () => {
  it('offers the reference sections with a clear contact action', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Lucas Petrocini',
    );
    expect(screen.getByRole('heading', { name: /soluções & projetos/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /stack e ferramentas/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /onde já atuei/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeTruthy();
    expect(
      screen.getByRole('link', { name: /solicitar orçamento/i }).getAttribute('href'),
    ).toBe('mailto:lucaspetrocinireis@gmail.com');
  });
});
