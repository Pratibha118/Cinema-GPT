import React, { useRef, useState } from 'react'
import Header from '../header/Header'
import { checkValidData } from '../../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/slices/userSlice';
import { BACKGROUND_IMG } from '../../utils/constants';

const Login = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInUser = () => {
    setIsUserSignIn(!isUserSignIn)
  }

  const handleButtonClick = () => {
    const message = checkValidData(email?.current?.value, password?.current?.value, name?.current?.value)
    setErrorMessage(message)
    if (message) return;

    //sign In sign Up Logic

    if (isUserSignIn) {
      //Sing In 

      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });

    } else {
      //Sign Up

      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value
          }).then(() => {
            // Profile updated!

            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }))

            
            alert('Successfully registered. Please sign in now.');
          }).catch((error) => {
            // An error occurred
            setErrorMessage(errorMessage);

          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode)
        });
    }


  }

  return (
    <div>
      <Header />
      <div className='absolute'>

        <img src={BACKGROUND_IMG}
          alt='background-img' />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-75'>

        <h1 className='font-bold text-3xl py-4'>{isUserSignIn ? 'Sign In' : 'Sign Up'}</h1>

        {!isUserSignIn ? <input type='text' placeholder='Full name' ref={name} className='my-2 p-2 w-full bg-gray-700 rounded-md' />
          : <></>}

        <input type='text' placeholder='Enter email' ref={email}
          className='my-2 p-2 w-full bg-gray-700 rounded-md' />

        <input type='password' placeholder='Enter password' ref={password}
          className='my-2 p-2 w-full bg-gray-700 rounded-md' />

        <p className='text-red-600 font-bold text-sm py-2'>{errorMessage}</p>

        <button className='p-2 my-4 bg-red-700 w-full rounded-md'
          onClick={handleButtonClick}>
          {isUserSignIn ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='py-2 text-sm cursor-pointer' onClick={toggleSignInUser}>
          {isUserSignIn ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'}
        </p>

      </form>
    </div>
  )
}

export default Login