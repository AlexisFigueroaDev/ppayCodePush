import { objectKeys } from '@theme/utils';

import { DEFAULT_FAB_SIZE, FAB_SIZES, FabSizes } from '../constants';

export const getSecureFabSize = (
  size?: FabSizes,
  defaultSize: FabSizes = DEFAULT_FAB_SIZE,
): FabSizes => {
  if (size && objectKeys(FAB_SIZES).includes(size)) return size;
  return defaultSize;
};
