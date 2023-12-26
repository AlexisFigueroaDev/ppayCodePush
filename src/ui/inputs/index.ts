import { InputScreenAmount } from './input-screen-amount'
import { InputScreenNumbers } from './input-screen-number'
import { InputScreenPassword } from './input-screen-password'
import { InputScreenPhone } from './input-screen-phone'

export type {
  InputScreenNumbersProps, InputScreenAmountProps, InputScreenPhoneProps, InputScreenPasswordProps
} from './types'

export const InputScreen = {
  Numbers: InputScreenNumbers,
  Amount: InputScreenAmount,
  Password: InputScreenPassword,
  Phone: InputScreenPhone,
}
