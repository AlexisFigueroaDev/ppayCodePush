import React, { FC } from 'react';

import { Fab as NBFab } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';
import { Icon } from '@ui/icon';

import { DEFAULT_FAB_SIZE } from './constants';
import { getSecureFabSize } from './helpers/get-secure-size';
import { FabProps } from './types';

/**
 * A floating action button component.
 * @param placement - The placement of the button on the screen.
 * @param size - The size of the button and inside elements.
 * @param icon - The name of the icon to display on the button.
 * @param onPress - The function to call when the button is pressed.
 * @param label - The label to display on the button.
 */
export const Fab: FC<FabProps> = ({
  placement,
  size,
  icon,
  onPress,
  label,
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Button',
    click_text: label || icon,
    test_id: testID,
  });

  return (
    <NBFab
      onPress={_onPress}
      rightIcon={<Icon name={icon} />}
      size={getSecureFabSize(size, DEFAULT_FAB_SIZE)}
      label={label}
      placement={placement}
    />
  );
};
