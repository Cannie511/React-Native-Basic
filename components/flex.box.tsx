import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 150
    },
    item1: {
        backgroundColor: 'lightgray',
        padding: 30,
    },
    item2: {
        backgroundColor: 'red',
        padding: 30
    },
    item3: {
        backgroundColor: 'cyan',
        padding: 30
    },
    item4: {
        backgroundColor: 'yellow',
        padding: 30
    }
})

const FlexBox = () => {
  return (
    <View>
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>item 1</Text>
            </View>
            <View style={styles.item1}>
                <Text>item 2</Text>
            </View>
            <View style={styles.item1}>
                <Text>item 3</Text>
            </View>
            <View style={styles.item1}>
                <Text>item 4</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>item 1</Text>
            </View>
        </View>
    </View>
  )
}

export default FlexBox