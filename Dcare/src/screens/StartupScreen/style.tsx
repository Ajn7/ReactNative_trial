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
            top: RFValue(-450), 
            left:  RFValue(-10),
            
            
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
            fontWeight:'300',
            color:Colors.BLACK,
            textAlign:'center',
            marginHorizontal:RFValue(50),
            marginBottom:RFValue(-400)
            
        },
        footer:{
    
            boottom:0,
            width:'100%',
            marginBottom:RFValue(-400)
            
            
            
        },
        logintext:{
            fontSize:RFValue(20),
            marginTop:RFValue(20),
            color:Colors.GREY,
            marginBottom:RFValue(50),
            textAlign:'center',
            fontWeight:'500'

        }

    })


export default createStyles