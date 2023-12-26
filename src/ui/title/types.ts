export const SMALL = 'small'
export const EXTRA_LG = 'extra-lg'

export interface titleProps {
  title: string
  SubTitle?: string
  variant?: Variants
}

export type Variants = typeof SMALL | typeof EXTRA_LG
