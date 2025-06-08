import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigater from './src/navigators page/Navigater'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigater />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})