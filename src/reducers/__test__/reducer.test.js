import * as t from 'actions/actionTypes';
import reducer from 'reducers';

let INITIAL_STATE;
describe('Reducer', () => {

    beforeEach(() => {
        INITIAL_STATE = {
            topStoryList: [],
            commentList: [], 
            loading: true
        }
    });

    it('Handle action of type SET_TOP_STORY_LIST', () => {
        const action = {
            type: t.SET_TOP_STORY_LIST,
            topStoryList: [{id: 1, title: 't1'}, {id: 1, title: 't1'}]
        }
        const newState = reducer(INITIAL_STATE, action);
        expect(newState).toEqual({
            topStoryList: [{id: 1, title: 't1'}, {id: 1, title: 't1'}],
            commentList: [], 
            loading: true
        });
    });

    it('Handle action of type SET_COMMENT_LIST', () => {
        const action = {
            type: t.SET_COMMENT_LIST,
            commentList: [{id: 1, text: 't1'}, {id: 2, text: 't2'}]
        }
        const newState = reducer(INITIAL_STATE, action);
        expect(newState).toEqual({
            topStoryList: [],
            commentList: [{id: 1, text: 't1'}, {id: 2, text: 't2'}], 
            loading: false
        });
    });
});