import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';

interface ContainerProps {
  style?: ViewStyle;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = props => {
  return (
    <SafeAreaView style={[styles.containerStyle, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export {Container};
