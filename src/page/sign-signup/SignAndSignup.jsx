import React from 'react'
import Sign from '../../component/sign/Sign';
import './sign.scss';
import SignUp from '../../component/sign-up/SignUp';

function SignAndSignup() {
    return (
        <div className="sign-in-and-sign-up">
         <Sign/>
         <SignUp/>
        </div>
    )
}

export default SignAndSignup
