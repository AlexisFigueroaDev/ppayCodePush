const singleRowDefault = {
  direction: 'row',
  justifyContent: 'space-between',
  paddingY: 3,
  width: 'full',
};

const inCardRowDefault = {
  width: 'full',
  flexDirection: 'row',
  alignItems: 'center',
};

export const Flex = {
  variants: {
    'balance-row': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'no-padding-large-single-row': {
      ...singleRowDefault,
      paddingX: 0,
      paddingY: 0,
    },
    'large-single-row': {
      ...singleRowDefault,
      paddingX: 0,
    },
    'medium-single-row': {
      ...singleRowDefault,
      paddingX: 2,
    },
    'small-single-row': {
      ...singleRowDefault,
      paddingX: 4,
    },
    'selected-row': {
      ...inCardRowDefault,
    },
    'double-line-row': {
      width: 'full',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    'tab-bar': {
      borderTopColor: 'primaryDark.30',
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxHeight: '60px',
      paddingY: 1,
      bg: 'primaryDark.0',
    },
    'in-card-row': {
      ...inCardRowDefault,
      paddingY: 0.5,
    },
    'in-card-row-no-desc': {
      ...inCardRowDefault,
      paddingY: 0.5,
    },
    'tooltip-popover': {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingY: 2,
      paddingLeft: 4,
      paddingRight: 2,
      borderRadius: 4,
      backgroundColor: 'primaryDark.0',
      position: 'absolute',
    },
    'accordion-in-card': {
      py: 4,
      px: 4,
    },
    'accordion-in-card-content': {
      pl: 4,
      pb: 4,
      pt: 2,
    },
    'accordion-standard-content': {
      pl: 8,
      pr: 4,
    },
  },
};
