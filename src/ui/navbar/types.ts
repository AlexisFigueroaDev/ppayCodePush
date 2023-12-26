import { KeyTextIcons } from '../icon'

export interface NavbarProps {
  variant?: 'dark' | 'light'
  title: string
  subtitle?: string
  isLoadingTitle?: boolean
  isLoadingSubtitle?: boolean
  rightIconName?: KeyTextIcons
  onPressLeftStack?: string
  onPressLeftScreen?: string
  onPressLeftParams?: object
  onPressRightIcon?: () => void
  onPressSubtitle?: () => void
}
