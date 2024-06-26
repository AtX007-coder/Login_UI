import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
  style?: TextStyle;
  [key: string]: any; // Allow additional properties like 'numberOfLines', 'onPress', etc.
}

const CustomText: React.FC<CustomTextProps> = props => {
  return (
    <Text style={[styles.defaultStyle, props.style]} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 16,
    color: '#000',
  },
});

export {CustomText};
