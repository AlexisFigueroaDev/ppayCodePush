import { colors } from '../foundations/colors';
import { hexToRgba } from '../foundations/opacity';

export const Pressable = {
  variants: {
    'in-card': {
      width: 'full',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingY: 4,
      paddingX: 2,
      borderBottomRadius: '4',
      _hover: {
        bg: 'primary.20',
      },
      _pressed: {
        bg: 'primary.20',
      },
    },
    'variable-width-alpha-small': {
      backgroundColor: hexToRgba(colors.primaryDark[0], 'low'),
      alignSelf: 'flex-start',
      paddingX: 3,
      paddingY: 1.5,
      borderRadius: 4,

      _pressed: {
        backgroundColor: hexToRgba(colors.primaryDark[0], 'translucent'),
      },
      _focus: {
        borderWidth: '2px',
        borderColor: 'secondaryFive.40',
      },
    },
    'variable-width-alpha-medium': {
      backgroundColor: hexToRgba(colors.primaryDark[0], 'low'),
      alignSelf: 'flex-start',
      paddingX: 3,
      paddingY: 3,
      borderRadius: 4,

      _pressed: {
        backgroundColor: hexToRgba(colors.primaryDark[0], 'translucent'),
      },
      _focus: {
        borderWidth: '2px',
        borderColor: 'secondaryFive.40',
      },
    },
    'horizontal-button-card': {
      bg: 'white',
      minHeight: '20',
      borderRadius: 4,
      borderColor: 'primaryDark.30',
      borderWidth: 1,
      paddingY: 5,
      paddingX: 3,
      alignItems: 'center',
      justifyContent: 'space-between',
      _disabled: {
        opacity: 0.5,
      },
    },
    'button-card': {
      bg: 'white',
      height: '20',
      width: '20',
      borderRadius: 4,
      borderColor: 'primaryDark.30',
      borderWidth: 1,
      paddingY: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      _disabled: {
        opacity: 0.5,
      },
    },
    'presseable-balance-row': {
      borderBottomRadius: 2,
      paddingLeft: 1,
      paddingRight: 1,
      width: 'full',
      flexDirection: 'row',
      justifyContent: 'space-between',
      _hover: {
        backgroundColor: 'primaryDark.20',
      },
      _pressed: {
        backgroundColor: 'primaryDark.20',
      },
    },
    'value-banner': {
      width: 'full',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingX: 3,
      paddingTop: 4,
      paddingBottom: '3.5',
    },
    'mini-banner': {
      width: 'full',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: hexToRgba(colors.primaryDark[0], 'pure'),
      padding: 2,
      borderRadius: 0.5,
      borderWidth: 1,
      borderColor: hexToRgba(colors.primaryDark[30], 'pure'),
    },
    'mini-banner-level': {
      width: 'full',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 4,
      py: 1,
      px: 2,
      borderWidth: 1,
      borderColor: hexToRgba(colors.primaryDark[60], 'pure'),
    },
    'info-button': {
      alignSelf: 'flex-start',
      borderRadius: 'sm',
      paddingY: 1,
      paddingLeft: 1,
      paddingRight: 3,
      paddingBottom: 1,
      flexDirection: 'row',
      backgroundColor: hexToRgba(colors.primaryDark[0], 'low'),
    },
    toggle: {
      alignSelf: 'flex-start',
      bg: 'white',
      borderColor: 'primary.80',
      color: 'primary.80',
      borderRadius: '2',
      borderWidth: 1,
      _disabled: {
        bg: 'primary.80',
        color: 'white',
        borderColor: 'primary.80',
      },
    },
    'credit-card': {
      backgroundColor: 'primary.80',
      paddingY: 1.5,
      paddingX: 2,
      borderRadius: '2px',
      _hover: {
        backgroundColor: 'primary.100',
      },
      _pressed: {
        backgroundColor: 'primary.100',
      },
      _disabled: {
        opacity: 0.5,
      },
    },
    'tab-bar-icon': {
      height: 'full',
      justifyContent: 'center',
      alignItems: 'center',
      width: 16,
    },
    'tab-bar-qr-icon': {
      width: 12,
      height: 12,
      rounded: 'full',
      bg: 'primary.80',
      justifyContent: 'center',
      alignItems: 'center',
      _pressed: {
        bg: 'primary.100',
      },
    },
  },
};
