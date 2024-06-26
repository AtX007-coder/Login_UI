import React, {useState} from 'react';
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
import {COLORS} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../assets/images';
import {FONTSIZE} from '../../constants';

const {width} = Dimensions.get('screen');

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Common validation function
  const validateInputs = () => {
    const newErrors = {
      email: '',
      password: '',
    };

    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    }

    if (!password.trim()) {
      newErrors.password = 'Please enter your password.';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = () => {
    const isValid = validateInputs();

    // Check if inputs are valid
    if (isValid) {
      // Navigate to home screen (simulate successful login)
      navigation.navigate('Home');
    }
  };

  const handleSignup = () => {
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
        value={email}
        onChangeText={val => {
          setEmail(val);
          setErrors(prev => ({...prev, email: ''}));
        }}
        isError={!!errors.email} // Validate email presence for error state
        errorMessage={errors.email}
      />
      <CustomInput
        containerStyle={styles.inputContainerStyle}
        iconComponent={renderIcon(IMAGES.LOCK_ICON)}
        placeholder="Password"
        style={styles.inputTextStyle}
        value={password}
        onChangeText={val => {
          setPassword(val);
          setErrors(prev => ({...prev, password: ''}));
        }}
        secureTextEntry // Masking the password
        isError={!!errors.password} // Validate password presence for error state
        errorMessage={errors.password}
      />

      <CustomButton
        title="Sign In"
        style={styles.buttonStyle}
        onPress={handleLogin}
      />
      <TouchableOpacity
        style={styles.createAccountContainer}
        onPress={handleSignup}>
        <CustomText style={styles.createAccountText}>Signup</CustomText>
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
  inputTextStyle: {
    color: COLORS.FADE_WHITE,
    marginLeft: 10,
    flex: 1,
    height: 40,
  },
  buttonStyle: {
    backgroundColor: COLORS.PRIMARY_RED,
    height: 50,
    marginTop: 50,
    marginBottom: 10,
  },
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
  welcomeBack: {color: COLORS.WHITE, fontSize: FONTSIZE.FONT25, marginTop: 70},
  createAccountText: {color: COLORS.FADE_WHITE, fontSize: FONTSIZE.FONT18},
});

export default Login;
