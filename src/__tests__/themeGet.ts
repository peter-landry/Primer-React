import {themeGet} from '..'

describe('themeGet', () => {
  it('acccepts theme prop', () => {
    expect(themeGet('example')({theme: {example: 'test'}})).toBe('test')
  })

  it('allows theme prop to override primer theme', () => {
    expect(themeGet('colors.gray.0')({theme: {colors: {gray: ['#f00']}}})).toBe('#f00')
  })

  it('uses primer theme as fallback', () => {
    expect(themeGet('colors.text.primary')({})).toBe('#24292e')
    expect(themeGet('colors.text.primary')({theme: {colors: {foo: 'bar'}}})).toBe('#24292e')
  })
})
