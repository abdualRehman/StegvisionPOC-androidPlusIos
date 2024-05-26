// Copyright (C) 2021, Stegvision, Inc.

import {BlurView} from '@react-native-community/blur';
import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  Image,
  Alert,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {apiValidate} from '../api/validate';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import images from '../constants/images';
import AuthenticateModal from './AuthenticateModal';
import Button from './common/Button';
import FailModal from './FailModal';
import Header from './Header';
import InfoModal from './InfoModal';

const Validate = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const [isVisible, setVisible] = useState(false);
  const [isFail, setFail] = useState(false);
  const [isQue, setQue] = useState(false);
  const [backImg, setImg] = useState(null);
  const [failure, setFailure] = useState(0);

  const cameraRef = useRef();

  const validate = () => {
    console.log('validate');

    const options = {quality: 0.5};
    cameraRef?.current
      .takePictureAsync(options)
      .then(data => {

        setVisible(true);
        apiValidate(data.uri, callback, error);
        setImg(data.uri);
        // navigation.navigate('Show', {data: data});
      })
      .catch(err => console.error(err));
  };

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setVisible(true);
  //   }, 2000);
  // }, []);

  const generateAlert = message =>
    Alert.alert('Network error', message, [{text: 'OK'}], {cancelable: false});

  const callback = res => {
    console.log(23, res);

    setVisible(false);
    if (res.success === 1) {
      if (res.multifactor_completed || res.multifactor_uncompleted) {
        return navigation.navigate('MultiScanSuccess', {result: res});
      }

      /*
      if (res.name_internal === 'ecotton-hangtag-1') {
        navigation.navigate('Ecotton', {result: res});
      } else {
        navigation.navigate('Success', {result: res});
      }
      */
      if(res.name_internal=='etude'){
        navigation.navigate('etudeSuccess', {result: res});
      }else{
        navigation.navigate('Success', {result: res});
      }

    } else {
      setFailure(0);
      setFail(true);
    }
  };

  const error = err => {
    setVisible(false);
    if (err.name === 'AbortError') {
      console.log('abort error...');
      setFailure(1);
      setFail(true);
    } else {
      console.log('other error, not abort');
      console.log(err);
      // generateAlert(err);

      setFailure(2);
      setFail(true);
    }
  };

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     flexDirection: 'column',
    //     backgroundColor: 'white'
    //   }}>
    //   <View
    //     style={{
    //       width: "80%",
    //       height: 400
    //     }}
    //   >
    //     <RNCamera
    //       style={{ flex: 1, alignItems: 'center' }}
    //       ref={ref => {
    //         this.camera = ref
    //       }}
    //       captureAudio={false}
    //     />
    //   </View>
    //   <View style={styles.bottomContainer}>
    //     <TouchableOpacity
    //       style={styles.button}
    //       onPress={validate}
    //     >
    //       <Text style={styles.buttonText}>Validate</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <>
      {isVisible || isFail || isQue ? (
        <ImageBackground
          style={{flex: 1}}
          source={{uri: backImg}}
          // source={images.detail}
          ></ImageBackground>
      ) : (
        <RNCamera style={styles.container} ref={cameraRef} captureAudio={false}>
          <Header title="" navigation={navigation} />

          <Text style={styles.title}>
            Place the product in front of {'\n'}your camera to begin
          </Text>
          <ImageBackground
            resizeMode="contain"
            style={{height: height * 0.5, width, marginTop: 30}}
            source={images.camera_scan}></ImageBackground>

          {/* <TouchableOpacity onPress={validate} style={styles.buttonWrapper}>

              <Text style={styles.captureText}>Capture</Text>

          </TouchableOpacity> */}
          <Button style={{marginTop:'auto', bottom:30, height:70}} title={'CAPTURE'} onPress={validate} />
        </RNCamera>
      )}
      {isVisible && (
        <AuthenticateModal
          isVisible={isVisible}
          navigation={navigation}
          onCancel={() => setVisible(false)}
        />
      )}
      {isFail && (
        <FailModal
          isVisible={isFail}
          onDone={() => setFail(false)}
          onTry={() => setQue(true)}
          failure={failure}
        />
      )}
      {isQue && <InfoModal isVisible={isQue} onClose={() => setQue(false)} />}
    </>
  );
};

export default Validate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: colors.white,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fonts.Regular,
    fontWeight: '600',
  },
  buttonWrapper: {
    height: 50,
    width: '78%',
    marginTop: 40,
    overflow: 'hidden',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255,0.3)'

  },
  scanIcon: {
    height: '100%',
    width: '100%',
  },
  blurWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureText: {
    fontFamily: fonts.Regular,
    color: colors.white,
    fontWeight: '500',
  },
});
