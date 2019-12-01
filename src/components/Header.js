import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

function Header(props) {
  return (
    <View style={{}}>
      {/* Icon */}
      <Ionicons
        name="ios-arrow-dropleft-circle"
        size={hp(3.8)}
        color="#0099D8"
        style={{
          margin: hp(1.7),
          position: 'absolute',
        }}
      />

      {/* Upper Header */}
      <View
        style={{
          width: wp(100),
          height: hp(7),
          // backgroundColor: 'pink',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {/* Text */}
        <Text
          style={{
            fontFamily: 'circular-black',
            fontSize: hp(2.1),
            paddingLeft: wp(8),
            color: '#0099D8',
          }}>
          {props.name}
        </Text>
      </View>

      {/* Simple Line */}
      <View
        style={{
          borderBottomColor: '#DCDCDC',
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
}

export default Header;
