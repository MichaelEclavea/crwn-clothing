import React from 'react'
import './custom-button.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={!isGoogleSignIn ? 'custom-button' : isGoogleSignIn } { ...otherProps }>{children}</button>
);

export default CustomButton;