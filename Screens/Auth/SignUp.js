import React, { Component } from "react";
import { View, Text, Image, TextInput,TouchableOpacity, ImageBackground} from "react-native";
import MyFormInput from "../../Components/MyFormInput";
import Colors from "../../Constants/Colors";
import IcIcon from "react-native-vector-icons/Ionicons";
import MyAuthBtn from "../../Components/MyAuthBtn";


const SignUp = (props) => {


    
    const SignupHandler=()=>{
        props.navigation.navigate("HomeNavigator");
};

  return(
                 <View style={{   
                 height: "100%", 
                 width: "95%",
                 paddingHorizontal:10,
                 marginEnd:5,
                 marginTop:"4%",
                 backgroundColour:"white",
                 marginHorizontal:10,

                 
                 
                 
                 }}>

<Image source={require('../../Assets/SignUp/icon.png')}
style={{height:200,width:200,marginLeft:70}}
         />

         

<MyFormInput 
        
        keyboardType='numeric' 
        placeHolder="Username"
        IconName={'home'}
    
        />
        
    

<MyFormInput 
        keyboardType='numeric' 
        placeHolder="Password"
        
      />

<MyFormInput 
        keyboardType='numeric' 
        placeHolder="phone"
        
      />

<MyFormInput 
        keyboardType='numeric' 
        placeHolder="Date of Birth"
        
      />

<MyFormInput 
        keyboardType='numeric' 
        placeHolder="Email"
        
      />

    {/* <Text style={{color:"white",fontWeight:'500', fontSize:20}}>Signup for free account</Text> */}

   

<View>

<View style={{marginTop:0}}>
                <MyAuthBtn onPress={SignupHandler}
                btnTitile="Sign Up" />
            </View>
    
{/* <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", color:"white", marginTop:40
      }}>
        By clicking Signup you agree to the 
        folowing 

      </Text>

      <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", color:"red"
      }}>
        Terms and conditions

      </Text> */}
</View>







     </View> 

     


            
);

};


export default SignUp;

