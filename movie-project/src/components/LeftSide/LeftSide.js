import React from 'react'
import './LeftSide.css'
import MovieImage from '../MovieImage/MovieImage'
import { connect } from 'react-redux'


function LeftSide(props) {
    if (props.isLoaded) {
        var link = props.movie.trailer.link
    }
    return (
        <div className="ls-div">
            {props.isLoaded ?
                <>
                    <MovieImage image={props.movie.poster} />
                    <a href={link} target="_blank"
                        rel="noopener noreferrer">
                        Watch trailer on imbd</a>
                </>
                : null}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        movie: state.movie,
        isLoaded: state.isLoaded
    }
}


export default connect(mapStateToProps)(LeftSide)
