import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyle } from '../util/const'

const styles = StyleSheet.create({
  about: {

  }
});

const AboutScreen = () => {
  return (
      <View>
          <Text style={[styles.about, globalStyle.globalFont]}>
              About screen
          </Text>
    </View>
  )
}

export default AboutScreen