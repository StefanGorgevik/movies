import React from 'react'
import './MovieImage.css'

function MovieImage(props) {
    return (
        <div className="mi-div">
            <img src={props.image} alt="poster" />
        </div>
    )
}

export default MovieImage
