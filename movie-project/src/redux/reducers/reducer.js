const initState = {
    isLoaded: false, 
    movie: {}
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "GET_MOVIE": {
            return {...state, movie: action.payload}
        }
        case "MOVIE_IS_LOADED": {
            return {...state, isLoaded: action.payload}
        }
        default: {
            return state;
        }
    }
}

export default reducer