import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './BookComponent.scss';
import editButton from '../../../assets/images/icons/edit-icon-orange.svg';
import deleteButton from '../../../assets/images/icons/rubbish.svg';
import addButton from '../../../assets/images/icons/book-add-grey.svg';
import authorIcon from '../../../assets/images/icons/ink.svg';
import titleIcon from '../../../assets/images/icons/book-2.svg';
import publisherIcon from '../../../assets/images/icons/publish.svg';
import { ON_SHOW_DELETE_MODAL } from '../../../store/actions/NavigationActions';
import { CATEGORIES } from '../../../utils/Variables';
const DeleteBookModal = React.lazy(() => import('../../components/modal/DeleteBookModal'));

const BookComponent = props => {

    console.log("BookComponent props => ", props);
    const dispatch = useDispatch()
    const { bookID, title, author, publisher, categoryID, contributorName } = props || {};

    let categoryIndex = -1;
    for (let i = 0; i < CATEGORIES.length; i++) {
        if (categoryID == CATEGORIES[i].categoryID) {
            categoryIndex = i;
            break;
        }
    }

    const deleteBookHandler = () => {
        dispatch({ type: ON_SHOW_DELETE_MODAL });
    }

    return (
        <div className={"bgWhite rounded book-component"} style={{ boxShadow: '0px 0px 20px rgba(0,0,0,0.2)' }}>
            {props.isAddBook ?
                <div className="add-book">
                    <img src={addButton} height={80} className="rounded-top" alt="add" />
                    <h3 className="Poppins-Regular greyDefault" style={{ marginTop: "20px" }}>Add New Book</h3>
                </div>
                :
                <div>
                    <div className="book-image position-relative">
                        <img src={CATEGORIES[categoryIndex].categoryImage} className="rounded-top" width={120} alt={props.title} />
                        {props.from === "MyBooks" &&
                            <span
                            className="d-flex align-items-center justify-content-center" 
                            style={{
                                top: "15px",
                                width: "30px",
                                height: "30px",
                                borderRadius: "50px",
                                right: "15px"
                            }}>
                                <NavLink to={'/my-books/edit/' + bookID}>
                                    <img src={editButton} height={25} alt="edit" />
                                </NavLink>
                            </span>
                        }
                        {props.from === "MyBooks" &&
                            <span
                                onClick={deleteBookHandler}
                                className="d-flex align-items-center justify-content-center"
                                style={{
                                    top: "15px",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50px",
                                    right: "50px"
                                }}>
                                <img src={deleteButton} height={22} alt="delete" />
                            </span>
                        }
                        {props.from === "Library" &&
                            <span
                                className="Poppins-Regular"
                                style={{
                                    width: "100%",
                                    bottom: "0px",
                                    fontStyle: "italic",
                                    fontSize: "11px",
                                    color: "slategray",
                                    fontWeight: "300",
                                    backgroundColor: "rgba(0,0,0,0.05)",
                                    paddingTop: "2px",
                                    paddingBottom: "2px",
                                    letterSpacing: "0.5px",
                                }}>
                                {"Contributed by: " + contributorName}
                            </span>
                        }
                    </div>
                    <div className="p-3">
                        <div className="mb-1" style={{ display: "flex", flexDirection: "row" }}>
                            <img className="mr-2 mt-1" src={titleIcon} height={16} />
                            <p className="Poppins-Semi-Bold greyDefault m-0">
                                {title + " "}
                                <span className="Poppins-Regular greyMedium" style={{ fontSize: "10px" }}>({CATEGORIES[categoryIndex].categoryName})</span>
                            </p>
                        </div>
                        <div className="mb-1" style={{ display: "flex", flexDirection: "row" }}>
                            <img className="mr-2 mt-1" src={authorIcon} height={16} />
                            <p className="Poppins-Regular greyDefault m-0" style={{ fontSize: "14px" }}>{author}</p>
                        </div>
                        <div className="mb-1" style={{ display: "flex", flexDirection: "row" }}>
                            <img className="mr-2 mt-1" src={publisherIcon} height={16} />
                            <p className="Poppins-Regular greyDefault m-0" style={{ fontSize: "14px" }}>{publisher}</p>
                        </div>
                    </div>
                    <DeleteBookModal {...props} />
                </div>
            }
        </div >
    )
}
export default BookComponent