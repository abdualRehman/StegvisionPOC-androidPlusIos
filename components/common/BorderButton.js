import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors';

const BorderButton = ({
  title,
  onPress,
  loading,
  style,
  textStyle,
  leftIcon,
  linearStyle,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#5E07B3', '#cd4cdc']}
      style={[styles.linearGradient, linearStyle]}>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        {loading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <>
            {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
            {title && (
              <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            )}
          </>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '35%',
    height: 45,
    overflow: 'hidden',
    shadowColor: '#000',
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: colors.darkBackground,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    color: '#fff',
    // fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontWeight: '700',
  },
  icon: {
    padding: 8,
  },
  linearGradient: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding:3
  },
});

export default BorderButton;
