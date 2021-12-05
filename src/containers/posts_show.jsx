import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component { 
    // could also be componentWillMount
    componentDidMount() {
        // if there's no pops post then call the a tion that get's the post
        if (!this.props.post) {
            this.props.fetchPost(this.props.match.params.id); 
        }
    }
    render() {
        if (!this.props.post) { 
            return <p>Loading...</p>;
        }
    return (
        <div>
            <div className="post-item"> 
                <h3>{this.props.post.title}</h3> 
                <p>{this.props.post.content}</p>
            </div>
            <Link to="/">
                Back 
            </Link>
        </div> );
    } 
}

function mapStateToProps(state, ownProps) { // the second parameter in the mapStateToProps refers to the props owned by this container; the props that are passed to the container by props.match.params.id.  Whatever is passed by the route to this conteinr ( <Route path="/posts/:id" component={PostsShow} /> ) is accessed by ownProps 

    const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL 


    // from the redux store array of posts fitn the post that has the same id has the id we got from the URL
    const post = state.posts.find(p => p.id === idFromUrl);
        return { post };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);

