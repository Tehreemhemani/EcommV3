import React from "react";
import {View,Text, Button, TouchableOpacity,Image} from "react-native";
import {NavigationContainer,useNavigation } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import IcIcon from "react-native-vector-icons/Ionicons";

import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from "../Screens/Auth/LoginScreen";
import SignUp from "../Screens/Auth/SignUp";
import HomeScreen from "../Screens/HomeScreen";
import AllCategoryScreen from "../Screens/AllCategoryScreen";
import FavoriteScreen from "../Screens/FavoriteScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import ProductsScreen from "../Screens/ProductsScreen";
import Colors from "../Constants/Colors";
import * as DataAction from "../Store/DataAction";
import {useSelector,useDispatch} from "react-redux";



const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const AuthNavigator=()=>{
    return(
        <Stack.Navigator 
        screenOptions={{headerShown:false}}
        initialRouteName="SplashScreen">
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
        </Stack.Navigator>
    )
}

const HomeNavigator =() =>{
    return (
        <Bottom.Navigator tabBarOptions={{showLabel:false
          }}>
            <Stack.Screen options={{
                tabBarIcon:({ focused })=>(
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <IcIcon color={focused ? Colors.btnColor : "gray"} size={focused ? 30 : 20} name='home-sharp' />
                    </View>
                )
            }}
            name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen options={{ tabBarLabel:"Categories", headerTitle:"Categories",
                tabBarIcon:({ focused })=>(
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <IcIcon color={focused ? Colors.btnColor : "gray"} size={focused ? 30 : 20} name='list' />
                    </View>
                ),
                tabBarLabel:() => (headerTitle="Cat"), 
            }} screenOptions={{tabBarLabel:()=>(headerTitle="cat", tabBarLabel="cat")}}
            name="AllCategoryScreen" component={AllCategoryScreen}/>

            <Stack.Screen options={{
                tabBarIcon:({ focused })=>(
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <IcIcon color={focused ? Colors.btnColor : "gray"} size={focused ? 30 : 20} name='cart' />
                    </View>
                )
            }}name="CartScreen" component={CartScreen}/>
            <Stack.Screen options={{
                tabBarIcon:({ focused })=>(
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <IcIcon color={focused ? Colors.btnColor : "gray"} size={focused ? 30 : 20} name='heart-sharp' />
                    </View>
                )
            }}name="FavoriteScreen" component={FavoriteScreen}/>
            <Stack.Screen options={{
                tabBarIcon:({ focused })=>(
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <IcIcon color={focused ? Colors.btnColor : "gray"} size={focused ? 30 : 20} name='md-person' />
                    </View>
                )
                ,headerTitle:"Favourite",
            }}name="ProfileScreen" component={ProfileScreen}/>
            

        </Bottom.Navigator>
    )
}

 


const NavigatorScreen = (props) => { 
    const dispatch = useDispatch()
    return (
        <NavigationContainer>
            <Stack.Navigator //screenOptions={{headerShown:false}}
            >
                <Stack.Screen options={{headerShown:false}} name="SplashScreen" component={SplashScreen}/>
                <Stack.Screen options={{headerShown:false}} name="AuthNavigator" component={AuthNavigator}/>
                <Stack.Screen  options={{headerTitle: "Home",
                headerTitleStyle:{color:Colors.primary}, 
                headerRight: () => (<TouchableOpacity onPress={()=>{ 
                    props.navigation.navigate("CartScreen");
                  }}
                  >
                <View style={{marginRight:10}}>
                
                    <IcIcon name='cart' size={30} color={Colors.primary}/>
                    
                    
                    </View>
                    </TouchableOpacity>),
                headerStyle:{backgroundColor:'green'},
               
                 }}
                  name="HomeNavigator" component={HomeNavigator}/>
                <Stack.Screen options={{headerTitle:"Products",
                headerTitleStyle:{color:"green"},
                headerStyle:{backgroundColor:'green'}
            }}
                name="ProductsScreen" component={ProductsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigatorScreen;