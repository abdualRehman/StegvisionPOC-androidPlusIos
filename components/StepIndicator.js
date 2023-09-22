// Copyright (C) 2021, Stegvision, Inc.

import React, {Fragment} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const StepIndicator = ({data = 5, activePages = [1, 2]}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {Array.from(Array(data).keys()).map((e, i) => {
          return (
            <Fragment key={i}>
              <View
                style={[
                  styles.circleContainer,

                  activePages.length - 1 >= i
                    ? {
                        backgroundColor: colors.primary,
                      }
                    : {borderColor: colors.lightOrange, borderWidth: 2},
                ]}>
                <Text style={styles.circleText}>{i + 1}</Text>
              </View>
              {i != data - 1 && (
                <View
                  style={[
                    styles.lineContainer,
                    activePages.length - 1 >= i
                      ? {}
                      : {backgroundColor: colors.lightOrange},
                  ]}
                />
              )}
            </Fragment>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default StepIndicator;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  circleContainer: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontFamily: fonts.Medium,
    color: colors.white,
  },
  lineContainer: {
    width: 30,
    height: 3,
    backgroundColor: colors.primary,
    top: 17,
    marginHorizontal: -1,
  },
});
