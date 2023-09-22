// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import {ActivityIndicator, View, Text, Image, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import images from '../constants/images';

const AuthenticateModal = ({isVisible, navigation, onCancel}) => {
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     onCancel();
  //     navigation.navigate('Success');
  //   }, 2000);
  // }, []);
  return (
    <Modal
      isVisible={isVisible}
      backdropColor={colors.transparent}
      coverScreen
      hasBackdrop
      style={[styles.container,{backgroundColor: '#FFFFFF',}]}>
      <View style={styles.topContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.authText}>Authenticating...</Text>
        <Image
          resizeMode="contain"
          style={styles.nameIcon}
          source={images.name_icon}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text onPress={onCancel} style={styles.cancel}>
          Cancel Authentication
        </Text>
      </View>
    </Modal>
  );
};

export default AuthenticateModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.transparent,
    margin: 0,
  },
  topContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authText: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: fonts.Bold,
    color: colors.primary,
  },
  nameIcon: {
    width: '60%',
    height: 80,
  },
  bottomContainer: {
    flex: 0.1,
    alignItems: 'center',
  },
  cancel: {
    fontSize: 15,
    color: colors.grey,
    fontFamily: fonts.Regular,
    fontWeight: '500',
  },
});
