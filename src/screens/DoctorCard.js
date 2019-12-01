import React from 'react';
import { View, Text } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

function DoctorCard(props) {
    return (
        <View>
            <View
          style={{
            height: hp(20),
            width: wp(90),
            borderRadius: 15,
            borderColor: '#0099D8',
            borderWidth: 3,
            // justifyContent: "center",
            // alignItems: "center",
            marginTop: hp(3),
            paddingLeft: wp(5),
            paddingTop: hp(2),
          }}>
              <Text style={{
                  fontFamily: 'circular-black',
                  fontSize: hp(2.5),
              }}>
                  {props.name} (MBBS, MS)
              </Text>
              <Text>
                  Neurologist
              </Text>
              <Text style={{
                  fontFamily: 'circular-black',
                  fontSize: hp(2),
              }}>
                  Greater Noida
              </Text>
              <Text style={{
                  fontFamily: 'circular-black',
                  fontSize: hp(2),
              }}>
                Knowledge Park III
              </Text>

              {/* Contact */}
              <Text style={{
                  fontFamily: 'circular-black',
                  fontSize: hp(2),
              }}>
                  +91 9875xxxxxx
              </Text>
          </View>


        </View>
    )
}

export default DoctorCard;