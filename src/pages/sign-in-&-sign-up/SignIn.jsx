import React, {useState} from 'react'
import FormInput from '../../components/form-input/FormInput'
import CustomButton from '../../components/custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './signInAndUp.scss'

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='email'
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          value={userInfo.email}
          required
        />
        <FormInput
          name='password'
          type='password'
          label='password'
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          value={userInfo.password}
          required
        />
        <section className='buttons'>
        <CustomButton type='submit' >Sign In</CustomButton>
        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn={'google-sign-in'}>Sign in with Google</CustomButton>
        </section>
      </form>
    </div>
  )
}

export default SignIn
