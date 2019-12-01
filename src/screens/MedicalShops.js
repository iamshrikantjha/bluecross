import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Header from './../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import MedicalShopCard from './MedicalShopCard';

const MedicalShops = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Header */}
      <Header name="Find Medical Stores" />

      {/* MedicalShops Text */}
      <Text
        style={{
          fontFamily: 'circular-black',
          fontSize: hp(5),
          margin: wp(5),
          marginTop: hp(7),
          color: '#0099D8',
        }}>
        Get your self first aid from these authorised stores.
      </Text>

      {/* Generated MedicalShops */}
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
        }}>
        LIST OF NEARBY MEDICAL STORES
      </Text>

      {/* Two Cards */}
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        //   backgroundColor: 'green',
        }}>

        {/* MedicalShop Card */}
        <MedicalShopCard name={'Om Medical Store'}/>
        <MedicalShopCard name={'Chikitsa Medicine'}/>
        <MedicalShopCard />
        <MedicalShopCard />
        <MedicalShopCard />
        <MedicalShopCard />
        <MedicalShopCard />
        <MedicalShopCard />
        <MedicalShopCard />
        <MedicalShopCard />
        <MedicalShopCard />
        <MedicalShopCard />
    

      </ScrollView>
    </View>
  );
};

export default MedicalShops;
