import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

export const setLabelByName: Record<TabBarIconProps['name'], string> = {
  Home: 'Inicio',
  Wallet: 'Billetera',
  Discount: 'Beneficios',
  PiggyBank: 'Ahorros',
  Options: 'Más',
}

export type TabBarProps = BottomTabBarProps

export interface TabBarIconProps {
  name: 'Home' | 'Wallet' | 'Discount' | 'PiggyBank' | 'Options'
  focused: boolean
  label: string
  onPress: () => void
  disabled?: boolean
}
