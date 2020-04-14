import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"

import { SET_ACTIVE_CATEGORIES } from '../../../store/actions/LibraryActions';
import {CATEGORIES} from '../../../utils/Variables';
import './FilterComponent.scss'
import FilterIcon from '../../../assets/images/icons/filter-icon.svg'
import OutSideClick from "../../../utils/OutSideClick";

const FilterComponent = (props) => {
    const [showFilter, setShowFilter] = useState(false)

    const filterReducer = useSelector(state => (props.from === "Library") ? state.lib : state.mybook);
    const dispatch = useDispatch();
    const activeCategories = filterReducer.activeCategories;
    console.log(activeCategories);

    const ref = useRef()

    const handleClickFilter = (categoryID) => {
        dispatch({ type: SET_ACTIVE_CATEGORIES, categoryID })
    }

    OutSideClick(ref, () => {
        if (showFilter) setShowFilter(false)
    })

    return (
        <div className="custom-filter position-relative">
            <div className="colorDefault cursorPointer normalFont d-flex align-items-center" onClick={() => setShowFilter(!showFilter)}>
                <img alt="filter icon" src={FilterIcon} className="mr-2" />
                <span>Filter</span>
            </div>
            {showFilter &&
                <div className="itemFilter greyDefault position-absolute" ref={ref}>
                    <p className="Poppins-Bold smallFont mb-3">Category</p>
                    {CATEGORIES.map((category, index) => {
                        return (
                            <div className="formCheck form-group form-check mt-0" key={index}>
                                <input defaultChecked={(activeCategories.includes(category.categoryID) ? true : false)} type="checkbox" value={category.categoryID} className="form-check-input" id={"check Category" + + index} onChange={() => handleClickFilter(category.categoryID)} />
                                <label className="form-check-label" htmlFor={"check Category" + index}>
                                    <span>{category.categoryName}</span>
                                </label>
                            </div>
                        )
                    })}
                </div>}
        </div>
    )
}

export default FilterComponent