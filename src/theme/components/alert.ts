import { HIGH, HIGHEST, LOW, MEDIUM, VERY_HIGH } from '../../ui/alert/types'

const alertRepeatedStyles = {
  borderWidth: 1,
  borderTopColor: 'primaryDark.30',
  borderRightColor: 'primaryDark.30',
  borderBottomColor: 'primaryDark.30',
  bg: 'primaryDark.0',
  borderLeftWidth: 4,
  padding: 3,
  paddingLeft: 4,
}

export const Alert = {
  variants: {
    [LOW]: {
      ...alertRepeatedStyles,
      borderLeftColor: 'secondaryFive.80',
    },
    [MEDIUM]: {
      ...alertRepeatedStyles,
      borderLeftColor: 'secondaryThree.100',
    },
    [HIGH]: {
      ...alertRepeatedStyles,
      borderLeftColor: 'secondaryFour.80',
    },
    [VERY_HIGH]: {
      ...alertRepeatedStyles,
      bg: 'secondaryThree.20',
      borderColor: 'secondaryThree.80',
      borderTopColor: 'secondaryThree.80',
      borderBottomColor: 'secondaryThree.80',
      borderRightColor: 'secondaryThree.80',
      borderLeftWidth: 1,
    },
    [HIGHEST]: {
      ...alertRepeatedStyles,
      bg: 'secondaryFour.20',
      borderColor: 'secondaryFour.60',
      borderTopColor: 'secondaryFour.60',
      borderBottomColor: 'secondaryFour.60',
      borderRightColor: 'secondaryFour.60',
      borderLeftWidth: 1,
    },
  },
}
