import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from 'components/Header';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Header />);
});

it('Header snapshot test', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
})