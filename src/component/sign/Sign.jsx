import React from 'react';
import FormInput from '../form-input/FormInput';
import './sign.scss';
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class Sign extends React.Component{

constructor(){
super();
this.state={
    email:"",
    password:""
}

}
handleSubmit=(e)=>{
e.preventDefault();
this.setState({email:"",password:""})
}

handleChange = event =>{
    const {value,name} = event.target;
    this.setState({[name]:value})
}

render(){



return(
    <>
<div className="sign-in">
<h1>I already have a account</h1>
<span>Sign In with your email and password</span>
<form onSubmit={this.handleSubmit}>
<FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required />

<FormInput name="password" label="password" type="password" value={this.state.password} handleChange={this.handleChange} required />

<div className="buttons"> 
<CustomButton type="submit">Sign In</CustomButton>

<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
</div>

</form>

</div>

    </>
)

}

}

export default Sign;