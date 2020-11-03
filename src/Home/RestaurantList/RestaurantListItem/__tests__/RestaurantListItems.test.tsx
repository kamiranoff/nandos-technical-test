import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import RestaurantListItem from '../index';

it('RestaurantListItem renders correctly', () => {
  const tree = renderer
    .create(
      <RestaurantListItem
        onPress={() => null}
        title="title"
        url="https://testurl"
        address={{
          addressLocality: 'London',
          streetAddress: 'westland place',
          postalCode: 'n17lp',
        }}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('RestaurantListItem title and link text should be correct', () => {
  const wrapper = renderer.create(
    <RestaurantListItem
      onPress={() => null}
      title="My Restaurant"
      url="https://testurl"
      address={{
        addressLocality: 'London',
        streetAddress: 'westland place',
        postalCode: 'n17lp',
      }}
    />,
  );
  const texts = wrapper.root.findAllByType(Text);
  expect(texts[0].props.children).toBe('My Restaurant');
  expect(texts[1].props.children).toBe('Open Link');
});
