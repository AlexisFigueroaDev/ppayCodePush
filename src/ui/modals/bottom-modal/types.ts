import { ReactElement } from 'react'

export interface ActionSheetProps {
  children: ReactElement
  isOpen: boolean
  title?: string
  onClose: () => void
}
