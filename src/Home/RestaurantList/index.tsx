import React, { FC } from 'react';
import { FlatList, Linking, StyleSheet } from 'react-native';
import RestaurantListItem from './ResturantListItem';
import { useFetchRestaurants } from './useFetchRestaurants';

export interface RestaurantListProps {
}

const RestaurantList: FC<RestaurantListProps> = ({}) => {
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
      renderItem={({ item }) => (
        <RestaurantListItem
          title={item.name}
          url={item.url}
          onPress={handlePress}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RestaurantList;
