/**
 * La idea es tener una tabla (matriz) de n (dependiendo las variantes disponibles) variables, en este caso serán bold y link.
 * Cada combinación de valores va a estar asociada a una variante
 *
 *    variant  | bold  |  link
 *    bold     | true  | false
 *    link     | false | true
 *    bold-link | true | true
 */

import { VariantSize, Variants } from './types'

type Matrix = (size: VariantSize) => [Variants, boolean[]][]

export const VARIANT_MATRIX: Matrix = size => [
  [`bodyBold-${size}`, [true, false]],
  [`underline-${size}`, [false, true]],
  [`underlineBold-${size}`, [true, true]],
]
