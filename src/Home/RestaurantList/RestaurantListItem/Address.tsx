import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface IAddress {
  addressLocality: string;
  postalCode: string;
  streetAddress: string;
}

const Address: FC<IAddress> = ({
  addressLocality,
  postalCode,
  streetAddress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{addressLocality}</Text>
      <Text style={styles.text}>{postalCode}</Text>
      <Text style={styles.text} numberOfLines={2}>
        {streetAddress}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '75%',
  },
  text: {
    color: '#333',
  },
});

export default Address;
