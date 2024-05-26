/* eslint-disable react-native/no-inline-styles */
// Copyright (C) 2021, Stegvision, Inc.

import React, {useState} from 'react';
import {
  Alert,
  TouchableOpacity,
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
  ImageBackground,
} from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import {styles} from './styles';
import images from '../constants/images';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';
import BorderButton from './common/BorderButton';
import Button from './common/Button';

const {height} = Dimensions.get('window');

const Home = ({route, navigation}) => {
  const [loginElem, setLoginElem] = useState(null);

  React.useEffect(() => {
    if (Platform.OS == 'ios') Geolocation.requestAuthorization();

    const setLogin = () => {
      setLoginElem(
        <TouchableOpacity
          style={homeStyles.help}
          onPress={() => navigation.navigate('Login')}>
          <Text style={homeStyles.agree}>Login</Text>
        </TouchableOpacity>,
      );
    };

    try {
      AsyncStorage.getItem('token').then(token => {
        if (token !== null) {
          setLoginElem(
            <TouchableOpacity
              style={homeStyles.help}
              onPress={() => {
                AsyncStorage.removeItem('token');
                Alert.alert('Logged out', '', [{text: 'OK'}]);
                setLogin();
              }}>
              <Text style={homeStyles.agree}>Logout</Text>
            </TouchableOpacity>,
          );
        } else {
          setLogin();
        }
      });
    } catch (e) {
      Alert.alert('Internal error', 'could not read storage', [{text: 'OK'}]);
    }
  }, [route, navigation]);

  const testCrash = async user => {
    console.log('test crash');
    crashlytics().crash();
  };

  return (
    <ImageBackground
      source={images.backgroundImg}
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={homeStyles.container}>
        <View>
          {/* {loginElem} */}
          {/* <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            resizeMode="contain"
            style={homeStyles.scanIcon}
            source={images.scan}
          />
        </View> */}

          <View style={homeStyles.bottomWrapper}>
            <Button
              style={{width: '100%',}}
              title={'START SCAN '}
              onPress={() => navigation.navigate('Validate')}
              leftIcon={
                <Image source={images.plus} style={{width: 25, height: 25}} />
              }
            />
            {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Validate')}
            // onPress={() => navigation.navigate('MultiScanSuccess')}
          >
            <Text style={styles.buttonText}>Start Authentication</Text>
          </TouchableOpacity> */}
            {/* <TouchableOpacity
            onPress={() => navigation.navigate('History')}
            style={homeStyles.flexWrapper}>
            <Text style={homeStyles.scan}>View Scan History</Text>
            <Image
              resizeMode="contain"
              style={homeStyles.rightIcon}
              source={images.right}
            />
          </TouchableOpacity> */}
            <BorderButton style={{width: '100%'}} title={'LOGIN'} onPress={() => navigation.navigate('Login')} />
            {/* <Text style={homeStyles.agree}>By proceeding, you agree to the</Text>
          <Text style={homeStyles.terms}>
            Terms <Text style={{color: colors.lightGray}}>&</Text> Privacy
            Policy
          </Text> */}
            {/*
          <TouchableOpacity
            onPress={() => navigation.navigate('Tests')}
            style={homeStyles.flexWrapper}>
            <Text style={homeStyles.agree}>Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={testCrash} style={homeStyles.flexWrapper}>
            <Text style={homeStyles.agree}>Test Crash</Text>
          </TouchableOpacity>
          */}
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const homeStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  scan: {
    fontSize: 14,
    alignSelf: 'center',
    color: colors.grey,
    fontFamily: fonts.Regular,
    fontWeight: '500',
  },
  flexWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  rightIcon: {
    height: 15,
    width: 15,
    marginLeft: 10,
    marginTop: 4,
  },
  agree: {
    width: '100%',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    fontFamily: fonts.Regular,
  },
  terms: {
    fontSize: 12,
    alignSelf: 'center',
    color: colors.primary,
    fontFamily: fonts.Regular,
    marginTop: 2,
    marginBottom: 20,
  },
  help: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '95%',
    height: 50,
    borderRadius: 50,
    marginTop: 20,
  },
  helpIcon: {
    height: 50,
    width: 50,
  },
  scanIcon: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',
  },
  bottomWrapper: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});
