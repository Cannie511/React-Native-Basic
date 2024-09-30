import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { globalStyle, OPENSAN_REGULAR } from '../util/const'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../types/route'
import starIcon from '../../assets/images/star.png';
import reactBackground from '../../assets/images/reactnavtive.jpg';
const styles = StyleSheet.create({
  review: {
      fontSize: 30,
      fontFamily: OPENSAN_REGULAR
  },
  reviewText: {
    fontSize: 25,
    fontFamily:OPENSAN_REGULAR
  }
})

const DetailScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList>>();
  return (
      <View style={[globalStyle.homeLayout]}>
        <Text style={styles.reviewText}>Tiêu đề: #{route.params?.id} {route.params?.title}</Text>
        <Text style={styles.reviewText}>Đánh giá: {route.params?.stars} <Image source={starIcon} style={{height:30, width:30}} /></Text>
        <Button title='Back home' onPress={()=>navigation.navigate('Home')}/>
      </View>
  )
}

export default DetailScreen