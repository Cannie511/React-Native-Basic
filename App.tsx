import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';
import { OPENSAN_REGULAR } from './components/util/const';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
const App = () => {
  const [loaded, error] = useFonts({
    [OPENSAN_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])
  
  if (!loaded && !error) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title:'Trang chủ'}} name='Home' component={HomeScreen}/>
        <Stack.Screen options={{title:'Chi tiết'}} name='Detail' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App