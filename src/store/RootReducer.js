import { combineReducers } from 'redux'
import authReducer from './reducers/AuthReducer'
import libReducer from './reducers/LibraryReducer'
import navReducer from './reducers/NavigationReducer'
import myBooksReducer from './reducers/MyBooksReducers'
export default combineReducers({
    auth : authReducer,
    lib: libReducer,
    nav: navReducer,
    mybook: myBooksReducer
});