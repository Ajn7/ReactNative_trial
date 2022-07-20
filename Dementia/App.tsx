import React from 'react'
import { colors } from './src/contents'
import {HomeScreen} from './src/screens/HomeScreen'
import {LandingScreen,WelcomeScreen} from './src/screens'
import {
  StatusBar,
  Text,View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const RootStack=createNativeStackNavigator();
export default function App(){
  return(
   <NavigationContainer>
    <RootStack.Navigator initialRouteName='LandingScreen'>
    <RootStack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
    <RootStack.Screen name='LandingScreen' component={LandingScreen}/>
    <RootStack.Screen name='HomeScreen' component={HomeScreen}/>
    </RootStack.Navigator>
    </NavigationContainer>
   
  )

}

