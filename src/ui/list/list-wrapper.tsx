/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { Box, FlatList, HStack } from 'native-base'

import { TEXTS } from '@constants'
import { EmptyState } from '@ui/empty-state'

import { ListWrapperProps } from './types'
import { Divider } from '../divider'
import { Text } from '../text'

const ListWrapper: FC<ListWrapperProps> = ({
  /* list title */
  title,
  /* right button label */
  label,
  /* if loading true, show skeleton */
  isLoading,
  /* array of objects */
  data,
  /** children component */
  children,
  /** skeleton component */
  skeletonComponent,
  /** function to be executed when empty state button is pressed or new transactions are loaded */
  onLoadTransactions,
  /** if has data error */
  hasError,
  /** if has data error */
  endOfList,
}) => {
  let endReachRunning = false

  const onEndReached = (): undefined => {
    if (!endReachRunning && !endOfList) {
      endReachRunning = true
      onLoadTransactions()
      return undefined
    }
    return undefined
  }

  const renderFooter = (): React.ReactElement | null => {

    if (data.length > 10 && endOfList) {
      return (
        <>
          <Divider />
          <Box pt={8} pb={24}>
            <EmptyState
              description={TEXTS.LIST_WRAPPER_FOOTER_MESSAGE}
              illustration="FinishFlag"
              buttonText=""
              onPressButton={() => {}}
            />
          </Box>
        </>
      )
    }
    if (isLoading && data.length > 0) {
      return (
        <>
          <Divider />
          <Box mb={4}>{skeletonComponent}</Box>
        </>
      )
    }
    return null
  }

  const renderLoading = (): React.ReactElement | null => {
    if (isLoading) {
      return (
        <>
          {skeletonComponent}
          <Divider />
          {skeletonComponent}
          <Divider />
          {skeletonComponent}
        </>
      )
    }
    return null
  }

  const renderHeader = (): React.ReactElement | null => {
    if (title || label) {
      return (
        <HStack style={styles.container}>
          <Box w={140} pb={3} pt={4} pl={5}>
            <Text variant="bodyBold-md">{title}</Text>
          </Box>
          <Box w={140} pb={3} pt={4} pr={5}>
            <Text textAlign="right" variant="bodyBold-sm" color="primary">
              {label}
            </Text>
          </Box>
        </HStack>
      )
    }
    return null
  }

  return (
    <>
      {hasError ? (
        <Box mt={48}>
          <EmptyState
            description={TEXTS.ERROR_STATE_ACTIVITY}
            illustration="Unplugged"
            buttonText="Reintentar"
            onPressButton={onLoadTransactions}
          />
        </Box>
      ) : (
        <FlatList
          bounces={false}
          data={data}
          renderItem={children}
          // eslint-disable-next-line react/no-unstable-nested-components
          ListEmptyComponent={renderLoading}
          // eslint-disable-next-line react/no-unstable-nested-components
          ListFooterComponent={renderFooter}
          ListHeaderComponent={renderHeader}
          onEndReached={onEndReached}
          onMomentumScrollBegin={() => (endReachRunning = false)}
          ItemSeparatorComponent={Divider}
          keyboardShouldPersistTaps="handled"
          onEndReachedThreshold={0.1}
          backgroundColor="white"
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
  },
})

export default React.memo(ListWrapper)
