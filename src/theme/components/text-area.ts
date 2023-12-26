import { Text } from './text'

export const TextArea = {
  baseStyle: {
    ...Text.baseStyle,
    pl: 4,
    pt: 0,
    pr: 0,
    pb: 4,
    _disabled: {
      color: 'primaryDark.60',
    },
  },
  defaultProps: {
    variant: 'unstyled',
  },
}
