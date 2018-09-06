import {  setCommentList } from 'actions';

import * as t from 'actions/actionTypes';

describe('setCommentList', () => {
    it('has the correct type', () => {
        const action = setCommentList();
        setTimeout(() => expect(action.type).toEqual(t.SET_TOP_STORY_LIST),
        1000);
    });
});
