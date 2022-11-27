import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image,TouchableOpacity, ActivityIndicator} from 'react-native';
import Colors from "../../Constants/Colors";
import MyFormInput from '../../Components/MyFormInput';
import HomeScreen from '../HomeScreen';
import { useDispatch, useSelector } from 'react-redux';
import * as AuthAction from '../../Store/DataAction'; 
import{LoginButton,AccessToken,GraphRequest} from "react-native-fbsdk"



const LoginScreen = (props) => {
  const loader = useSelector(state => state.data.loader)
  const userSuccData = useSelector(state => state.data.userSuccData)
  const userFailData = useSelector(state => state.data.userFailData)

  const [textSecure, setTextSecure] = useState(true);
  const dispatch = useDispatch();
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [fontFields, setFormFields] = useState({
    phoneNumber:'',
    password:''
  })

  useEffect(()=>{
    if (userFailData) {
      alert(userFailData.Message)
    }
  },[userFailData])

  useEffect(()=>{
    if (userSuccData) {
      props.navigation.navigate("HomeNavigator",{userName: fontFields.phoneNumber})
    }
  },[userSuccData])

  // const loginHandler=()=>{   
    //alert("Tehreem")
    
     //dispatch(AuthAction.UserLoginAction())
    //props.navigation.navigate("HomeNavigator",{name:"Welcome! Tehreem Fatima"});
   
//      if(fontFields.phoneNumber === ""){
//          alert("Phone Number is missing");
//      }
//      else if (fontFields.password===""){
//          alert("Password is missing");
//      }
//      else if (fontFields.phoneNumber==="123" && fontFields.password==="123"){
//          props.navigation.navigate("HomeNavigator",{userName: fontFields.phoneNumber});
//          //alert("success");
//      }
//      else{
//           alert("Please enter valid Phone Number and Passowrd..");
//      }
    
//  };

    return (
        <SafeAreaView>


             <View 
        style={{
          flex:1,
          height: '30%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical:2,
          marginTop:100
        }}>
        <Image source={require('../../Assets/Login/icon.jpg')}
         />
        
      </View>

      


      <View style={{height: '50%', width: '100%', paddingHorizontal:20,marginTop:100,}}>

        <MyFormInput 
        keyboardType='numeric' 
        title="Phone Number"
        placeHolder="123456789"
        onChangeText={(text)=>{
          setFormFields({
            ...fontFields, phoneNumber:text
          })
      }} 
      />

        <MyFormInput
          keyboardType='numeric' 
          iconName={textSecure ? 'eye' : 'eye-off'}
          secure={textSecure}
          eyeShown={true}
          title="Password"
          placeHolder="Plese enter your password here"
          onPress={() => setTextSecure(!textSecure)}
          onChangeText={(text) => {
            setFormFields({
              ...fontFields, password:text
            })
        }}
        />
{/*  
      <View style={{marginTop:0}}>
          <MyAuthBtn  
              onPress={console.log("asds")}
              btnTitile="LOGIN"/>
      </View> */}

       <View style={{marginTop:40}}>
        {loader ? <ActivityIndicator size={"large"} color={"red"}/> :
        <TouchableOpacity onPress={()=>{ 
          loginHandler()
          // console.log(fontFields);
          dispatch(AuthAction.UserLoginAction(fontFields)) 
         }}
           style={{height:50, width:'100%', backgroundColor:"red",borderRadius:10,alignItems:'center', justifyContent:'center',marginTop:10}}>
           <Text style={{fontSize:20, color:Colors.primary}}>LOGIN</Text>
         </TouchableOpacity>
        }

        
        <Text style={{fontSize:15, fontWeight:"bold" ,marginTop:-100, textAlign:"center"}}>Forgot Password?</Text>
      </View>

      </View>
      
      <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", color:"black", marginTop:-20
      }}>
        Don't have an account?
      </Text>
      
      <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")} >
        <Text style={{ fontSize: 16, fontWeight: "500", marginTop:5, textAlign: "center", color:"red",marginLeft:25
      }}>     SignUp        </Text>
        </TouchableOpacity> 

        <LoginButton 
        style={{height:40,width:250,marginHorizontal:80,marginTop:20}}
        
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>

        
         

 


       

        
  
        </SafeAreaView>
    )
}

export default LoginScreen;