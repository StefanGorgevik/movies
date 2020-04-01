import React from 'react'
import './Cast.css'

function Cast(props) {
    if(props.isLoaded) {
        var cast = props.cast
        var actors = cast.map((actor, i) => {
            return (
                <tr key={actor + i}>
                    <td>{actor.actor}</td>
                    <td>{actor.character}</td>
                </tr>
            )
        })
    }
    return (
        <div className="cast-div">
           <table className="cast-table">
                <thead>
                    <tr>
                        <th>Actor</th>
                        <th>Character</th>
                    </tr>
                </thead>
                <tbody>
                    {actors}
                </tbody>
            </table>
        </div>
    )
}

export default Cast
