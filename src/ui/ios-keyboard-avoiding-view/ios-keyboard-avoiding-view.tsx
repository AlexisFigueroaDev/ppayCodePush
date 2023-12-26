import React, { FC } from 'react'
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
})

export const IOSKeyboardAvoidingView: FC = ({ children }) => {
  if (Platform.OS === 'android') {
    return <>{children}</>
  }

  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  )
}
