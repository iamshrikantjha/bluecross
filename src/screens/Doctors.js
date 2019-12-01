import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Header from './../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import DoctorCard from './DoctorCard';

const Doctors = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Header */}
      <Header name="Doctors" />

      {/* Doctors Text */}
      <Text
        style={{
          fontFamily: 'circular-black',
          fontSize: hp(5),
          margin: wp(5),
          marginTop: hp(7),
          color: '#0099D8',
        }}>
        Lets fix this and find your doctor
      </Text>

      {/* Generated Doctors */}
      {/* <Text
        style={{
          fontFamily: 'circular-book',
          fontSize: hp(2.5),
          margin: wp(7.5),
          backgroundColor: 'pink',
        }}>
        There is a fair chance that you have a mild injury and need first AID
        that would be fine.
      </Text> */}

      {/* Help Text */}
      <Text
        style={{
          fontFamily: 'circular-black',
          fontSize: hp(2.5),
          margin: wp(5),
          color: '#0099D8',
        }}>
        LIST OF NEARBY DOCTORS
      </Text>

      {/* Two Cards */}
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        //   backgroundColor: 'green',
        }}>

        {/* Doctor Card */}
        <DoctorCard name={'Dr Rajeev Khanna'}/>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
    

      </ScrollView>
    </View>
  );
};

export default Doctors;
