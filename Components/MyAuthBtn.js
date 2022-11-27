import React from "react"
import {View,Text, TouchableOpacity} from "react-native";
import Colors from "../Constants/Colors";

const MyAuthBtn = (props) =>{
    return(
        <TouchableOpacity 
          onPress={props.onPress}
            style={{
                height:50,
                width:'80%',
                backgroundColor:"red", 
                borderRadius:20,
                marginTop:'10%',
                justifyContent:'center',
                alignItems:'center',
                marginLeft:30

            }}>
            <Text style={{
                fontSize:24, fontWeight:'bold',color:'white'
            }}>
                {props.btnTitile}
            </Text>
     
        </TouchableOpacity>
    )
}

export default MyAuthBtn;