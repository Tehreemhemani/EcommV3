import React from 'react'
import {View,Text, ImageBackground,TouchableOpacity} from "react-native";
import Color from '../Constants/Colors';
import IcIcon from "react-native-vector-icons/Ionicons";

const ProductTile =(props) => {
  return (
    <View style={{width:"40%", margin:20, height:250, marginTop:10, marginVertical:15 }}>
        
        <ImageBackground resizeMode='cover' style={{width:'100%', height:150,alignItems:'flex-end'}} 
                          source={{uri: props.image}}>
            <View style={{height:30, width:30, backgroundColor:props.sale? Color.btnColor : "green", borderRadius:500, justifyContent:'center',alignItems:'center' }}>
                <Text style={{fontSize:8, color:Color.primary, fontWeight:'bold'}}>
                    {props.sale? "Sale" : "Regular"}
                </Text>
            </View>
        </ImageBackground>
        
        <View>
            <Text style={{textAlign:"center", marginTop:5, color:Color.btnColor, fontWeight:"bold", letterSpacing:1}}>{props.name}</Text>
            <Text style={{textAlign:"center", marginTop:5, color:Color.btnColor, fontWeight:"bold", letterSpacing:1}}>{props.price}</Text>
        </View>

        <View style={{flexDirection:"row",justifyContent:'space-between', alignItems:'center', marginTop:10}}>
            <TouchableOpacity onPress={props.onAddToCart} style={{height:30,width:'40%',justifyContent:'center',alignItems:'center',backgroundColor:Color.btnColor,borderRadius:10}}>
            {/* <Text style={{textAlign:"center", color:Color.primary, fontWeight:"bold"}}>ADD TO CART</Text> */}
            <IcIcon name ="cart" size={20} color={Color.primary}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.onFav} style={{height:40,width:'40%',justifyContent:'center',alignItems:'center',borderRadius:50}}>
            <IcIcon name ={props.favorite ? "heart" : "heart-outline"} size={20} color={"red"}/>
            </TouchableOpacity>
        </View>
    </View>
    
  )
}

export default ProductTile;
