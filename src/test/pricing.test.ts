import { describe, expect, it } from 'vitest'
import { agency } from '@/lib/agency'
import { offers } from '@/lib/portfolio'
describe('Reference offers',()=>{
 it('sets site delivery to 3 days',()=>{expect(agency.deliveryDays).toBe(3)})
 it('sets the accompanied monthly offer to 200 euros',()=>{expect(offers[0].amount).toBe(200);expect(offers[0].frequency).toBe('/ mois')})
 it('sets the one-off offer to 499 euros',()=>{expect(offers[1].amount).toBe(499);expect(offers[1].frequency).toBe('en une fois')})
 it('includes maintenance only in the monthly offer',()=>{expect(offers[0].maintenance).toBe(true);expect(offers[1].maintenance).toBe(false)})
})
