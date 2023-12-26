import { Sizes as IconSizes } from '@ui/icon/types';
import { HEADING_MD, HEADING_SM } from '@ui/text/types';

import { Text } from './text';

export const Fab = {
  baseStyle: {
    borderRadius: 'full',
    borderColor: 'primary.20',
    borderWidth: 4,
    shadow: 0,
  },
  sizes: {
    md: ({ label }: { label?: string }) => ({
      py: '4',
      px: label ? '6' : '4',
      _text: Text.variants[HEADING_SM],
      _icon: {
        size: IconSizes['36'],
      },
    }),
    lg: ({ label }: { label?: string }) => ({
      py: label ? '8' : '6',
      px: label ? '9' : '6',
      _text: Text.variants[HEADING_MD],
      _icon: {
        size: IconSizes['48'],
      },
    }),
  },
  defaultProps: {
    renderInPortal: false,
  },
};
