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
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <FormInput
          name="email"
          type="email"
          onChange={(e) => !userInfo.email ? '' : setUserInfo({email: e.target.value})}
          value={userInfo.email}
          required
        />
        <label>Password</label>
        <FormInput
          name="password"
          type="password"
          onChange={(e) => !userInfo.password ? '' : setUserInfo({password: e.target.value})}
          value={userInfo.password}
          required
        />
        <section className='buttons'>
        <CustomButton type="submit" >Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={'google'}>Sign in with Google</CustomButton>
        </section>
      </form>
    </div>
  )
}

export default SignIn
