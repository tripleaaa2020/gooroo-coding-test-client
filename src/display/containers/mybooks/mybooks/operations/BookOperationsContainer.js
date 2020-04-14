
import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';

import './BookOperationsContainer.scss';
import nothingLogo from '../../../../../assets/images/icons/nothing.svg';

import { CATEGORIES } from '../../../../../utils/Variables';
import { SET_INITIAL_FORM_DETAILS, SET_FORM_DETAILS, RESET_FORM } from '../../../../../store/actions/MyBooksActions'
import { getBookDetail, createBook, editBookDetails } from '../../../../../services/Books';

const BookOperationsContainer = props => {

    console.log("BookOperationsContainer props => ", props);

    const bookID = props.match.params.id ? props.match.params.id : null;
    const mode = (bookID == null) ? "add" : "edit";
    const buttonText = (mode === "add") ? "Add Book" : "Save Changes"

    const form = useSelector(state => state.mybook.form)
    let { title, author, publisher, categoryID } = form;
    const dispatch = useDispatch()

    console.log("categoryID => ", categoryID);

    let categoryIndex = -1;
    if (categoryID !== "") {
        for (let i = 0; i < CATEGORIES.length; i++) {
            if (CATEGORIES[i].categoryID === categoryID) {
                categoryIndex = i;
                break;
            }
        }
    }

    useEffect(() => {
        if (mode === "edit") {
            console.log("IN EDIT MODE");
            const setInitFormDetails = (data) => dispatch({ type: SET_INITIAL_FORM_DETAILS, data })
            getBookDetail(bookID)
                .then(res => {
                    const data = {
                        title: res.data.title,
                        author: res.data.author,
                        publisher: res.data.publisher,
                        categoryID: res.data.categoryID
                    }
                    setInitFormDetails(data)
                });
        }
    }, []);

    const submitBookDetailHandler = (e) => {
        e.preventDefault()

        const data = {
            ...form,
            image: null
        }

        if (mode === "add") {
            createBook(data).then(res => {
                
                if (res.code == 200) {
                    notify.show("Book successfully added to your collection!", 'success', 1000)
                }
                else {
                    notify.show("An error has occured, please try again later!", 'error', 1000)
                }

                if (res.data.authToken) {
                    localStorage.setItem('authToken', res.data.authToken);
                    dispatch({ type: RESET_FORM })
                    setTimeout(() => props.history.replace('/my-books'), 1000)
                }
                else {
                    localStorage.removeItem('authToken')
                    props.history.push('/auth/login')
                }
            })
        }
        else {
            editBookDetails(bookID, data).then(res => {

                if (res.code == 200) {
                    notify.show("Book successfully editted!", 'success', 1000)
                }
                else {
                    notify.show("An error has occured, please try again later!", 'error', 1000)
                }

                if (res.data.authToken) {
                    localStorage.setItem('authToken', res.data.authToken);
                    dispatch({ type: RESET_FORM })
                    setTimeout(() => props.history.replace('/my-books'), 1000)
                }
                else {
                    localStorage.removeItem('authToken')
                    props.history.push('/auth/login')
                }

            })
        }

    }

    return (
        <Suspense fallback={<div className="lds-ring mt-2"><div></div><div></div><div></div><div></div></div>}>
            <div className="book-operations-container d-flex flex-column">
                <div className="image-section d-flex flex-column align-items-center">
                    <div className="category-image text-center d-flex align-items-center justify-content-center">
                        <img
                            src={categoryID !== "" ? CATEGORIES[categoryIndex].categoryImage : nothingLogo}
                            alt={"category-image"}
                            height="80px" />
                    </div>
                </div>
                <div className="form-section flex-grow-1 d-flex flex-column">
                    <Notifications />
                    <div className="w-100 form-content">
                        <form autoComplete="off">
                            <h4 className="biggerFont colorDefault titleSection d-inline-block">Book Details</h4>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6">
                                    <h5 className="smallFont greyMedium text-uppercase">TITLE</h5>
                                    <input value={title} name="title" type="text" onChange={(e) => dispatch({ type: SET_FORM_DETAILS, e })} className="form-control custom-form" placeholder="Enter Book Title" />
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <h5 className="smallFont greyMedium text-uppercase">AUTHOR</h5>
                                    <input value={author} name="author" type="text" onChange={(e) => dispatch({ type: SET_FORM_DETAILS, e })} className="form-control custom-form" placeholder="Enter Author Name" />
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <h5 className="smallFont greyMedium text-uppercase">PUBLISHER</h5>
                                    <input value={publisher} name="publisher" type="text" onChange={(e) => dispatch({ type: SET_FORM_DETAILS, e })} className="form-control custom-form" placeholder="Enter Publisher Name" />
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <h5 className="smallFont greyMedium text-uppercase">CATEGORY</h5>
                                    <select name="categoryID" value={categoryID} className="form-control custom-form" onChange={(e) => dispatch({ type: SET_FORM_DETAILS, e })}>
                                        <option value={""}>Select Category</option>
                                        {CATEGORIES.map((category, index) => {
                                            return (
                                                <option key={index} value={category.categoryID}>{category.categoryName}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-auto text-right">
                        <button disabled={
                            ((
                                title === '' ||
                                author === '' ||
                                publisher === '' ||
                                categoryID === ''
                            ) ? true : false)
                        }
                            onClick={(e) => submitBookDetailHandler(e)}
                            className="buttonRounded d-inline-block px-4">{buttonText}</button>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}
export default BookOperationsContainer