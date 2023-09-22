// Copyright (C) 2021, Stegvision, Inc.

import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Config from 'react-native-config';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import images from '../constants/images';
import urls from '../constants/urls';
import Header from './Header';
import StepIndicator from './StepIndicator';

const MultiScanSuccess = ({navigation, route}) => {
  const {result} = route.params;
  const url =
    urls.URL_BASE +
    'api/v1/projects/' +
    result.project_id +
    '?display_image=true';

  return (
    <ImageBackground style={styles.container} source={{uri: url}}>
      <Header navigation={navigation} />
      <StepIndicator
        data={
          result?.multifactor_uncompleted.length +
          result?.multifactor_completed.length
        }
        activePages={result?.multifactor_completed}
      />
      <View style={styles.contentContainer}>
        <View style={styles.blurContainer}>
          <BlurView blurAmount={2}>
            <View style={styles.bottomContainer}>
              <Text style={styles.title}>Authenticated!</Text>
              {/* Product  */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetail', {result: result})
                }
                style={styles.listWrapper}>
                <Image style={styles.icon} source={images.jab} />
                <View style={styles.rightWrapper}>
                  <View>
                    <Text style={styles.nameIcon}>
                      {result.experience_1_text}
                    </Text>
                    <Text style={styles.company}>{result.name_display}</Text>
                  </View>

                  <Image style={styles.arrowIcon} source={images.round_icon} />
                </View>
              </TouchableOpacity>

              {/*  */}

              {result?.multifactor_uncompleted.length ? (
                <>
                  <TouchableOpacity
                    style={styles.nextScan}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.nextText}>Next Scan</Text>
                  </TouchableOpacity>

                  <OrComponent />
                </>
              ) : null}

              <TouchableOpacity
                onPress={() => navigation.popToTop()}
                style={[
                  styles.doneWrapper,
                  !result?.multifactor_uncompleted.length && styles.doneButton,
                ]}>
                <Text style={styles.nextText}>Done</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MultiScanSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  blurContainer: {
    padding: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },

  title: {
    alignSelf: 'center',
    color: colors.white,
    fontFamily: fonts.Bold,
    fontSize: 16,
  },
  listWrapper: {
    padding: 10,
    borderWidth: 0.2,
    borderColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 6,
  },
  rightWrapper: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  arrowIcon: {
    height: 35,
    width: 35,
  },
  nameIcon: {
    fontSize: 15,
    color: colors.white,
    fontFamily: fonts.Bold,
  },
  company: {
    color: colors.white,
    fontFamily: fonts.Regular,
  },
  scanButton: {
    marginTop: 30,
  },
  scanIcon: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
  },
  doneText: {
    marginVertical: 20,
    alignSelf: 'center',
    color: colors.white,
    fontFamily: fonts.Medium,
  },
  nextScan: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.green,
    marginTop: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    color: colors.white,
    fontFamily: fonts.Medium,
    fontSize: 16,
  },
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  lineIcon: {
    width: '42%',
    height: 0.9,
  },
  orText: {
    fontFamily: fonts.Medium,
    color: colors.white,
    opacity: 0.6,
  },
  doneWrapper: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: colors.white,
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    marginTop: 20,
  },
});

const OrComponent = () => {
  return (
    <View style={styles.orWrapper}>
      <Image style={styles.lineIcon} source={images.line} />
      <Text style={styles.orText}>or</Text>
      <Image style={styles.lineIcon} source={images.line} />
    </View>
  );
};
