import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import bigasLogo from '../../assets/images/general/logo.svg'


// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
    ON_HOVER_NAVIGATION,
    ON_RESET_HOVER_NAVIGATION,
    ON_SET_ACTIVE_PAGE,
    ON_SET_LOGOUT
} from '../../store/actions/NavigationActions';

// Custom Style
import './NavigationLeft.scss'
// End Custom Style

const NavigationLeft = () => {
    const dispatch = useDispatch()
    const navigation = useSelector(state => state.nav)

    let urlParam = window.location.pathname.split('/')
    const param = '/' + urlParam[1]

    console.log(param);

    useEffect(() => {
            dispatch({ type: ON_SET_ACTIVE_PAGE, param })
    }, [dispatch, param])

    const handleHoverNavigation = (index) => {
        dispatch({ type: ON_HOVER_NAVIGATION, index })
    }
    const handleResetHoverNavigation = () => {
        dispatch({ type: ON_RESET_HOVER_NAVIGATION })
    }
    const handleLogout = () =>{
        dispatch({ type: ON_SET_LOGOUT, logoutClicked: true })
    }

    return (
        <div className="bgWhite">
            <ul>
                <li className={"menu-title"}>
                    MENU
                </li>
                {navigation.navigationItems.map((data, i) => {
                    return (
                        <li key={i} className="position-relative">
                            <Link
                                onMouseOver={() => handleHoverNavigation(i)}
                                onMouseLeave={() => handleResetHoverNavigation()}
                                to={data.link}
                                onClick={() => {i == 2 && handleLogout()}}
                                className={['py-3 d-block greyDefault itemLink position-relative', (data.active ? 'activeLink' : '')].join(' ')}>
                                <span className="pinActive d-inline-block position-absolute"></span>
                                <img className="mx-4" style={{height: "18px", width:"16px"}} src={(data.hover || data.active ? data.iconOrange : data.iconGrey)} alt={data.title} />

                                {data.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default NavigationLeft