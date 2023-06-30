import React, { useRef, useState } from "react"
import Image from "next/image"
import { debounce } from "utils"
import { fetchMovies, getMoreInfo } from "pages/api"
import { InitialMovie, MovieDetailed } from "interfaces/movie"
import { AiOutlineClose } from "react-icons/ai"

const MovieMain = () => {
    const leftInput: React.MutableRefObject<HTMLInputElement> = useRef()
    const rightInput: React.MutableRefObject<HTMLInputElement> = useRef()

    const [leftList, setLeftList] = useState<InitialMovie[]>([])
    const [rightList, setRightList] = useState<InitialMovie[]>([])

    const [leftPicked, setLeftPicked] = useState<MovieDetailed>()
    const [rightPicked, setRightPicked] = useState<MovieDetailed>()

    const [leftError, setLeftError] = useState('')
    const [rightError, setRightError] = useState('')

    const leftListExist = leftList.length > 0 && leftInput.current.value !== ''
    const rightListExist = rightList.length > 0 && rightInput.current.value !== ''

    const leftSummary = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if(e.target.value.length > 0) {
                const results = await fetchMovies(e.target.value)
                if(results.Response === "False") {
                    setLeftList([])
                    setLeftError(results.Error)
                } else {
                    setLeftError('')
                    setLeftList(results.Search)
                }
            }
        }
        catch(error) {
            console.log(error)
        }
    }

    const rightSummary = async(e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if(e.target.value.length > 0) {
                const results = await fetchMovies(e.target.value)
                if(results.Response === "False") {
                    setLeftList([])
                    setRightError(results.Error)
                } else {
                    setRightError('')
                    setRightList(results.Search)
                }
            }
        }
        catch(error) {
            console.log(error)
        }
    }

    const handleLeftClick = async (imdbID: string) => {
        setLeftList([])
        const results = await getMoreInfo(imdbID)
        setLeftPicked(results)
    }

    const handleRightClick = async (imdbID: string) => {
        setRightList([])
        const results = await getMoreInfo(imdbID)
        setRightPicked(results)
    }

    const clearInput = (ref: React.MutableRefObject<HTMLInputElement>) => {
        ref.current.value = ''

    }

    const movieValues = ['Title', 'BoxOffice', 'Actors', 'Awards', 'Director', 'Genre', 'Released', 'Runtime', 'Year']

    const filterValues = (values: MovieDetailed) :{} => {
        return( 
            Object.keys(values)
            .filter((key) => movieValues.includes(key))
            .reduce((obj, key) => {
                obj[key] = values[key]
                return obj
            }, {})
        )
    }

    return (
        <div className="w-full bg-blue-600 py-4 min-h-[calc(100vh-94px)] lg:min-h-[400px]">
            <div className="grid lg:grid-cols-2 space-y-10 lg:space-y-0">
                <div className="flex flex-col items-center relative">
                    <p className="lg:text-xl font-bold mb-6 text-white">First movie</p>
                    {leftPicked ?
                        <div className="flex flex-col lg:flex-row items-center space-x-2 relative bg-blue-300 p-2 rounded-lg">
                            <Image
                                src={leftPicked.Poster === 'N/A' ? '/assets/notAvailable.png' : leftPicked.Poster}
                                alt="moviePoster"
                                width={0}
                                height={0}
                                sizes="300px"
                                quality={100}
                                className="w-[150px] object-cover aspect-[2/3] place-self-stretch mx-auto"
                            />
                            <div className="flex flex-col justify-center items-start">
                                {Object.entries(filterValues(leftPicked)).map(([key, value]) => (
                                    <p><span className="font-bold mr-1">{key}:</span>{value as string}</p>
                                ))}
                                {leftPicked.Ratings.map(rating => {
                                    return(
                                        <div className="flex space-x-1">
                                            <p className="font-bold">{rating.Source}:</p>
                                            <p> {rating.Value}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <AiOutlineClose className="absolute top-1 right-1 cursor-pointer" onClick={setLeftPicked.bind(this, null)}/>
                        </div> :
                        <div className={`flex flex-col items-center relative`}>
                            <form className="relative mb-2">
                                <input 
                                    ref={leftInput}
                                    type="text"
                                    className="p-2 rounded-xl bg-blue-800 text-white focus:outline-none focus:border-gray-200"
                                    placeholder="Movie name"
                                    onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => leftSummary(e))}
                                />
                                <AiOutlineClose className={`absolute top-[13px] right-1 cursor-pointer ${!leftListExist && 'hidden'}`} onClick={() => {clearInput(leftInput), setLeftList([])}}/>
                            </form>
                            {leftListExist &&
                                <div className="absolute top-12 lg:max-h-[350px] overflow-y-auto bg-blue-300 rounded-lg w-[320px] z-10">
                                    <div className="grid grid-cols-3 text-xl font-semibold mb-2">
                                        <p className="place-self-stretch flex items-center justify-center">Poster:</p>
                                        <p>Title:</p>
                                        <p className="place-self-stretch flex items-center justify-center">Year:</p>
                                    </div>
                                    {leftList?.map((movie, index) => {
                                        return (
                                            <div key={index} className="grid grid-cols-3 mb-2 cursor-pointer hover:bg-blue-200" onClick={() => handleLeftClick(movie.imdbID)}>
                                                <Image
                                                    src={movie.Poster === 'N/A' ? '/assets/notAvailable.png' : movie.Poster}
                                                    alt="moviePoster"
                                                    width={50}
                                                    height={50}
                                                    quality={100}
                                                    sizes="75px"
                                                    className="object-cover aspect-[2/3] place-self-stretch mx-auto"
                                                />
                                                <p className="place-self-stretch flex items-center justify-start">{movie.Title}</p>
                                                <p className="place-self-stretch flex items-center justify-center">{movie.Year}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                            {leftError && leftInput.current.value !== '' && <p className="text-red-500 px-2 bg-white rounded-lg">{leftError}</p>}
                        </div>
                    }
                </div>
                <div className="flex flex-col items-center relative">
                    <p className="lg:text-xl font-bold mb-6 text-white">Second movie</p>
                    {rightPicked ?
                        <div className="flex flex-col lg:flex-row items-center space-x-2 relative bg-blue-300 p-2 rounded-lg">
                            <Image
                                src={rightPicked.Poster === 'N/A' ? '/assets/notAvailable.png' : rightPicked.Poster }
                                alt="moviePoster"
                                width={0}
                                height={0}
                                sizes="300px"
                                quality={100}
                                className="w-[150px] object-cover aspect-[2/3] place-self-stretch mx-auto"
                            />
                            <div className="flex flex-col justify-center items-start">
                                {Object.entries(filterValues(rightPicked)).map(([key, value]) => (
                                    <p><span className="font-bold mr-1">{key}:</span>{value as string}</p>
                                ))}
                                {rightPicked.Ratings.map(rating => {
                                    return(
                                        <div className="flex space-x-1">
                                            <p className="font-bold">{rating.Source}:</p>
                                            <p> {rating.Value}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <AiOutlineClose className="absolute top-1 right-1 cursor-pointer" onClick={setRightPicked.bind(this, null)}/>
                        </div> :
                        <div className="flex flex-col items-center relative">
                            <div className="relative mb-2">
                                <input 
                                    id="leftInput"
                                    ref={rightInput}
                                    type="text"
                                    placeholder="Movie name"
                                    className="p-2 rounded-xl bg-blue-800 text-white focus:outline-none focus:border-gray-200"
                                    onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => rightSummary(e))}
                                />
                                <AiOutlineClose className={`absolute top-[13px] right-1 cursor-pointer ${!rightListExist && 'hidden'}`} onClick={() => {clearInput(rightInput), setRightList([])}}/>
                            </div>   

                            {rightListExist &&
                                <div className="absolute top-12 max-h-[350px] overflow-y-auto bg-blue-300 rounded-lg w-[320px]">
                                    <div className="grid grid-cols-3 text-xl font-semibold mb-2">
                                        <p className="place-self-stretch flex items-center justify-center">Poster:</p>
                                        <p>Title:</p>
                                        <p className="place-self-stretch flex items-center justify-center">Year:</p>
                                    </div>
                                    {rightList.map((movie, index) => {
                                        return (
                                            <div 
                                                key={index} 
                                                className="grid grid-cols-3 mb-2 cursor-pointer hover:bg-blue-200"
                                                onClick={() => handleRightClick(movie.imdbID)}
                                            >
                                                <Image
                                                    src={movie.Poster === 'N/A' ? '/assets/notAvailable.png' : movie.Poster}
                                                    alt="moviePoster"
                                                    width={50}
                                                    height={50}
                                                    quality={100}
                                                    className="object-cover aspect-[2/3] place-self-stretch mx-auto"
                                                />
                                                <p className="place-self-stretch flex items-center justify-start">{movie.Title}</p>
                                                <p className="place-self-stretch flex items-center justify-center">{movie.Year}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                            {rightError && rightInput.current.value !== '' && <p className="text-red-500 px-2 bg-white rounded-lg">{rightError}</p>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieMain