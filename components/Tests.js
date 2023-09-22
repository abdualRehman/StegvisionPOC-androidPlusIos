// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import Config from "react-native-config"
import urls from '../constants/urls';
const Tests = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Show', { data: {
            uri: urls.URL_BASE + "phg_test"
        } })}
      >
        <Text>PHG Test</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Show', { data: {
            uri: urls.URL_BASE + "g_test"
        } })}
      >
        <Text>1G</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Show', { data: {
          uri: "https://images.squarespace-cdn.com/content/v1/5bc391027a1fbd61678ffbec/1590807621406-9XWO94T9950P0U2I2BZE/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/0001.jpg"
        } })}
      >
        <Text>Random Fail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tests;
