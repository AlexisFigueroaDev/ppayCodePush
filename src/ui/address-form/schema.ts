import * as yup from 'yup';

import { regexpStreetname } from '@components/baseUserAddress/baseConfirmUserAddress/utils/regexpStreetname';
import { regExpPostalCode } from '@components/baseUserAddress/helpers/utils';

const requiredFieldErrorMessage = (): string => 'Obligatorio';
const maxLengthErrorMessage = (max: number): string =>
  `Máximo ${max} caracteres`;

export const AddressFormSchema = yup
  .object({
    city: yup.object({
      id: yup
        .string()
        .required(requiredFieldErrorMessage())
        .max(100, maxLengthErrorMessage(100)),
      description: yup.string(),
    }),
    postalCode: yup
      .string()
      .required(requiredFieldErrorMessage())
      .max(10, maxLengthErrorMessage(10))
      .matches(regExpPostalCode, 'Ingresá un CP valido'),
    province: yup.object({
      id: yup
        .string()
        .required(requiredFieldErrorMessage())
        .max(50, maxLengthErrorMessage(50)),
      description: yup.string(),
    }),
    streetName: yup
      .string()
      .required(requiredFieldErrorMessage())
      .max(50, maxLengthErrorMessage(50))
      .matches(regexpStreetname, 'Ingresá solo letras o números'),
    streetNumber: yup.string().when('addressHasNoNumber', {
      is: false,
      then: yup
        .string()
        .required(requiredFieldErrorMessage())
        .max(5, maxLengthErrorMessage(5)),
      otherwise: yup.string().max(5, maxLengthErrorMessage(5)),
    }),
    type: yup.string(),
    comments: yup.string().optional().max(100, maxLengthErrorMessage(100)),
    department: yup.string().optional().max(4, maxLengthErrorMessage(2)),
    floor: yup.string().optional().max(2, maxLengthErrorMessage(2)),
    addressHasNoNumber: yup.bool().optional().default(false),
  })
  .required();
