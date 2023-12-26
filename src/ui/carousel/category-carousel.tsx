import React, { FC } from 'react'

import { Carousel } from './carousel'
import { SkeletonCategoryCarousel } from './skeleton-category-carousel'
import { CategoryCarouselProps } from './type'
import { ToggleButton } from '../button'

export const CategoryCarousel: FC<CategoryCarouselProps> = ({
  /** string to set the carousel title */
  title,
  /** array of data to be used in the FlatList */
  data,
  /** boolean value to define when component is loading data */
  isLoading,
  /** right button props inside header carousel component */
  rightButton,
}) => {
  if (isLoading) {
    return <SkeletonCategoryCarousel title={title} />
  }

  return (
    <Carousel
      title={title}
      rightButton={rightButton}
      data={data}
      keyExtractor={({ id }) => id}
    >
      {({ name, onPress }) => (
        <ToggleButton
          testID={`category-carousel-toggle-${name}`}
          size="md"
          onPress={onPress}
        >
          {name}
        </ToggleButton>
      )}
    </Carousel>
  );
}
