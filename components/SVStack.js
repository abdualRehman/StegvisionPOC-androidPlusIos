// Copyright (C) 2021, Stegvision, Inc.

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Validate from './Validate';
import Show from './Show';
import Success from './Success';
import etudeSuccess from './EtudeSuccess';
import Ecotton from './Ecotton';
import FailureScreen from './FailureScreen';
import History from './History';
import Tests from './Tests';
import Login from './Login';
import ProductDetail from './ProductDetail';
import RNBootSplash from 'react-native-bootsplash';
import MultiScanSuccess from './MultiScanSuccess';
import EtudeSuccess from "./EtudeSuccess";
import Rewards from './Rewards';

const Stack = createNativeStackNavigator();

const screenOptions = {
  header: () => null,
};

const SVStack = () => {
  React.useEffect(() => {
    setTimeout(() => {

    RNBootSplash.hide({fade: true});
    }, 5000);
  }, []);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Validate" component={Validate} />
      <Stack.Screen name="Show" component={Show} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="etudeSuccess" component={EtudeSuccess} />
      <Stack.Screen name="Ecotton" component={Ecotton} />
      <Stack.Screen name="FailureScreen" component={FailureScreen} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Tests" component={Tests} options={{title: 'Tests'}} />
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="MultiScanSuccess" component={MultiScanSuccess} />
      <Stack.Screen name="Rewards" component={Rewards} />
    </Stack.Navigator>
  );
};
export default SVStack;
