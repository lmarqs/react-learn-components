import React from 'react';
import renderer from 'react-test-renderer';
import ButtonTogglePeriod from './ButtonTogglePeriod';

it('renders correctly', () => {
    const component = renderer.create(<ButtonTogglePeriod onChangeEvent={jest.fn()} />)
    expect(component.toJSON()).toMatchSnapshot();
});

it('toggle active class after a click', () => {
    const component= renderer.create(<ButtonTogglePeriod onChangeEvent={jest.fn()} />)

    const button = component.root.findByType('button');

    renderer.act(() => {
        button.props.onClick();
    });

    expect(component.toJSON()).toMatchSnapshot();
});