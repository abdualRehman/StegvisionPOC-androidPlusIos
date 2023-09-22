// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Question from './assets/questionMark.png';
import { styles } from './styles';

const FailureScreen = ({ route, navigation }) => {
  const { result } = route.params;

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white"
    }}>
      <Text style={{color: "red", padding: 20}}>Unknown Object Detected</Text>
      <Image source={Question} style={{
        width: 200,
        height: 200,
        resizeMode: 'contain'
      }} />
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Validate') }
        >
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  )
};

export default FailureScreen;
