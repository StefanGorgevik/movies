const initState = {
    isLoaded: false, 
    movieFound: true,
    movie: {},
    categorySelected: 'plot'
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "GET_MOVIE": {
            return {...state, movie: action.payload}
        }
        case "MOVIE_IS_LOADED": {
            return {...state, isLoaded: action.payload}
        }
        case "MOVIE_FOUND": {
            return {...state, movieFound: action.payload}
        }
        case "CATEGORY_SELECTED": {
            return {...state, categorySelected: action.payload}
        }
        default: {
            return state;
        }
    }
}

export default reducer