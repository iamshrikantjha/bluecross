import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Header from './../components/Header';
import Ionicons from "react-native-vector-icons/Ionicons";

class Register extends Component {
  render(props) {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Header name='Create Account' />

        {/* Left Over  */}
        <View
          style={{
            margin: wp(5),
            marginTop: hp(4)
            // backgroundColor: 'pink',
          }}
        >
            {/* Input Email */}
          <View
            style={{
              height: null,
              width: null,
              borderBottomWidth: 1
            }}
          >
            <Text
              style={{
                fontFamily: "circular-black",
                color: "grey"
              }}
            >
              EMAIL ADDRESS
            </Text>
            <TextInput
              style={{
                // paddingLeft: wp(2),
                fontFamily: "r1"
              }}
              placeholder={"    johndoe@xyx.com"}
              selectionColor={"pink"}
            />
          </View>

          {/* Confirm Password */}
          <View
            style={{
              height: null,
              width: null,
              borderBottomWidth: 1,
              marginTop: hp(3)
            }}
          >
            <Text
              style={{
                fontFamily: "r1",
                color: "grey"
              }}
            >
              CONFIRM EMAIL ADDRESS
            </Text>
            <TextInput
              style={{
                // paddingLeft: wp(2),
                fontFamily: "r1"
              }}
              placeholder={"    Please enter your email address again"}
              selectionColor={"red"}
            />
          </View>
              {/* SignIn Button */}
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
            style={{
              width: null,
              height: hp(6.5),
              backgroundColor: "#0099D8",
              alignItems: "center",
              justifyContent: "center",
              marginTop: hp(5)
            }}
          >
            <Text
              style={{
                fontFamily: "b1",
                color: "white",
                fontSize: hp(2.5)
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>

          {/* Terms and conditions */}
          <Text style={{
              marginTop: hp(1.5),
              fontSize: hp(1.5),
          }}>
              <Text>
              By continuing, I agree to the{" "}
              </Text>
              <Text style={{
                  textDecorationLine: 'underline'
              }}>
                  Privacy Policy{" "} 
              </Text>
              <Text>
                  and{" "}
              </Text>
              <Text style={{
                  textDecorationLine: 'underline'
              }}>
                  Terms{" "}
              </Text>
              <Text>
                  and{" "}
              </Text>
              <Text style={{
                  textDecorationLine: 'underline'
              }}>
                  Conditions 
              </Text>
          </Text>


        </View>
      </View>
    );
  }
}

export default Register;
