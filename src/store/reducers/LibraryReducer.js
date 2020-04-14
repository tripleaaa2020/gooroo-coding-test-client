import {
    SET_ACTIVE_CATEGORIES,
    SET_LIBRARY_BOOKS,
    SET_SEARCH_VALUE
} from '../actions/LibraryActions'

const initialState = {
    activeCategories: [],
    searchValue: '',
    books: [],
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
        case SET_LIBRARY_BOOKS:
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
        default:
            return state
    }
}