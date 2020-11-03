import { useEffect, useState } from 'react';
import HttpClient from '../../libs/HttpClient';
import { RestaurantListPayload, RestaurantPayload } from '../../types/Api';

enum RESTAURANT_API_URLS {
  list = 'https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json',
}

export const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState<RestaurantPayload[]>([]);
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await HttpClient.get<RestaurantListPayload>(
          RESTAURANT_API_URLS.list,
        );
        console.log('response', response);
        if (response) {
          setRestaurants(response.data.restaurant.items);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getRestaurants();
  }, []);

  return [restaurants];
};
