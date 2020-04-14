import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Notifications, { notify } from 'react-notify-toast';
import Modal from "react-modal"

import { ON_HIDE_DELETE_MODAL } from '../../../store/actions/NavigationActions'
import { deleteBook } from '../../../services/Books';

// image
import RemoveIcon from '../../../assets/images/icons/remove-icon.svg'
import IconClose from "../../../assets/images/icons/close-popup-icon.svg";

Modal.setAppElement("#root");

const DeleteBookModal = (props) => {

    console.log("DeleteBookModal props => ", props);

    const nav = useSelector(state => state.nav);
    const dispatch = useDispatch();
    const bookID = props.bookID;

    const closeModal = () => {
        props.history.push("/my-books");
        dispatch({ type: ON_HIDE_DELETE_MODAL })
    }

    const deleteBookHandler = () => {
        deleteBook(bookID).then(res => {
            if (res.code == 200) {
                notify.show("Book successfully deleted!", 'success', 1000)
            }
            else {
                notify.show("An error has occured, please try again later!", 'error', 1000)
            }
            dispatch({ type: ON_HIDE_DELETE_MODAL })
            setTimeout(() => props.history.push('/my-books', {deleted: true}), 1000)
        }).catch(err => {
            console.log(err);
            notify.show("An error has occured, please try again later!", 'error', 1000)
            dispatch({ type: ON_HIDE_DELETE_MODAL })
            setTimeout(() => props.history.push('/my-books'), 1000)
        })
    }

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "20",
            padding: "40px 20px 30px",
            overflow: "none",
            width: "360px",
            borderRadius: "8px",
            textAlign: "center"
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: "20"
        }
    }
    return (
        <div>
            <Notifications />
            <Modal isOpen={nav.showDeleteModal} style={customStyles} contentLabel="Example Modal" onRequestClose={() => closeModal()}>
            {/* <Notifications /> */}
                <img alt="Close" src={IconClose} className="position-absolute cursorPointer" style={{ right: '10px', top: '10px' }} onClick={() => closeModal()} />
                <img alt="Del" src={RemoveIcon} className="mb-3" />
                <div className="greyDefault normalFont font-weight-bold text-center">
                    <span>Delete Book</span>
                </div>
                <div className="greyDefault smallFont text-center mx-auto mt-3">
                    <span>
                        Are you sure you want to delete this book from your collection?
                    </span>
                </div>
                <div className="d-flex w-100 justify-content-around mt-3">
                    <button className="buttonRounded d-inline-block px-4" onClick={() => closeModal()}>No</button>
                    <button className="buttonRounded d-inline-block px-4" onClick={() => deleteBookHandler()}>Yes</button>
                </div>
            </Modal>
        </div>
    )
}

export default DeleteBookModal