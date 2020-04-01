import React from 'react'
import './MovieInfo.css'
import { connect } from 'react-redux'

function MovieInfo(props) {
    var movie = props.movie
    return (
        <div className="mvi-div">
        {props.isLoaded ? 
            <ul>
                <li>
                    Title: {movie.title}
                </li>
                <li>
                    Year: {movie.year}
                </li>
                <li>
                    Length: {movie.length}
                </li>
                <li>
                    IMBD Rating: {movie.rating}
                </li>
                <li>
                    IMBD Votes: {movie.rating_votes}
                </li>
            </ul>
            : <p>Search for a movie</p>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        movie: state.movie,
        isLoaded: state.isLoaded
    }
}


export default connect(mapStateToProps)(MovieInfo)
