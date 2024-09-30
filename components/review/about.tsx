import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyle } from '../util/const'

const styles = StyleSheet.create({
  about: {

  },
  copyright: {
    fontSize:15
  }
});

const AboutScreen = () => {
  return (
    <View style={globalStyle.homeLayout}>
        <Text style={[globalStyle.globalFont,styles.copyright]}>
            Copyright &copy; 2024 by Freet Corporation
        </Text>
    </View>
  )
}

export default AboutScreen