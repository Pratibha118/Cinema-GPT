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
    <div className='absolute w-full px-8 py-2 bg-black opacity-80 z-10 flex flex-col md:flex-row md:justify-between '>
      <img
        className='w-36 mx-auto md:mx-0'
        src={LOGO}
        alt='logo' />
      {
        user ?
          <div className='mx-auto md:mx-0'>

            <button onClick={handleSearch}
              className='bg-black border z-50 border-white text-white mx-2 my-4 p-1 rounded-lg shadow-sm border-none font-bold'>
              {searchToggle ? 'Home' : 'Search'}
            </button>

            {searchToggle ?
              <select onChange={handleLanguageChange}
                className='bg-black border-none z-50 border-white text-white my-4 p-1 rounded-lg shadow-sm font-bold'>

                {SUPPORTED_LANGUAGES.map((lang) => {
                  return <option
                    key={lang.identifier}
                    value={lang.identifier}
                  >{lang.name}
                  </option>
                })

                }
              </select>
              : <></>
            }

            
            {/* <span className='text-white font-bold'>{user?.displayName}</span> */}

            <select className='mx-2 my-4 p-1 bg-black text-white font-bold ' onChange={handleSignOut}>
              <option selected>{user?.displayName}</option>
              <option className='hover:bg-gray-600'>
                <button className='bg-red-600 text-white mx-2 my-4 p-1 rounded-lg shadow-sm'>
                  Sign out
                </button>
              </option>
            </select>
          </div>


          :
          <></>

      }


    </div>
  )
}

export default Header;