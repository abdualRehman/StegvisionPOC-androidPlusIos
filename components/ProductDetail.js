// Copyright (C) 2021, Stegvision, Inc.

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  Text,
  Linking,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Config from 'react-native-config';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import images from '../constants/images';
import Header from './Header';
import urls from '../constants/urls';
const ProductDetail = ({route, navigation}) => {
  const {result} = route.params;
  const {height} = useWindowDimensions();

  console.log(result);

  const followLink = (url) => {
    Linking.openURL(url);
  };

  const displayImageUrl =
    urls.URL_BASE +
    'api/v1/projects/' +
    result.project_id +
    '?display_image=true';

  const getDate = () => {
    return new Date().toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const getTime = () => {
    return new Date().toLocaleTimeString();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{height: 400}}
        source={{uri: displayImageUrl}}
        imageStyle={{
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
        }}>
        <Header navigation={navigation} title="Product Details" />
      </ImageBackground>

      <View style={{flex: 1, paddingHorizontal: 20}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{top: -20}}>
          {/*  */}
          <View style={styles.wrapper}>
            <Text style={styles.company}>{result.name_display}</Text>
            <Text style={styles.productName}>{result.name_display}</Text>
            <Text style={styles.productDesc}>
              {result.description}
            </Text>

            {/* <View style={styles.flex}> */}
            <TouchableOpacity
              style={styles.flex}
              onPress={(e) => followLink((result.name_internal=='etude')?'https://stegvision.com/etude':result.experience_1_link)}>
              <Text style={styles.visit}>Visit Product Site</Text>
              <Image
                resizeMode="contain"
                style={styles.rightIcon}
                source={images.right_arrow}
              />
            {/* </View> */}
            </TouchableOpacity>
          </View>

          {/*  */}

          <View style={styles.wrapper}>
            <Text style={[styles.productName, {fontSize: 16}]}>Date</Text>

            <View style={[styles.flex, {justifyContent: 'space-between'}]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text style={styles.scanDate}>Date Scanned</Text>
                  <Text style={styles.date}>{getDate()}</Text>
                </View>
                <View style={{marginLeft: 30}}>
                  <Text style={styles.scanDate}>Time Scanned</Text>
                  <Text style={styles.date}>{getTime()}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.scanDate}>Result</Text>
                <Text style={styles.date}>Pass</Text>
              </View>
            </View>
          </View>

          {/*  */}

          <View style={styles.wrapper}>
            <Text style={[styles.productName, {fontSize: 16}]}>
              Information
            </Text>

            <View style={[styles.flex, {justifyContent: 'space-between'}]}>
              <View style={{width: '48%'}}>
                <Text style={styles.scanDate}>Size</Text>
                <Text style={styles.date}>400 ML</Text>
              </View>
              <View
                style={{
                  alignItems: 'flex-start',
                  width: '48%',
                }}>
                <Text style={styles.scanDate}>Color</Text>
                <Text style={styles.date}>Red</Text>
              </View>
            </View>

            <View
              style={[
                styles.flex,
                {justifyContent: 'space-between', marginTop: 40},
              ]}>
              <View style={{width: '48%'}}>
                <Text style={styles.scanDate}>Flavour</Text>
                <Text style={styles.date}>Lorem ips</Text>
              </View>
              <View
                style={{
                  alignItems: 'flex-start',
                  width: '48%',
                }}>
                <Text style={styles.scanDate}>Flavour</Text>
                <Text style={styles.date}>Lorem ips</Text>
              </View>
            </View>
          </View>

          {/*  */}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBFF',
  },
  headerContainer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backIcon: {
    height: 40,
    width: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: fonts.Bold,
    letterSpacing: 0.8,
    color: colors.white,
  },
  wrapper: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  company: {
    fontSize: 14,
    color: colors.lightGray,
    fontFamily: fonts.Regular,
    fontWeight: '500',
  },
  productName: {
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  productDesc: {
    fontSize: 12,
    fontFamily: fonts.Regular,
  },
  flex: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  visit: {
    fontSize: 20,
    color: colors.green,
    fontFamily: fonts.Regular,
    fontWeight: '500',
  },
  rightIcon: {
    width: 10,
    height: 10,
    marginLeft: 4,
    top: 1.2,
  },
  scanDate: {
    fontSize: 12,
    color: colors.lightGray,
    fontFamily: fonts.Regular,
    fontWeight: '500',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    fontFamily: fonts.Medium,
  },
});
