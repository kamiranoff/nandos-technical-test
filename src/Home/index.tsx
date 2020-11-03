import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import RestaurantList from './RestaurantList';

const Home: FC = () => (
  <View style={styles.container}>
    <Header />
    <RestaurantList />
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default Home;
