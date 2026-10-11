import { describe, expect, it } from 'vitest'
import { projects, projectCategories } from '@/lib/portfolio'

describe('Portfolio requirements', () => {
  it('shows at least 15 website concepts', () => {
    expect(projects.length).toBeGreaterThanOrEqual(15)
  })
  it('adds at least ten concepts beyond the four original websites', () => {
    expect(projects.filter(p => !['architecture', 'essence', 'trattoria', 'conseil'].includes(p.id)).length).toBeGreaterThanOrEqual(10)
  })
  it('contains populated categories beyond creative and professional', () => {
    const additional = projectCategories.filter(c => c !== 'Sites créatifs' && c !== 'Sites professionnels')
    expect(additional.length).toBeGreaterThan(0)
    for (const category of additional) expect(projects.some(p => p.category === category)).toBe(true)
  })
  it('has a unique detail-page identifier for every concept', () => {
    expect(new Set(projects.map(p => p.id)).size).toBe(projects.length)
  })
})