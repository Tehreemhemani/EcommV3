import React from 'react';
import {View, Text, TextInput,SafeAreaView} from 'react-native';
import Colors from "../Constants/Colors";

const MyInput = (props) =>{
    return(
        //Main View
        <SafeAreaView>
            <View style={{marginTop:-30}}>
            <Text style={{color:Colors.btnColor,
                          fontWeight:"bold",
                          fontSize:10}}>
                {props.title}
                </Text>
            
            <View 
                style={{height:50,
                width:"100%",
                borderRadius:50,
                BorderColor:"green",
                borderWidth:1.5,
                paddingHorizontal:10,
                marginTop:10, 
                backgroundColor:'white'
                }}>
                <TextInput
                keyboardType={props.keyboardType} 
                secureTextEntry={props.secureTextEntry}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                    style={{width:"100%",
                            height:"100%",
                            fontSize:20,
                            color:Colors.btnColor,
                            
                            }}>

                </TextInput>
            </View>  

            <View  >
            <Text style={{color:Colors.btnColor,
                          fontWeight:"bold",
                          fontSize:20}}>
                {props.signup}
                </Text>
            </View>
        </View> 
        </SafeAreaView>
         //Main View closed
    )
}

export default MyInput;