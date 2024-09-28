import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyle } from '../util/const'

const styles = StyleSheet.create({
  homeLayout: {
    padding: 10
  },
  homeFont: {
    fontSize: 30,
  }
})

const HomeScreen = () => {
  return (
    <View style={styles.homeLayout}>
        <Text style={[styles.homeFont, globalStyle.globalFont]}>
            Freet Home screen
      </Text>
      <Button title='Trang chi tiết' onPress={()=>alert('Please wait, routing...')}/>
    </View>
  )
}

export default HomeScreen