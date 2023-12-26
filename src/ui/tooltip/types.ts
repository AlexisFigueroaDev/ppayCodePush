export const ARROW_HEIGHT = 12;

export type DimensionsState = {
  yOffset: number;
  xOffset: number;
  eleWidth: number;
  eleHeight: number;
};

export interface TooltipProps {
  isVisible: boolean;
  onOpen?: () => void;
  onClose: () => void;
  withOverlay?: boolean;
  withPointer?: boolean;
  withHighlightedComponent?: boolean;
  textTooltip: string;
  width?: number;
  height?: number;
  delay?: number;
}

export interface HighlightedElementProps {
  dimensions: DimensionsState;
  onPress: () => void;
}

export interface Coords {
  x: number;
  y: number;
}

export interface CoordsWithArrowDirection extends Coords {
  isArrowBelow: boolean;
}

export interface TooltipArrowProps {
  isDown: boolean;
  coords: Coords;
}

export interface TooltipMeasurementAttributes {
  elementWidth: number;
  xOffset: number;
  tooltipWidth: number;
  elementHeight: number;
  yOffset: number;
  tooltipHeight: number;
}

export interface ArrowMeasurementAttributes {
  tooltipPosition: Coords;
  elementHeight: number;
  elementWidth: number;
}

export interface UseTooltipMeasurementsResponse {
  dimensions: DimensionsState;
  tooltipCoordinates: CoordsWithArrowDirection;
  arrowCoordinates: Coords;
}

export interface TooltipDimensions {
  width: number;
  height: number;
}
