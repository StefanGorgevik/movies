import React from 'react'
import './MainLayout.css'
// import axios from 'axios'
import Input from '../../components/Input/Input'
import MovieTitle from '../../components/MovieTitle/MovieTitle'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import Content from '../Content/Content'

class MainLayout extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isLoaded: false,
    //         movie: {}
    //     }
    // }

    // componentDidMount() {
    //     axios.get("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666", {
    //         "headers": {
    //             "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    //             "x-rapidapi-key": "3ab89774b6msh33d6490b015b7dep1c80cfjsn6aa664875138"
    //         }
    //     })
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({
    //                 movie: res.data,
    //                 isLoaded: true
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // }

    render() {
        // var { isLoaded, movie } = this.state
        return (
            <div className="main-layout">
                <Input/>
                <MovieTitle/>
                <MovieInfo/>
                <Content/>
            </div>
        )
    }
}

export default MainLayout

