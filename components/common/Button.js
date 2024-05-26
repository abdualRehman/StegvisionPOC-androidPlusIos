import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({
  title,
  onPress,
  loading,
  style,
  textStyle,
  leftIcon,
  linearStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#cd4cdc', '#5E07B3']}
        style={[styles.linearGradient, linearStyle]}>
        {loading ? <ActivityIndicator color={'#fff'} /> :
          <>
            {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
            {title && <Text style={[styles.buttonText, textStyle]}>{title}</Text>}
          </>
        }
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '35%',
    height:50,
    overflow: 'hidden',
    shadowColor: '#000',
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical:10,
    alignItems:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'700'
  },
  icon: {
    padding: 8,
  },
  linearGradient: {
    width: '100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection:'row'
  },
});

export default Button;
