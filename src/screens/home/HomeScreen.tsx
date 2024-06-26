import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, CustomText, Header} from '../../components';
import {COLORS} from '../../constants/colors';

const Home = () => {
  return (
    <Container>
      <Header title={'Home'} />
      <View style={styles.container}>
        <CustomText style={styles.subtitle}>Home Screen</CustomText>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
  },
});

export default Home;
