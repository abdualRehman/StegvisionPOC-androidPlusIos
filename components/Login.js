/* eslint-disable react-native/no-inline-styles */
// Copyright (C) 2021, Stegvision, Inc.

import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from './Header';
import {styles} from './styles';
import {apiLogin} from '../api/login';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const success = () => {
    navigation.navigate('Home', {login: true});
  };

  const failure = err => {
    Alert.alert('Login error', err, [{text: 'OK'}]);
  };

  const handleLogin = () => {
    apiLogin(email, password, success, failure);
  };

  return (
    <View>
      <SafeAreaView style={{backgroundColor: '#fff'}} />
      <Header navigation={navigation} title="" />
      <View>
        <TextInput
          onChangeText={text => setEmail(text)}
          defaultValue={email}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          defaultValue={password}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="black"
        />
        <TouchableOpacity onPress={handleLogin} style={styles.formButton}>
          <Text style={styles.formButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};

export default Login;
