import React from 'react';
//import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create()
    .toJSON();
  expect(tree).toMatchSnapshot();
});