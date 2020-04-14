import React, { useState } from 'react'
import { attemptRegister } from '../../../services/Auth'
import Notifications, { notify } from 'react-notify-toast';

// Images
import bigasLogo from '../../../assets/images/general/logo.svg'


const RegisterForm = props => {

    const [isRegistrationSubmitted, setIsRegistrationSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [registerFailed, setRegisterFailed] = useState(false)

    const isEmailValid = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        setErrorMessage("Your E-mail address is invalid")
        return false;
    }

    const isPasswordValid = () => {
        if (password.length >= 8 && password === confirmPassword) {
            return true;
        }
        else {
            if (password.length < 8)
                setErrorMessage("Password must have a minimum of 8 characters")
            if (confirmPassword !== password)
                setErrorMessage("Plese confirm your password again")
        }
        return false;
    }

    const registerHandler = e => {
        e.preventDefault()

        if (isEmailValid() && isPasswordValid()) {
            setIsRegistrationSubmitted(true)
            setRegisterFailed(false)

            const newContributor = {
                name: name,
                email: email,
                password: password
            }

            console.log("newContributor => ", newContributor);

            attemptRegister(newContributor).then(function (result) {
                if (result.code == 200) {
                    notify.show("Account created! Redirecting to Login...", 'success', 1000)
                    setTimeout(() => props.history.push('/auth/login'), 1000)
                }
                else {
                    notify.show(result.msg, 'error', 1000)
                    setIsRegistrationSubmitted(false)
                }
                // console.log(result);
            }).catch(error => {
                notify.show("An error has occured, please try again later!", 'error', 1000)
                setIsRegistrationSubmitted(false)
            });

        }
        else {
            // notify.show(errorMessage, 'error', 1000)
            setRegisterFailed(true);
        }

    }

    const switchToLoginFormHandler = e => {
        console.log("Login");
        e.preventDefault()

        props.history.push('/auth/login');

    }

    return (
        <div className="card-body text-center" style={{ paddingLeft: 109, paddingRight: 109, paddingTop: 35, paddingBottom: 35 }}>
            <Notifications />
            <form className="d-flex flex-column justify-content-between h-100" onSubmit={registerHandler}>
                <div>
                    <img alt="Cigarworld Indonesia" src={bigasLogo} height="80" />
                </div>
                <div>

                    {registerFailed ?
                        <div className="alert alert-danger p-1">
                            <span className="smallFont">{errorMessage}</span>
                        </div> : null}
                    <div className="form-group">
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" required className="form-control greySmooth normalFont" style={{ height: 45, opacity: 0.5 }} placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" required className="form-control greySmooth normalFont" style={{ height: 45, opacity: 0.5 }} placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required className="form-control greySmooth normalFont" style={{ height: 45, opacity: 0.5 }} placeholder="Password" />
                    </div>
                    <div className="form-group mb-0">
                        <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" required className="form-control greySmooth normalFont" style={{ height: 45, opacity: 0.5 }} placeholder="Confirm Password" />
                    </div>
                    <div style={{ marginTop: '45px', letterSpacing: '0.08px' }} className="text-center">
                        <h5 className="mb-0 dusk smallFont">Already have an account? <span style={{ color: '#f5a623', cursor: "pointer" }} onClick={switchToLoginFormHandler} className="fontWeightSemiBold">Login here</span></h5>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={isRegistrationSubmitted} className="buttonDefault fluidWidth rounded-pill">Register</button>
                </div>
            </form>
        </div>
    )
}
export default RegisterForm