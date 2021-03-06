import React, { FC } from 'react';
import { FlatList, Linking, Platform, StyleSheet } from 'react-native';
import RestaurantListItem from './RestaurantListItem';
import { useFetchRestaurants } from './useFetchRestaurants';

const RestaurantList: FC = ({}) => {
  const [restaurants] = useFetchRestaurants();

  const handlePress = async (url: string) => {
    try {
      await Linking.canOpenURL(url);
      await Linking.openURL(url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FlatList
      data={restaurants}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item }) => (
        <RestaurantListItem
          title={item.name}
          url={item.url}
          address={item.geo.address}
          onPress={handlePress}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: Platform.OS === 'ios' ? 48 : 59,
  },
});

export default RestaurantList;
