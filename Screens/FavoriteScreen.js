import React from 'react'
import {View,Text,SafeAreaView,FlatList} from "react-native";
import { useSelector } from 'react-redux';
import MyHeader from '../Components/MyHeader';
import Colors from '../Constants/Colors';
import ProductTile from '../Components/ProductTile';

const FavoriteScreen = (props) => {
  const {AllFavItem} = useSelector((state) => state.data)
  
  //console.log(AllFavItem,"all favrite");
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white" }}>
      <MyHeader/>
             <View style={{flex:1}}>
             <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={AllFavItem}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={(itemData) =>{
                        return (
                            <ProductTile favorite={itemData.item.isFavorite}
                                         onFav={()=> {dispatch(DataAction.AddItemToFavAction(itemData.item))
                                        }}
                                         name={itemData.item.name} 
                                         sale={itemData.item.sale}
                                         price={itemData.item.price + '/- Rs'}  
                                         image={itemData.item.image}/>
                        )
                    }}
                />
             </View>
    </SafeAreaView>
  )
}

export default FavoriteScreen;
