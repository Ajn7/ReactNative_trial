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
      <Text style={styles.text}>Dementia Care</Text>
    <Image source={SPLASHSCREEN} style={styles.bgimage}/>
    =
    </View>
  )
}
export default SplashScreen;