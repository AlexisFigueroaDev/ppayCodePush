import React, { FC } from 'react';
import { ViewStyle } from 'react-native';

import { Box } from 'native-base';

const HEADER = 'header';
const BODY = 'body';
const FOOTER = 'footer';
const SCREEN = 'screen';

type Variants = typeof HEADER | typeof BODY | typeof FOOTER | typeof SCREEN;

export interface ContenWrapperProps
  extends Partial<Pick<ViewStyle, 'alignItems'>> {
  variant?: Variants;
  borderless?: boolean;
}

export const ContentWrapper: FC<ContenWrapperProps> = ({
  /** Internal content componets */
  children,
  /** Type of content groups */
  variant = SCREEN,
  /** Align items from flex */
  alignItems = 'flex-start',
  /** If true, make padding 0  */
  borderless,
}) => {
  if (variant === HEADER) {
    return (
      <Box
        paddingX={borderless ? 0 : 4}
        paddingTop={8}
        paddingBottom={4}
        alignItems={alignItems}
        w="full"
      >
        {children}
      </Box>
    );
  }

  if (variant === FOOTER) {
    return (
      <Box
        paddingX={borderless ? 0 : 4}
        paddingTop={4}
        paddingBottom={8}
        alignItems={alignItems}
        w="full"
      >
        {children}
      </Box>
    );
  }

  if (variant === BODY) {
    return (
      <Box paddingX={borderless ? 0 : 4} alignItems={alignItems} w="full">
        {children}
      </Box>
    );
  }

  return (
    <Box paddingY={8} paddingX={0} alignItems={alignItems} w="full">
      {children}
    </Box>
  );
};
