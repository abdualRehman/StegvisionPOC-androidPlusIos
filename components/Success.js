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
  ScrollView,
} from 'react-native';
// import {styles} from './styles';
import Config from 'react-native-config';
import images from '../constants/images';
import Header from './Header';
import colors from '../constants/colors';
import urls from '../constants/urls';
import fonts from '../constants/fonts';
import {BlurView} from '@react-native-community/blur';
import Button from './common/Button';
import BorderButton from './common/BorderButton';

const Success = ({route, navigation}) => {
  const {result} = route.params;
  console.log('resultresultresult', result);
  // var multifactor = false;
  // var unfinished = false;
  // if ('multifactor_uncompleted' in result) {
  //   multifactor = true;

  //   if (result.multifactor_uncompleted.length > 0) {
  //     unfinished = true;
  //   }
  // }

  const url = console.log('🚀 ~ file: Success.js:36 ~ Success ~ url:', url);
  urls.URL_BASE +
    'api/v1/projects/' +
    result.project_id +
    '?display_image=true';

  const res = /https:\/\/([^\/]*)\//.exec(result.experience_1_link);
  var expUrl = '';
  if (res) {
    const hname = res[1];
    expUrl = 'http://icons.duckduckgo.com/ip2/' + hname + '.ico';
  }

  console.log(expUrl);

  const getDetail = () => {
    if (result.name_internal === 'ecotton-hangtag-1') {
      navigation.navigate('Ecotton', {result: result});
    } else {
      navigation.navigate('ProductDetail', {result: result});
    }
  };

  // console.log(url);

  // const handlePress = (e) => {
  //   console.log('pressed');
  //   navigation.navigate('Home');
  // };

  // const followLink = (url) => {
  //   Linking.openURL(url);
  // };

  return (
    // <View style={styles.shortContainer}>
    //   <Text style={{color: "green", margin: 5}}>Product Authenticated!</Text>
    //   <Image
    //     style={{
    //       width: 250,
    //       height: 250,
    //       borderWidth: 4,
    //       borderColor: "green",
    //       borderRadius: 5
    //     }}
    //     source = {{ uri: url }}
    //   />
    //   <Text
    //     style={{
    //       padding: 10,
    //       fontSize: 20,
    //       fontWeight: "bold"
    //     }}
    //   >{result.name_display + " (code: " + result.number + ")"}</Text>
    //   {multifactor ? (
    //     <Text>Multifactor: {result.multifactor_completed.length} of {
    //       result.multifactor_completed.length
    //       + result.multifactor_uncompleted.length}</Text>
    //   ) : null}
    //   {! unfinished && result.experience_1_link ? (
    //     <View style={styles.bottomContainer2}>
    //       <TouchableOpacity
    //         onPress={(e) => followLink(result.experience_1_link)}
    //         style={{margin: 20}}
    //       >
    //         <Text style={{
    //           color: "#0000FF",
    //           textDecorationLine: 'underline'
    //         }}>{result.experience_1_text}</Text>
    //       </TouchableOpacity>
    //       {result.experience_2_link ? (
    //         <TouchableOpacity
    //           onPress={(e) => followLink(result.experience_2_link)}
    //           style={{margin: 20}}
    //         >
    //           <Text style={{
    //             color: "#0000FF",
    //             textDecorationLine: 'underline'
    //           }}>{result.experience_2_text}</Text>
    //         </TouchableOpacity>
    //       ) : null}
    //     </View>
    //   ) : null}
    //   <View style={styles.bottomContainer}>
    //     <TouchableOpacity
    //       style={styles.button}
    //       onPress={() => navigation.navigate('Validate') }
    //     >
    //       <Text style={styles.buttonText}>Scan Another Product</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <TouchableOpacity
    //     onPress={handlePress}
    //   >
    //     <Text>Done</Text>
    //   </TouchableOpacity>
    // </View>

    // <ImageBackground style={styles.container} source={{ uri: url }}>
    <View style={styles.container}>
      <Header icon={images.leftArrow} title="" navigation={navigation} />
      <View style={styles.contentContainer}>
        <ScrollView>
        <View
          style={[styles.bottomContainer, {padding: 0, overflow: 'hidden'}]}>
          {/* <BlurView blurAmount={2}> */}
          <View style={styles.bottomContainer}>
            <View style={styles.authContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 20,
                  paddingHorizontal: 15,
                }}>
                <Image
                  style={{width: 100, height: 160, borderRadius: 5}}
                  // source={{ uri: url }}
                  source={images.detail}
                  resizeMode={'cover'}
                />
                <View style={{width: '100%'}}>
                  <View
                    style={{
                      marginLeft: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '65%',
                    }}>
                    <View>
                      <Text style={styles.title}>Authenticated</Text>
                      <View style={styles.idBox}>
                        <Text style={styles.description}>ID:</Text>
                        <Text style={styles.idText}>{result.project_id}</Text>
                      </View>
                    </View>
                    <Image
                      style={{width: 40, height: 40}}
                      // source={{ uri: url }}
                      source={images.tick}
                      resizeMode={'contain'}
                    />
                  </View>
                  <Text style={styles.nameDisplay}>{result.name_display}</Text>
                  <Text style={styles.priceDisplay}>$340</Text>
                  <Text style={styles.weightDisplay}>
                    Five .5g Joints 2.5g | Sativa
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.desContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                }}>
                <ScrollView>
                  <Text style={styles.weightDisplay}>{result.description}</Text>
                </ScrollView>
              </View>
            </View>
            <View style={styles.featureContainer}>
              <Text style={styles.featureText}>Features</Text>
              <Image source={images.rightArrow} style={styles.rightIcon} />
            </View>
            <View style={styles.featureContainer}>
              <Text style={styles.featureText}>Warranty</Text>
              <Image source={images.rightArrow} style={styles.rightIcon} />
            </View>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://player.vimeo.com/video/867235082?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                )
              }
              style={styles.featureContainer}>
              <Text style={styles.featureText}>Video</Text>
              <Image source={images.rightArrow} style={styles.rightIcon} />
            </TouchableOpacity>

            <View style={styles.btnContainer}>
              <Button
                style={{width: '100%'}}
                title={'FIND JEETER NEAR ME'}
                onPress={() =>
                  Linking.openURL('https://www.jeeter.com/find-jeeters')
                }
              />
              <BorderButton
                style={{width: '100%'}}
                linearStyle={{marginTop: 5}}
                title={'MORE PRODUCTS'}
                onPress={() =>
                  Linking.openURL('https://www.jeeter.com/products')
                }
              />
              <BorderButton
                style={{width: '100%'}}
                linearStyle={{marginTop: 5}}
                title={'MAILING LIST'}
                onPress={() =>
                  Linking.openURL('https://www.jeeter.com/find-jeeters')
                }
              />
              <BorderButton
                style={{width: '100%'}}
                linearStyle={{marginTop: 5}}
                title={'REWARDS SIGN UP'}
                onPress={() => navigation.navigate('Rewards')}
              />
            </View>

            {/* <Text style={styles.title}>Authenticated!</Text>
              
              <TouchableOpacity
                onPress={() => getDetail()}
                style={styles.listWrapper}>
                <Image style={styles.icon} source={{uri: expUrl}} />
                <View style={styles.rightWrapper}>
                  <View>
                    <Text style={styles.nameIcon}>{result.experience_1_text}</Text>
                    <Text style={styles.company}>{result.name_display}</Text>
                  </View>

                  <Image style={styles.arrowIcon} source={images.round_icon} />
                </View>
              </TouchableOpacity> */}

            {/* <TouchableOpacity
                style={styles.scanButton}
                onPress={() => navigation.navigate('Validate')}>
                <Image style={styles.scanIcon} source={images.scan_another} />
              </TouchableOpacity>

              <Text
                onPress={navigation.popToTop}
                style={styles.doneText}>
                Done
              </Text> */}
          </View>
          {/* </BlurView> */}
        </View>
        </ScrollView>
      </View>
    </View>
    // </ImageBackground>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  contentContainer: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  bottomContainer: {
    // padding: 20,
    // borderTopStartRadius: 20,
    // borderTopEndRadius: 20,
    // backgroundColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    alignSelf: 'center',
    color: colors.white,
    fontFamily: fonts.Bold,
    fontSize: 20,
    textTransform: 'uppercase',
  },
  description: {
    alignSelf: 'flex-start',
    color: colors.white,
    fontFamily: fonts.Bold,
    fontSize: 13,
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
    fontFamily: fonts.Regular,
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
  authContainer: {
    backgroundColor: colors.boxColor,
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  desContainer: {
    backgroundColor: colors.boxColor,
    width: '100%',
    maxHeight: 95,
    marginBottom: 10,
  },
  featureContainer: {
    backgroundColor: colors.boxColor,
    width: '100%',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightIcon: {width: 12, height: 12, resizeMode: 'contain'},
  idBox: {
    flexDirection: 'row',
    backgroundColor: colors.idBoxColor,
    paddingLeft: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: '85%',
  },
  idText: {
    fontFamily: fonts.Regular,
    marginLeft: 5,
  },
  nameDisplay: {
    marginLeft: 10,
    fontFamily: fonts.Medium,
    color: colors.white,
    marginTop: 10,
    fontSize: 16,
  },
  priceDisplay: {
    marginLeft: 10,
    fontFamily: fonts.Regular,
    color: colors.white,
    fontSize: 16,
  },
  weightDisplay: {
    marginLeft: 10,
    fontFamily: fonts.Regular,
    color: colors.white,
    fontSize: 14,
  },
  featureText: {
    marginLeft: 10,
    fontFamily: fonts.Medium,
    color: colors.white,
    fontSize: 14,
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
});
