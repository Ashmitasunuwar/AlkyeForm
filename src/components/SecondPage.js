import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import eye from '../css/icons/eye-off.svg'
import '../css/style.css';
import logo from '../Logo/Logo.png';
import FooterPage from './FooterPage';
function SecondPage() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const btnHandler = () => {
        console.log('btn clicked',)
        if (password) {

            navigate('/dashboard');

        }

    }
    return (
        <div className="mainsection" >

            <div className="innerbox ">
                <div className="logo">
                    <img className="logoimg" src={logo} height={59} width={135} alt="logo not found" />
                </div>
                <div className="container">
                    <div className='row secondpage'>
                        <div className='passwordtext col-md-6'>
                            <span>STEP2</span>
                            <h4>Create an account to</h4>
                            <h4>  continue</h4>
                            <p>
                                you will be able to log in to  Dingo with this
                            </p>
                            <p>
                                email address and password
                            </p>
                        </div>
                        <div className='input-paswd col-md-6'>
                            <label>Enter password to create your account with</label>
                            <input className='pswdInput' type='password' value={password} placeholder='choose a password' onChange={(e) => { passwordHandler(e) }} />

                            <div className='pswdbtn '>
                                <div className='pswdpattern'> Use a minimum of 6 characters (case sensitive) with at least one number or special character.</div>
                                <button className="btn btn-dark passwordbtn" onClick={btnHandler}><strong>Agree & Continue</strong></button></div>

                        </div>
                        <div>
                            <p className='pswdPara'>Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.</p></div>
                    </div>
                </div>
            </div>
            <div className="footercls ">
                <FooterPage />
            </div>
        </div>



    )
}

export default SecondPage