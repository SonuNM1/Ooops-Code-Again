import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { FaUserPlus } from 'react-icons/fa';
import { handleError, handleSuccess } from '../utils';

const Login = () => {

  const navigate = useNavigate() ; 

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target.value ; 

    console.log(name, value)

    const copyloginInfo = {...loginInfo}
    copyloginInfo[name] = value 

    setLoginInfo(copyloginInfo) ; 
  }

  console.log('sign up info: ', loginInfo)

  const handleLogin = async (e) => {
    e.preventDefault() ; 

    const {email, password} = loginInfo ; 

    if(!email || !password){
      return handleError('All fields are required!')
    }

    try {
      const url = 'http://localhost:8080/auth/login' ; 

      const response = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })

      const result = await response.json() ; 
      const {success, message, jwtToken, name, error} = result ; 

      if(success){
        handleSuccess(message) ; 

        // saving jwt token for logged-in user in JWT

        localStorage.setItem('token', jwtToken) ; 
        localStorage.setItem('loggedInUser', name) ; 

        setTimeout(() => {
          navigate('/home') ; 
        }, 1000);
      }
      else if(error){
        const details = error?.details[0].message ; 

        handleError(details) ; 
      }
      else if(!success){
        handleError(message) ; 
      }

      console.log('result: ', result)

    } catch (error) {
      handleError(error)
    }

  }

  return (
    <div className='container'>
      <h1>Login</h1>

      <form onSubmit={handleLogin} >

        <div>
          <label htmlFor='email'>Email: </label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='Enter your email'
            value={loginInfo.email}
          />
        </div>

        <div>
          <label htmlFor='password'>Password: </label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='Enter your password'
            value={loginInfo.password}
          />
        </div>

        <button 
          className="signup-btn"    type="submit"
        >
          <FaUserPlus /> Login
        </button>
        <span>
          Don't have an account ? <Link to='/signup'>Signup</Link>
        </span>
      </form>

      <ToastContainer/>
      
    </div>
  )
}

// 56

export default Login
