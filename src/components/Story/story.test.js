import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Story from 'components/Story';

let wrapper, store;
const middlewares = [reduxThunk];
const mockstore = configureStore(middlewares);
const initialState = {reducer: {topStoryList: [{id: 1, title: "title1"}, {id: 2, title: "title2"}]}}

beforeEach(() => {
    store = mockstore(initialState);
    wrapper = mount(<Provider store={store}><Story/></Provider>);
});

afterEach(() => {
    wrapper.unmount();
});

describe('Story UI', () => {
    it('Should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('check Props matches with initialState ', () => {
        expect(wrapper.find('Story').props().topStoryList).toEqual(initialState.reducer.topStoryList)
    });
});
