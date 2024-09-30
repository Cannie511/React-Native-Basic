import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../types/route';
import HomeScreen from '../review/home';
import DetailScreen from '../review/detail';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../review/about';
import AppHeader from './app.header';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();
const HomeLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{header:()=><AppHeader/>}} name='Home' component={HomeScreen}/>
      <Stack.Screen options={{title:'Chi tiết'}} name='Detail' component={DetailScreen}/>
    </Stack.Navigator>
  )
}

export const AppNavigation = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen options={{ title:'Trang chủ', header:()=><></> }} name='HomeNavigation' component={HomeLayout} />
      <Drawer.Screen options={{ title: 'Ứng dụng', header:()=><AppHeader/> }} name='About' component={AboutScreen} />
    </Drawer.Navigator>
  )
}
export default AppNavigation
