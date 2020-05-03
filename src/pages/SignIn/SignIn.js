import React from 'react';
import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUp from '../../components/sign-up/SignUp';
import './sign-in-and-sign-up.styles.scss';

const SignIn = () => (
  <div className="sign-in-and-sign-up">
    <SignInForm />
    <SignUp />
  </div>
);

export default SignIn;
