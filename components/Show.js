// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import {View, Text, Image, StyleSheet, Linking, Alert} from 'react-native';
import {styles} from './styles';
import {apiValidate} from '../api/validate';

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 300,
    height: 400,
  },
});

const generateAlert = (message) =>
  Alert.alert('Network error', message, [{text: 'OK'}], {cancelable: false});

const Show = ({route, navigation}) => {
  const callback = (res) => {
    console.log(24, res);

    if (res.success === 1) {
      /*
      if (res.name_internal === 'ecotton-hangtag-1') {
        navigation.navigate('Ecotton', {result: res});
      } else {
        navigation.navigate('Success', {result: res});
      }
      */
      navigation.navigate('Success', {result: res});
    } else {
      navigation.navigate('FailureScreen', {result: res});
    }
  };

  const error = (err) => {
    console.log(err);
    generateAlert(err);
  };

  const {data} = route.params;
  console.log(data.uri);

  apiValidate(data.uri, callback, error);

  return (
    <View style={styles.shortContainer}>
      <Image
        style={{
          width: 300,
          height: 400,
          borderWidth: 3,
          borderRadius: 5,
        }}
        source={{uri: data.uri}}
      />
      <Text style={styles.text}>Validating...</Text>
    </View>
  );
};

export default Show;
