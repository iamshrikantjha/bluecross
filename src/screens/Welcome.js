import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Welcome = (props) => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'pink',
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Logo */}
      <TouchableOpacity
        onPress={() => props.navigation.navigate('GetIn')}
        style={{
        //   backgroundColor: 'yellow',
          height: wp(40),
          width: wp(40),
          marginTop: hp(25),
        }}>
        <Image
          source={require('./../assets/logo.png')}
          style={{
            height: wp(40),
            width: wp(40),
            // marginBottom: hp(6),
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>




      {/* Some Text */}
      <View style={{
          marginTop: hp(7),
      }}>
        <Text
          style={{
            fontFamily: 'circular-black',
            color: '#0099D8',

            fontSize: hp(3),
          }}>
          BLUE CROSS APPLICATION
        </Text>
      </View>


      {/* More Text */}
      <View style={{
          marginTop: hp(2),
      }}>
        <Text style={{
            fontFamily: 'circular-black',
            color: '#28A8E4',
            fontSize: hp(2),
        }}>" Making you more aware "</Text>
      </View>
    </View>
  );
};

export default Welcome;
