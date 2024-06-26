import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
  View,
} from 'react-native';

interface CustomInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>; // Additional style for the container
  placeholderTextColor?: string;
  iconComponent?: React.ReactNode; // Icon component to be displayed
  iconColor?: string; // Color of the icon
}

const CustomInput: React.FC<CustomInputProps> = ({
  containerStyle,
  placeholderTextColor,
  iconComponent,
  iconColor = '#000', // Default icon color
  ...restProps
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
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
        placeholderTextColor={placeholderTextColor || '#999'}
        {...restProps}
      />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30, // Adjust as needed for icon size
  },
  icon: {
    // Additional styles for icon if necessary
  },
});

export {CustomInput};
