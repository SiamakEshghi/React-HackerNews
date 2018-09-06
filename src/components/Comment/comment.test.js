import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Comment from 'components/Comment';

let wrapper, store;
const middlewares = [reduxThunk];
const mockstore = configureStore(middlewares);
const initialState = {reducer: {topStoryList: [], commentList: [{id: 1, text: 'text1'}, {id: 2, text: 'text2'}] }}

beforeEach(() => {
    store = mockstore(initialState);
    wrapper = mount(<Provider store={store}><Comment/></Provider>);
});
afterEach(() => {
    wrapper.unmount();
});
it('Comment snapshot test', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
})