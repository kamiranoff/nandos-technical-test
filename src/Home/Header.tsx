import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header: FC = ({}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Nando's top UK restaurants</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d1011b',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Header;
