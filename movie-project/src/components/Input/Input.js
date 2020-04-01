import React from 'react'
import './Input.css'
import { connect } from 'react-redux'
// import store from '../../redux/store'
import { getMovie, isMovieLoaded } from '../../redux/actions/actions'
import axios from 'axios'


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: ''
        }
    }

    handleInputValue = (event) => {
        this.setState({ movie: event.target.value })
    }

    getMovieHandler = (e) => {
        e.preventDefault()
        axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${this.state.movie}`, {
            "headers": {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "3ab89774b6msh33d6490b015b7dep1c80cfjsn6aa664875138"
            }
        })
            .then(res => {
                console.log(res.data)
                this.props.getMovie(res.data)
                this.props.isMovieLaded(true)
            })
            .catch(err => {
                this.props.isMovieLaded(false)
            })

    }

    render() {
        return (
            <form className="input-form" onSubmit={this.getMovieHandler}>
                <label htmlFor='movie'>Search for a movie</label>
                <input onChange={this.handleInputValue} type="text" id='movie' />
                <button type="submit">Get Movie</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        movie: state.movie,
        isLoaded: state.isLoaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovie: (movie) => dispatch(getMovie(movie)),
        isMovieLaded: (bool) => dispatch(isMovieLoaded(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
