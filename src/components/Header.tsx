import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {COLORS} from '../constants/colors';

interface HeaderProps {
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.BABY_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BLUE_GROTTO,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.PRIMARY_BLACK,
  },
});

export {Header};
