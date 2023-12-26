import React, { FC, useState } from 'react';

import { Flex, HStack, VStack, Pressable } from 'native-base';

import { VariableWithSolidButton } from '@ui/button';
import { Divider } from '@ui/divider';
import { Icon } from '@ui/icon';
import { SingleRow } from '@ui/row';
import { Text } from '@ui/text';

import { AccordionProps, ACC_VARIANTS } from './type';

export const Accordion: FC<AccordionProps> = ({
  /* On Press Action Label */
  onPressLabel = () => {},
  /* Have icon */
  icon,
  /* title to show */
  title,
  /* Amount to show */
  amount,
  /* Have Icon Right */
  isIconRight,
  /* Data is loadig  */
  isLoading,
  /* Data for element Open Accordion */
  dataAccordion,
  /* label with action */
  label,
  /* remplace items action for text body */
  textBody,
  /* size title */
  textSize,
  /* variant title BODY_BOLD & BODY */
  variantTitle = 'bodyBold',
  /* color title */
  textColorTitle = 'text',
  /* color amount */
  colorAmount = 'text',
  /* color right icon */
  iconColorRight = 'text',
  /* color left icon */
  iconColor = 'primary',
  /* Name Icon Open */
  iconClose = 'ChevronDown',
  /* Name Icon Close */
  iconOpen = 'ChevronUp',
  /* have a divider */
  isShowDivider,
  /* Disabled action presseable */
  disabled,
  /* Variant of accordion */
  variant = ACC_VARIANTS.STANDARD,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const openAccordion = (): void => {
    setOpen(!open);
  };

  /* this is the default row for accordion variant standard */
  let accRow = (
    <VStack alignItems="center">
      <SingleRow
        variant="large"
        variantTitle={variantTitle}
        textColor={textColorTitle}
        title={title}
        icon={icon}
        amount={amount}
        textSize={textSize}
        colorAmount={colorAmount}
        rightIcon={isIconRight ? (open ? iconOpen : iconClose) : undefined}
        iconColor={iconColor}
        isLoading={isLoading}
        onPress={disabled ? undefined : openAccordion}
        rightIconColor={iconColorRight}
      />
      {isShowDivider && !open ? <Divider /> : null}
    </VStack>
  );

  if (variant === ACC_VARIANTS.IN_CARD) {
    accRow = (
      <Pressable onPress={openAccordion}>
        <Flex variant="accordion-in-card">
          <HStack space={2} justifyContent="space-between" alignItems="center">
            <Text variant="bodySemi-sm" color="primary">
              {title}
            </Text>
            <Icon
              color="primary"
              name={open ? iconOpen : iconClose}
              size="16"
            />
          </HStack>
        </Flex>
      </Pressable>
    );
  }

  return (
    <>
      {accRow}
      {open ? (
        <>
          {dataAccordion ? (
            <VStack
              space={4}
              pl={8}
              pt={4}
              variant="no-padding-large-single-row"
            >
              {dataAccordion
                .map((value) => {
                  return (
                    <Flex
                      variant="no-padding-large-single-row"
                      key={value.left}
                    >
                      <SingleRow
                        variant="no-padding-large"
                        title={value.left}
                        rightTitle={value.right}
                        isRightTitleBold
                        textSize="sm"
                      />
                    </Flex>
                  );
                })
                .slice(0, 3)}
            </VStack>
          ) : null}

          {textBody ? (
            <Flex variant={`accordion-${variant}-content`}>
              <Text textAlign="left" variant="body-sm" color="textLight">
                {textBody}
              </Text>
            </Flex>
          ) : null}

          {label ? (
            <Flex variant="no-padding-large-single-row">
              <VStack flexShrink={1} pl={4} pb={4} pt={2}>
                <VariableWithSolidButton
                  testID="accordion-width-button-label"
                  variant="tertiary"
                  onPress={onPressLabel}
                  size="sm"
                >
                  {label}
                </VariableWithSolidButton>
              </VStack>
            </Flex>
          ) : null}

          {isShowDivider ? <Divider /> : null}
        </>
      ) : null}
    </>
  );
};
