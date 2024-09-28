import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: 'Cannie'
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