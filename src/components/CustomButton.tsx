import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  style,
  textStyle,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      {title ? <Text style={[styles.text, textStyle]}>{title}</Text> : children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export {CustomButton};
