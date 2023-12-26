import React, { FC } from 'react';

import { VStack } from 'native-base';

import { NoneBodyContent } from '../types';

type Props = NoneBodyContent;

export const None: FC<Props> = () => <VStack flexGrow={10} />;

export default None;
