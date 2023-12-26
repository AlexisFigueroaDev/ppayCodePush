import React, { FC } from 'react';

import { Flex } from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { RootState } from '@store/types/store';

import { TabBarIcon } from './tab-bar-icon';
import { TabBarQr } from './tab-bar-icon-qr';
import { TabBarIconProps, TabBarProps, setLabelByName } from './types';
import useCompletedSteps from '../../hooks/useCompletedSteps';

export const TabBar: FC<TabBarProps> = ({ state, navigation, descriptors }) => {
  const safeArea = useSafeAreaInsets();
  const { stepsHasBeenCompleted } = useCompletedSteps();
  const { isAgreeDataPaygilant, isUserOld } = useSelector(
    (reduxState: RootState) => reduxState.paygilant,
  );

  const isPaygilandAcepted = isAgreeDataPaygilant || isUserOld;
  const hasPendingFlows = !stepsHasBeenCompleted || !isPaygilandAcepted;

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Flex bottom={safeArea.bottom} variant="tab-bar">
      {state?.routes?.length > 0
        ? state?.routes?.map(({ name, key }, index) => {
            const isFocused = state?.index === index;

            const isDisabled = name === 'Options' && hasPendingFlows;

            const onPress = (): void => {
              if (isDisabled) return;
              const event = navigation?.emit({
                type: 'tabPress',
                target: key,
                canPreventDefault: true,
              });

              if (!isFocused && !event?.defaultPrevented) {
                navigation?.navigate(name);
              }
            };

            if (name === 'Qr') {
              return <TabBarQr key={key} />;
            }

            return (
              <TabBarIcon
                key={key}
                name={name as TabBarIconProps['name']}
                focused={isFocused}
                label={setLabelByName[name as TabBarIconProps['name']]}
                onPress={onPress}
                disabled={isDisabled}
              />
            );
          })
        : null}
    </Flex>
  );
};
