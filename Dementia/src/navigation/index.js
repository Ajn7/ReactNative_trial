import React from 'react'

import {LandingScreen,WelcomeScreen} from '../screens'

const Navigators=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headershown:false}}>
            <Stack.Screen name='Welcome' component={WelcomeScreen}/>
            <Stack.Screen name='Landing' component={LandingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    ) 
}
export default Navigators