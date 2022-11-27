import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../Constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const MyFormInput = props => {
  return (
    <View style={{height: 70, width: '100%', marginBottom: 20}}>
      <View>
        <Text
          style={{fontSize: 15, fontWeight: '600', color: 'black', height: 20}}>
          {props.title}
        </Text>
      </View>

      <View
        style={{
          height: 50,
          width: '100%',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: Colors.btnColor,
          marginTop: 10,
          paddingHorizontal:10,
          backgroundColor: Colors.primary,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        
          
          
        }}>
        <TextInput
          secureTextEntry={props.secure ? true : false}
          placeholder={props.placeHolder}
          onChangeText={props.onChangeText}
          style={{height: '100%'}}
        />
        {props.eyeShown && (
          <TouchableOpacity onPress={props.onPress} style={{marginRight: 10}}>
            <Icon name={props.iconName} size={20} color={Colors.btnColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MyFormInput;
