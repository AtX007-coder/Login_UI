import React, {useState} from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
  View,
  Text,
} from 'react-native';
import {COLORS} from '../constants';

interface CustomInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>; // Additional style for the container
  placeholderTextColor?: string;
  iconComponent?: React.ReactNode; // Icon component to be displayed
  iconColor?: string; // Color of the icon
  isError?: boolean; // Indicates if there is an error
  errorMessage?: string; // Error message to be displayed
}

const CustomInput: React.FC<CustomInputProps> = ({
  containerStyle,
  placeholderTextColor,
  iconComponent,
  iconColor = '#000', // Default icon color
  isError = false,
  errorMessage = '',
  onFocus,
  onBlur,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.inputContainer,
        containerStyle,
        {
          borderColor: isError
            ? COLORS.PRIMARY_RED
            : isFocused
            ? COLORS.BLUE_GROTTO
            : COLORS.FADE_WHITE,
        },
      ]}>
      {iconComponent && (
        <View style={styles.iconContainer}>
          {React.cloneElement(iconComponent as React.ReactElement<any>, {
            color: iconColor,
            size: 20,
            style: [
              styles.icon,
              (iconComponent as React.ReactElement<any>).props.style,
            ],
          })}
        </View>
      )}
      <TextInput
        style={[styles.input, iconComponent ? {marginLeft: 10} : null]}
        onFocus={e => {
          setIsFocused(true);
          if (onFocus) {
            onFocus(e);
          }
        }}
        onBlur={e => {
          setIsFocused(false);
          if (onBlur) {
            onBlur(e);
          }
        }}
        placeholderTextColor={placeholderTextColor || '#999'}
        {...restProps}
      />
      {isError && errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10, // Add horizontal padding to the container
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    height: 40, // Adjust height of the container
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30, // Adjust as needed for icon size
  },
  icon: {
    // Additional styles for icon if necessary
  },
  errorText: {
    color: COLORS.PRIMARY_RED,
    fontSize: 12,
    marginTop: 5,
  },
});

export {CustomInput};
