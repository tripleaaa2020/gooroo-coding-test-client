import {
    ON_HOVER_NAVIGATION,
    ON_RESET_HOVER_NAVIGATION,
    ON_SET_ACTIVE_PAGE,
    ON_SET_LOGOUT,
    ON_HIDE_DELETE_MODAL,
    ON_SHOW_DELETE_MODAL
} from '../actions/NavigationActions'

// ICONS
import libraryGreyIcon from '../../assets/images/icons/library-grey.svg'
import libraryOrangeIcon from '../../assets/images/icons/library-orange.svg'
import myBooksGreyIcon from '../../assets/images/icons/mybooks-grey.svg'
import myBooksOrangeIcon from '../../assets/images/icons/mybooks-orange.svg'
import logoutGreyIcon from '../../assets/images/icons/logout-grey.svg'
import logoutOrangeIcon from '../../assets/images/icons/logout-orange.svg'
// END ICONS


const initialState = {
    showDeleteModal: false,
    logoutClicked: false,
    navigationItems: [
        { title: 'Library', icon: '', link: '/', iconGrey: libraryGreyIcon, iconOrange: libraryOrangeIcon, hover: false, active: false },
        { title: 'My Books', icon: '', link: '/my-books', iconGrey: myBooksGreyIcon, iconOrange: myBooksOrangeIcon, hover: false, active: false },
        { title: 'Log Out', icon: '', link: '/', iconGrey: logoutGreyIcon, iconOrange: logoutOrangeIcon, hover: false, active: false },
    ]
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ON_HOVER_NAVIGATION:
            var navigationItems = [...state.navigationItems]
            navigationItems.map(function (x) {
                x.hover = false;
                return x
            });
            navigationItems[action.index].hover = true
            return {
                ...state,
                navigationItems
            }
        case ON_RESET_HOVER_NAVIGATION:
            var menu = [...state.navigationItems]
            menu.map(function (x) {
                x.hover = false;
                return x
            });
            return {
                ...state,
                navigationItems: menu
            }
        case ON_SET_ACTIVE_PAGE:
            var navigationItems = [...state.navigationItems]
            navigationItems.map(function (x) {
                x.active = false;
                return x
            });
            const indexFocus = navigationItems.findIndex(res => res.link === action.param)
            navigationItems[indexFocus].active = true
            return {
                ...state,
                navigationItems: navigationItems
            }
        case ON_HIDE_DELETE_MODAL:
            var showDeleteModal = false;
            return {
                ...state,
                showDeleteModal
            }
        case ON_SHOW_DELETE_MODAL:
            var showDeleteModal = true;
            return {
                ...state,
                showDeleteModal
            }
        case ON_SET_LOGOUT:
            var logoutClicked = action.logoutClicked;
            return {
                ...state,
                logoutClicked
            }
        default:
            return state
    }
}