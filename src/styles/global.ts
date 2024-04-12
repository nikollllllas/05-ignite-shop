import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$GRAY900',
    color: '$GRAY100'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})
