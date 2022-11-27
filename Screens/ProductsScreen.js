import React from 'react'
import {View, Text, SafeAreaView, FlatList,TouchableOpacity,ImageBackground} from "react-native";
import Colors from '../Constants/Colors';
import HomeScreen from './HomeScreen';
import {ProductData} from '../Data/DummyData';
import ProductTile from '../Components/ProductTile';
import {useSelector,useDispatch} from "react-redux";
import * as DataAction from "../Store/DataAction";


const ProductsScreen =( props) => {
    const CatId = props.route.params.catId;  
    const {AllProducts} = useSelector((state) => state.data)
    const FilterItems = AllProducts.filter((item) => item.catId === CatId)
    const dispatch = useDispatch()

    return (
       <SafeAreaView>
            {/* <View style={{
                marginTop:10
            }}>
                <FlatList
                    data = {FilterItems}
                    keyExtractor = {(item,index) => index.toString()}
                    renderItem={(itemData) => {
                        return (
                            <TouchableOpacity stylle={{
                                    height:150, width:'100%', marginTop:10
                            }}>
                             <ImageBackground 
                                borderRadius={25}
                                style={{height:150, 
                                        width:'95%',
                                        justifyContent:'flex-end',
                                        overflow:'hidden',
                                        marginLeft:10,
                                        marginRight:10,
                                        marginTop:10
                                    }}
                                source={{uri:itemData.item.image}}>
                                
                                <View style={{
                                                height:'100%',
                                                width:'100%',
                                                backgroundColor:'#00000062',
                                                borderRadius:25,
                                                justifyContent:'flex-end'
                                            }}
                                >
                                    <Text style={{
                                        color:'white',
                                        fontWeight:'bold',
                                        fontSize:25,
                                        textAlign:'center',
                                }}>
                                    {itemData.item.name}
                                </Text> 
                                </View>
                                </ImageBackground> 
                            </TouchableOpacity>
                        )
                    }}
                />

            </View> */}

        <View style={{marginBottom:10, height:700}}>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={FilterItems}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={(itemData) =>{
                        return (
                          
                                <ProductTile favorite={itemData.item.isFavorite}
                            onFav={()=> {dispatch(DataAction.AddItemToFavAction(itemData.item))
                           }}
                           onAddToCart={()=> {
                               dispatch(DataAction.AddToCartAction(itemData.item))
                           }}
                            name={itemData.item.name} 
                            sale={itemData.item.sale}
                            price={'PKR - '+itemData.item.price}  
                            image={itemData.item.image}/>
                       
                        )
                    }}
                />
            </View>

       </SafeAreaView>
    )
}

export default ProductsScreen;