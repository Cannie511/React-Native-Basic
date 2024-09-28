import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    'Cannie': require('./assets/fonts/OpenSans-Regular.ttf')
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
    <View>
      <HomeScreen />
      <DetailScreen />
      <AboutScreen />
    </View>
  )
}

export default App