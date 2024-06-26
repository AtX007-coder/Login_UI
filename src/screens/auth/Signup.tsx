import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

import {CustomButton, CustomText} from '../../components';

import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../assets/images';
import {COLORS, FONTS, FONTSIZE} from '../../constants';

const {width} = Dimensions.get('screen');

const Signup = () => {
  const navigation = useNavigation();

  const onNext = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={IMAGES.SIGN_IN}
      resizeMode="cover">
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottieImageStyle}
          source={require('../../assets/lottieAnimations/girl_Walking.json')}
          autoPlay
          speed={0.7}
          loop
        />
      </View>
      <CustomText style={styles.welcomeText}>
        Discover new destinations, book your dream trips, and create
        unforgettable memories.
      </CustomText>

      <CustomButton
        title="Sign In"
        style={styles.buttonStyle}
        onPress={onNext}
      />
      <TouchableOpacity style={styles.createAccountContainer}>
        <CustomText style={styles.createAccountText}>Create Account</CustomText>
        <Image
          source={IMAGES.ARROW_ICON}
          style={{height: 20}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 20,
  },
  lottieContainer: {
    marginTop: 70,
    width: width,
    height: width,
    marginLeft: -90,
  },
  lottieImageStyle: {
    flex: 1,
  },
  welcomeText: {
    fontSize: FONTSIZE.FONT28,
    color: COLORS.FADE_WHITE,
    paddingHorizontal: 10,
    textAlign: 'left',
    fontFamily: FONTS.InterThin,
  },
  buttonStyle: {backgroundColor: COLORS.PRIMARY_RED, height: 50, marginTop: 50},
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 20,
  },
  createAccountText: {color: COLORS.FADE_WHITE, fontSize: FONTSIZE.FONT20},
});

export default Signup;
