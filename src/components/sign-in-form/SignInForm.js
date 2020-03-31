import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../button/CustomButton';
import './sign-in.styles.scss';

import { auth, signInWithGoogle } from '../../firebase/firebaseUtil';

const SignInForm = () => {

    const [userCredentials, setCredentials] = useState({ email: '', password: ''})
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email, password)
            setCredentials({email: '', password: ''});
        } catch(err){
            console.log(err);
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentials, [name]: value });
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    value={password}
                    label='password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>
                    Submit
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
        )
}

export default SignInForm;
