/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react'

import { Flex, Text as NBText, Pressable } from 'native-base'

import { Text } from './text'
import {
  BODY_MD,
  DynamicTextProps,
  FONT_MULTIPLIER,
  VariantSize,
  Variants,
} from './types'
import { VARIANT_MATRIX } from './variant-matrix'

export const DynamicText: FC<DynamicTextProps> = ({
  text,
  linkColor = 'text',
  size = 'md',
  onPress,
  justifyContent = 'flex-start',
  maxFontMultiplier = FONT_MULTIPLIER.max,
  boldColor = 'text',
}) => {
  const SYMBOLS = {
    BOLD_WRAPPER: '**',
    LINK_WRAPPER: '^^',
  }

  const reg = /(\*\*.+?\*\*)|(\^\^.+?\^\^)/g

  const isWrapped = (string: string): boolean => reg.test(string)

  const checkForFontVariant = (
    string: string,
  ): { variant: Variants; newString: string } => {
    let resultVariant = BODY_MD as Variants
    let cleanString = string
    const props = {
      bold: false,
      link: false,
    }
    if (string.includes(SYMBOLS.BOLD_WRAPPER)) {
      props.bold = true
      cleanString = cleanString.replace(/\*\*/g, '')
    }
    if (string.includes(SYMBOLS.LINK_WRAPPER)) {
      props.link = true
      cleanString = cleanString.replace(/\^\^/g, '')
    }

    const propsValues = Object.values(props)
    VARIANT_MATRIX(size).forEach(([variant, values]) => {
      if (values.every((value, index) => value === propsValues[index])) {
        resultVariant = variant
      }
    })

    return { variant: resultVariant, newString: cleanString }
  }

  const transformText = (
    string: string,
    _size: VariantSize,
    variant?: Variants,
  ): Text[] => {
    return string
      .split(/(\S+\s+)/)
      .filter(e => e)
      .map((e, i) => (
        <NBText
          maxFontSizeMultiplier={maxFontMultiplier}
          variant={variant || `body-${_size}`}
          key={`word-${e}-${i}`}
        >
          {e}
        </NBText>
      ))
  }

  const smartText = (_text: string): Text[] => {
    const splitted = _text.split(reg).filter(e => e)

    const returnedText = splitted.map((string, index) => {
      if (isWrapped(string)) {
        const { variant, newString } = checkForFontVariant(string)
        if (string.includes(SYMBOLS.LINK_WRAPPER)) {
          return (
            <Pressable key={`link-${index}`} onPress={onPress}>
              <Text
                maxFontMultiplier={maxFontMultiplier}
                color={linkColor}
                variant={variant}
              >
                {newString}
              </Text>
            </Pressable>
          )
        }
        if (string.includes(SYMBOLS.BOLD_WRAPPER)) {
          return (
            <Text
              key={`bold-${index}`}
              maxFontMultiplier={maxFontMultiplier}
              color={boldColor}
              variant={variant}
            >
              {newString}
            </Text>
          )
        }
        return transformText(newString, size, variant)
      }

      return transformText(string, size)
    })

    return returnedText.flat()
  }

  return (
    <Flex
      flexDirection="row"
      width="full"
      flexWrap="wrap"
      justifyContent={justifyContent}
    >
      {smartText(text).map((txt, i) => {
        return <React.Fragment key={`${txt}-${i}`}>{txt}</React.Fragment>
      })}
    </Flex>
  )
}
