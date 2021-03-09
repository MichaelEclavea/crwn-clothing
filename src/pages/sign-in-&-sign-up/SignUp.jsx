import React, {useState} from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import FormInput from '../../components/form-input/FormInput'
import CustomButton from '../../components/custom-button/CustomButton'
import './signInAndUp.scss'

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = userInfo;
    if(password !== confirmPassword){
      return alert('Passwords do not match')
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });
      let form = document.getElementById('signUp-form');
      form.reset();
    } catch (error) {
      console.error('ERROR IN SIGN-UP', error);
    }
  }
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" id='signUp-form' onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label='Display Name'
          value={userInfo.displayName}
          onChange={(e) => setUserInfo({ ...userInfo, displayName: e.target.value })}
          label='Display Name'
          required
        />
        <FormInput
          type="email"
          name="email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          label='Email'
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userInfo.password}
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          label='Password'
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={userInfo.confirmPassword} 
          onChange={(e) => setUserInfo({ ...userInfo, confirmPassword: e.target.value })}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
