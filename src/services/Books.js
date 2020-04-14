import axios from "axios"
import { API_URL } from "../utils/Variables"

export const getAllBooks = async (contributorID, activeCategories, searchValue, from) => {

    var data

    var contributorIDQueryURL = "";
    var categoriesQueryURL = "";
    var searchQueryURL = "";

    console.log("getAllBooks activeCategories => ", activeCategories);

    if (activeCategories.length > 0) {

        categoriesQueryURL += "?categoryID="
        for (let i = 0; i < activeCategories.length; i++) {
            if (i == 0)
                categoriesQueryURL += activeCategories[i];
            else
                categoriesQueryURL += "_" + activeCategories[i];
        }

        if (from !== "Library")
            contributorIDQueryURL += "&contributorID=" + contributorID;
        if (searchValue.length > 0)
            searchQueryURL += "&search=" + searchValue;
    }
    else {
        if (from !== "Library") {
            contributorIDQueryURL += "?contributorID=" + contributorID;
            if (searchValue.length > 0)
                searchQueryURL += "&search=" + searchValue;
        }
        else {
            if (searchValue.length > 0)
                searchQueryURL += "?search=" + searchValue;
        }

    }

    const authToken = localStorage.getItem('authToken');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': authToken
    }

    await axios
        .get(API_URL + "books/all" + categoriesQueryURL + contributorIDQueryURL + searchQueryURL, { headers: headers })
        .then(function (response) {
            console.log("getAllBooks Response => ", response);
            data = response.data
        })
        .catch(function (error) {
            console.log("getAllBooks error => ", error);
            data = error
        });

    return data;
}

export const getBookDetail = async bookID => {

    var data

    await axios
        .get(API_URL + "books/" + bookID + "/details")
        .then(function (response) {
            console.log("getBookDetail Response => ", response);
            data = response.data
        })
        .catch(function (error) {
            console.log("getBookDetail error => ", error);
            data = error
        });

    return data;
}

export const editBookDetails = async (bookID, updatedBookData) => {

    const authToken = localStorage.getItem('authToken');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': authToken
    }

    let data = [];

    await axios.put(API_URL + '/books/' + bookID + '/edit', updatedBookData, { headers: headers })
        .then(function (response) {
            console.log("editBookDetails Response => ", response);
            data = response.data
        })
        .catch(function (error) {
            console.log("editBookDetails error => ", error);
            data = error
        })
    return data
}

export const createBook = async (newBookData) => {

    const authToken = localStorage.getItem('authToken');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': authToken
    }

    let result = []

    await axios.post(API_URL + 'books/create', newBookData, { headers: headers })
        .then(function (response) {
            console.log('createBook Response => ',response)
            result = response.data
        })
        .catch(function (error) {
            console.log(error)
            result = error
        });

    return result;
}

export const deleteBook = async (bookID) => {

    const authToken = localStorage.getItem('authToken');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': authToken
    }

    let result = []

    console.log("deleteBook bookID => ", bookID);

    await axios.delete(API_URL + 'books/' + bookID + '/delete', { headers: headers })
        .then(function (response) {
            console.log(response)
            result = response.data;
        })
        .catch(function (error) {
            console.log(error)
            result = error;
        });

    return result
}

