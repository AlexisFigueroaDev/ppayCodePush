export interface RadioProps {
  label: string
  subtitle?: string
  value: string
  isDisabled?: boolean
  isFocused?: boolean
  accessibilityLabel?: string
}

export interface RadioButtonsProps {
  name: string
  value: string
  onChange?: (value: string) => void
  isDisabled: boolean
  isFocused: boolean
  options: RadioProps[] | string[]
}

export interface RadioButtonSkeletonProps {
  lines: number
}