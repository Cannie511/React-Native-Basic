import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { backgroundHeader, OPENSAN_REGULAR } from './components/util/const';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AppNavigation } from './components/navigation/app.navigation';
import { SafeAreaView } from 'react-native';

SplashScreen.preventAutoHideAsync();

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
    <SafeAreaView style={{flex:1, backgroundColor:backgroundHeader}}>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App