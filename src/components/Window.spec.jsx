import React from 'react';
import renderer from 'react-test-renderer';
import Window from './Window';

it('renders correctly without parameters', () => {
  const component = renderer.create(<Window />);

  expect(component.toJSON()).toMatchSnapshot();
});

it('renders correctly when "closed" is false', () => {
  const component = renderer.create(<Window closed={false} />);

  expect(component.toJSON()).toMatchSnapshot();
});

it('renders correctly when "closed" is true', () => {
  const component = renderer.create(<Window closed={true} />);

  expect(component.toJSON()).toMatchSnapshot();
});