import postReducer from './postsReducer'
import { combineReducers } from 'redux'

let reducers = combineReducers ({
    posts: postReducer
})

export default reducers;