import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useSelector, useDispatch } from 'react-redux';
import { SET_LIBRARY_BOOKS } from '../../store/actions/LibraryActions';
import { SET_MY_BOOKS } from '../../store/actions/MyBooksActions';
import { getAllBooks } from '../../services/Books';

import Book from '../components/book/BookComponent';
import './ListSection.scss';

const ListSection = props => {

    console.log("ListSection props => ", props);

    const authToken = localStorage.getItem("authToken");
    const userPayload = jwt.decode(authToken);

    const booksListReducer = useSelector(state => (props.from === "Library") ? state.lib : state.mybook);
    const { books, activeCategories, searchValue } = booksListReducer;
    const dispatch = useDispatch();

    console.log("books => ", books);

    const setBooks = (books) => {
        let type = props.from === "Library" ? SET_LIBRARY_BOOKS : SET_MY_BOOKS;
        dispatch({ type, books })
    }

    useEffect(() => {
        getAllBooks(userPayload.contributorID, activeCategories, searchValue, props.from)
            .then(response => {
                if (response.data) {
                    if (response.data.rows)
                        setBooks(response.data.rows)
                    localStorage.setItem('authToken', response.data.authToken);
                }
                else {
                    if (response.msg.name === "TokenExpiredError") {
                        localStorage.removeItem('authToken')
                        props.history.push('/auth/login')
                    }
                }
            });
    }, [dispatch, activeCategories, searchValue, props.location.state])

    return (
        <div style={{ backgroundColor: 'transparent' }} className="pt-3 mt-3 px-3 rounded">
            <div className="row books-list">
                {books.map((book, i) => {
                    return (
                        <div className={"col-6 col-lg-3"} key={book.bookID}>
                            <a href={"#"}>
                                <Book
                                    {...props}
                                    isAddBook={false}
                                    bookID={book.bookID}
                                    title={book.title}
                                    author={book.author}
                                    publisher={book.publisher}
                                    categoryID={book.categoryID}
                                    contributorID={book.contributorID}
                                    contributorName={book.contributors.contributorName}
                                />
                            </a>
                        </div>
                    );
                })}
                {props.from === "MyBooks" &&
                    <div className={"col-6 col-lg-3"}>
                        <a href={"/my-books/add"}>
                            <Book {...props} isAddBook={true} />
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}
export default ListSection