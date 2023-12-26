import { colors } from '../../theme/foundations/colors';
import { KeyTextColors } from '../text/types';

// Define action types for reducer
const actionTypes = {
  FOCUS: 'FOCUS',
  BLUR: 'BLUR',
};

type ReducerAction = {
  type?: keyof typeof actionTypes;
  payload: { hasError: boolean; isDisabled: boolean };
};

type ReducerActionFnReturnType = {
  borderColor: string;
  labelColor: KeyTextColors;
  captionColor: KeyTextColors;
  isDisabled: boolean;
  hasError: boolean;
};

type TextAreaReducerFn = (
  state: unknown,
  action: ReducerAction,
) => ReducerActionFnReturnType;

// Define base values for borderColor and labelColor based on the action type
const baseValues = {
  FOCUS: {
    borderColor: colors.primary[80],
    labelColor: 'primary' as KeyTextColors,
    captionColor: 'text' as KeyTextColors,
  },
  BLUR: {
    borderColor: colors.primaryDark[40],
    labelColor: 'textLight' as KeyTextColors,
    captionColor: 'text' as KeyTextColors,
  },
};

// Reducer function to manage component state
export const textAreaReducer: TextAreaReducerFn = (_state, action) => {
  const { isDisabled, hasError } = action.payload;

  if (isDisabled) {
    return {
      borderColor: colors.primaryDark[50],
      labelColor: 'disabled',
      captionColor: 'disabled',
      isDisabled,
      hasError,
    };
  }

  if (hasError) {
    return {
      borderColor: colors.secondaryFour[80],
      labelColor: 'error',
      captionColor: 'error',
      isDisabled,
      hasError,
    };
  }

  // Just to avoid undefined indexing in baseValues object
  const actionType = action.type || 'BLUR';

  // In case of an error. The error must appear before focus and blur states
  return {
    borderColor: baseValues[actionType].borderColor,
    labelColor: baseValues[actionType].labelColor,
    captionColor: baseValues[actionType].captionColor,
    isDisabled,
    hasError,
  };
};
