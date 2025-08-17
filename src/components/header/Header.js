import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../utils/slices/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../../utils/constants';
import { toggleGPTSearchView } from '../../utils/slices/GPTSlice';
import { switchLanguage } from '../../utils/slices/configSlice';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const searchToggle = useSelector(state => state.gpt.showGPTSearch);
  const dispatch = useDispatch();

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
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

  const handleSearch = () => {
    dispatch(toggleGPTSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(switchLanguage(e.target.value))
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-36'
        src={LOGO}
        alt='logo' />
      {
        user ?
          <div>
            {searchToggle ?
              <select onChange={handleLanguageChange}
                className='bg-gray-700 border z-50 border-white text-white mx-2 my-4 p-1 rounded-lg shadow-sm'>

                {SUPPORTED_LANGUAGES.map((lang) => {
                  return <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>
                })

                }
              </select>
              : <></>
            }

            <button onClick={handleSearch}
              className='bg-black border z-50 border-white text-white mx-2 my-4 p-1 rounded-lg shadow-sm'>{searchToggle ? 'Home' : 'Search'}</button>
            <span className='text-white font-bold'>{user?.displayName}</span>
            <button className='bg-red-600 text-white mx-2 my-4 p-1 rounded-lg shadow-sm' onClick={handleSignOut}>
              Sign out
            </button>
          </div> :
          <></>

      }


    </div>
  )
}

export default Header;