import { createStitches } from '@stitches/react'

export const {
  config,
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      WHITE: '#fff',
      GRAY100: '#e1e1e6',
      GRAY300: '#c4c4cc',
      GRAY800: '#202024',
      GRAY900: '#121214',

      GREEN500: '#00875f',
      GREEN300: '#00b37e'
    }
  }
})
