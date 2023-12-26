import React, { FC } from 'react';

import { Box, Flex, HStack, Skeleton } from 'native-base';

import { WARNING } from '@ui/notification/types';

import { AmountCardProps } from './types';
import { InCardAlert } from '../alert';
import { BadgeTag } from '../badge';
import { MiniBanner } from '../banner';
import {
  VariableWithSolidButton,
  IconButton,
  CreditCardButton,
} from '../button';
import { Divider } from '../divider';
import { VStack } from '../layout';
import { BalanceRow, SingleRow } from '../row';
import { SingleRowType } from '../row/type';
import { Text } from '../text';
import { BODYSEMI_MD } from '../text/types';

export const AmountCard: FC<AmountCardProps> = ({
  title,
  extraIconTitle,
  isLoading,
  error,
  rightButton,
  rightButtonJustify = 'space-between',
  tag,
  textBalance,
  balance,
  buttonRow,
  banner,
  balanceIsConcealable,
  isBalanceShow = true,
  toggleShowBalance = () => {},
  singleRows = [],
  subtitle,
  titleVariant = BODYSEMI_MD,
  alert,
  alertVariant = WARNING,
}) => {
  return (
    <Box
      borderWidth="1"
      borderColor="primaryDark.30"
      w="full"
      borderRadius={4}
      pt={4}
      pb={5}
      backgroundColor="primaryDark.0"
    >
      <VStack space={1}>
        <Flex
          justifyContent={rightButtonJustify}
          flexDirection="row"
          paddingX={3}
        >
          <Box paddingY={1}>
            <HStack space={1} alignItems="center">
              <Box paddingBottom={1}>
                <Text variant={titleVariant}>{title}</Text>
              </Box>
              {extraIconTitle ? (
                <IconButton.Transparent
                  name={extraIconTitle.name}
                  onPress={extraIconTitle.onPress}
                  size={extraIconTitle.size}
                  testID=""
                />
              ) : null}
              {balanceIsConcealable && !extraIconTitle ? (
                <IconButton.Transparent
                  name={isBalanceShow ? 'EyeOpen' : 'EyeClosed'}
                  onPress={toggleShowBalance}
                  testID=""
                />
              ) : null}
            </HStack>
            {subtitle ? (
              <HStack space={2}>
                <Box paddingY={0.5} pt={8}>
                  <Text variant="bodySemi-xs">{subtitle}</Text>
                </Box>
              </HStack>
            ) : null}
          </Box>
          <HStack alignItems="flex-start">
            {rightButton ? (
              <VariableWithSolidButton
                iconName={rightButton.iconName}
                onPress={rightButton.onPress}
                variant="tertiary"
                size="sm"
                testID="amount-card-right-button"
              >
                {rightButton.text}
              </VariableWithSolidButton>
            ) : null}
          </HStack>
        </Flex>
        {tag && tag.text ? (
          <BadgeTag variant={tag.variant}>{tag.text}</BadgeTag>
        ) : null}
        <Flex justifyContent="space-between" flexDirection="row" paddingX={3}>
          <VStack space={3}>
            {textBalance ? (
              <Box top={1}>
                <Text variant="bodySemi-xs">{textBalance}</Text>
              </Box>
            ) : null}
            {error ? (
              <Box pt={4}>
                <InCardAlert status="warning" description={error} isContainer />
              </Box>
            ) : (
              <BalanceRow
                value={balance?.value}
                variant="large"
                currency={balance?.currency}
                onPress={balance?.onPress}
                // TODO: FIX TYPE
                isShowAmount={
                  typeof isBalanceShow === 'boolean' ? isBalanceShow : undefined
                }
                isLoading={isLoading}
              />
            )}
            {buttonRow ? (
              <HStack space={2}>
                <Box flex={1}>
                  {isLoading ? (
                    <Skeleton height={9} />
                  ) : (
                    <VariableWithSolidButton
                      onPress={buttonRow.buttonOne?.onPress}
                      variant="fixed-box"
                      size="fb"
                      minPaddingY
                      testID=""
                    >
                      {buttonRow.buttonOne?.text}
                    </VariableWithSolidButton>
                  )}
                </Box>

                <Box flex={1}>
                  {isLoading ? (
                    <Skeleton height={9} />
                  ) : (
                    <VariableWithSolidButton
                      onPress={buttonRow.buttonTwo?.onPress}
                      variant="fixed-box"
                      size="fb"
                      minPaddingY
                      testID=""
                    >
                      {buttonRow.buttonTwo?.text}
                    </VariableWithSolidButton>
                  )}
                </Box>
                <Box flex={2}>
                  {isLoading ? (
                    <Skeleton height={9} />
                  ) : (
                    <CreditCardButton
                      iconName={buttonRow.buttonCard?.iconName}
                      text={buttonRow.buttonCard?.text}
                      lastNumbers={buttonRow.buttonCard?.lastNumbers}
                      onPress={buttonRow.buttonCard?.onPress}
                      testID=""
                    />
                  )}
                </Box>
              </HStack>
            ) : null}
            {alert ? (
              <Box py={1}>
                <InCardAlert status={alertVariant} description={alert} />
              </Box>
            ) : null}
            {banner ? (
              <MiniBanner
                label={banner.label}
                buttonText={banner.buttonText}
                buttonOnClick={banner.buttonOnClick}
                testID=""
              />
            ) : null}
            {singleRows.length ? (
              <Box>
                <VStack space={2.5}>
                  {singleRows.length === 1 && !isLoading ? <Divider /> : null}
                  {singleRows.map((singleRow: SingleRowType, index: number) => (
                    <>
                      <SingleRow
                        title={singleRow.title}
                        rightIcon={singleRow.rightIcon}
                        icon={singleRow.icon}
                        iconColor={singleRow.iconColor}
                        amount={singleRow.amount}
                        onPress={singleRow.onPress}
                        isLoading={singleRow.isLoading}
                        variant="no-padding-large"
                        variantTitle={singleRow.variantTitle}
                        colorAmount={singleRow.colorAmount}
                        textSize={singleRow.textSize}
                      />
                      {singleRows.length - 1 !== index ? <Divider /> : null}
                    </>
                  ))}
                </VStack>
              </Box>
            ) : null}
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};
