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

import {CustomButton, CustomInput, CustomText} from '../../components';

import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../assets/images';
import {COLORS, FONTS, FONTSIZE} from '../../constants';

const {width} = Dimensions.get('screen');

const Signup = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('Home');
  };

  const renderIcon = (imagePath: string) => {
    return (
      <Image source={imagePath} resizeMode="contain" style={{height: 18}} />
    );
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={IMAGES.WELCOME}
      resizeMode="cover">
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottieImageStyle}
          source={require('../../assets/lottieAnimations/Animation3.json')}
          autoPlay
          speed={0.7}
          loop
        />
      </View>
      <CustomInput
        containerStyle={styles.inputContainerStyle}
        iconComponent={renderIcon(IMAGES.USER_ICON)}
        placeholder="Email"
        style={styles.inputTextStyle}
      />
      <CustomInput
        containerStyle={styles.inputContainerStyle}
        iconComponent={renderIcon(IMAGES.LOCK_ICON)}
        placeholder="Password"
        style={styles.inputTextStyle}
      />
      <CustomInput
        containerStyle={styles.inputContainerStyle}
        iconComponent={renderIcon(IMAGES.LOCK_ICON)}
        placeholder="Confirm password"
        style={styles.inputTextStyle}
      />

      <CustomButton
        title="Sign up"
        style={styles.buttonStyle}
        onPress={handleSignUp}
      />
      <TouchableOpacity
        style={styles.createAccountContainer}
        onPress={handleSignIn}>
        <CustomText style={styles.createAccountText}>Sign In</CustomText>
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
    width: width * 0.8,
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
  inputContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  inputTextStyle: {color: COLORS.FADE_WHITE, marginLeft: 10, paddingBottom: 0},
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
