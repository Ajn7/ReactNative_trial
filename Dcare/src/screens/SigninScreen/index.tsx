import { View, Text } from 'react-native'
import React, { FC, useMemo } from 'react'
import createStyles from './style'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
interface Iprops{
    navigation:NavigationProp<ParamListBase>

}


  const SigninScreen:FC<Iprops>=({navigation})=>  {
    const styles=useMemo(()=>createStyles(),[])
  return (
    <View style={styles.body }>
      <Text style={styles.text}>homeScreen</Text>
    </View>
  )
}
export default SigninScreen