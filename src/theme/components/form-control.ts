import { Text } from './text';

// FormControl
export const FormControl = {
  baseStyle: {
    width: '100%',
    borderWidth: '0',
    bg: 'primaryDark.0',
    boxShadow: 'none',
  },
};

// FormControlErrorMessage
export const FormControlErrorMessage = {
  baseStyle: () => ({
    px: 4,
    _text: Text.variants['bodySemi-sm'],
    _stack: {
      space: 1,
      alignItems: 'center',
    },
  }),
};

// FormControlLabel
export const FormControlLabel = {
  baseStyle: () => ({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    _text: Text.variants['bodySemi-sm'],
    _astrick: {
      color: 'secondaryFour.80',
    },
  }),
};

// FormControlHelperText
export const FormControlHelperText = {
  baseStyle: () => ({
    px: 4,
    borderWidth: '0',
    bg: 'primaryDark.0',
    boxShadow: 'none',
    _text: Text.variants['bodySemi-sm'],
  }),
};
