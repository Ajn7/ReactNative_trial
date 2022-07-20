import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import{
    SplashScreen,
    DataScreen,
    HomeScreen,
    SigninScreen,
    StartScreen,
    SignupScreen
}from '../screens';
import { NavigationContainer } from '@react-navigation/native'
export type MainStackParamList={
    SplashScreen:undefined;
    DataScreen:undefined;
    HomeScreen:undefined;
    SigninScreen:undefined;
    StartScreen:undefined;
    SignupScreen:undefined;

}

const MainStack=createNativeStackNavigator<MainStackParamList>();
export default function Screens(){
    return(
        <NavigationContainer>
            <MainStack.Navigator
            initialRouteName='SplashScreen'
             screenOptions={{
                headerShown: false,
                }}>
                    <MainStack.Screen name="SplashScreen" component={SplashScreen}/>
                    <MainStack.Screen name="HomeScreen" component={HomeScreen}/>
                    <MainStack.Screen name="StartScreen" component={StartScreen}/>
                    <MainStack.Screen name="SignupScreen" component={SignupScreen}/>
                    <MainStack.Screen name="SigninScreen" component={SigninScreen}/>
                    <MainStack.Screen name="DataScreen" component={DataScreen}/>
                  

            </MainStack.Navigator>
             

        </NavigationContainer>

    )

}