import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { create } from "react-test-renderer";
import { Colors } from "../constants/colors";
const createStyles=()=>StyleSheet.create({
    button:{

        width:'70%',
        alignSelf:'center',
        padding:RFValue(10),
        alignItems:'center',
        borderRadius:RFValue(10),
        
    

    },
    text:{
        color:'#ffffff',
        fontSize:RFValue(22),



    }

});
export default createStyles