import { ReactElement, JSXElementConstructor } from 'react'

export type ListWrapperProps = {
  title?: string
  label?: string
  isLoading: boolean
  skeletonLoadingItems: number
  data: Array<string | number>
  children: (item: object) => ReactElement<JSXElementConstructor<object>>
  skeletonComponent: ReactElement
  onLoadTransactions: () => void
  hasError: boolean
  endOfList: boolean
}
