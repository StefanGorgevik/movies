import React from 'react'
import './MainLayout.css'
import Input from '../../components/Input/Input'
import MovieTitle from '../../components/MovieTitle/MovieTitle'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import Content from '../Content/Content'
import { connect } from 'react-redux'
// import Welcome from '../../components/Welcome/Welcome'

class MainLayout extends React.Component {
    render() {
        return (
            <div className="main-layout">
                {!this.props.isLoaded ? <Input /> :
                    <>
                            <Input />
                            <MovieTitle />
                            <MovieInfo />
                            <Content />  
                    </>}
     
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoaded: state.isLoaded
    }
}

export default connect(mapStateToProps)(MainLayout)

