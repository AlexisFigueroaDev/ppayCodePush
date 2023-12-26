import { colors } from '../foundations/colors'
import { hexToRgba } from '../foundations/opacity'

export const IconButton = {
  baseStyle: {
    w: 10,
    h: 10,
    borderRadius: 4,
    bg: hexToRgba(colors.primaryDark[0], 'low'),
    color: 'white',
    _pressed: {
      bg: hexToRgba(colors.primaryDark[0], 'translucent'),
    },
    _web: {
      _focus: {
        borderColor: 'secondaryFive.40',
        borderWidth: '4px',
        borderStyle: 'solid',
        bg: 'primary.90',
      },
      _pressed: {
        borderColor: 'secondaryFive.40',
        borderWidth: '4px',
        borderStyle: 'solid',
        bg: 'primary.90',
      },
    },
  },
  sizes: {
    xl: {
      height: 10,
      width: 10,
      padding: 2.5,
    },
    lg: {
      height: 9,
      width: 9,
      padding: 2,
    },
    md: {
      height: 6,
      width: 6,
      padding: 1,
    },
    sm: {
      height: 4,
      width: 4,
      padding: 0.5,
    },
    xs: {
      height: 3,
      width: 3,
      padding: 0.5,
    },
  },
  variants: {
    'navbar-dark': {
      background: 'primary.100',
      _pressed: {
        background: hexToRgba(colors.primaryDark[0], 'low'),
      },
    },
    'navbar-light': {
      _pressed: {
        background: hexToRgba(colors.primaryDark[90], 'low'),
      },
    },
  },
}
