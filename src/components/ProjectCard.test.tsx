import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  it('shows a real capture and the live site link for Caiado FIFA', () => {
    render(<ProjectCard project={projects[0]} />);

    expect(
      screen.getByRole('img', { name: /site caiado fifa/i }).getAttribute('src'),
    ).toBe('/images/caiado-fifa-site.png');
    expect(
      screen.getByRole('link', { name: /acessar site/i }).getAttribute('href'),
    ).toBe('https://www.caiadofifa.com.br');
  });
});
