import React, {useState} from 'react'
import FormInput from '../../components/form-input/FormInput'
import CustomButton from '../../components/custom-button/CustomButton'
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
          onChange={(e) => setUserInfo({email: e.target.value})}
          value={userInfo.email}
          required
        />
        <label>Password</label>
        <FormInput
          name="password"
          type="password"
          onChange={(e) => setUserInfo({password: e.target.value})}
          value={userInfo.password}
          required
        />
        <CustomButton type="submit" >Sign In</CustomButton>
      </form>
    </div>
  )
}

export default SignIn
