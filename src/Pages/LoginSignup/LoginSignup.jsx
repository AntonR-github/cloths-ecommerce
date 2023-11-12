import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginSignUp'>
      <div className="loginSignUp-container">
      <h1>SignUp</h1>
      <div className="loginSignUp-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email Address' />
        <input type="password" placeholder='Your Password' />
      </div>
      <button>Continue</button>
      <p className="loginSignUp-login">
        Already have an account? <span>Login here</span>
      </p>
      <div className="loginSignUp-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, you agree to accept our Privacy Policy & Terms of Service.</p>
      </div>
      </div>
    </div>
  )
}

export default LoginSignup
