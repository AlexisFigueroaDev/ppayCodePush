export interface TextAreaProps {
  label: string;
  value?: string;
  caption?: string;
  onChange?: (value: string) => void;
  errorMessage?: string;
  isDisabled?: boolean;
  testID: string;
}
