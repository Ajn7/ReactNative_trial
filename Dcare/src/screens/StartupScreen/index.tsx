import { View, Text, Image, ImageBackground, Button, Pressable } from 'react-native'
import React, { FC, useMemo } from 'react'
import createStyles from './style'
import { SPLASHSCREEN } from '../../assets/images'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
interface Iprops{
    navigation:NavigationProp<ParamListBase>

}


  const StartupScreen:FC<Iprops>=({navigation})=>  {
    const styles=useMemo(()=>createStyles(),[])
  return (
    <View style={styles.body }>
      <Text style={styles.text}>Dementia Care</Text>

      <ImageBackground source={SPLASHSCREEN} style={styles.bgimage}>
      <Text style={styles.text1}>Startup</Text>
      
      </ImageBackground>
      <View style={styles.footer}>
        <Button 
        title='Get Started'
        disabled={false}
        onPress={()=>navigation.navigate('SignupScreen')}
        />
        <Pressable  onPress={()=>navigation.navigate('SigninScreen')}>
          <Text>or Login</Text>
        </Pressable>

      </View>
      </View>
  )
}
export default StartupScreen