import React from 'react'
import {View, Text, SafeAreaView, FlatList,TouchableOpacity,ImageBackground} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Colors from '../Constants/Colors';
import {useSelector,useDispatch} from "react-redux";
import ProductTile from '../Components/ProductTile';
import * as DataAction from "../Store/DataAction"; 



const HomeScreen = (props) => {
    const UserInfo = useSelector((state) => state.auth.UserInfo)
    const {AllCategories,AllProducts} = useSelector((state) => state.data)
    const dispatch = useDispatch()

    //console.log(AllProducts)
    //const Name=props.route.params.name
    const images = [
        // "https://source.unsplash.com/1024x768/?nature",
        // "https://source.unsplash.com/1024x768/?water",
        // "https://source.unsplash.com/1024x768/?girl",
        // "https://source.unsplash.com/1024x768/?tree", // Network image
        require('../Assets/FruitsImages/1.jpg'),          // Local image
        require('../Assets/FruitsImages/4.jpg'), 
        require('../Assets/FruitsImages/5.png'), 
        require('../Assets/FruitsImages/6.jpg'),
        
        
      ]
  return (
    <SafeAreaView>
        {/* <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:Colors.btnColor}}>
                {UserInfo.name}</Text> 
            </View> */}
        <View>
        <SliderBox 
                images={images}
                sliderBoxHeight={150}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor= "#1b05ab"
                inactiveDotColor="white"//"#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10
                }}
                dotStyle={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
                ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
                imageLoadingColor="#2196F3"
                />
        </View>

        <View style={{marginTop:10, height:450}}>
            
             <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between'
                        }}>
                <Text style={{fontSize:18, fontWeight:'bold',color:"green",paddingHorizontal:10}}>
                    All Categories
                </Text>
                <TouchableOpacity onPress={()=>{ 
                        props.navigation.navigate("AllCategoryScreen");
                      }}
                      >
                <Text style={{fontSize:18, fontWeight:'bold',color:"green",paddingHorizontal:10}}>
                    View All
                </Text>
                </TouchableOpacity>
            </View>
            <View >
            <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            //horizontal
            data={AllCategories}
            keyExtractor={(item,index)=>index.toString()}
            renderItem = {(itemdata)=>{
                return(
                    <TouchableOpacity
                    onPress={()=>{ 
                        props.navigation.navigate("ProductsScreen",{
                            catId:itemdata.item.id
                        });
                      }}
                      style={{height:150,
                              width:'45%',
                              marginHorizontal:10,
                              //backgroundColor:"red",
                              borderRadius:10,
                              overflow:'hidden',
                              marginTop:10,
                              //justifyContent:'space-between'
                              }}>
                        <ImageBackground style={{height:'100%',width:'100%',resizeMode:'cover'}}
                            source={{uri: itemdata.item.image}}
                            >
                            <View style={{height:'100%', width:'100%',backgroundColor:'#00000069',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:15, color:'white',fontWeight:'bold'}}>{itemdata.item.name}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                );
            }}
            />
            </View> 

            {/* <View style={{flexDirection:'row',justifyContent:'space-between', marginVertical:5}}>
                <Text style={{fontSize:18, fontWeight:'bold',color:Color.ThemeColor,paddingHorizontal:10}}>
                    All Products
                </Text>
                <TouchableOpacity>
                <Text style={{fontSize:18, fontWeight:'bold',color:Color.ThemeColor,paddingHorizontal:10}}>
                    View All
                </Text>
                </TouchableOpacity>
            </View>

            <View style={{marginBottom:10, height:"100%"}}>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={AllProducts}
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
                                         price={itemData.item.price + '/- Rs'}  
                                         image={itemData.item.image}/>
                        )
                    }}
                />
            </View>     */}

        </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
