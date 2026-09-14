import { describe, expect, it } from 'vitest';
import { projects } from './portfolio';

describe('portfolio projects', () => {
  it('contains the four approved portfolio cases', () => {
    expect(projects).toHaveLength(4);
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

  it('labels the clinic as demonstrative and custom systems as private', () => {
    expect(
      projects.find((project) => project.title === 'Clínica médica')?.visibility,
    ).toBe('demonstrative');
    expect(
      projects.find((project) => project.title === 'Sistemas sob medida')?.visibility,
    ).toBe('private');
  });
});
