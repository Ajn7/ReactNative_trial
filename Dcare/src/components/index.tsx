import React, { FC, useMemo } from "react";
import { Pressable, StyleProp,TextStyle,ViewStyle,Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import createStyles from "./styles";


interface Iprops{
    title:string;
    onPress?:()=>void;
    disabled?:boolean;
    buttonStyle?:StyleProp<ViewStyle>;
    textStyle?:StyleProp<TextStyle>
}
const Button:FC<Iprops>=({title,onPress,disabled,buttonStyle,textStyle})=>{
    const styles=useMemo(()=>createStyles(),[])
    return(
        <Pressable
        style={[
            styles.button,
            {
                backgroundColor:disabled? Colors.GREY:Colors.ORANGE
            },
            buttonStyle
        ]}
            onPress={onPress}
            disabled={disabled}
             >
                <Text style={[styles.text,textStyle]}>
                {title}
                </Text>
                
        </Pressable>

    )

}