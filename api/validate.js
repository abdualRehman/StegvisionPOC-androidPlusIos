// Copyright (C) 2021, Stegvision, Inc.

import Config from 'react-native-config';
import Geolocation from '@react-native-community/geolocation';
import {getUniqueId} from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AbortController from 'abort-controller';
import urls from '../constants/urls';
import {Platform} from 'react-native';
const apiValidate = (uri, callback, error) => {
  const uniqueId = getUniqueId();
  if (Platform.OS == 'ios'){
    Geolocation.getCurrentPosition(loc => {
      setTimeout(async function () {
        const data = new FormData();
        data.append('img', {uri: uri, name: 'img.jpg', type: 'image/jpg'});
        data.append('user_id', uniqueId.toString());
        data.append('latitude', loc.coords.latitude);
        data.append('longitude', loc.coords.longitude);

        const config = {
          body: data,
          method: 'POST',
        };

        let url = urls.URL_BASE + 'validate';

        let token = await AsyncStorage.getItem('token');
        if (token !== null) {
          config.headers = {Authorization: `Bearer ${token}`};
          url = urls.URL_BASE + 'validateAuthenticated';
        }

        const controller = new AbortController();
        config.signal = controller.signal;
        setTimeout(() => controller.abort(), 12000);
        fetch(url, config)
          .then(resp => resp.json())
          .then(js => callback(js))
          .catch(err => error(err));
      }, 0);
    });
  } else {
    setTimeout(async function () {
      const data = new FormData();
      data.append('img', {uri: uri, name: 'img.jpg', type: 'image/jpg'});
      data.append('user_id', uniqueId.toString());
      data.append('latitude', '123456789');
      data.append('longitude', '123456789');

      const config = {
        body: data,
        method: 'POST',
      };

      let url = urls.URL_BASE + 'validate';

      let token = await AsyncStorage.getItem('token');
      if (token !== null) {
        config.headers = {Authorization: `Bearer ${token}`};
        url = urls.URL_BASE + 'validateAuthenticated';
      }

      const controller = new AbortController();
      config.signal = controller.signal;
      setTimeout(() => controller.abort(), 12000);
      fetch(url, config)
        .then(resp => resp.json())
        .then(js => callback(js))
        .catch(err => error(err));
    }, 0);
  }
};

export {apiValidate};
