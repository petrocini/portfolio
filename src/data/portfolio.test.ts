import { describe, expect, it } from 'vitest';
import { projects } from './portfolio';

describe('portfolio projects', () => {
  it('shows three real or clearly marked portfolio cases', () => {
    expect(projects).toHaveLength(3);
    expect(projects.map((project) => project.title)).toEqual([
      'Caiado FIFA',
      'PDV Fácil',
      'Clara Nutrição',
    ]);
  });

  it('links every case and identifies the fictional one', () => {
    expect(projects.every((project) => Boolean(project.url))).toBe(true);
    expect(
      projects.find((project) => project.title === 'Clara Nutrição'),
    ).toMatchObject({
      visibility: 'concept',
      url: '/clara-nutricao/',
    });
  });

  it('opens the PDV case study inside the portfolio', () => {
    expect(projects.find((project) => project.title === 'PDV Fácil')?.url).toBe(
      '/pdv-facil/',
    );
  });
});
