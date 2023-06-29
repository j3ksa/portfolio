import React, { useRef, useState } from "react"
import Image from "next/image"
import { debounce } from "utils"
import { fetchMovies, getMoreInfo } from "pages/api"
import { InitialMovie } from "interfaces/movie"

const MovieMain = () => {
    const leftInput = useRef()
    const rightInput = useRef()

    const [leftLoaded, setLeftLoaded] = useState(false)
    const [leftList, setLeftList] = useState<InitialMovie[]>()

    const [rightLoaded, setRightLoaded] = useState(false)
    const [rightList, setLRightList] = useState<InitialMovie[]>()

    const leftSummary = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setLeftLoaded(false)
        const results = await fetchMovies(e.target.value)
        setLeftList(results.Search)
        setLeftLoaded(true)
    }

    const rightSummary = async(e: React.ChangeEvent<HTMLInputElement>) => {
        setRightLoaded(false)
        const results = await fetchMovies(e.target.value)
        setLRightList(results.Search)
        setRightLoaded(true)
    }

    const handleClick = () => {
        
    }

    return (
        <div className="container bg-white">
            <div className="grid grid-cols-2">
                <div className="flex flex-col items-center">
                    <p>First movie</p>
                    <input 
                        id="leftInput"
                        ref={leftInput}
                        type="text"
                        className="outline-none border border-blue-500 placeholder:px-2 px-2"
                        placeholder="min. 3 letters"
                        onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => leftSummary(e))}
                    />
                    {leftLoaded && 
                        <div className="">
                            <div className="grid grid-cols-3 text-xl">
                                <p className="place-self-stretch flex items-center justify-center">Poster:</p>
                                <p>Title:</p>
                                <p className="place-self-stretch flex items-center justify-center">Year:</p>
                            </div>
                            {leftList?.map((movie, index) => {
                                return (
                                    <div key={index} className="grid grid-cols-3 mb-2">
                                        <Image
                                            src={movie.Poster}
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
                </div>
                <div className="flex flex-col items-center">
                    <p>Second movie</p>
                    <input 
                        id="leftInput"
                        ref={rightInput}
                        type="text"
                        placeholder="min. 3 letters"
                        className="outline-none border border-blue-500 placeholder:px-2 px-2"
                        onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => rightSummary(e))}
                    />
                    {rightLoaded && 
                        <div className="">
                            <div className="grid grid-cols-3 text-xl">
                                <p className="place-self-stretch flex items-center justify-center">Poster:</p>
                                <p>Title:</p>
                                <p className="place-self-stretch flex items-center justify-center">Year:</p>
                            </div>
                            {rightList.map((movie, index) => {
                                return (
                                    <div key={index} className="grid grid-cols-3 mb-2">
                                        <Image
                                            src={movie.Poster}
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
                </div>
            </div>
        </div>
    )
}

export default MovieMain