import React, { useState } from 'react'
import Header from '../header/Header'

const Login = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(true);

  const toggleSignInUser = () => {
    setIsUserSignIn(!isUserSignIn)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg'
          alt='background-img' />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-75'>
        <h1 className='font-bold text-3xl py-4'>{isUserSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {
          !isUserSignIn ? <input type='text' placeholder='Full name' className='my-2 p-2 w-full bg-gray-700 rounded-md' />
            : <></>}
        <input type='text' placeholder='Enter email' className='my-2 p-2 w-full bg-gray-700 rounded-md' />
        <input type='password' placeholder='Enter password' className='my-2 p-2 w-full bg-gray-700 rounded-md' />
        <button className='p-2 my-4 bg-red-700 w-full rounded-md'>{isUserSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-2 text-sm cursor-pointer' onClick={toggleSignInUser}> {isUserSignIn ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login