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
                    Title: <span>{movie.title}</span>
                </li>
                <li>
                    Year: <span>{movie.year}</span>
                </li>
                <li>
                    Length: <span>{movie.length}</span>
                </li>
                <li>
                    IMBD Rating: <span>{movie.rating}</span>
                </li>
                <li>
                    IMBD Votes: <span>{movie.rating_votes}</span>
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
