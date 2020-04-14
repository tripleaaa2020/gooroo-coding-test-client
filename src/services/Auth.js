import axios from 'axios'
import { API_URL } from '../utils/Variables';

export const authenticateToken = async () =>{

    const authToken = localStorage.getItem('authToken');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : authToken
    }

    await axios.post(API_URL + 'auth/token', {headers : headers})
    .then(function (response) {
        console.log(response);
        return {
            data: response.data
        }
    })
    .catch(function (error) {
        console.log(error)
        return {
            data: error
        }
    });
}

export const attemptLogin = async contributor =>{
    
    var statusInt = 0
    let authToken = null
    let { email, password } = contributor


    await axios.post(API_URL+'auth/login', {
        email,
        password
    })
    .then(function (response) {
        console.log("attemptLogin Response => ", response);
        if(response.data.status){
            statusInt = (response.data.data.authToken ? 1 : 2)
            authToken = (response.data.data.authToken ? response.data.data.authToken : null)
        }else{
            statusInt = 2
            authToken = null
        }
        
    })
    .catch(function (error) {
        console.log("attemptLogin Error => ", error)
        statusInt = 3
    });

    return {
        statusInt,
        authToken,
    }
}

export const attemptLogout = async () =>{

    const authToken = localStorage.getItem('authToken');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : authToken
    }


    await axios.post(API_URL + 'auth/logout', {headers : headers})
    .then(function (response) {
        console.log(response);
        localStorage.removeItem('authToken')
    })
    .catch(function (error) {
        console.log(error)
    });
}


export const attemptRegister = async newContributor =>{
    
    var data = [];
    let {name, email, password} = newContributor

    await axios.post(API_URL+'auth/register', {
        name,
        email,
        password
    })
    .then(function (response) {
        console.log("attemptRegister Response => ", response);
        data = response.data;
        
    })
    .catch(function (error) {
        console.log("attemptRegister Error => ", error)
        data = error
    });

    return data
}

export const setLocalUserData = (authToken, userData) =>{
    localStorage.setItem('authToken', authToken)
    localStorage.setItem('userData', userData)
}
export const removeLocalUserData = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
}