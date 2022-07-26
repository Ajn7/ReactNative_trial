import { View, Text, ImageBackground, Image } from 'react-native'
import React, { FC, useMemo } from 'react'
import createStyles from './style'
import { SPLASHSCREEN } from '../../assets/images'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
interface Iprops{
    navigation:NavigationProp<ParamListBase>

}


  const SplashScreen:FC<Iprops>=({navigation})=>  {
    const styles=useMemo(()=>createStyles(),[])
  return (
    <View style={styles.body }>
    <Image source={SPLASHSCREEN} style={styles.bgimage}/>
    <Text style={styles.text1}>Dementia</Text>
    <Text style={styles.text2}>Care</Text>
    </View>
  )
}
export default SplashScreen;