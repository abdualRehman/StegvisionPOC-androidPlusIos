// Copyright (C) 2021, Stegvision, Inc.

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import {apiHistory} from '../api/history';
import Config from 'react-native-config';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import images from '../constants/images';
import urls from '../constants/urls';

const History = ({navigation}) => {
  const [data, setData] = useState([]);
  const [dataIndexes, setDataIndexes] = useState([]);

  const callback = (res) => {
    console.log(res);
    setDataIndexes(res.length);
    setData(
      /*
      res.map((item) => ({
        key: item.id.toString(),
        project: item.project,
        result: item.result,
        code: item.code,
        timestamp: item.timestamp,
        latitude: item.latitude,
        longitude: item.longitude,
      })),
      */
      res
      .sort((a, b) => b.id - a.id)
      .map(function(item, i) {
        if (item.success == 1) {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetail', {result: item})}
              style={styles.historyWrappper}>
              <Image
                style={styles.cameraIcon}
                source={{ uri: urls.URL_BASE + "api/v1/projects/"
                    + item.project_id + "?display_image=true" }}
              />
              <View style={styles.rightWrapper}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}>
                  <Text style={styles.autheticate}>AUTHENTICATED</Text>
                  <Text style={styles.dateText}>{item.timestamp}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}>
                  <Text style={styles.NameText}>{item.name_display}</Text>
                  <Image
                    resizeMode="contain"
                    style={{height: 15, width: 15}}
                    source={images.menu}
                  />
                </View>

                <Text style={styles.bottomText}>{item.name_display}</Text>
              </View>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              style={styles.historyWrappper}>
              <Image style={styles.cameraIcon} source={images.unknown} />
              <View style={styles.rightWrapper}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}>
                  <Text style={[styles.autheticate, {color: colors.red}]}>
                    UNKNOWN PRODUCT
                  </Text>
                  <Text style={styles.dateText}>{item.timestamp}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }
      }),
    );
  };

  const error = (e) => {
    console.log(e);
  };

  useEffect(() => {
    apiHistory(callback, error);
  }, []);

  const renderHistory = ({index}) => {
    return data[index];
  };

  const renderHistoryOld = ({index}) => {
    if (index === 2 || index === 4) {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail')}
          style={styles.historyWrappper}>
          <Image style={styles.cameraIcon} source={images.unknown} />
          <View style={styles.rightWrapper}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 5,
              }}>
              <Text style={[styles.autheticate, {color: colors.red}]}>
                UNKNOWN PRODUCT
              </Text>
              <Text style={styles.dateText}>03/04/20 2:34pm</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetail')}
        style={styles.historyWrappper}>
        <Image style={styles.cameraIcon} source={images.camera} />
        <View style={styles.rightWrapper}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={styles.autheticate}>AUTHENTICATED</Text>
            <Text style={styles.dateText}>03/04/20 2:34pm</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={styles.NameText}>American Amber</Text>
            <Image
              resizeMode="contain"
              style={{height: 15, width: 15}}
              source={images.menu}
            />
          </View>

          <Text style={styles.bottomText}>Jabalina</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#fff'}} />
      <Header navigation={navigation} />

      <View style={styles.contentContainer}>
        <FlatList
          data={Array.from(Array(dataIndexes).keys())}
          renderItem={renderHistory}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      {/* <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              borderRadius: 3,
              margin: 2,
              padding: 5,
              width: 350,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              {item.result === 'SUCCESS' ? (
                <Text style={{color: 'green'}}>AUTHENTICATED</Text>
              ) : (
                <Text style={{color: 'red'}}>UNKNOWN PRODUCT</Text>
              )}
              <Text style={{alignSelf: 'flex-end'}}>{item.timestamp}</Text>
            </View>
            {item.result === 'SUCCESS' ? (
              <View>
                <Text style={{fontWeight: 'bold', marginTop: 5}}>
                  {item.project}
                </Text>
                <Text>Code: {item.code}</Text>
              </View>
            ) : null}
          </View>
        )}
      /> */}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 80,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.03,
    shadowRadius: 3.84,

    elevation: 5,
  },
  backIcon: {
    height: 40,
    width: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: fonts.Bold,
    letterSpacing: 0.8,
  },
  historyWrappper: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightBlue,
  },
  cameraIcon: {
    height: 80,
    width: 80,
  },
  rightWrapper: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  autheticate: {
    fontSize: 11,
    fontFamily: fonts.Bold,
    letterSpacing: 0.6,
    color: 'green',
  },
  dateText: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    letterSpacing: 0.2,
    color: '#4F555F',
  },
  NameText: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    letterSpacing: 0.6,
  },
  bottomText: {
    color: '#4F555F',
    fontFamily: fonts.Regular,
    fontSize: 12,
  },
});

const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          resizeMode="contain"
          style={styles.backIcon}
          source={images.back}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Scan History</Text>
      <View style={{width: 20}} />
    </View>
  );
};
