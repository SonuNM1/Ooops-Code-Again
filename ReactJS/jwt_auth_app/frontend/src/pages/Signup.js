import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { FaUserPlus } from 'react-icons/fa';
import { handleError, handleSuccess } from '../utils';

const Signup = () => {

  const navigate = useNavigate() ; 

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target.value ; 

    console.log(name, value)

    const copySignupInfo = {...signupInfo}
    copySignupInfo[name] = value 

    setSignupInfo(copySignupInfo) ; 
  }

  console.log('sign up info: ', signupInfo)

  const handleSignup = async (e) => {
    e.preventDefault() ; 

    const {name, email, password} = signupInfo ; 

    if(!name || !email || !password){
      return handleError('All fields are required!')
    }

    try {
      const url = 'http://localhost:8080/auth/signup' ; 

      const response = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      })

      const result = await response.json() ; 
      const {success, message, error} = result ; 

      if(success){
        handleSuccess(message) ; 

        setTimeout(() => {
          navigate('/login') ; 
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
      <h1>Signup</h1>

      <form onSubmit={handleSignup} >

        <div>
          <label htmlFor='name'>Name: </label>
          <input
            onChange={handleChange}
            type='text'
            name='name'
            placeholder='Enter your name'
            value={signupInfo.name}
          />
        </div>

        <div>
          <label htmlFor='email'>Email: </label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='Enter your email'
            value={signupInfo.email}
          />
        </div>

        <div>
          <label htmlFor='password'>Password: </label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='Enter your password'
            value={signupInfo.password}
          />
        </div>

        <button 
          className="signup-btn"    type="submit"
        >
          <FaUserPlus /> Signup
        </button>
        <span>
          Already have an account ? <Link to='/login'>Login</Link>
        </span>
      </form>

      <ToastContainer/>
      
    </div>
  )
}

// 56

export default Signup
