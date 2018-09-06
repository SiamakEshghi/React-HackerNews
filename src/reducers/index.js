import * as t from 'actions/actionTypes';

const INITIAL_STATE = {
    topStoryList: [],
    commentList: [], 
    loading: true
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case t.SET_TOP_STORY_LIST: 
            return { ...state, topStoryList: action.topStoryList, loading: true }
        case t.SET_COMMENT_LIST:
            return { ...state, commentList: action.commentList, loading: false }
        default: return state;
    }
};