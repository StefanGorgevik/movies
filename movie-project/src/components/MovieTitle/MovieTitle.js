import React from 'react'
import './MovieTitle.css'
import {connect} from 'react-redux'

const MovieTitle = (props) => {
    return (
        <div className="mvt-div">
            <h1 className="mvt-h1">{props.movie.title}</h1>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        movie: state.movie,
        isLoaded: state.isLoaded
    }
}


export default connect(mapStateToProps)(MovieTitle)
