// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import images from '../constants/images';

const InfoModal = ({isVisible, onClose}) => {
  return (
    <Modal isVisible={isVisible} style={styles.modalWrapper}>
      <View style={styles.container}>
        <Image style={styles.failIcon} source={images.question} />

        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat
          ante, dapibus lobortis felis quis, vehicula rhoncus nunc. Orci varius
          natoque penatibus et magnis dis parturient.Consectetur adipiscing
          elit. Vivamus erat ante, dapibus lobortis felis quis, vehicula rhoncus
          nunc. Orci varius natoque penatibus et magnis dis parturient.
        </Text>

        <Text style={[styles.desc, {marginTop: 20}]}>
          Consectetur adipiscing elit. Vivamus erat ante, dapibus lobortis felis
          quis, vehicula rhoncus nunc. Orci varius natoque penatibus et magnis.
        </Text>

        <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
          <Image
            style={{height: '100%', width: '100%'}}
            resizeMode="contain"
            source={images.close}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    width: '100%',
    backgroundColor: colors.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  failIcon: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  unknown: {
    marginVertical: 20,
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: fonts.Medium,
    fontWeight: '600',
  },
  desc: {
    alignSelf: 'center',
    fontFamily: fonts.Regular,
    fontSize: 13,
  },
  closeIcon: {
    marginTop: 30,
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
});
