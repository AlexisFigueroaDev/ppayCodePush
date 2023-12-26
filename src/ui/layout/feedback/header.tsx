import React, { FC } from 'react';

import { useFeedback } from './feedback';
import { FeedbackHeader } from '../../headers/feedback';

export const Header: FC = () => {
  const { variant } = useFeedback();

  return <FeedbackHeader variant={variant} />;
};
