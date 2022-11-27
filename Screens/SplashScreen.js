import React, {useEffect} from 'react';
import {View, Image,ImageBackground,Text} from 'react-native';
const SplashScreen = props => {
    useEffect(() => {
      setTimeout(() => {
        props.navigation.navigate('AuthNavigator');
        //props.navigation.navigate('HomeScreen',{name:"Tehreem Fatima"});
      }, 3000);
    }, []);

  return (
    <View style={{borderColor:"green",borderWidth:5}}>
            <ImageBackground
            source={require("../Assets/Logo/cover.jpg")}
            resizeMode="cover"
            style={{height:"100%" ,width: "100%"}}>
              

<View style={{marginTop:200}}>
            <Image 
            source={require("../Assets/Logo/logo.jpg")}
            resizeMode="contain"
            style={{height:250 ,width:250, alignSelf:"center",borderColor:"green",borderWidth:5}}
            />

<View style={{marginTop:50}}>
            <Text style={{
                textAlign:"center",
                fontSize:20,
                fontWeight:"800",
                color:"green",
                fontFamily:"verdana",
                textDecorationLine:"underline"
                }}> "We Deliver Fresh and Healthy Foods" </Text>

            </View>

            </View>
      

      <View>

         </View>

              </ImageBackground>
              </View>

              

              


   

    
  );
};

export default SplashScreen;
