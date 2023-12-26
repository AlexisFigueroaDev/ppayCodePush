import React, { FC } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
  Box,
  Center,
  StatusBar,
  Flex,
  Skeleton,
  Pressable,
  HStack,
} from 'native-base'

import { NavbarProps } from './types'
import { colors } from '../../theme/foundations/colors'
import { IconButton } from '../button'
import { Icon } from '../icon'
import { Text } from '../text'

export const Navbar: FC<NavbarProps> = ({
  /** Variant from box for navbar (dark or light) */
  variant = 'dark',
  /** Navbar title */
  title = null,
  /** If true show title skeleton */
  isLoadingTitle = false,
  /** Navbar subtitle */
  subtitle = null,
  /** If true show subtitle skeleton */
  isLoadingSubtitle = false,
  /** Onpress action in subtitle */
  onPressSubtitle,
  /** Select right icon to show */
  rightIconName,
  /** Onpress action in right icon */
  onPressRightIcon,
  /** If try navigate to another stack, use this prop */
  onPressLeftStack,
  /** Route to navigate when left icon is pressed */
  onPressLeftScreen,
  /** navigation parameters in case it is necessary  */
  onPressLeftParams,
}) => {
  const navigation = useNavigation()

  const onPressLeftIcon = (): void => {
    if (!onPressLeftStack && !onPressLeftScreen) {
      navigation.goBack()
      return
    }

    if (!onPressLeftStack && onPressLeftScreen) {
      navigation.navigate(onPressLeftScreen)
    }

    if (onPressLeftStack && onPressLeftScreen && !onPressLeftParams)
      navigation.navigate(onPressLeftStack, { onPressLeftScreen })

    if (onPressLeftStack && onPressLeftScreen && onPressLeftParams)
      navigation.navigate(onPressLeftStack, {
        screen: onPressLeftScreen,
        params: { ...onPressLeftParams },
      })
  }

  const variantColor = variant === 'dark' ? 'white' : 'text'
  const statusBarStyle = variant === 'dark' ? 'light' : 'dark'
  const colorStatusBar =
    variant === 'dark' ? colors.primary[100] : colors.primaryDark[0]

  return (
    <Center>
      <StatusBar
        barStyle={`${statusBarStyle}-content`}
        backgroundColor={colorStatusBar}
      />
      <Box variant={`navbar-${variant}`} safeAreaTop>
        <Flex
          flexDirection="row"
          paddingX={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box flex="1">
            <IconButton.Transparent
              testID="navbar-left-icon-button"
              size="lg"
              name="ArrowLeft"
              onPress={onPressLeftIcon}
              variant={`navbar-${variant}`}
              color={variantColor}
            />
          </Box>

          <Box flex="9">
            <Center>
              {title && !isLoadingTitle && (
                <HStack>
                  <Text
                    variant={subtitle ? 'bodyBold-sm' : 'bodyBold-lg'}
                    color={variantColor}
                  >
                    {title}
                  </Text>
                </HStack>
              )}
              {title && isLoadingTitle ? (
                <Skeleton h="4" w="3/6" rounded="xs" />
              ) : null}
              {subtitle && !isLoadingSubtitle ? (
                <Pressable
                  onPress={() => onPressSubtitle?.()}
                  alignItems="center"
                  marginTop="1"
                >
                  <HStack>
                    <Text variant="body-sm" color={variantColor}>
                      {subtitle}
                    </Text>
                    {typeof onPressSubtitle !== 'undefined' ? (
                      <Box
                        justifyContent="center"
                        marginTop={0.5}
                        marginLeft={1}
                      >
                        <Icon
                          name="ChevronDown"
                          size="12"
                          color={variantColor}
                        />
                      </Box>
                    ) : null}
                  </HStack>
                </Pressable>
              ) : null}
              {subtitle && isLoadingSubtitle ? (
                <Skeleton h="4" w="2/6" mt="1" rounded="xs" />
              ) : null}
            </Center>
          </Box>

          <Box flex="1">
            {rightIconName ? (
              <IconButton.Transparent
                testID="navbar-right-icon-button"
                size="lg"
                name={rightIconName}
                onPress={() => onPressRightIcon?.()}
                variant={`navbar-${variant}`}
                color={variantColor}
              />
            ) : null}
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
