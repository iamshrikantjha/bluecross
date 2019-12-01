import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './../components/Header';

class Login extends Component {
  render(props) {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Header name={'Sign In'} />

        {/* Left Over */}
        <View
          style={{
            margin: wp(5),
            marginTop: hp(4),
            // backgroundColor: 'pink',
          }}>
          {/* Input Email */}
          <View
            style={{
              height: null,
              width: null,
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontFamily: 'circular-book',
                color: 'grey',
              }}>
              EMAIL ADDRESS
            </Text>
            <TextInput
              style={{
                // paddingLeft: wp(2),
                fontFamily: 'circular-book',
              }}
              placeholder={'    johndoe@xyx.com'}
              selectionColor={'pink'}
            />
          </View>

          {/* Input Password */}
          <View
            style={{
              height: null,
              width: null,
              borderBottomWidth: 1,
              marginTop: hp(3),
            }}>
            <Text
              style={{
                fontFamily: 'circular-book',
                color: 'grey',
              }}>
              PASSWORD
            </Text>
            <TextInput
              style={{
                // paddingLeft: wp(2),
                fontFamily: 'circular-book',
              }}
              secureTextEntry={true}
              placeholder={'    Enter your secure password'}
              selectionColor={'red'}
            />
          </View>

          {/* SignIn Button */}
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Dashboard')}
            style={{
              width: null,
              height: hp(6.5),
              backgroundColor: '#0099D8',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: hp(5),
            }}>
            <Text
              style={{
                fontFamily: 'circular-black',
                color: 'white',
                fontSize: hp(2.5),
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
