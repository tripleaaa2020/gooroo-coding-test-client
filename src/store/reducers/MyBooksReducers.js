import {
    SET_ACTIVE_CATEGORIES,
    SET_MY_BOOKS,
    SET_SEARCH_VALUE,
    SET_INITIAL_FORM_DETAILS,
    SET_FORM_DETAILS,
    RESET_FORM
} from '../actions/MyBooksActions'

const initialState = {
    activeCategories: [],
    searchValue: '',
    books: [],
    form: {
        title: "",
        author: "",
        publisher: "",
        categoryID: "",
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CATEGORIES:

            var activeCategories = [...state.activeCategories]
            var categoryFoundIndex = -1;

            for (let i = 0; i < activeCategories.length; i++) {
                if (activeCategories[i] == action.categoryID) {
                    categoryFoundIndex = i;
                    break;
                }
            }

            (categoryFoundIndex == -1) ?
                activeCategories.push(action.categoryID) :
                activeCategories.splice(categoryFoundIndex, 1);

            return {
                ...state,
                activeCategories
            }
        case SET_MY_BOOKS:
            var books = action.books;

            return {
                ...state,
                books
            }
        case SET_SEARCH_VALUE:
            var searchValue = action.e.target.value;

            return {
                ...state,
                searchValue
            }
        case SET_INITIAL_FORM_DETAILS:
            var form = action.data;

            return {
                ...state,
                form
            }
        case SET_FORM_DETAILS:
            console.log("action.e.target.value => ", action.e.target.value);
            console.log("action.e.target.name => ", action.e.target.name)

            var value = (action.e.target.name === 'categoryID' && action.e.target.value !== "") ?
                parseInt(action.e.target.value) :
                action.e.target.value;

            var form = {
                ...state.form,
                [action.e.target.name]: value
            }
            return {
                ...state,
                form
            }
        case RESET_FORM:

            var form = {
                title: "",
                author: "",
                publisher: "",
                categoryID: "",
            }

            return {
                ...state,
                form
            }
        default:
            return state
    }
}