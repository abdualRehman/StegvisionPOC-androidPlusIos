// Copyright (C) 2021, Stegvision, Inc.

import Config from 'react-native-config';
import {getUniqueId} from 'react-native-device-info';
import urls from '../constants/urls'
const apiHistory = (callback, error) => {
  const uniqueId = getUniqueId();

  setTimeout(function () {
    const config = {
      method: 'GET',
    };

    const url = urls.URL_BASE + 'api/v1/openScans?user_id=' + uniqueId;

    fetch(url, config)
      .then((resp) => resp.json())
      .then((data) => {
        callback(data);
      })
      .catch((err) => error(err));
  }, 0);
};

export {apiHistory};
