// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Linking,
  ImageBackground,
  StyleSheet,
} from 'react-native';
// import {styles} from './styles';
import Config from 'react-native-config';
import images from '../constants/images';
import urls from '../constants/urls';
import Header from './Header';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import {BlurView} from '@react-native-community/blur';

const Success = ({route, navigation}) => {
  const {result} = route.params;
  const url =
    urls.URL_BASE +
    'api/v1/projects/' +
    result.project_id +
    '?display_image=true';

  const res = /https:\/\/([^\/]*)\//.exec(result.experience_1_link);
  var expUrl = '';
  if (res) {
    const hname = res[1];
    expUrl = "http://icons.duckduckgo.com/ip2/" + hname + ".ico";
  }

  console.log(expUrl);

  const getDetail = () => {
    if (result.name_internal === 'ecotton-hangtag-1') {
      navigation.navigate('Ecotton', {result: result});
    } else {
      navigation.navigate('ProductDetail', {result: result});
    }
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (

    <ImageBackground style={styles.container} source={{ uri: url }}>
      <Header title="" navigation={navigation} />
      <View style={styles.contentContainer}>

        <View style={[styles.bottomContainer, {padding: 0, overflow: 'hidden'}]}>
          <BlurView  blurType="light">
            <View style={styles.bottomContainer}>
              <Text style={styles.title}>Authenticated!</Text>

              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>openLink('https://stegvision.com/etude/')} style={styles.newBtn}>
                  <Text style={styles.company}>Description</Text>
                </TouchableOpacity>
                <Text>  </Text>
                <TouchableOpacity  onPress={()=>openLink('https://stegvision.com/sign-up')} style={styles.newBtn}>
                  <Text style={styles.company}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>openLink('https://stegvision.com/video')} style={styles.newBtn}>
                  <Text style={styles.company}>Video</Text>
                </TouchableOpacity>
                <Text>  </Text>
                <TouchableOpacity onPress={()=>openLink('https://stegvision.com/warranty')} style={styles.newBtn}>
                  <Text style={styles.company}>Warranty</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.scanButton}
                onPress={() => navigation.navigate('Validate')}>
                <Image style={styles.scanIcon} source={images.scan_another} />
              </TouchableOpacity>
              <View style={{marginBottom:30}}></View>

            </View>
          </BlurView>
        </View>

      </View>


    </ImageBackground>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    blurRadius:10
  },
  title: {
    alignSelf: 'center',
    color: colors.white,
    fontFamily: fonts.Bold,
    fontSize: 20,
  },
  newBtn: {
    marginTop: 20,
    borderWidth: 0.2,
    borderColor: '#8DC8EF',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flex: 1,
    height: 50,
  },
  scanBtn: {
    marginTop: 20,
    borderWidth: 0.2,
    borderColor: '#8DC8EF',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 50,
    marginHorizontal:20
  },
  listWrapper: {
    padding: 10,
    borderWidth: 0.2,
    borderColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 6,
  },
  rightWrapper: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  arrowIcon: {
    height: 35,
    width: 35,
  },
  nameIcon: {
    fontSize: 15,
    color: colors.white,
    fontFamily: fonts.Bold,
  },
  company: {
    color: colors.white,
    fontFamily: fonts.Bold,
  },
  scanButton: {
    marginTop: 30,
  },
  scanIcon: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
  },
  doneText: {
    marginVertical: 20,
    alignSelf: 'center',
    color: colors.white,
    fontFamily: fonts.Medium,
  },
});
