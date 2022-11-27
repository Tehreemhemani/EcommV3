import React from 'react'
import {View,Text, SafeAreaView,TouchableOpacity,Image,FlatList,ImageBackground,ScrollView} from "react-native";
import {useSelector} from "react-redux";
import MyHeader from '../Components/MyHeader';


const AllCategoryScreen = (props) => {

    const {AllCategories,AllProducts} = useSelector((state) => state.data)

 
  return ( 
    <SafeAreaView >
      {/* <MyHeader/> */}
      <View style={{ paddingHorizontal:10}}>
        <FlatList 
        keyExtractor={(item, index) => index.toString()}
        data = {AllCategories}
        renderItem= {(itemData) => {
          return (
            <TouchableOpacity
            onPress={()=>{ 
              props.navigation.navigate("ProductsScreen",{
                  catId:itemData.item.id
              });
            }}
                    style={{height:120,width:'100%',marginHorizontal:5,backgroundColor:"red",borderRadius:10,overflow:'hidden',marginTop:10, marginVertical:10}}>
                        <ImageBackground style={{height:'100%',width:'100%',resizeMode:'cover'}}
                            source={{uri: itemData.item.image}}>
                            <View style={{height:'100%', width:'100%',backgroundColor:'#00000069',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:15, color:'white',fontWeight:'bold'}}>{itemData.item.name}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
          )
        }}
        />

       </View>
    </SafeAreaView>
  )
}

export default AllCategoryScreen;