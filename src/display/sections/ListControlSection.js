import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux"
import Filter from '../components/filter/FilterComponent';
import OutSideClick from "../../utils/OutSideClick";

import {
    SET_SEARCH_VALUE
} from '../../store/actions/LibraryActions'

import SearchIcon from '../../assets/images/icons/search-icon.svg'

const ListControlSection = props => {

    console.log("ListControlSection props => ", props);
    const searchReducer = useSelector(state => (props.from === "Library") ? state.lib : state.mybook);
    const dispatch = useDispatch();
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState(searchReducer.searchValue)
    const ref = useRef()

    OutSideClick(ref, () => {
        if (showSearch) {
            setShowSearch(false)
        }
    })

    const setSearch = (e) => {
        dispatch({ type: SET_SEARCH_VALUE, e });
        setSearchValue(e.target.value)
    }

    return (
        <div className="d-flex align-items-center px-3" style={{ height: '30px' }}>
            <Filter {...props} />
            {showSearch && (
                <div ref={ref} className="ml-auto">
                    <input type="text" className="form-control custom-form" placeholder="Search by title ..." spellCheck="false" 
                        value={searchValue}
                        onChange={(e) => setSearch(e)}
                        style={{ borderRadius: '50px', borderColor: '#f5a623', height: '36px', paddingRight: '40px' }} />
                    <div className="position-absolute r-0 text-center smallFont cursorPointer buttonRounded"
                        style={{top:'122px', width: '28px', height: '28px', right: '16px', padding: '5px 0px' }}
                        onClick={() => setShowSearch(false)}
                        ><img alt="search" src={SearchIcon} /></div>
                </div>
            )}
            {!showSearch && (
                <div className="position-absolute r-0 text-center smallFont cursorPointer buttonRounded"
                    style={{ width: '30px', height: '30px', padding: '5px 0px' }}
                    onClick={() => setShowSearch(true)}><img alt="search" src={SearchIcon} /></div>
            )}
        </div>
    )
}
export default ListControlSection