import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../utils/slices/userSlice';
import { LOGO } from '../../utils/constants';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  
  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')

      }
    });

    //when header component unmounts we are unSubscribing the onAuthStateChanged
    return () => unSubscribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error')

    });
  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-36'
        src={LOGO}
        alt='logo' />
      <div>
        <span>{user?.displayName}</span>
        {
          user ? <button className='bg-red-600 text-white m-4 p-2 rounded-lg shadow-sm' onClick={handleSignOut}>
            Sign out
          </button> : <></>

        }
      </div>

    </div>
  )
}

export default Header;