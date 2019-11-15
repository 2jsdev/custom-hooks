import React from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../custom-hooks/useForm'
import useCountryCode from '../../custom-hooks/useCountryCode'
import useCurrentPosition from '../../custom-hooks/useCurrentPosition'

function Register() {
  const [values, handleChange] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const countryCode = useCountryCode()
  const currentPosition = useCurrentPosition()

  const handleSubmit = e => {
    e.preventDefault()
    alert('success')
  }

  return (
    <div>
      {countryCode.loading || currentPosition.loading ?
        <div> Loading.... </div> :
        <form>
          <h1>Register</h1>
          {countryCode.countryCode && (<p>My Country Code: {countryCode.countryCode}</p>)}
          {currentPosition.lat && currentPosition.lon && (<p>lat: {currentPosition.lat} lon: {currentPosition.lon}</p>)}
          <input
            name='firstName'
            placeholder='First Name'
            value={values.firstName}
            onChange={handleChange}
          />
          <input
            name='lastName'
            placeholder='Last Name'
            value={values.lastName}
            onChange={handleChange}
          />
          <input
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
          />
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} size={20}>
            Sign Up
          </button>
          <p>
            Already have an account?
            <b>
              <Link to="/">Sign in</Link>
            </b>
          </p>
        </form >
      }
    </div>
  )
}

export default Register
