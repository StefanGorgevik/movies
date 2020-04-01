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
export function movieFound(bool) {
    return {
        type: "MOVIE_FOUND",
        payload: bool
    }
}

export function categorySelected(cat) {
    return {
        type: "CATEGORY_SELECTED",
        payload: cat
    }
}