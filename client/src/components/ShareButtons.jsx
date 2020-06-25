import React from 'react';
import emailLogo from '../../dist/mail_icon.png'
import facebookLogo from '../../dist/fb_icon.png'
import twitterLogo from '../../dist/twitter_icon.png'
import pinterestLogo from '../../dist/pinterest_icon.png'

const ShareButtons = (props) => {
    
    return (
        <div className="share-buttons">
            <img className="email-button" src={emailLogo}/>
            <img className="facebook-button" src={facebookLogo}/>
            <img className="twitter-button" src={twitterLogo}/>
            <img className="pinterest-button" src={pinterestLogo}/>
        </div>
    )
}

export default ShareButtons;