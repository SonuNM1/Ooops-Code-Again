import React, { useState } from 'react'
import './AddUser.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'

const AddUser = () => {

  const users = {
    name: '',
    email: '',
    address: ''
  }

  const navigate = useNavigate()

  const [user, setUser] = useState(users)

  const inputHandler = (e) => {

    const {name, value} = e.target 

    setUser({
      ...user, 
      [name]: value 
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()

    await axios.post('http://localhost:8000/api/user', user)
      .then((response)=> {
        toast.success(response.data.message, {
          position: 'top-right'
        })
        navigate('/')
      })
      .catch((error) => {
        toast.error('Registration failed!')
        console.log(error)
      })
  }

  return (
    <div className='addUser'>
      <Link to='/' className='btn btn-secondary'>
       <IoMdArrowRoundBack/> Go Back
      </Link>
      <h3>Add New User</h3>
      <form 
        className='addUserForm'
        onSubmit={submitForm}  
      >

        <div className='inputGroup'>
          <label htmlFor='name'>Name: </label>
          <input
            type="text"
            placeholder='Enter your name'
            id="name"
            name='name'
            value={user.name}
            onChange={inputHandler}
            autoComplete="off"
          />    
        </div>

        <div className='inputGroup'>
          <label htmlFor='email'>Email: </label>
          <input
            type="email"
            placeholder='Enter your email'
            id="email"
            name='email'
            value={user.email}
            onChange={inputHandler}
            autoComplete="off"
          />    
        </div>

        <div className='inputGroup'>
          <label htmlFor='address'>Address: </label>
          <input
            type="text"
            placeholder='Enter your address'
            id="address"
            name='address'
            value={user.address}
            onChange={inputHandler}
            autoComplete="off"
          />    
        </div>

        <div className='inputGroup'>
          <button type='submit' className='btn btn-primary'>
            Submit 
          </button>
        </div>

      </form>
    </div>
  )
}

export default AddUser
