export interface InitialMovie {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

interface Ratings {
    Source: string
    Value: string
}

export interface MovieDetailed {
    Actors: string
    Awards: string
    BoxOffice: string
    Country: string
    DVD: string
    Director: string
    Genre: string
    Language: string
    Metascore: string
    Plot: string
    Poster: string
    Production: string
    Rated: string
    Ratings: Ratings[]
    Released: string
    Response: string
    Runtime: string
    Title: string
    Type: string
    Website: string
    Writer: string
    Year: string
    imdbID: string
    imdbRating: string
    imdbVotes: string
}