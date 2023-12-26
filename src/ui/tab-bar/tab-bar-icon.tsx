import React, { FC } from 'react'

import { Box, Pressable } from 'native-base'

import { TabBarIconProps } from './types'
import { Icon } from '../icon'
import { Text } from '../text'

export const TabBarIcon: FC<TabBarIconProps> = ({
  /** string to set the icon */
  name,
  /** boolean that define the focus status */
  focused,
  /** string to define the TabBarIcon label */
  label,
  /** function to be fire once tab bar has been pressed */
  onPress,
  /** boolean to define the TabBarIcon color */
  disabled = false,
}) => (
  <Pressable onPress={onPress} variant="tab-bar-icon">
    {focused ? <Box variant="tab-bar-top-rectangle" /> : null}
    <Icon
      name={`${name}${focused ? 'Filled' : ''}`}
      color={disabled ? 'disabled' : focused ? 'primary' : 'textLight'}
    />
    <Text
      maxFontMultiplier={1}
      variant={focused ? 'bodyBold-xs' : 'body-xs'}
      color={disabled ? 'disabled' : focused ? 'primary' : 'textLight'}
    >
      {label}
    </Text>
  </Pressable>
)
