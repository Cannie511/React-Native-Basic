import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { backgroundHeader, globalStyle } from '../util/const';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: backgroundHeader,
        padding:10
    },
    headerText: {
        flex: 1,
        textAlign:'center'
    },
    menuIcon: {
        fontSize:30
    },
    opacityNone: {
        opacity:0
    }
})

const AppHeader = () => {
    const navigation:any = useNavigation();
    return (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <MaterialIcons style={styles.menuIcon} name="menu" size={24} color="black" />
            </TouchableOpacity>
            <Text style={[globalStyle.globalFont, styles.headerText]}>Freet</Text>
            <MaterialIcons style={[styles.opacityNone, styles.menuIcon]} name="menu" size={24} color="black" />
        </View>
    )
}

export default AppHeader