import { dateToTID } from './tid'
import { describe, expect, test } from 'vitest'

describe('tid', () => {
  const date = new Date('2026-09-10T20:45:00Z')

  test('creates unique TID values', () => {
    const blogTID = dateToTID('blog', date)
    const notesTID = dateToTID('notes', date)
    expect(blogTID.str).not.toBe(notesTID.str)
  })
})
