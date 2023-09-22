// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import images from '../constants/images';

const failMessage = {
  0: 'Unknown Object Detected',
  1: 'Network Timeout',
  2: 'Network Failure',
};

const FailModal = ({isVisible, onDone, onTry, failure}) => {
  const message = failMessage[failure];

  return (
    <Modal isVisible={isVisible} style={styles.modalWrapper}>
      <View style={styles.container}>
        <Image style={styles.failIcon} source={images.fail} />
        <Text style={styles.unknown}>{message}</Text>
        <Text style={styles.desc}>
          We were not able to authenticate your {'\n'}product right now.
        </Text>

        {failure === 0 ? (
          <Text
            style={styles.seenText}
            onPress={() => {
              onDone();
              onTry();
            }}>
            Why am I seeing this?
          </Text>
        ) : null}

        <TouchableOpacity style={styles.buttonWrapper} onPress={onDone}>
          <Text style={styles.buttonTitle}>Try again</Text>
        </TouchableOpacity>

        <Text style={styles.doneText} onPress={onDone}>
          Done
        </Text>
      </View>
    </Modal>
  );
};

export default FailModal;

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
    padding: 20,
  },
  failIcon: {
    height: 110,
    width: 110,
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
    textAlign: 'center',
    fontFamily: fonts.Regular,
    fontSize: 13,
  },
  seenText: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: fonts.Regular,
  },
  buttonWrapper: {
    marginTop: 10,
    alignSelf: 'center',
    height: 45,
    backgroundColor: colors.green,
    width: '80%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontFamily: fonts.Medium,
    color: colors.white,
  },
  doneText: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.Regular,
    marginBottom: 20,
  },
});
