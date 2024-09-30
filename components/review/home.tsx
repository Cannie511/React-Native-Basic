import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/route';

const styles = StyleSheet.create({
  homeLayout: {
    padding: 10
  },
  homeFont: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom:15
  },
  reviewItem: {
    padding: 15,
    backgroundColor: 'lightgray',
    marginBottom: 15,
    borderRadius: 10
  }
})

interface IReview {
  id: number;
  title: string;
  stars: number;
}

const HomeScreen = () => {
  const [reviews, setReview] = useState<IReview[]>([
    { id: 1, title: 'tự học React Native', stars: 5 },
    { id: 2, title: 'Master React Native', stars: 3 },
  ]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <View style={styles.homeLayout}>
      <Text style={[styles.homeFont]}>
        Review list
      </Text>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={item => item.id + ''}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id, title: item.title, stars: item.stars})}>
                <View style={styles.reviewItem}>
                  <Text>{item.title}</Text>
                  <Text>
                    ({item.stars})
                    
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      {/* <Button title='Chi tiết' onPress={()=>navigation.navigate('Detail')}/> */}
    </View>
  )
}

export default HomeScreen