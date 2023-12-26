const labelRepeatStyles = {
  paddingLeft: 1,
  paddingRight: 1,
  paddingTop: 0.5,
  paddingBottom: 0.5,
}

const tagRepeatedStyles = {
  paddingLeft: 4,
  paddingRight: 1,
  borderTopRightRadius: '2px',
  borderBottomRightRadius: '2px',
  paddingTop: 1,
  paddingBottom: 1,
}

export const Badge = {
  defaultProps: {
    alignSelf: 'baseline',
  },
  variants: {
    'info-label': {
      ...labelRepeatStyles,
      bg: 'secondaryFive.80',
    },
    'danger-label': {
      ...labelRepeatStyles,
      bg: 'secondaryFour.80',
    },
    'news-label': {
      ...labelRepeatStyles,
      bg: 'secondaryTwo.80',
    },
    'news-button-label': {
      ...labelRepeatStyles,
      bg: 'secondaryTwo.80',
      borderTopLeftRadius: '2px',
      borderBottomRightRadius: '2px',
      position: 'absolute',
      top: 0,
      zIndex: 1,
    },
    'news-darker-label': {
      ...labelRepeatStyles,
      bg: 'secondaryTwo.100',
      borderRadius: '2px',
      paddingLeft: 2,
      paddingRight: 2,
    },
    'warning-label': {
      ...labelRepeatStyles,
      bg: 'secondaryThree.80',
    },
    'disabled-label': {
      ...labelRepeatStyles,
      bg: 'primaryDark.30',
      _text: {
        color: 'primaryDark.80',
      },
    },

    'info-tag': {
      ...tagRepeatedStyles,
      bg: 'secondaryFive.80',
    },
    'danger-tag': {
      ...tagRepeatedStyles,
      bg: 'secondaryFour.80',
    },
    'news-tag': {
      ...tagRepeatedStyles,
      bg: 'secondaryTwo.80',
    },
    'warning-tag': {
      ...tagRepeatedStyles,
      bg: 'secondaryThree.80',
    },
    'disabled-tag': {
      ...tagRepeatedStyles,
      bg: 'primaryDark.30',
      _text: {
        color: 'primaryDark.80',
      },
    },
  },
}
