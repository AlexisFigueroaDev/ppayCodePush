export const Radio = {
  baseStyle: {
    _focus: {
        borderColor: 'secondaryFive.40',
        borderWidth: 2,
    },
    _pressed: {
        borderColor: 'secondaryFive.40',
    },
    _checked: {
        borderColor: 'primary.80',
    },
    _disabled: {
        borderColor: 'primaryDark.50',
        _checked: {
            borderColor: 'primary.80',
        }
    },
  },
  defaultProps: {
    borderWidth: 1,
    borderColor: 'primaryDark.50',
    _icon: {
      color: 'primary.80',
    },
  },
}


