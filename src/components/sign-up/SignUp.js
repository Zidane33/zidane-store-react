import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../button/CustomButton';
import'./sign-up.styles.scss'; 
import { auth, createUserDocument } from '../../firebase/firebaseUtil';


const SignUp = () => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserDocument(user, {displayName});
            setUserCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(err) {
            console.log(err);
        }
    }

    const handleChange = event => {
        const {name, value } = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    } 

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
            </div>
            )
}

export default SignUp;
