import { Text } from './text';
import {
  BODYBOLD_LG,
  BODYBOLD_MD,
  BODYBOLD_SM,
  BODYBOLD_XS,
  FONT_MULTIPLIER,
} from '../../ui/text/types';

export const Button = {
  baseStyle: {
    _text: {
      color: 'primaryDark.0',
      selectable: false,
      maxFontSizeMultiplier: FONT_MULTIPLIER.max,
      minimumFontScale: FONT_MULTIPLIER.min,
    },
    _loading: {
      _spinner: {
        color: 'white',
        position: 'absolute',
        left: 0,
        right: 0,
      },
      _text: {
        color: 'primary.80',
      },
    },
  },
  sizes: {
    lg: {
      py: 3,
      paddingLeft: 4,
      paddingRight: 4,
      _text: Text.variants[BODYBOLD_LG],
      _icon: {
        size: 24,
      },
    },
    md: {
      py: 2.5,
      paddingLeft: 3,
      paddingRight: 3,
      _text: Text.variants[BODYBOLD_MD],
      _icon: {
        size: 20,
      },
    },
    sm: {
      py: 2,
      paddingLeft: 2.5,
      paddingRight: 2.5,
      _text: Text.variants[BODYBOLD_SM],
      _icon: {
        size: 16,
      },
    },
    fb: {
      padding: 3,
      _text: Text.variants[BODYBOLD_XS],
    },
  },
  defaultProps: {
    variant: 'primary',
    colorScheme: 'primary',
    size: 'md',
  },
  variants: {
    primary: {
      bg: 'primary.80',
      _icon: {
        color: 'white',
      },
      _hover: {
        bg: 'primary.100',
      },
      _pressed: {
        bg: 'secondaryFive.100',
      },
      _disabled: {
        opacity: 1,
        bg: 'primaryDark.20',
        _text: {
          color: 'primaryDark.60',
        },
      },
    },
    'primary-disabled': {
      opacity: 1,
      bg: 'primaryDark.20',
      _text: {
        color: 'primaryDark.60',
      },
      _icon: {
        color: 'disabled',
      },
    },
    secondary: {
      bg: 'transparent',
      borderWidth: 2,
      borderColor: 'primary.80',
      _icon: {
        color: 'primary',
      },
      _text: {
        color: 'primary.80',
        marginTop: '-0.5',
      },
      _hover: {
        borderColor: 'primary.100',
        _text: {
          color: 'primary.100',
        },
      },
      _pressed: {
        borderColor: 'secondaryFive.100',
        _text: {
          color: 'secondaryFive.100',
        },
        _icon: {
          color: 'red.100',
        },
      },
      _disabled: {
        opacity: 1,
        borderColor: 'primaryDark.40',
        _text: {
          color: 'primaryDark.60',
        },
      },
    },
    'secondary-disabled': {
      opacity: 1,
      borderWidth: '2px',
      borderColor: 'primaryDark.40',
      _text: {
        color: 'primaryDark.60',
        marginTop: '-0.5',
      },
      _icon: {
        color: 'disabled',
      },
    },
    tertiary: {
      bg: 'transparent',
      border: 'none',
      _text: {
        color: 'primary.80',
      },
      _hover: {
        bg: 'primary.20',
      },
      _pressed: {
        bg: 'primary.20',
      },
      _disabled: {
        opacity: 1,
        borderColor: 'primaryDark.40',
        _text: {
          color: 'primaryDark.60',
        },
      },
    },
    'tertiary-disabled': {
      opacity: 1,
      borderColor: 'primaryDark.40',
      _text: {
        color: 'primaryDark.60',
      },
      _icon: {
        color: 'disabled',
      },
    },
    danger: {
      bg: 'secondaryFour.80',
      _hover: {
        bg: 'secondaryFour.60',
      },
      _pressed: {
        bg: 'secondaryFour.100',
        _icon: {
          color: 'white',
        },
      },
      _icon: {
        color: 'white',
      },
      _disabled: {
        opacity: 1,
        bg: 'primaryDark.40',
        _text: {
          color: 'primaryDark.60',
        },
      },
    },

    'fixed-box': {
      backgroundColor: 'primary.20',
      _text: {
        color: 'primary.100',
        textAlign: 'center',
      },
      _hover: {
        backgroundColor: 'primary.40',
      },
      _pressed: {
        backgroundColor: 'primary.40',
      },
      _disabled: {
        opacity: 0.5,
      },
    },

    'danger-disabled': {
      opacity: 1,
      bg: 'primaryDark.20',
      _text: {
        color: 'primaryDark.60',
      },
      _icon: {
        color: 'disabled',
      },
    },
  },
};
