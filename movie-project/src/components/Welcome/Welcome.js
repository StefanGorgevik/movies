import React from 'react'
import './Welcome.css'
import Input from '../Input/Input'

function Welcome(props) {
    return (
        <main className="welcome-main"> 
            <div className="welcome-div">
                <h1>Welcome!</h1>
                <h3>Enter the movie below</h3>
                <Input/>
            </div>
        </main>
    )
}

export default Welcome
