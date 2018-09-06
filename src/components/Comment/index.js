import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from 'components/Spinner';
import 'components/style.css';

function Comment(props) {
    const { commentList, loading } = props;

    if(loading) {
        return (
            <div className="spinner">
                <Spinner />
            </div>
        );
    }
   const renderComment = () => {
        return (
            commentList.map((comment) => <h5 key={comment.id}>{`* ${comment.text}`}</h5>)
        );
    }
    return (
        <div className="container">
            <h3>Comments</h3>
            <div className="list">
                {renderComment()}
            </div>
        </div>
    );
};

const mapStateToProps = ({ reducer }) => {
    const { commentList, loading } = reducer;
    return { commentList, loading };
}

Comment.prototype = { commentList: PropTypes.array.isRequired }
export default connect(mapStateToProps)(Comment);