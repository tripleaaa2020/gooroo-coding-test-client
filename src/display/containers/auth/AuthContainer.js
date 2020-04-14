import React , {useEffect} from 'react'
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';

// Images
import backgroundImage from '../../../assets/images/login/background.jpg'

const AuthContainer = props => {
    const { mode } = props.match.params || {}

    useEffect(() => {
        if(localStorage.getItem('authToken') !== null) props.history.push('/')
    })

    return(
        <div 
        className="position-absolute backgroundImageLogin backgroundImageCenter leftNull topNull fluidHeight fluidWidth" 
        style={{backgroundImage:`url(${backgroundImage})`,backgroundSize:'cover',backgroundPosition:'center center'}}>
            <div className="d-flex justify-content-center align-items-center fluidHeight fluidWidth">
                <div style={{width:524}}>
                    <div className="card" style={{borderRadius:16,height:580}}>
                            {mode === 'login' && <LoginForm {...props}/>}
                            {mode === 'register' && <RegisterForm {...props}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuthContainer