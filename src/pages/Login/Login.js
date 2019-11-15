import React from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../custom-hooks/useForm'
import useCountryCode from '../../custom-hooks/useCountryCode'
import useCurrentPosition from '../../custom-hooks/useCurrentPosition'

function Login() {
  const [values, handleChange] = useForm({ email: '', password: '' })
  const countryCode = useCountryCode()
  const currentPosition = useCurrentPosition()

  const handleSubmit = e => {
    e.preventDefault()
    alert('success')
  }

  return (
    <div>
      {countryCode.loading || currentPosition.loading ?
        <div>Loading....</div> :
        <form>
          <h1>Login</h1>
          {countryCode.countryCode && (<p>My Country Code: {countryCode.countryCode}</p>)}
          {currentPosition.lat && currentPosition.lon && (<p>lat: {currentPosition.lat} lon: {currentPosition.lon}</p>)}
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
            Sign In
          </button>
          <p>
            Don't have an account?
          <b>
              <Link to="/register"> Register</Link>
            </b>
          </p>
        </form >
      }
    </div>
  )
}

export default Login
