import { describe, expect, test } from 'vitest'

import { createFont } from '../src'
import { GenericFont } from '../types'

const font: GenericFont = {
  family: 'TestFont',
  size: {
    1: 11,
    2: 12,
    3: 14,
    4: 16,
    5: 20,
    6: 24,
  },
  lineHeight: {
    1: 14,
    2: 16,
    3: 18,
    4: 20,
    5: 24,
    6: 28,
  },
  transform: {
    3: 'uppercase',
    4: 'none',
  },
  weight: {
    1: '400',
    3: '700',
  },
  color: {
    1: '$colorFocus',
    6: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: 0,
    9: -1,
    10: -1.5,
    12: -2,
    14: -3,
    15: -4,
  },
  face: {
    700: { normal: 'InterBold' },
    800: { normal: 'InterBold' },
    900: { normal: 'InterBold' },
  },
}

const expectedProcessedFont: GenericFont = {
  family: 'TestFont',
  size: {
    1: 11,
    2: 12,
    3: 14,
    4: 16,
    5: 20,
    6: 24,
  },
  lineHeight: {
    1: 14,
    2: 16,
    3: 18,
    4: 20,
    5: 24,
    6: 28,
  },
  transform: {
    1: 'uppercase',
    2: 'uppercase',
    3: 'uppercase',
    4: 'none',
    5: 'none',
    6: 'none',
  },
  weight: {
    1: '400',
    2: '400',
    3: '700',
    4: '700',
    5: '700',
    6: '700',
  },
  color: {
    1: '$colorFocus',
    2: '$colorFocus',
    3: '$colorFocus',
    4: '$colorFocus',
    5: '$colorFocus',
    6: '$color',
  },
  letterSpacing: {
    1: 2,
    2: 2,
    3: 2,
    4: 2,
    5: 2,
    6: 1,
    7: 0,
    8: 0,
    9: -1,
    10: -1.5,
    12: -2,
    14: -3,
    15: -4,
  },
  face: {
    100: { normal: 'InterBold' },
    200: { normal: 'InterBold' },
    300: { normal: 'InterBold' },
    400: { normal: 'InterBold' },
    500: { normal: 'InterBold' },
    600: { normal: 'InterBold' },
    700: { normal: 'InterBold' },
    800: { normal: 'InterBold' },
    900: { normal: 'InterBold' },
  },
}

describe('createFont', () => {
  test('should return a font object with normalised property hashes', () => {
    const processedFont = createFont(font)

    expect(processedFont).toStrictEqual(expectedProcessedFont)
  })
})
