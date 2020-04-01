import React from 'react'
import './TechnicalSpecs.css'

function TechnicalSpecs(props) {
    if (props.isLoaded) {
        var tech = props.tech
        var specs = [];
        var item;
        for (var i = 0; i < tech.length; i++) {
            item = <div className='spec-div'>
                <p className="first-p">{tech[i][0]} </p>
                <p className="second-p">{tech[i][1]}</p>
            </div>
            specs.push(item)
        }
    }
    return (
        <div className="ts-div">
            { specs }
        </div>
    )
}

export default TechnicalSpecs
