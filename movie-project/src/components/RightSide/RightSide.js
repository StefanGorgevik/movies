import React from 'react'
import './RightSide.css'
import Header from '../RightSideHeader/Header'
import Plot from '../Plot/Plot'
import Cast from '../Cast/Cast'
import TechnicalSpecs from '../TechnicalSpecs/TechnicalSpecs'
import { connect } from 'react-redux'

function RightSide(props) {
    var render = (categorySelected) => {
        switch (categorySelected) {
            case "plot": {
                return <Plot plot={props.movie.plot} movieFound={props.movieFound} />
            }
            case "cast": {
                return <Cast cast={props.movie.cast} isLoaded={props.isLoaded} />
            }
            case "specs": {
                return <TechnicalSpecs tech={props.movie.technical_specs} isLoaded={props.isLoaded} />
            }
            default: {
                return null
            }
        }
    }
    return (
        <div className="rs-div">
            <Header />
            {render(props.categorySelected)}
        </div>
    )
}

function mapStateToPros(state) {
    return {
        movie: state.movie,
        isLoaded: state.isLoaded,
        movieFound: state.movieFound,
        categorySelected: state.categorySelected
    }
}

export default connect(mapStateToPros)(RightSide)
