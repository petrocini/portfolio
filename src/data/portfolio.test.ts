import { describe, expect, it } from 'vitest';
import { projects } from './portfolio';

describe('portfolio projects', () => {
  it('shows three real or clearly marked portfolio cases', () => {
    expect(projects).toHaveLength(3);
    expect(projects.map((project) => project.title)).toEqual([
      'Caiado FIFA',
      'PDV Fácil',
      'Sistemas sob medida',
    ]);
  });

  it('links only public cases', () => {
    const publicProjects = projects.filter(
      (project) => project.visibility === 'public',
    );
    const nonPublicProjects = projects.filter(
      (project) => project.visibility !== 'public',
    );

    expect(publicProjects).toHaveLength(2);
    expect(publicProjects.every((project) => Boolean(project.url))).toBe(true);
    expect(nonPublicProjects.every((project) => !project.url)).toBe(true);
  });

  it('labels custom systems as private', () => {
    expect(
      projects.find((project) => project.title === 'Sistemas sob medida')?.visibility,
    ).toBe('private');
  });

  it('opens the PDV case study inside the portfolio', () => {
    expect(projects.find((project) => project.title === 'PDV Fácil')?.url).toBe(
      '/pdv-facil/',
    );
  });
});
