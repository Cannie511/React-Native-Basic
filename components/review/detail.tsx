import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { OPENSAN_REGULAR } from '../util/const'

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSAN_REGULAR
    }
})

const DetailScreen = () => {
  return (
    <View>
          <Text style={styles.review}>
              Detail screen google
          </Text>
    </View>
  )
}

export default DetailScreen