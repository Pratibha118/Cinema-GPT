import React, { useRef } from 'react'
import lang from '../../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../../utils/constants'
import { addSearchedMoviesResult } from '../../utils/slices/GPTSlice'
import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

const GPTSearchBar = () => {
    const language = useSelector(state => state.config?.language)
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    //search given movie in TMDB
    const fetchMovie = async (movieName) => {

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        return json.results;
    }

    const handleSearch = async () => {

        const searchQuery = 'Act as a Movie Recommendation system and suggest some movies for the query' + searchText.current.value + 'only provide list of five movies, and it should be comma separated. Example- ABCD, Dil, Mela, GolMaal, Diwar.'

        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    "parts": [
                        {
                            "text": searchQuery
                        }
                    ]
                }
            ],
        });


        const searchedMovies = response?.candidates?.[0]?.content?.parts?.[0]?.text?.split(",")
        //TMDB search for each movie
        try {
            const movies = searchedMovies.map((movie) => fetchMovie(movie));
            const resolvedMovie = await Promise.all(movies);
            dispatch(addSearchedMoviesResult({ tmdbMovies: resolvedMovie, gptMovies: searchedMovies }))

        } catch (error) {
            navigate('/error')

        }
    }

    return (
        <div className='flex justify-center'>

            <form className='w-full md:w-1/2 bg-black flex justify-between rounded-md' onSubmit={e => e.preventDefault()}>
                <input type='text' ref={searchText} className='p-2 m-2 w-full' placeholder={lang[language].GPTPlaceholder} />
                <button onClick={handleSearch} className='bg-red-600 text-white p-2 m-2 rounded-lg'>{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar