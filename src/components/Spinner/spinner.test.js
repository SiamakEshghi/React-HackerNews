import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Spinner from 'components/Spinner';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Spinner />);
});

it('Spinner snapshot test', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
})