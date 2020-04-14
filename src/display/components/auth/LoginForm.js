import React, { useState } from 'react'
import { attemptLogin, setLocalUserData } from '../../../services/Auth'

// Images
import bigasLogo from '../../../assets/images/general/logo.svg'


const LoginForm = props => {

    const [isLoginSubmitted, setIsLoginSubmitted] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginFailed, setLoginFailed] = useState(false)

    const loginHandler = e => {
        e.preventDefault()

        setIsLoginSubmitted(true)
        setLoginFailed(false)

        const credentials = {
            email: email,
            password: password
        }

        attemptLogin(credentials).then(function (result) {
            if (result.statusInt === 1) {
                setLocalUserData(result.authToken, result.userData)
                props.history.push('/')
            } else {
                setIsLoginSubmitted(false)
                setLoginFailed(true)
            }
        })
    };
    const switchToRegisterFormHandler = e => {
        e.preventDefault()

        props.history.push('/auth/register');

    }

    return (
        <div className="card-body text-center" style={{ paddingLeft: 109, paddingRight: 109, paddingTop: 95, paddingBottom: 95 }}>
            <form className="d-flex flex-column justify-content-between h-100" onSubmit={loginHandler}>
                <div>
                    <img alt="Bigas Library" src={bigasLogo} height="80" />
                </div>
                <div>

                    {loginFailed ?
                        <div className="alert alert-danger p-1">
                            <span className="smallFont">Email or password invalid</span>
                        </div> : null}
                    <div className="form-group">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" required className="form-control greySmooth normalFont" style={{ height: 45, opacity: 0.5 }} placeholder="Email Address" />
                    </div>
                    <div className="form-group mb-0">
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required className="form-control greySmooth normalFont" style={{ height: 45, opacity: 0.5 }} placeholder="Password" />
                    </div>
                    <div style={{ marginTop: '45px', letterSpacing: '0.08px' }} className="text-center">
                        <h5 className="mb-0 dusk smallFont">New to Bigas ? <span style={{ color: '#f5a623', cursor: "pointer" }} onClick={switchToRegisterFormHandler} className="fontWeightSemiBold">Register here</span></h5>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={isLoginSubmitted} className="buttonDefault fluidWidth rounded-pill">Log In</button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm