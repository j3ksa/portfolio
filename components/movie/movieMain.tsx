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

    const leftListExist = leftList.length > 0 && leftInput.current.value !== ''
    const rightListExist = rightList.length > 0 && rightInput.current.value !== ''

    return (
        <div className="container bg-blue-600 py-4">
            <div className="grid grid-cols-2">
                <div className="flex flex-col items-center relative">
                    <p className="text-xl font-bold mb-2">First movie</p>
                    {leftPicked ?
                        <div className="flex items-center space-x-2 relative">
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
                                <p>{leftPicked.Title}</p>
                                <p>{leftPicked.BoxOffice}</p>
                                <p>{leftPicked.Actors}</p>
                                <p>{leftPicked.Awards}</p>
                                <p>{leftPicked.Director}</p>
                                <p>{leftPicked.Genre}</p>
                                <p>{leftPicked.Released}</p>
                                <p>{leftPicked.Runtime}</p>
                                <p>{leftPicked.Year}</p>
                                {leftPicked.Ratings.map(rating => {
                                    return(
                                        <div className="flex">
                                            <p>{rating.Source} <span className="mx-1">-</span></p>
                                            <p> {rating.Value}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <AiOutlineClose className="absolute top-0 right-0 cursor-pointer" onClick={setLeftPicked.bind(this, null)}/>
                        </div> :
                        <div className={`absolute top-8 ${rightListExist ? 'left-0' : 'left-1/3'} bg-white flex flex-col items-center`}>
                            <div className="relative">
                                <input 
                                    id="leftInput"
                                    ref={leftInput}
                                    type="text"
                                    className="outline-none placeholder:px-2 px-2 mx-auto rounded-md bg-transparent"
                                    placeholder="min. 3 letters"
                                    onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => leftSummary(e))}
                                />
                                <AiOutlineClose className="absolute top-[5px] right-1 cursor-pointer" onClick={() => clearInput(leftInput)}/>
                            </div>
                            {leftListExist &&
                                <div className="">
                                    <div className="grid grid-cols-3 text-xl">
                                        <p className="place-self-stretch flex items-center justify-center">Poster:</p>
                                        <p>Title:</p>
                                        <p className="place-self-stretch flex items-center justify-center">Year:</p>
                                    </div>
                                    {leftList?.map((movie, index) => {
                                        return (
                                            <div key={index} className="grid grid-cols-3 mb-2" onClick={() => handleLeftClick(movie.imdbID)}>
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
                            {leftError && leftListExist && <p className="text-red-500">{leftError}</p>}
                        </div>
                    }
                </div>
                <div className="flex flex-col items-center relative">
                    <p className="text-xl font-bold mb-6">Second movie</p>
                    {rightPicked ?
                        <div className="flex items-center space-x-2 relative">
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
                                <p>{rightPicked.Title}</p>
                                <p>{rightPicked.BoxOffice}</p>
                                <p>{rightPicked.Actors}</p>
                                <p>{rightPicked.Awards}</p>
                                <p>{rightPicked.Director}</p>
                                <p>{rightPicked.Genre}</p>
                                <p>{rightPicked.Released}</p>
                                <p>{rightPicked.Runtime}</p>
                                <p>{rightPicked.Year}</p>
                                {rightPicked.Ratings.map(rating => {
                                    return(
                                        <div className="flex">
                                            <p>{rating.Source} <span className="mx-1">-</span></p>
                                            
                                            <p> {rating.Value}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <AiOutlineClose className="absolute top-0 right-0 cursor-pointer" onClick={setRightPicked.bind(this, null)}/>
                        </div> :
                        <div className={`absolute top-8 ${rightListExist ? 'left-0' : 'left-1/3'}  bg-white flex flex-col items-center`}>
                            <div className="relative">
                                <input 
                                    id="leftInput"
                                    ref={rightInput}
                                    type="text"
                                    placeholder="min. 3 letters"
                                    className="outline-none border border-blue-500 placeholder:px-2 px-2"
                                    onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => rightSummary(e))}
                                />
                                <AiOutlineClose className="absolute top-[5px] right-1 cursor-pointer" onClick={() => clearInput(rightInput)}/>
                            </div>   

                            {rightListExist &&
                                <div className="">
                                    <div className="grid grid-cols-3 text-xl">
                                        <p className="place-self-stretch flex items-center justify-center">Poster:</p>
                                        <p>Title:</p>
                                        <p className="place-self-stretch flex items-center justify-center">Year:</p>
                                    </div>
                                    {rightList.map((movie, index) => {
                                        return (
                                            <div 
                                                key={index} 
                                                className="grid grid-cols-3 mb-2"
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
                            {rightError && rightListExist && <p className="text-red-500">{rightError}</p>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieMain