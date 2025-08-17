import React from 'react'
import lang from '../../utils/languageConstants'
import { useSelector } from 'react-redux'
import { BACKGROUND_IMG } from '../../utils/constants'

const GPTSearchBar = () => {
    const language = useSelector(state => state.config?.language)

    return (
        <div className='pt-[7%] flex justify-center '>
            
            <form className='w-1/2 bg-black flex justify-between rounded-md'>
                <input type='text' className='p-2 m-2 w-full' placeholder={lang[language].GPTPlaceholder} />
                <button className='bg-red-600 text-white p-2 m-2 rounded-lg'>{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar