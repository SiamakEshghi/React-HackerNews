import * as a from 'Api';
import * as t from 'actions/actionTypes';


export const setTopStoryList = (callBack) => {
   return  dispatch => {
    
    a.getTopStoryIDS()
    .then((data) => {
        Promise.all(
            data.slice(0, 10).map(storyId => 
                a.getItem(storyId)
                .then(item => item))
        ).then(topStoryList => {
            dispatch({type: t.SET_TOP_STORY_LIST, topStoryList});
            callBack();
        }).catch(er => console.log(er));
    }).catch(e => console.log(e));
   }
}

export const setCommentList = (commentIdList) => {
    return dispatch => {
        Promise.all(
            commentIdList.slice(0, 20).map(commentId => 
                a.getItem(commentId)
                .then(item => item))
        ).then(commentList => {
            dispatch({ type: t.SET_COMMENT_LIST, commentList })
        }).catch(e => console.log(e));
    }
}