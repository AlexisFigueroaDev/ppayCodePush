import { normalizeFontVariants } from '@theme/utils'

import {
  CAPS_MD,
  HEADING_XL,
  HEADING_LG,
  HEADING_MD,
  HEADING_SM,
  HEADING_XS,
  BODYLIGHT_LG,
  BODYLIGHT_MD,
  BODYLIGHT_SM,
  BODY_LG,
  BODY_MD,
  BODY_SM,
  BODYSEMI_LG,
  BODYSEMI_MD,
  BODYSEMI_SM,
  BODYSEMI_XS,
  BODYSEMI_XXS,
  BODYBOLD_LG,
  BODYBOLD_MD,
  BODYBOLD_SM,
  BODYBOLD_XS,
  BODYBOLD_XXS,
  UNDERLINE_LG,
  UNDERLINE_MD,
  UNDERLINE_SM,
  UNDERLINE_XS,
  UNDERLINE_XXS,
  CENTER_BODY_SM,
  CAPS_XXS,
  CAPS_XS,
  CAPS_LG,
  CAPS_SM,
  BODY_XS,
  BODY_XXS,
  UNDERLINEBOLD_LG,
  UNDERLINEBOLD_MD,
  UNDERLINEBOLD_SM,
  UNDERLINEBOLD_XS,
  UNDERLINEBOLD_XXS,
  FONT_MULTIPLIER,
} from '../../ui/text/types'

const bodyLgFontSize = {
  fontSize: 16,
  lineHeight: 24,
}

const bodyMdFontSize = {
  fontSize: 14,
  lineHeight: 20,
}

const bodySmFontSize = {
  fontSize: 12,
  lineHeight: 16,
}

const bodyXsFontSize = {
  fontSize: 10,
  lineHeight: 14,
}

const bodyXxsFontSize = {
  fontSize: 8,
  lineHeight: 12,
}

const variants = {
  [HEADING_XL]: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 700,
    _web: {
      fontSize: 60,
      lineHeight: 72,
    },
  },
  [HEADING_LG]: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: 700,
    _web: {
      fontSize: 40,
      lineHeight: 48,
    },
  },
  [HEADING_MD]: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
  },
  [HEADING_SM]: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 700,
  },
  [HEADING_XS]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
  },
  [BODYLIGHT_LG]: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 200,
  },
  [BODYLIGHT_MD]: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 200,
  },
  [BODYLIGHT_SM]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 200,
  },
  [BODY_LG]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
  },
  [BODY_MD]: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
  [BODY_SM]: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
  },
  [BODY_XS]: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: 500,
  },
  [BODY_XXS]: {
    fontSize: 8,
    lineHeight: 12,
    fontWeight: 500,
  },
  [BODYSEMI_LG]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
  },
  [BODYSEMI_MD]: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 600,
  },
  [BODYSEMI_SM]: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 600,
  },
  [BODYSEMI_XS]: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: 600,
  },
  [BODYSEMI_XXS]: {
    fontSize: 8,
    lineHeight: 12,
    fontWeight: 600,
  },
  [BODYBOLD_LG]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
  },
  [BODYBOLD_MD]: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 700,
  },
  [BODYBOLD_SM]: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 700,
  },
  [BODYBOLD_XS]: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: 700,
  },
  [BODYBOLD_XXS]: {
    fontSize: 8,
    lineHeight: 12,
    fontWeight: 700,
  },
  [UNDERLINE_LG]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
    textDecorationLine: 'underline',
  },
  [UNDERLINE_MD]: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
    textDecorationLine: 'underline',
  },
  [UNDERLINE_SM]: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    textDecorationLine: 'underline',
  },
  [UNDERLINE_XS]: {
    ...bodyXsFontSize,
    fontWeight: 500,
    textDecorationLine: 'underline',
  },
  [UNDERLINE_XXS]: {
    ...bodyXxsFontSize,
    fontWeight: 500,
    textDecorationLine: 'underline',
  },
  [CENTER_BODY_SM]: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    textAlign: 'center',
  },
  [CAPS_XXS]: {
    fontSize: 8,
    lineHeight: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  [CAPS_XS]: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  [CAPS_SM]: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  [CAPS_MD]: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  [CAPS_LG]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  [UNDERLINEBOLD_LG]: {
    ...bodyLgFontSize,
    fontWeight: 700,
    textDecorationLine: 'underline',
  },
  [UNDERLINEBOLD_MD]: {
    ...bodyMdFontSize,
    fontWeight: 700,
    textDecorationLine: 'underline',
  },
  [UNDERLINEBOLD_SM]: {
    ...bodySmFontSize,
    fontWeight: 700,
    textDecorationLine: 'underline',
  },
  [UNDERLINEBOLD_XS]: {
    ...bodyXsFontSize,
    fontWeight: 700,
    textDecorationLine: 'underline',
  },
  [UNDERLINEBOLD_XXS]: {
    ...bodyXxsFontSize,
    fontWeight: 700,
    textDecorationLine: 'underline',
  },
};

export const Text = {
  baseStyle: {
    color: 'primaryDark.80',
    fontFamily: 'Jakarta',
  },
  defaultProps: {
    variant: BODYBOLD_MD,
    minimumFontScale: FONT_MULTIPLIER.min,
    maxFontSizeMultiplier: FONT_MULTIPLIER.max,
  },
  variants: normalizeFontVariants(variants),
};
