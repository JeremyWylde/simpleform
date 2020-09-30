import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
    posts: postsReducer,
    form: formReducer
})
