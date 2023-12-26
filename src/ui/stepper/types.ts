type Step = {
  title: string;
};

export type StandardStepperProps = {
  /** An array of step objects representing the main steps of the stepper. */
  steps: Step[];
  /** The index of the current main step. */
  currentStepIdx: number;
  /** Optional text to display for the next step. */
  nextStepText?: string;
  /** Optional helper text for the next step text. */
  nextStepHelperText?: string;
  /** Amount of internal steps (will display internal progress bar). */
  amountOfInternalSteps?: number;
  /** The index of the current internal step (optional, default is 0). */
  currentInternalStepIdx?: number;
};
