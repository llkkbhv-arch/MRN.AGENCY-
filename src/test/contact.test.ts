import { describe, expect, it } from 'vitest'
import { agency } from '@/lib/agency'

describe('Agency contact', () => {
  it('opens WhatsApp for the requested French number', () => {
    expect(agency.whatsappUrl).toBe('https://wa.me/33640457593')
  })
})