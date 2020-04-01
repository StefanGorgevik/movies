export function getMovie(movie) {
    return {
        type: "GET_MOVIE",
        payload: movie
    }
}

export function isMovieLoaded(bool) {
    return {
        type: "MOVIE_IS_LOADED",
        payload: bool
    }
}