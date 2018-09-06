import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from 'components/Spinner';
import Ionicon from 'react-ionicons';
import * as actions from 'actions';
import "components/style.css";


class Story extends PureComponent {
    state = {
        loading: true
    }
    componentDidMount() {
        this.props.setTopStoryList( () => this.setState({loading: false}));
    }
    
    handleCommentList = (commentList) => {
        if(!commentList || commentList.length === 0) {
            alert("There is no comment for this story!")
        } else {
            this.props.setCommentList(commentList);
        }
    }
    renderStories = () => {
        const { topStoryList } = this.props;
        return (
            topStoryList.map((story) => {
                return (
                    <div key={story.id} className="row">
                        <Link 
                            className="btn" 
                            to={`/comment/${story.id}`} 
                            onClick={() => this.handleCommentList(story.kids)}
                        >
                            <Ionicon icon="md-text"  color="gray" />
                        </Link>
                        <h4>{story.title}</h4>
                    </div>
                );
            })
        );
    }
    render() {
        const { loading } = this.state;

        if (loading) {
            return (
                <div className="spinner">
                    <Spinner />
                </div>
            );
        } 
        return (
           <div className="container">
                <h2>Top Stories</h2>
                <div className="list">
                    {this.renderStories()}
                </div>
           </div>
        );
    }
}

const mapStateToProps = ({ reducer }) => {
    const { topStoryList } = reducer;

    return { topStoryList }
}
Story.propTypes = { topStoryList: PropTypes.array.isRequired };
export default connect(mapStateToProps, actions )(Story);