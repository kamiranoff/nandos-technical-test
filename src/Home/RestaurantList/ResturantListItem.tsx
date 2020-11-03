import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export interface IRestaurantListItem {
  title: string;
  url: string;
  onPress: (url: string) => void;
}

const RestaurantListItem: FC<IRestaurantListItem> = ({
  title,
  url,
  onPress,
}) => (
  <View style={styles.container}>
    <Text>{title}</Text>
    <Pressable onPress={() => onPress(url)}>Open Link</Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
});

export default RestaurantListItem;
