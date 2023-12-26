import React, { FC } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Box, Center, VStack } from 'native-base';

import useFeatureFlags from '@hooks/useFeatureFlags';

import { ListCardProps } from './types';
import {
  CASHBACK,
  FLAG_DETAIL_ACTIVITY_V3,
  QR_CREDIT,
  QR_DEBIT,
  SETTLEMENT_PAYMENT_CLIENT,
  TRANSACTION_DETAIL_ROUTE_V2,
  TRANSACTION_DETAIL_ROUTE_V3,
  B2B_PHONE_RECHARGE,
  LOAN_INSTALLMENT_REVERSE,
} from '../../constants';
import { InCardButton } from '../button';
import { Divider } from '../divider';
import { Illustration } from '../illustrations';
import { ActivityRow } from '../row';
import { ActivityRowSkeleton } from '../row/skeleton';
import { InCardRowSkeleton } from '../row/skeleton/in-card-row-skeleton';
import { Text } from '../text';

export const ListCard: FC<ListCardProps> = ({
  /* array of objects */
  data,
  /* onpress button inCard  */
  bottomOnPress,
  /* label button inCard */
  bottomLabel,
  /* route to navigate when item is pressed */
  routeItemScreen,
  /* if try navigate to another stack, use this prop */
  routeItemStack,
  /* title card  */
  title,
  /* if loading true, show skeleton */
  isLoading,
  /* quantity of skeletons to show  */
  skeletonLoadingItems = 3,
  /* text to show when card is empty */
  emptyStateText,
  /* Select Illustration to show */
  emptyIlustration = 'EmptyBag',
  /** icon for rigth side */
  rightIcon,
  /** onPress of a item list */
  onListItemPress,
  /** custom a item list */
  customItemList,
}) => {
  const loadingArray = Array.from(Array(skeletonLoadingItems).keys());

  const navigation = useNavigation();

  const { hasFeature } = useFeatureFlags();
  const hasDetailActivityV3Active = hasFeature(FLAG_DETAIL_ACTIVITY_V3);

  const routeNavigation = (
    id?: number | string,
    transactionType?: string,
    transactionTitle?: string,
  ): void => {
    if (routeItemStack) {
      if (id && transactionType) {
        const navigationObj = {
          screen: [
            QR_CREDIT,
            CASHBACK,
            QR_DEBIT,
            B2B_PHONE_RECHARGE,
            LOAN_INSTALLMENT_REVERSE,
          ].includes(transactionType)
            ? TRANSACTION_DETAIL_ROUTE_V2
            : routeItemScreen,
          params: { id, transactionType, title: transactionTitle },
        };
        if (
          [SETTLEMENT_PAYMENT_CLIENT].includes(transactionType) &&
          hasDetailActivityV3Active
        ) {
          navigationObj.screen = TRANSACTION_DETAIL_ROUTE_V3;
        }
        navigation.navigate(routeItemStack, { ...navigationObj });
      }
      navigation.navigate(routeItemStack, { routeItemScreen });
    } else {
      if (routeItemScreen) {
        if (id) {
          navigation.navigate(routeItemScreen, { id });
        }
        navigation.navigate(routeItemScreen);
      }
    }
  };

  return (
    <Box variant="card-list">
      <Box pb={3} pt={4} pl={3}>
        {!isLoading ? (
          <Text variant="bodyBold-md">{title}</Text>
        ) : (
          <InCardRowSkeleton variant="onlyTitle" />
        )}
      </Box>
      <Divider />
      {!isLoading && !data?.length && (
        <Center pb={8} pt={6}>
          <VStack space={4}>
            <Center>
              <Illustration name={emptyIlustration} />
            </Center>
            <Text textAlign="center" variant="body-sm">
              {emptyStateText}
            </Text>
          </VStack>
        </Center>
      )}
      {isLoading
        ? loadingArray.map((index) => {
            return (
              <>
                <ActivityRowSkeleton key={`skeleton-${index}`} />
                {loadingArray.length - 1 !== index ? <Divider /> : null}
              </>
            );
          })
        : data?.map((item, index) => {
            // if (customItemList) return customItemList(item, index)
            return (
              <>
                {customItemList ? (
                  customItemList(item)
                ) : (
                  <ActivityRow
                    key={`activity-row${index * item.id}-${item.amount}`}
                    title={item.title || ''}
                    description={item.description || ''}
                    date={item.date || ''}
                    amount={item.amount || 0}
                    status={item.status}
                    icon={item.icon}
                    onPress={() =>
                      onListItemPress
                        ? onListItemPress(item)
                        : routeNavigation(
                            item.id,
                            item.transactionType,
                            item.title,
                          )
                    }
                    rightIcon={rightIcon}
                    imgUri={item.imgUri || ''}
                  />
                )}
                {data.length - 1 !== index ? <Divider /> : null}
              </>
            );
          })}
      {bottomLabel && bottomOnPress && data.length ? (
        <Box>
          <Divider />
          <Box px={3}>
            <InCardButton
              testID="list-card-bottom-button"
              label={bottomLabel}
              onPress={() => bottomOnPress?.()}
            />
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
