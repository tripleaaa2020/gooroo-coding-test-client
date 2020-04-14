import {
    SET_AUTH_FORM
} from '../actions/AuthActions'


const initialState = {
    
    // example : [
    //     {name : 'Agung Septiyadi',age:22},
    //     {name : 'Ibnu Yasin', age:23}
    // ]
    currentForm: 'login',
    loginForm: {
        email: '',
        password: ''
    },
    registerForm: {
        name: '',
        email: '',
        password: ''
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_FORM:
            let currentForm = action.authForm;
            return {
                ...state,
                currentForm
            }
        default:
            return state
    }
}