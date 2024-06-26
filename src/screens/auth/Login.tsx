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

import {
  Container,
  CustomButton,
  CustomInput,
  CustomText,
} from '../../components';
import {COLORS} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../assets/images';
import {FONTSIZE} from '../../constants';

const {width} = Dimensions.get('screen');

const Login = () => {
  const navigation = useNavigation();

  const onDone = () => {
    navigation.navigate('Signup');
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
      <CustomText style={styles.welcomeBack}>Welcome Back !</CustomText>

      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottieImageStyle}
          source={require('../../assets/lottieAnimations/girlWaling1.json')}
          autoPlay
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

      <CustomButton
        title="Sign In"
        style={styles.buttonStyle}
        onPress={onDone}
      />
      <TouchableOpacity style={styles.createAccountContainer}>
        <CustomText style={styles.createAccountText}>Signup</CustomText>
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
    paddingHorizontal: 20,
  },
  lottieContainer: {
    marginTop: -20,
    width: width * 0.9,
    height: width,
  },
  lottieImageStyle: {
    flex: 1,
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

  welcomeBack: {color: COLORS.WHITE, fontSize: FONTSIZE.FONT25, marginTop: 70},
  createAccountText: {color: COLORS.FADE_WHITE, fontSize: FONTSIZE.FONT20},
});

export default Login;
