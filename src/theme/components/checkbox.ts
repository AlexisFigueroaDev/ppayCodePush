export const Checkbox = {
  baseStyle: {
    _focus: {
        borderColor: 'secondaryFive.40',
    },
    _pressed: {
        borderColor: 'secondaryFive.40',
        bg: 'primary.100',
    },
    _checked: {
        bg: 'primary.80',
        borderColor: 'primary.80',
        color: 'primary.80',
        _pressed: {
            bg: 'primary.100',
        },
    },
    _disabled: {
        bg: 'primaryDark.20',
        _checked: {
            opacity: 1,
            bg: 'primary.40',
            borderColor: 'primary.40',
        }
    },
  },
  defaultProps: {
    borderWidth: 1,
    size: "md",
    borderColor: 'primaryDark.50',
  },
}


