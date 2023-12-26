/**
 * @example
 * <Stack.Navigator
 *    initialRouteName={initialRouteName()}
 * >
 *    <Stack.Screen
 *      name='Welcome'
 *      component={Welcome}
 *      options={() => ({
 *        header: () => SectionApp({
 *          infoButton: {
 *            name: 'Name',
 *            text: 'Text',
 *            onPress: () => console.log('info button'),
 *          },
 *          iconButtonOne: {
 *            name: 'BellActive',
 *            onPress: () => console.log('icon button one'),
 *          },
 *          iconButtonTwo: {
 *            name: 'Shop',
 *            onPress: () => console.log('icon button two'),
 *          },
 *          alphaButton: {
 *            text: 'Label',
 *            onPress: () => console.log('alpha button'),
 *          }
 *        })
 *      })}
 *    />
 * </Stack.Navigator>
 */
import React, { FC } from 'react'

import { Box, Flex } from 'native-base'

import { SectionAppProps } from './types'
import { IconButton, InfoButton, VariableWidthAlphaButton } from '../button'
import { HStack } from '../layout'
import { Text } from '../text'

export const SectionApp: FC<SectionAppProps> = ({
  /** Show user data on info button */
  infoButton,
  /** Show title text */
  title,
  /** Frist icon button */
  iconButtonOne,
  /** Second icon button */
  iconButtonTwo,
  /** If exist hide first icon button if exist */
  alphaButton,
  /** If is necessary you can add a height */
  height,
}) => (
  <Flex
    paddingX={4}
    paddingY={5}
    backgroundColor="primary.100"
    flexDirection="row"
    justifyContent="space-between"
    height={height}
  >
    {title ? (
      <Box paddingY="11px">
        <Text maxFontMultiplier={1.4} variant="bodyBold-md" color="white">
          {title}
        </Text>
      </Box>
    ) : infoButton ? (
      <InfoButton
        testID="section-app-info-button"
        name={infoButton?.name}
        text={infoButton?.text}
        uri={infoButton?.uri}
        onPress={infoButton?.onPress}
        lvl={infoButton?.lvl}
        title={infoButton?.title || ''}
        isLoading={infoButton?.isLoading}
      />
    ) : null}
    <HStack space={2}>
      {alphaButton ? (
        <VariableWidthAlphaButton
          testID="section-app-alpha-button"
          size="medium"
          onPress={alphaButton.onPress}
        >
          {alphaButton.text}
        </VariableWidthAlphaButton>
      ) : iconButtonTwo ? (
        <IconButton.Alpha
          testID="section-app-icon-button-two"
          name={iconButtonTwo.name}
          onPress={iconButtonTwo.onPress}
        />
      ) : null}
      {iconButtonOne ? (
        <IconButton.Alpha
          testID="section-app-icon-button-one"
          name={iconButtonOne.name}
          onPress={iconButtonOne.onPress}
        />
      ) : null}
    </HStack>
  </Flex>
);
