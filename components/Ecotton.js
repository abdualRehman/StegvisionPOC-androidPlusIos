// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import {Image} from 'react-native';
import images from '../constants/images';

const Ecotton = ({route, navigation}) => {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: 390, height: 900}}
      source={images.ecotton_thumbnail}
    />
  );
};

export default Ecotton;
