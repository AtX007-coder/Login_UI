import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LottieView from 'lottie-react-native';

import {CustomButton, CustomInput, CustomText} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../assets/images';
import {COLORS, FONTSIZE} from '../../constants';

const {width} = Dimensions.get('screen');

const Signup = () => {
  const navigation = useNavigation();
  const position = useRef(new Animated.Value(-width * 0.4)).current; // Initial position is off-screen to the left

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    Animated.timing(position, {
      toValue: width * 0.01, // Move to center (adjust as necessary)
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [position]);

  const validateInputs = () => {
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    }

    if (!password.trim()) {
      newErrors.password = 'Please enter your password.';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return (
      !newErrors.email && !newErrors.password && !newErrors.confirmPassword
    );
  };

  const handleSignUp = () => {
    const isValid = validateInputs();

    if (isValid) {
      // Simulate API call delay using setTimeout
      Animated.timing(position, {
        toValue: width * 0.9,
        duration: 3000, // 3 seconds duration
        useNativeDriver: true,
      }).start();

      // Navigate to Home after animation
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000); // 3 seconds delay to match the animation duration
    }
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };
  const renderIcon = (imagePath: any) => {
    return (
      <Image source={imagePath} resizeMode="contain" style={{height: 18}} />
    );
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={IMAGES.WELCOME}
      resizeMode="cover">
      <Animated.View
        style={[styles.lottieContainer, {transform: [{translateX: position}]}]}>
        <LottieView
          style={styles.lottieImageStyle}
          source={require('../../assets/lottieAnimations/Animation3.json')}
          autoPlay
          speed={0.7}
          loop
        />
      </Animated.View>
      <CustomInput
        containerStyle={styles.inputContainerStyle}
        iconComponent={renderIcon(IMAGES.USER_ICON)}
        placeholder="Email"
        style={styles.inputTextStyle}
        value={email}
        onChangeText={text => {
          setEmail(text);
          setErrors(prev => ({...prev, email: ''}));
        }}
        isError={!!errors.email}
        errorMessage={errors.email}
      />
      <CustomInput
        containerStyle={styles.inputContainerStyle}
        iconComponent={renderIcon(IMAGES.LOCK_ICON)}
        placeholder="Password"
        style={styles.inputTextStyle}
        value={password}
        onChangeText={text => {
          setPassword(text);
          setErrors(prev => ({...prev, password: ''}));
        }}
        secureTextEntry
        isError={!!errors.password}
        errorMessage={errors.password}
      />
      <CustomInput
        containerStyle={styles.inputContainerStyle}
        iconComponent={renderIcon(IMAGES.LOCK_ICON)}
        placeholder="Confirm password"
        style={styles.inputTextStyle}
        value={confirmPassword}
        onChangeText={text => {
          setConfirmPassword(text);
          setErrors(prev => ({...prev, confirmPassword: ''}));
        }}
        secureTextEntry
        isError={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword}
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
    width: width * 0.8,
    height: width,
    marginLeft: -90,
  },
  lottieImageStyle: {
    flex: 1,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  inputTextStyle: {
    color: COLORS.FADE_WHITE,
    marginLeft: 10,
    flex: 1,
    height: 40,
  },
  buttonStyle: {backgroundColor: COLORS.PRIMARY_RED, height: 50, marginTop: 50},
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    width: 80,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  iconStyle: {height: 18, width: 18},
  createAccountText: {color: COLORS.FADE_WHITE, fontSize: FONTSIZE.FONT18},
});

export default Signup;
