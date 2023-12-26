import React, { FC } from 'react';
import { Dimensions } from 'react-native';

import { Carousel } from './carousel';
import { ScreenAlertCarouselProps } from './type';
import { ScreenAlert } from '../alert';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width * 0.75;

export const ScreenAlertCarousel: FC<ScreenAlertCarouselProps> = ({
  /** string to set the carousel title */
  title: carouselTitle,
  /** array of data to be used in the FlatList */
  data,
  /** right button props inside header carousel component */
  rightButton,
}) => (
  <Carousel
    title={carouselTitle}
    rightButton={rightButton}
    data={data}
    keyExtractor={({ title }, index) => `${title}${index}`}
    snapToInterval={ITEM_SIZE + 12}
  >
    {({ criticality, description, title, handleClose }) => (
      <ScreenAlert
        criticality={criticality}
        description={description}
        title={title}
        handleClose={handleClose}
        width={ITEM_SIZE}
      />
    )}
  </Carousel>
);
