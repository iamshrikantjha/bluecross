import React, { useEffect } from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Animation from 'lottie-react-native';
import anim from '../assets/camera.json';

import Header from './../components/Header';
import ReportCard from './ReportCard';

const Dashboard = (props) => {

    //useEffect
    useEffect(() => {
      animation.play();
    });


  return (
    <View
      style={{
        // backgroundColor: 'pink',
        flex: 1,
      }}>
      {/* Header */}
      <Header name="Dashboard" />
      <TouchableOpacity
      onPress={() => props.navigation.navigate('Click')}
        style={{
          // backgroundColor: 'skyblue',
          height: hp(40),
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: hp(40),
              height: hp(40),
            }}
            loop={true}
            source={anim}
          />
      </TouchableOpacity>

      {/* History View */}
      <View
        style={{
          // backgroundColor: 'yellow',
          width: wp(100),
          height: hp(50),
        }}>
        <View
          style={{
            backgroundColor: '#0099D8',
            height: hp(7),
            weight: wp(100),
            justifyContent: 'center',
            alignItems: 'center', // GetIn: {
              //   screen: GetIn
              // },
              // Login: {
              //   screen: Login
              // },
              // Register: {
              //   screen: Register
              // },
          }}>
          <Text
            style={{
              // backgroundColor: '#28A8E4',
              fontSize: hp(2.1),
              fontFamily: 'circular-black',
              color: 'white',
            }}>
            Recent Analysis Reports
          </Text>
        </View>

        {/* Report Cards */}

        {/* Parent View */}
        <ScrollView
          contentContaierstyle={{
            width: wp(100),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;
