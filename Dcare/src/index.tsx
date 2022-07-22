import { View, Text } from 'react-native'
import React,{Component, useEffect} from 'react'
import Screens from './navigation'
import SplashScreen from 'react-native-splash-screen'
export default function App() {
 useEffect(()=>{
  SplashScreen.hide();
 },[])
    
  return (
    
    <View style={{flex:1}}>
      
      <Screens/>
    </View>
  )
}

