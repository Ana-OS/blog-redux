import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = [], action) { 
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;
        case FETCH_POST:
            // because in line 3 e say that if state is undefined then state is an empty array. here in fetch a single posts altough it is not an array because its just one post then we say that is undefined but inside an array.
            // we dont want to change the type of state otherwise it breaks
            
            return [ action.payload ];
        default:
            return state;
        } 
}