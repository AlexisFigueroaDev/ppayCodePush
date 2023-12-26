import { Text } from './text'

export const Avatar = {
  baseStyle: {
    backgroundColor: 'primaryDark.20',
    _text: {
      ...Text.variants['heading-sm'],
      color: 'primary.80',
      textTransform: 'uppercase',
      mt: '-1px',
    },
  },
}
