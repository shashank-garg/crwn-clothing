import React from 'react'
import './customButton.scss';

function CustomButton({children,isGoogleSignIn,...otherprops}) {
    return (
       <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops} >
{children}
       </button>
    )
}

export default CustomButton
