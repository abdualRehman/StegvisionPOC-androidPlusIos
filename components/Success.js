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
import Header from './Header';
import colors from '../constants/colors';
import urls from '../constants/urls';
import fonts from '../constants/fonts';
import {BlurView} from '@react-native-community/blur';

const Success = ({route, navigation}) => {
  const {result} = route.params;
  console.log('resultresultresult',result);
  // var multifactor = false;
  // var unfinished = false;
  // if ('multifactor_uncompleted' in result) {
  //   multifactor = true;

  //   if (result.multifactor_uncompleted.length > 0) {
  //     unfinished = true;
  //   }
  // }

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

    <ImageBackground style={styles.container} source={{ uri: url }}>
      <Header title="" navigation={navigation} />
      <View style={styles.contentContainer}>
        <View
          style={[styles.bottomContainer, {padding: 0, overflow: 'hidden'}]}>
          <BlurView blurAmount={2}>
            <View style={styles.bottomContainer}>
              <Text style={styles.title}>Authenticated!</Text>
              {/* Product  */}
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
              </TouchableOpacity>

              {/*  */}
              <TouchableOpacity
                style={styles.scanButton}
                onPress={() => navigation.navigate('Validate')}>
                <Image style={styles.scanIcon} source={images.scan_another} />
              </TouchableOpacity>

              <Text
                onPress={navigation.popToTop}
                style={styles.doneText}>
                Done
              </Text>
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
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    alignSelf: 'center',
    color: colors.white,
    fontFamily: fonts.Bold,
    fontSize: 16,
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
});
