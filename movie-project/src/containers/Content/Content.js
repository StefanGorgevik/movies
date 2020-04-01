import React from 'react'
import './Content.css'
import LeftSide from '../../components/LeftSide/LeftSide'
import RightSide from '../../components/RightSide/RightSide'

function Content() {
    return (
        <div className="content-div">
            <LeftSide/>
            <RightSide/>
        </div>
    )
}

export default Content
