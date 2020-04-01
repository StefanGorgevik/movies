import React from 'react'
import './Header.css'
import {connect } from 'react-redux'
import {categorySelected} from '../../redux/actions/actions'

class Header extends React.Component {
    plotClicked = () => {
        this.props.categorySelected('plot')
    }

    castClicked = () => {
        this.props.categorySelected('cast')
    }

    specsClicked = () => {
        this.props.categorySelected('specs')
    }

    render() {
        var category = this.props.category
        console.log(category)
        return (
            <nav className="header-main">
                <ul>
                    <li className={category === 'plot' ? 'header-main-li active' : 'header-main-li'} 
                    onClick={this.plotClicked}>Plot</li>
                    <li className={category === 'cast' ? 'header-main-li active' : 'header-main-li'} 
                    onClick={this.castClicked}>Cast</li>
                    <li className={category === 'specs' ? 'header-main-li active' : 'header-main-li'} 
                    onClick={this.specsClicked}>Technical Specs</li>
                </ul>
            </nav>
        )
    }
}



function mapStateToProps(state) {
    return {
        category: state.categorySelected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        categorySelected: (cat) => dispatch(categorySelected(cat))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
