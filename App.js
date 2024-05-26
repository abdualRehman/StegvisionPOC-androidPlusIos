// Copyright (C) 2021, Stegvision, Inc.

import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SVStack from './components/SVStack';
import {StatusBar} from 'react-native';
import { enableFreeze } from 'react-native-screens';

enableFreeze(true);
import crashlytics from "@react-native-firebase/crashlytics";
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    crashlytics().log("App mounted.");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [])
  

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SVStack />
    </NavigationContainer>
  );
};

export default App;
