import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Header from './../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Report = (props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Header */}
      <Header name="Report" />

      {/* Report Text */}
      <Text
        style={{
          fontFamily: 'circular-black',
          fontSize: hp(5),
          margin: wp(5),
          marginTop: hp(7),
          color: '#0099D8',
        }}>
        Get the answers you need
      </Text>

      {/* Generated Report */}
      <Text
        style={{
          fontFamily: 'circular-book',
          fontSize: hp(2.5),
          margin: wp(7.5),
          // backgroundColor: 'pink',
        }}>
        There is a fair chance that you have a mild injury and need first AID
        that would be fine.
      </Text>

      {/* Help Text */}
      <Text
        style={{
          fontFamily: 'circular-black',
          fontSize: hp(2.5),
          margin: wp(5),
          color: '#0099D8',
        }}>
        NEAR BY DOCTORS AND CHEMIST SHOPS
      </Text>

      {/* Two Cards */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        //   backgroundColor: 'green',
        }}>

        {/* Doctor Card */}
        <TouchableOpacity
              onPress={() => props.navigation.navigate('Doctors')}

          style={{
            height: hp(13),
            width: wp(90),
            borderRadius: 15,
            borderColor: '#0099D8',
            borderWidth: 3,
            justifyContent: "center",
            alignItems: "center",
            marginTop: hp(3)
          }}>
              <Text style={{
                  fontFamily: 'circular-black',
                  fontSize: hp(3),
              }}>
                  FIND DOCTORS
              </Text>
          </TouchableOpacity>


        {/* Medical Card */}
        <TouchableOpacity
              onPress={() => props.navigation.navigate('MedicalShops')}

          style={{
            height: hp(13),
            width: wp(90),
            borderRadius: 15,
            borderColor: '#0099D8',
            borderWidth: 3,
            justifyContent: "center",
            alignItems: "center",
            marginTop: hp(5)
          }}>
              <Text style={{
                  fontFamily: 'circular-black',
                  fontSize: hp(3),
              }}>
                  MEDICAL SHOPS
              </Text>
          </TouchableOpacity>

          




      </View>
    </View>
  );
};

export default Report;
