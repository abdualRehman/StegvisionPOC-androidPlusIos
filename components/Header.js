// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import images from '../constants/images';

const Header = ({navigation, title, icon}) => {
  return (
    <>
      <SafeAreaView />
      <View style={[styles.headerContainer]}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            resizeMode="contain"
            style={icon ? styles.leftIcon : styles.backIcon}
            source={ icon ? icon : images.backArrow}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={{width: 20}} />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  backIcon: {
    height: 40,
    width: 40,
  },
  leftIcon:{
    height: 20,
    width: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: fonts.Bold,
    letterSpacing: 0.8,
    color: colors.white,
  },
});
