import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './Homepage.scss';

import TitleSection from '../../../sections/TitleSection';
import ListControlSection from '../../../sections/ListControlSection';
import ListSection from '../../../sections/ListSection';
import { attemptLogout } from '../../../../services/Auth';
import { ON_SET_LOGOUT, ON_RESET_HOVER_NAVIGATION } from '../../../../store/actions/NavigationActions';

const HomepageContainer = props => {

    console.log("Homepage props => ", props);
    const logoutClicked = useSelector(state => state.nav.logoutClicked)
    const dispatch = useDispatch()

    useEffect(() => {
        if (logoutClicked) {
            localStorage.removeItem('authToken')
            dispatch({ type: ON_SET_LOGOUT, logoutClicked: false })
            dispatch({ type: ON_RESET_HOVER_NAVIGATION })
            props.history.push('/auth/login')

        }
    }, [logoutClicked])

    return (
        <Suspense fallback={<div className="lds-ring mt-2"><div></div><div></div><div></div><div></div></div>}>
            <div className="position-relative h-100 d-flex flex-column" style={{ minHeight: '745px' }}>
                <TitleSection
                    {...props}
                    title="View All Books"
                    subtitle="We have millions, billions of users contributing books to our collection every second, please do take a look!"
                />
                <div>
                    <ListControlSection
                        {...props}
                        from="Library"
                    />
                    <ListSection
                        {...props}
                        from="Library"
                    />
                </div>
            </div>
        </Suspense>
    )
}
export default HomepageContainer