// Copyright (C) 2021, Stegvision, Inc.

import {Alert} from 'react-native';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import urls from '../constants/urls';
const apiLogin = (email, password, callback, error) => {
  const config = {
    method: 'POST',
    body: JSON.stringify({username: email, password}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const url = urls.URL_BASE + 'auth';

  /*
  // XXX Odd that this DOES NOT work, but the below does...
  fetch(url, config)
    .then((resp) => {
      resp.json();
    })
    .then((x) => {
      console.log(x);
    })
    .catch((err) => {
      error(err);
    });
  */

  const storeToken = async token => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      Alert.alert('Internal error', 'could not store token', [{text: 'OK'}]);
    }
  };

  fetch(url, config)
    .then(async resp => {
      let js = await resp.json();
      if ('access_token' in js) {
        storeToken(js.access_token);
        callback();
      } else {
        error(js.description);
      }
    })
    .catch(err => {
      error(err);
    });
};

export {apiLogin};
