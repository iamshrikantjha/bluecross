import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

function ReportCard(props) {
  return (
    <View style={{}}>
      <View
            style={{
              // backgroundColor: '#28A8E4',
              borderWidth: 3,
              height: hp(20),
              width: wp(90),
              borderRadius: 10,
              marginTop: hp(3),
              marginLeft: wp(5),
              borderColor: '#0099D8',
            }}>
            <Text style={{
                fontFamily: 'circular-book',
                height: hp(3),
                marginTop: wp(2),
                marginLeft: wp(2),
            }}>Name: John Doe</Text>
            <Text style={{
                fontFamily: 'circular-book',
                height: hp(3),
                marginTop: wp(1.5),
                marginLeft: wp(2),
            }}>Scan Result: Wound</Text>
            <Text style={{
                fontFamily: 'circular-book',
                height: hp(3),
                marginTop: wp(1.5),
                marginLeft: wp(2),
            }}>Consultancy: Yes</Text>
            <Text style={{
                fontFamily: 'circular-book',
                height: hp(3),
                marginTop: wp(1.5),
                marginLeft: wp(2),
            }}>Medication: No</Text>

            <Text style={{
                fontFamily: 'circular-book',
                height: hp(3),
                marginTop: wp(1.5),
                marginLeft: wp(2),
            }}>Date: 01 - January - 2019</Text>
          </View>
    </View>
  );
}

export default ReportCard;
