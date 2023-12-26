import React, { FC } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export const ScreenWrapper: FC = ({ children }) => (
  <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
);
