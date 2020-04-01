import React from 'react'
import './RightSide.css'
import Header from '../RightSideHeader/Header'
import Plot from '../Plot/Plot'
import Cast from '../Cast/Cast'
import TechnicalSpecs from '../TechnicalSpecs/TechnicalSpecs'
import {connect} from 'react-redux'

function RightSide(props) {
    return (
        <div className="rs-div">
            <Header />
            <Plot plot={props.movie.plot}/>
            {/* <Cast/>
            <TechnicalSpecs /> */}
        </div>
    )
}

function mapStateToPros(state) {
    return {
        movie: state.movie,
        isLoaded: state.isLoaded
    }
}

export default connect(mapStateToPros)(RightSide)
