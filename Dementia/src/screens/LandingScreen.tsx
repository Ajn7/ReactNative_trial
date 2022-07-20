import React from 'react'
import {
  StyleSheet,
  Text,View,Image,Dimensions,StatusBar
} from 'react-native'
import { colors,images } from '../contents'
import { display } from '../utility'

const screenWidth=Dimensions.get('screen').width
export const LandingScreen=()=>{
  return(
    <View style={styles.container}>
            <View style={styles.navigation}>
            
            </View>
            <View style={styles.body}>
                <StatusBar barStyle='light-content' backgroundColor={colors.white}/>
               
                <Image source={images.SplashScreen} style={styles.icon} resizeMode="contain"/>
                <Text style={styles.txt}> Dementia Care </Text>
                <Text></Text>
              
            </View>
            <View style={styles.footer}>
                <Text></Text>
            </View>
    
        </View>
  )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(242,242,242)'

    },
    navigation:{
        flex:2,
        backgroundColor:'#ffffff'
    },
    body:{
        flex:9,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    footer:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    icon:{
        width:display.setHeight(40),
        height:display.setWidth(40),
    },
    txt:{
    
       // width:screenWidth-00,
       // borderBottomColor:'red',
       // borderBottomWidth:0.5,
        padding:50,
        marginBottom:200,
        alignItems:'center',
        fontFamily:'serif',
        fontSize:23,
        textAlign:'justify',
        fontWeight:'bold',
        justifyContent:'center',
        color:'#000000'


    },
    top:{
        height:100,
        width:100,
        left: 0,
        top: 0,
    },
})
