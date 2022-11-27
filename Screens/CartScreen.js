import React from 'react'
import {View,Text, SafeAreaView,FlatList,Image, TouchableOpacity} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import MyHeader from '../Components/MyHeader';
import Colors from '../Constants/Colors';
import ProductTile from '../Components/ProductTile';
import Icon from 'react-native-vector-icons/AntDesign';
import * as CartAction from '../Store/DataAction';

const CartScreen = (props)=>  {
  const {CartItem,TotalAmount} = useSelector((state) => state.data)
  const dispatch = useDispatch()

  console.log(CartItem,"item cart")
  return (
    <SafeAreaView>
      <MyHeader/>
       <View style={{height:'75%', width:'100%', paddingHorizontal:15, marginTop:10}}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={CartItem}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) =>{
            return (
              <View style={{height:62, width:'100%', backgroundColor:'white', marginBottom:5, borderWidth:0.5, borderColor:"lightgray", flexDirection:'row', alignItems:'center', paddingHorizontal:5,justifyContent:'space-between'}}>
                 <View>
                  <Image style={{height:59,width:50, borderRadius:10, resizeMode:'contain'}} source={{uri : itemData.item.image}}/>
                 </View>
                 <View>
                  <Text>{itemData.item.name}</Text>
                  <Text>{itemData.item.price + '/- Rs'}</Text>
                 </View>
                 <TouchableOpacity onPress={() => {
                    dispatch(CartAction.DeleteCartAction(itemData.item))
                 }}
                 style={{marginRight:10}}>
                  <Icon name='delete' color={Colors.btnColor} size={25}/>
                 </TouchableOpacity>

              </View>
            )
        }}
        />
       </View>

       <View style={{height:'20%', width:'100%', padding:10 }}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontSize:15, fontWeight:'bold', color:Colors.btnColor}}>
                No. Of Items
              </Text>
              <Text style={{fontSize:17, fontWeight:'bold', color:Colors.btnColor}}>
                {CartItem.length + ' Items'}
              </Text>
              </View>
          {/* For Amount */}
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontSize:18, fontWeight:'bold', color:Colors.btnColor}}>
                Total Amount
              </Text>
              <Text style={{fontSize:18, fontWeight:'bold', color:Colors.btnColor}}>
                {TotalAmount + '/- Rs'}
              </Text>
              </View>
       </View>
    </SafeAreaView>
  )
}

export default CartScreen;
