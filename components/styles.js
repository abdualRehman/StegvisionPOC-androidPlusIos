// Copyright (C) 2021, Stegvision, Inc.

import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const styles = StyleSheet.create({
  shortContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F3F3',
    width: '100%',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: 20,
    padding: 20,
  },
  middleContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
  bottomContainer2: {
    justifyContent: 'flex-end',
    width: '90%',
    alignItems: 'center',
    margin: 20,
    padding: 10,
  },
  image: {
    width: 300,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  button: {
    // alignItems: "center",
    // borderRadius: 5,
    // backgroundColor: "#FBB072",
    // padding: 10,
    // margin: 10
    height: 50,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: '95%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: fonts.Regular,
    fontSize: 15,
    fontWeight: '500',
  },
  bottomText: {
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    padding: 8,
  },

  // form styles
  input: {
    borderStyle: 'solid',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 5,
    fontSize: 16,
    height: 40,
    color: '#c0cbd3',
  },
  formButton: {
    height: 35,
    margin: 10,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: '30%',
  },
  formButtonText: {
    color: 'white',
    fontFamily: fonts.Regular,
    fontSize: 15,
    fontWeight: '500',
  },
});

export {styles};
