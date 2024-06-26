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
import {COLORS, FONTS, FONTSIZE, STRINGS} from '../../constants';

const {width} = Dimensions.get('screen');

const Welcome = () => {
  const navigation = useNavigation();

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
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottieImageStyle}
          source={require('../../assets/lottieAnimations/girl_Walking.json')}
          autoPlay
          speed={0.7}
          loop
        />
      </View>
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
  createAccountText: {color: COLORS.FADE_WHITE, fontSize: FONTSIZE.FONT18},
});

export default Welcome;
