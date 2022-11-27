import React from 'react'
import {View, Text, SafeAreaView, FlatList,TouchableOpacity,ImageBackground,Image} from "react-native";
import Colors from '../Constants/Colors';
import {useSelector,useDispatch} from "react-redux";
import IcIcon from "react-native-vector-icons/FontAwesome";

const ProfileScreen =(props) => {
  //const userName=props.route.params.userName
  const UserInfo = useSelector((state) => state.auth.UserInfo)
  return (
    <SafeAreaView>
      <View style={{marginTop:30}}>
        {/* <Text style={{color:Colors.btnColor}}>{UserInfo.userName}</Text> */}
        
        <View 
        style={{
          flex:1,
          height: '30%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}>
        <Image source={require("../Assets/SignUp/gurya.jpg")}
            style={{height:250, width:250, borderRadius:150,marginTop:230}}
         />
      </View>

      <View style={{ alignItems:'center',justifyContent:'center',
          marginTop:250}}>
        <Text style={{fontSize:25, color:Colors.btnColor, fontWeight:'bold'}}> User Info..</Text>

        

      </View>
       
    </View>

    <View style={{marginTop:0, height:'100%',marginTop:20}}>
    <View >
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center', marginTop:5, backgroundColor:Colors.btnColor,borderRadius:20,height:50,marginHorizontal:15}}>
        <View style={{marginLeft:10}}><IcIcon name ="user" size={30} color={Colors.primary} /></View>
        <Text style={{fontSize:18, color:Colors.primary, fontWeight:'bold', marginLeft:40}}> Tehreem Saqlain</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center', marginTop:30, backgroundColor:Colors.btnColor,borderRadius:20,height:50,marginHorizontal:15}}>
        <View style={{marginLeft:10}}><IcIcon name ="mobile" size={30} color={Colors.primary} /></View>
        <Text style={{fontSize:18, color:Colors.primary, fontWeight:'bold', marginLeft:50}}> 0332-23670803</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center', marginTop:30, backgroundColor:Colors.btnColor,borderRadius:20,height:50,marginHorizontal:15}}>
        <View style={{marginLeft:10}}><IcIcon name ="address-card" size={30} color={Colors.primary} /></View>
        <Text style={{fontSize:18, color:Colors.primary, fontWeight:'bold', marginLeft:25}}> Parsi colony, Karachi</Text>
        </View>

      </View>
    </View>
    
    </SafeAreaView>
    
  )
}

export default ProfileScreen;