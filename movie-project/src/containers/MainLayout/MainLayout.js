import React from 'react'
import './MainLayout.css'
import axios from 'axios'

class MainLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            items: true
        }
    }

    componentDidMount() {
        axios.get("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666", {
            "headers": {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "3ab89774b6msh33d6490b015b7dep1c80cfjsn6aa664875138"
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        var { isLoaded, items } = this.state
        console.log(items)
        return (
            <div className="main-layout">
                <h1>Main Layout</h1>
            </div>
        )
    }
}

export default MainLayout

