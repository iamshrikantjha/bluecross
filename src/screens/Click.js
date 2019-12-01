import React, {PureComponent} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  
} from 'react-native';

import Header from './../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RNCamera} from 'react-native-camera';

class Click extends PureComponent {
    
  render(props) {
      
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* Header */}
        <Header name="Click" />

        {/* Big View */}
        <View
          style={{
            width: wp(100),
            // justifyContent: "center",
            alignItems: 'center',
          }}>
          {/* Click Button */}
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Report')}
            style={{
              position: 'absolute',
              height: wp(20),
              width: wp(20),
              borderRadius: 100,
              borderWidth: 10,
              marginTop: hp(70),
              zIndex: 1,
              borderColor: '#0099D8',
            }}></TouchableOpacity>

          {/* Camera View */}
          <View
            style={{
              marginTop: hp(4),
              // backgroundColor: 'pink',
              borderRadius: 30,
              borderWidth: 5,
              width: wp(90),
              height: hp(80),
              borderColor: '#0099D8',
            //   zIndex: 10,
              overflow: 'hidden',
            }}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
            //   style={styles.preview}
              style={{
                  width: wp(90),
                  height: hp(80),
                  zIndex: 0,
              }}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
            //   captureTarget={RNCamera.constants.CaptureTarget.temp}

              null={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              onGoogleVisionBarcodesDetected={({barcodes}) => {
                console.log(barcodes);
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 1, base64: true, };
      const data = await this.camera.takePictureAsync(options)
    }
  };
// takePicture() {
//     this.camera
//     .capture()
//     .then(data => this.saveImage(data.path))
//     .catch(err => console.error('capture picture error', err));
// }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
    //   justifyContent: 'flex-end',
    //   alignItems: 'center',
    height: hp(80),
    width: wp(90),
    zIndex: 0,
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

export default Click;
