import { View, Text, StyleSheet } from 'react-native'
import React, { FC, useMemo } from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { Colors } from "../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";
interface Iprops{
    navigation:NavigationProp<ParamListBase>

}


const SplashScreen:FC<Iprops>=({navigation})=>  {
return (
  <View style={styles.body}>
    <Text style={styles.text}>SplashScreen</Text>
  </View>
)
}
const  styles=StyleSheet.create({
      
            
  body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  text:{
      fontSize:RFValue(25),
      fontWeight:'400',
      color:Colors.BLACK
  },

})
export default SplashScreen
