import React, { FC, useCallback, useEffect, useReducer } from 'react';
import { Pressable } from 'react-native';

import { Box, HStack, VStack } from 'native-base';

import { Backdrop } from '@ui/backdrop/backdrop';
import { Icon } from '@ui/icon';
import { Text } from '@ui/text';

import { baseStyles, selectBackdropReducer } from './reducer';
import { BackdropSelectProps } from './types';

export const BackdropSelect: FC<BackdropSelectProps> = React.memo(
  ({
    value,
    placeholder,
    isDisabled,
    label,
    renderBackdropChildren,
    backdropProps,
    testID,
    hasError,
    errorMessage,
    onClose,
  }) => {
    const [state, dispatch] = useReducer(selectBackdropReducer, baseStyles);

    // Dispatch reducer to open or close (focus/blur)
    const setIsOpenTo = useCallback(
      (open = false) => {
        // If its going to be closed
        if (!open) {
          onClose?.();
        }

        dispatch({ isOpen: open, hasError });
      },
      [onClose, hasError],
    );

    // Dispatch action to disable/hasError select
    useEffect(() => {
      dispatch({ isDisabled, hasError });
    }, [isDisabled, hasError]);

    return (
      <Box>
        <Pressable
          onPress={() => setIsOpenTo(true)}
          disabled={isDisabled}
          testID={testID}
        >
          <HStack
            paddingLeft={4}
            paddingRight={3}
            paddingY={2}
            borderWidth={state.containerBorderWidth}
            borderColor={state.containerBorderColor}
            background={state.containerBackground}
            borderRadius="sm"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack flex={1}>
              {label && (
                <Text variant="bodySemi-sm" color={state.labelColor}>
                  {label}
                </Text>
              )}
              <Text
                variant="body-md"
                color={state.placeholderColor}
                isTruncated
                noOfLines={1}
              >
                {value || placeholder}
              </Text>
            </VStack>
            <Box paddingLeft="3">
              <Icon color={state.iconColor} name={state.iconName} size="24" />
            </Box>
          </HStack>
        </Pressable>
        {hasError && errorMessage && (
          <Box paddingTop={2}>
            <Text variant="body-sm" color="error">
              {errorMessage}
            </Text>
          </Box>
        )}
        {/* Custom BackdropScroll component rendered instead of NB select ActionSheet */}
        {state.isOpen && (
          <Backdrop
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...backdropProps}
            isOpen={state.isOpen}
            onClose={setIsOpenTo}
          >
            {renderBackdropChildren(() => setIsOpenTo(false))}
          </Backdrop>
        )}
      </Box>
    );
  },
);
BackdropSelect.displayName = 'BackdropSelect';
