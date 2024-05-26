import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/colors';
import Header from './Header';
import images from '../constants/images';
import fonts from '../constants/fonts';
import Input from './common/Input';
import Button from './common/Button';

export default function Rewards({route, navigation}) {
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.container}>
      <Header icon={images.leftArrow} title="Rewards" navigation={navigation} />
      <ScrollView>
        <View style={{padding: 15, flexDirection: 'row', display: 'flex'}}>
          <View style={styles.counterBox}>
            <Image source={images.c1} style={styles.count} />
            <Text style={styles.joinText}>JOIN</Text>
            <Text style={styles.desText}>
              Sign up for free & receive 100 points on us
            </Text>
            <Image
              source={images.count1}
              style={[styles.countBox, {marginTop: 20, height: 90}]}
            />
          </View>
          <View style={styles.counterBox}>
            <Image source={images.c2} style={styles.count} />
            <Text style={styles.joinText}>EARN</Text>
            <Text style={styles.desText}>
              Earn Jeeters points for every §1 spent subscribing to our
              newsletter!!
            </Text>
            <Image source={images.count2} style={styles.countBox} />
          </View>
          <View style={styles.counterBox}>
            <Image source={images.c3} style={styles.count} />
            <Text style={styles.joinText}>JOIN</Text>
            <Text style={styles.desText}>
              Use vour points to enjoy special rewards and exciting perks!
            </Text>
            <Image source={images.count3} style={styles.countBox} />
          </View>
        </View>
        <View style={styles.desContainer}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 20,
              paddingHorizontal: 15,
            }}>
            <Text style={styles.weightDisplay}>
              Jeeter rewards program is as easv to Join and even easier to get
              rewards. Use your points for Jeeter products, and apparel and be
              automaticallv enrolled in our customer appreciation giveaways
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Input
            placeholder={'Email'}
            inputStyle={{paddingHorizontal: 20, paddingVertical: 10}}
            onChange={setEmail}
            value={email}
            keyboardType={'email-address'}
          />
          <Input
            placeholder={'Date of Birth'}
            inputStyle={{paddingHorizontal: 20, paddingVertical: 10}}
            onChange={setDOB}
            value={dob}
            keyboardType={'phone-pad'}
          />
          <Input
            placeholder={'Phone Number'}
            inputStyle={{paddingHorizontal: 20, paddingVertical: 10}}
            onChange={setPhone}
            value={phone}
            keyboardType={'numeric'}
          />
          <Button
            style={{width: '100%', marginTop: '10%'}}
            title={'GET REWARDS'}
            onPress={() => {
              setEmail(''), 
              setDOB(''), 
              setPhone('');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  joinText: {
    fontFamily: fonts.Bold,
    fontSize: 16,
    color: colors.white,
  },
  desText: {
    fontFamily: fonts.Regular,
    fontSize: 10,
    color: colors.white,
    textAlign: 'center',
    width: '90%',
  },
  count: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  countBox: {
    width: '50%',
    height: 70,
    marginTop: 10,
    resizeMode: 'contain',
  },
  counterBox: {
    backgroundColor: '#111111',
    width: '31%',
    alignItems: 'center',
    minHeight: 220,
    borderRadius: 10,
    paddingTop: 10,
    margin: 4,
  },
  desContainer: {
    backgroundColor: '#292A2F',
    width: '100%',
    marginVertical: 10,
  },
  weightDisplay: {
    marginLeft: 10,
    fontFamily: fonts.Regular,
    color: colors.white,
    fontSize: 12,
  },
});
