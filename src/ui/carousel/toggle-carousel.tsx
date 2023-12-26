import React, { FC } from 'react'

import { Carousel } from './carousel'
import { ToggleCarouselProps } from './type'
import { ToggleButton } from '../button'

export const ToggleCarousel: FC<ToggleCarouselProps> = ({
  /** string to set the carousel title */
  title: carouselTitle,
  /** array of data to be used in the FlatList */
  data,
  /** function to be fire once a toggle opt has been pressed */
  toggleOnPress,
  /** string with the current toggle selected */
  currentDisabledToggle,
  /** right button props inside header carousel component */
  rightButton,
}) => {
  const handleOnPress =
    (toggleString: string): (() => void) =>
    () => {
      toggleOnPress(toggleString)
    }
  return (
    <Carousel
      title={carouselTitle}
      rightButton={rightButton}
      data={data}
      keyExtractor={({ children }, index) => `${children}${index}`}
    >
      {({ children, size }) => (
        <ToggleButton
          testID={`carousel-toggle-button-${children}`}
          size={size}
          onPress={handleOnPress(children)}
          isDisabled={currentDisabledToggle === children}
        >
          {children}
        </ToggleButton>
      )}
    </Carousel>
  );
}
