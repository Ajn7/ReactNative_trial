import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";
const createStyles= ()=> 
    StyleSheet.create({
      
            
        body:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ffffff'
        },
        text:{
            fontSize:RFValue(25),
            fontWeight:'400',
            color:Colors.BLACK,
            top: RFValue(-300), 
             left:  RFValue(-20),
            
            
        },
        bgimage:{
            width:RFValue(200),
            height:RFValue(200),
            position: 'absolute',
             top: RFValue(100), 
             left:  RFValue(80),
                justifyContent: 'center', 
                alignItems: 'center'
        },
        text1:{
            fontSize:RFValue(25),
            fontWeight:'400',
            color:'#99CB36',
            marginLeft:RFValue(-60),
        },
        text2:{
            fontSize:RFValue(25),
            fontWeight:'400',
            color:'#244065',
            marginLeft:RFValue(110),
            marginTop:RFValue(-33)
        },

    })


export default createStyles