import BadgeLvl1extrasmall from '../../assets/illustrations/badge-lvl-1-extrasmall.svg';
import BadgeLvl1medium from '../../assets/illustrations/badge-lvl-1-medium.svg';

import BadgeLvl2extrasmall from '../../assets/illustrations/badge-lvl-2-extrasmall.svg';
import BadgeLvl2medium from '../../assets/illustrations/badge-lvl-2-medium.svg';
import BadgeLvl2small from '../../assets/illustrations/badge-lvl-2-small.svg';
import BadgeLvl3extrasmall from '../../assets/illustrations/badge-lvl-3-extrasmall.svg';
import BadgeLvl3medium from '../../assets/illustrations/badge-lvl-3-medium.svg';
import BadgeLvl3small from '../../assets/illustrations/badge-lvl-3-small.svg';
import BadgeLvlSkeleton from '../../assets/illustrations/badge-lvl-skeleton.svg';
import {KeyTextIcons} from '../icon/types';
import {Variants as TextVariants} from '../text/types';

const DISABLED_BADGE = 'disabled';
const DANGER_BADGE = 'danger';
const WARNING_BADGE = 'warning';
const NEWS_BADGE = 'news';
const NEWS_BADGE_BUTTON = 'news-button';
const NEWS_DARKER_BADGE = 'news-darker';
const INFO_BADGE = 'info';

export type VariantKey =
  | typeof DISABLED_BADGE
  | typeof DANGER_BADGE
  | typeof NEWS_BADGE
  | typeof WARNING_BADGE
  | typeof INFO_BADGE
  | typeof NEWS_DARKER_BADGE
  | typeof NEWS_BADGE_BUTTON;

export const colorBy = (variant: VariantKey): 'text' | 'white' =>
  variant === 'disabled' ? 'text' : 'white';

export interface LabelProps {
  children: string;
  borderRadius?: '4px' | '2px';
  variant?: VariantKey;
  textVariant?: TextVariants;
}

export interface TagProps {
  children: string;
  variant?: VariantKey;
  icon?: KeyTextIcons;
}

export const BadgeLvlImagePaths = {
  BadgeLvl1extrasmall,
  BadgeLvl2extrasmall,
  BadgeLvl3extrasmall,
  BadgeLvl2small,
  BadgeLvl3small,
  BadgeLvl1medium,
  BadgeLvl2medium,
  BadgeLvl3medium,
  BadgeLvlSkeleton,
} as const;

export type Level = '1' | '2' | '3';

export interface LevelProps {
  lvl: Level;
  size: 'extrasmall' | 'small' | 'medium';
}

export type SkeletonLevelProps = {
  size: 'extrasmall' | 'small' | 'medium';
  color?: string;
};
