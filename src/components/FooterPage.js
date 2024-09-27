import React from 'react'
import facebook from '../css/icons/facebook.svg'
import instagram from '../css/icons/instagram.svg'
import twitter from '../css/icons/twitter.svg'
import twitch from '../css/icons/twitch.svg'
import youtube from '../css/icons/youtube.svg'

function FooterPage() {
    return (
        <div className='footerMain'>
            <div className='icons'>
                <img className='iconimg' src={facebook} height={25} width={25} alt='icon not found' />
                <img className='iconimg' src={instagram} height={25} width={25} alt='icon not found' />
                <img className='iconimg' src={twitter} height={25} width={25} alt='icon not found' />
                <img className='iconimg' src={twitch} height={25} width={25} alt=' icon not found' />
                <img className='iconimg' src={youtube} height={25} width={25} alt='icon not found' />

            </div>
            <div className='footerInfo row'>
                <div className="col-md-10 ">
                    <div className='row'>

                        <div className='col-md-3'>Privacy Policy</div>
                        <div className='col-md-3'> Contact Us</div>
                        <div className='col-md-3'> Cookie preferences </div>
                        <div className='col-md-3'> Corporate Information </div>
                    </div>
                    <div className='row'>

                        <div className='col-md-3'>Privacy Policy</div>
                        <div className='col-md-3'> Contact Us</div>
                        <div className='col-md-3'> Cookie preferences </div>
                        <div className='col-md-3'> Corporate Information </div>
                    </div>

                </div>

            </div>
            <div className='footerlogo'>
                © Alkye Test
            </div>

        </div>

    )
}

export default FooterPage