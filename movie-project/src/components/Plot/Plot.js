import React from 'react'
import './Plot.css'

function Plot(props) {
    return (
        <div className="plot-div">
                <p>{props.plot}</p>
        </div>
    )
}

export default Plot
