import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LottieView from 'lottie-react-native';

import {CustomButton, CustomText} from '../../components';

import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../assets/images';
import {COLORS, FONTS, FONTSIZE, STRINGS} from '../../constants';

const {width} = Dimensions.get('screen');

const Welcome = () => {
  const navigation = useNavigation();
  const position = useRef(new Animated.Value(-width * 0.5)).current; // Initial position is off-screen to the left

  useEffect(() => {
    Animated.timing(position, {
      toValue: width * 0.01, // Move to center (adjust as necessary)
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, [position]);

  const onSignIn = () => {
    navigation.navigate('Login');
  };

  const handleCreateAccount = () => {
    navigation.navigate('Signup');
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={IMAGES.SIGN_IN}
      resizeMode="cover">
      <Animated.View
        style={[styles.lottieContainer, {transform: [{translateX: position}]}]}>
        <LottieView
          style={styles.lottieImageStyle}
          source={require('../../assets/lottieAnimations/girl_Walking.json')}
          autoPlay
          speed={0.6}
          loop
        />
      </Animated.View>
      <CustomText style={styles.welcomeText}>{STRINGS.WELCOME_TEXT}</CustomText>
      <CustomButton
        title="Sign In"
        style={styles.buttonStyle}
        onPress={onSignIn}
      />
      <TouchableOpacity
        style={styles.createAccountContainer}
        onPress={handleCreateAccount}>
        <CustomText style={styles.createAccountText}>Create Account</CustomText>
        <Image
          source={IMAGES.ARROW_ICON}
          style={styles.iconStyle}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    width: 160,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  iconStyle: {height: 18, width: 18},
  createAccountText: {
    color: COLORS.FADE_WHITE,
    fontSize: FONTSIZE.FONT18,
    fontFamily: FONTS.InterRegular,
  },
});

export default Welcome;
