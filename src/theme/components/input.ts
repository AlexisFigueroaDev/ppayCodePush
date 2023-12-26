import { Text } from './text';
// Reference: https://github.com/GeekyAnts/NativeBase/blob/master/src/theme/components/input.ts

// Input
export const Input = {
  baseStyle: {
    borderWidth: '0',
    bg: 'transparent',
    boxShadow: 'none',
    outlineWidth: 'none',
    p: '0',

    _text: {
      ...Text.variants['heading-xl'],
      color: 'red.600',
    },

    _hover: {
      borderWidth: '0',
      bg: 'transparent',
      boxShadow: 'none',
    },

    _focus: {
      borderWidth: '0',
      bg: 'transparent',
      boxShadow: '5',
      outlineWidth: 'none',

      _stack: {
        style: {
          outlineWidth: '0',
          boxShadow: 'none',
        },
      },
    },

    _disabled: {
      opacity: '0.4',
      disabled: true,
      borderWidth: '0',
      bg: 'red.500',
      boxShadow: 'none',
    },

    _readOnly: {
      borderWidth: '0',
      bg: 'transparent',
      boxShadow: 'none',
    },

    _invalid: {
      borderWidth: '0',
      bg: 'transparent',
      boxShadow: 'none',
      _stack: {
        style: {
          outlineWidth: '0',
          boxShadow: 'none',
        },
      },
      _focus: {
        borderWidth: '0',
        bg: 'transparent',
        boxShadow: 'none',
        outlineWidth: 'none',
        _stack: {
          style: {
            outlineWidth: '0',
            boxShadow: 'none',
          },
        },
      },
    },

    _input: {
      borderWidth: '0',
      boxShadow: 'none',
      ...Text.variants['body-md'],
    },

    _stack: {
      borderWidth: '0',
      bg: 'transparent',
      boxShadow: 'none',
    },

    _web: {
      borderWidth: '0',
      bg: 'transparent',
      boxShadow: 'none',
      p: '0',

      _hover: {
        borderWidth: '0',
        bg: 'transparent',
        boxShadow: 'none',
      },

      _focus: {
        borderWidth: '0',
        bg: 'transparent',
        boxShadow: 'none',
      },

      _disabled: {
        opacity: '0.4',
        disabled: true,
        borderWidth: '0',
        bg: 'primaryDark.20',
        boxShadow: 'none',
      },

      _readOnly: {
        borderWidth: '0',
        bg: 'transparent',
        boxShadow: 'none',
      },

      _invalid: {
        borderWidth: '0',
        bg: 'transparent',
        boxShadow: 'none',
      },

      _input: {
        borderWidth: '0',
        bg: 'transparent',
        boxShadow: 'none',
      },

      _stack: {
        borderWidth: '0',
        bg: 'transparent',
        boxShadow: 'none',
      },
    },
  },
};
