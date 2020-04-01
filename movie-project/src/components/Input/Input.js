import React from 'react'
import './Input.css'
import { connect } from 'react-redux'
import { getMovie, isMovieLoaded, movieFound } from '../../redux/actions/actions'
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
                var movie = res.data
                if (movie.title === '' && movie.year === '' && movie.rating === '' && movie.plot === '') {
                    console.log('entered1')
                    this.props.movieFound(false)
                    this.props.isMovieLoaded(false)
                } else {
                    console.log('entered2')

                    this.props.getMovie(res.data)
                    this.props.isMovieLoaded(true)
                    this.props.movieFound(true)
                }
            })
            .catch(err => {
                console.log('entered3')

                this.props.isMovieLoaded(false)
                this.props.movieFound(false)
            })

    }

    render() {
        return (
            <>
            <form className="input-form" onSubmit={this.getMovieHandler}>
                <label htmlFor='movie'>Search for a movie</label>
                <input onChange={this.handleInputValue} type="text" id='movie' />
                <button type="submit">Get Movie</button>
            </form>
            {!this.props.isMovieFound ? <h1>Could not found movie! Search again!</h1> : null}
            </>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        movie: state.movie,
        isLoaded: state.isLoaded,
        isMovieFound: state.movieFound
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovie: (movie) => dispatch(getMovie(movie)),
        isMovieLoaded: (bool) => dispatch(isMovieLoaded(bool)),
        movieFound: (bool) => dispatch(movieFound(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
