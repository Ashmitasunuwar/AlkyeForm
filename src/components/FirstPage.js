import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function FirstPage() {

    const [email, setEmail] = useState('')

    const navigate = useNavigate();

    const emailHandler = (event) => {
        setEmail(event.target.value);

    }

    const btnClickHandler = (email) => {
        console.log('btn clicked',)
        if (email) {

            //  navigate('second')
        }

    }

    return (
        <div className='row firstPage'>

            <div className='emailText col-md-6'>
                <span>step1</span>
                <h4>Enter your email</h4>
                <h4> address to continue</h4>
                <p>
                    login to your account.If you dont have
                </p>
                <p>
                    one, you ll be prompted to create one
                </p>
            </div>
            <div className='input-email col-md-6'>
                <input className='emailInput' type='email' value={email} placeholder='email' onChange={(e) => { emailHandler(e) }} />

                <div className='emailbtn'> <button className="btn btn-dark" onClick={btnClickHandler}><strong>continue</strong></button></div>



            </div>

        </div>
    )
}

export default FirstPage