import React, {useState,useRef} from 'react'
import OutSideClick from '../../utils/OutSideClick';
import { attemptLogout } from '../../services/Auth';
import "./HeaderContent.scss";

import BackButton from '../../assets/images/icons/back-icon.svg'
import bigasLogo from '../../assets/images/general/logo.svg'
import { Link } from 'react-router-dom';

const HeaderContent = (props) => {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [toggleLogout,settoggleLogout] = useState(false)
    const onHandleClickProfile = () => {
        settoggleLogout(!toggleLogout)
    }

    const ref = useRef()
    OutSideClick(ref, () =>{
        if(toggleLogout) settoggleLogout(false)
    })
    
    const handleLogout = () =>{
        attemptLogout().then(() => {
            props.history.push('/auth/login')
        })
    }
    return(
        <div className="container-fluid">
            <div className="row py-4 px-2 align-items-center">
                <div className="col-md-5 col-sm-5 p-0">
                    
                    <h3 style={{lineHeight:'40px'}} className="greyDefault biggerFont Poppins-Bold">
                        {props.backButton && 
                        <Link to={props.backUrl} className="d-inline-block px-1 position-relative mr-3" style={{top:-1}}>
                            <img src={BackButton} alt="back" />
                        </Link> }
                        {props.backButton ? props.title : <img src={bigasLogo} height={40} alt="Bigas Logo"/>} 
                        
                    </h3>
                </div>
                <div className="col-md-7 col-sm-7 pr-0">
                    <div className="d-flex flex-row justify-content-between">
                        <div style={{width:350}}>
                        </div>
                        <div className="cursorPointer position-relative" onClick={()=>onHandleClickProfile()}>
                        <p className="py-2 pr-3 d-inline-block mb-0">{"Welcome back, " + userData.name + " !"}</p>
                            <img alt="user" width="40" height="40" className="rounded-pill  d-inline-block" src={require('../../assets/images/icons/user.svg')} />
                            {toggleLogout ?
                            <div ref={ref} className="p-2 position-absolute rounded" onClick={()=>handleLogout()}
                                style={{
                                    right:0,bottom:-50,backgroundColor:'#FFFFFF',border:'1px solid #dce0e6',zIndex:2
                                }}>
                                <span 
                                style={{
                                    backgroundColor:'rgba(245,166,35,0.05)'
                                }}
                                className="smallFont d-inline-block py-2 pl-2 pr-3 rounded">Log Out</span>
                            </div> : null }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderContent