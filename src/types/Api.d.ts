export interface RestaurantPayload {
  name: string;
  url: string;
  geo: {
    address: {
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
    };
  };
}

export interface RestaurantListPayload {
  data: {
    restaurant: {
      items: RestaurantPayload[];
    };
  };
}
