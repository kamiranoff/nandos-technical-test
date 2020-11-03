import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Address from './Address';
import { RestaurantPayload } from '../../../types/Api';

export interface IRestaurantListItem {
  title: string;
  url: string;
  onPress: (url: string) => void;
  address: RestaurantPayload['geo']['address'];
}

const RestaurantListItem: FC<IRestaurantListItem> = ({
  title,
  url,
  onPress,
  address,
}) => (
  <View style={styles.container}>
    <View style={styles.subContainer}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        onPress={() => onPress(url)}
        android_ripple={{ color: '#d1011b', borderless: true }}>
        <Text style={styles.text}>Open Link</Text>
      </Pressable>
    </View>
    <Address
      addressLocality={address.addressLocality}
      postalCode={address.postalCode}
      streetAddress={address.streetAddress}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#CCC',
    borderBottomWidth: 0.5,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: '#0000EE',
  },
});

export default RestaurantListItem;
