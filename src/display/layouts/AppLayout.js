import React, { Suspense, useEffect } from 'react'

const NavigationLeft = React.lazy(() => import('./NavigationLeft'))
const HeaderContent = React.lazy(() => import('./HeaderContent'))

const AppLayout = (props) => {

    useEffect(() => {
        if (localStorage.getItem('authToken') === null) props.history.push('/auth/login')
    }, [props.history])

    return (
        <div className="container-fluid">
            {props.disableMenu === undefined ? (
                <div>
                    <Suspense fallback={<div className="lds-ring mt-2"><div></div><div></div><div></div><div></div></div>}>
                            <HeaderContent {...props} />
                        </Suspense>
                    <div className="row">
                        <div className='col-md-2 col-sm-2' style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Suspense fallback={<div className="lds-ring mt-2"><div></div><div></div><div></div><div></div></div>}>
                                <NavigationLeft />
                            </Suspense>
                        </div>
                        <div className={'col-md-10 col-sm-10 d-flex flex-column position-absolute r-0'} style={{ backgroundColor: '#fafbfd', paddingLeft: '30px', paddingRight: '30px' }}>
                            <div>
                                <props.viewLogged {...props} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                    <props.viewLogged {...props} />
                )}
        </div>
    )
}

export default AppLayout