import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from 'components/App';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});

it('Ahould render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});