import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'; 
import { createPost } from '../actions';

class PostsNew extends Component { 

    renderField(field) {
        return (
            <div className="form-group"> 
                <label>{field.label}</label> 
                <input className="form-control" type={field.type} {...field.input}
                /> 
            </div>
        );
    }
    onSubmit = (values) => { 
        // call createPost action and send a second argument (post) that is a funtcion = callback
        this.props.createPost(values, (post) => {
            this.props.history.push('/'); // Navigate after submit 
            return post;
            }
        ); 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}> 
                    <Field
                        label="Title"
                        name="title"
                        type="text" 
                        component={this.renderField}
                    />
                    <label htmlFor="content">Content</label> 
                    <Field
                        className="form-control" 
                        label="Content" 
                        name="content" 
                        component="textarea" 
                        rows="8"
                    />
                    <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
                        Create Post
                    </button>
                </form>
            </div>
        ); 
    }
}

export default reduxForm({ form: 'newPostForm' })( 
    // connecting this form with the id 'newPostForm', to the action createPost that I defined in actions and that I want to use in the props
    connect(null, { createPost })(PostsNew)
);


export default PostsNew;