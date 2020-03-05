import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../button/CustomButton';
import'./sign-up.styles.scss'; 
import { auth, createUserDocument } from '../../firebase/firebaseUtil';


class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(err) {
            console.log(err);
        }
    }

    handleChange = event => {
        const {name, value } = event.target;
        this.setState({[name]: value});
    } 

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
                </div>
            )
    }
}

export default SignUp;
