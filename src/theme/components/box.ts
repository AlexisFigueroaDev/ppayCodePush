import { EXTRA_LG, SMALL } from '@ui/title/types';

import { ARROW_HEIGHT } from '../../ui/tooltip';
import { colors } from '../foundations/colors';

const repeatedBlanceRowStyles = {
  justifyContent: 'flex-start',
  paddingLeft: 0.5,
};

export const LEVEL_CARD_WIDTH = 214;

export const Box = {
  variants: {
    'large-balance-row': {
      ...repeatedBlanceRowStyles,
      paddingTop: 1,
      marginBottom: 0,
    },
    'small-balance-row': {
      ...repeatedBlanceRowStyles,
      paddingTop: 0.5,
      marginBottom: 1,
    },
    'info-card': {
      padding: 2,
      rounded: 'sm',
      overflow: 'hidden',
      borderColor: 'primaryDark.30',
      borderWidth: 1,
    },
    'headers-large': {
      backgroundColor: 'primary.100',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '140px',
      width: 'full',
      padding: '4',
    },
    'headers-small': {
      backgroundColor: 'primary.100',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px',
      width: 'full',
      padding: '4',
    },
    'card-list': {
      width: 'full',
      borderWidth: '1px',
      borderColor: 'primaryDark.30',
      rounded: '4px',
      backgroundColor: 'white',
    },
    'tab-bar-icon': {
      height: 'full',
      justifyContent: 'center',
      alignItems: 'center',
      width: '16',
    },
    'tab-bar-top-rectangle': {
      height: '0.5',
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
      width: 7,
      position: 'absolute',
      top: -5,
      bg: colors.primary[80],
    },
    'tab-bar-qr-shadow': {
      justifyContent: 'center',
      alignItems: 'center',
      width: '56px',
      height: '56px',
      bg: 'primary.20',
      rounded: 'full',
      marginTop: -3,
    },
    'level-card': {
      width: LEVEL_CARD_WIDTH,
      borderRadius: '4px',
      borderWidth: '1px',
      borderColor: colors.primaryDark[30],
      overflow: 'hidden',
      backgroundColor: colors.backgrounds[0],
    },
    'level-card-full-width': {
      borderRadius: '4px',
      borderWidth: '1px',
      borderColor: colors.primaryDark[30],
      overflow: 'hidden',
      backgroundColor: colors.backgrounds[0],
    },
    'tooltip-arrow': {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 8,
      borderRightWidth: 8,
      borderBottomWidth: ARROW_HEIGHT,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: colors.primaryDark[0],
    },
    'single-row-border': {
      borderColor: 'primaryDark.30',
      borderBottomWidth: 1,
    },
    'navbar-dark': {
      background: 'primary.100',
      justifyContent: 'center',
      alignItems: 'center',
      paddingY: '12px',
      width: '100%',
      space: 4,
    },
    'navbar-light': {
      background: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      paddingY: '12px',
      width: '100%',
      space: 4,
      borderBottomWidth: 1,
      borderBottomColor: 'primaryDark.30',
    },
    'text-area': {
      borderColor: 'primaryDark.40',
      borderWidth: 2,
      borderRadius: 4,
      h: 112,
      pt: 2,
      pr: 2,
      pb: 2,
    },
    [SMALL]: {
      paddingTop: 6,
      paddingLeft: 4,
      paddingRight: 6,
      paddingBottom: 3,
    },
    [EXTRA_LG]: {
      paddingTop: 6,
      paddingLeft: 4,
      paddingRight: 6,
      paddingBottom: 6,
    },
  },
};
