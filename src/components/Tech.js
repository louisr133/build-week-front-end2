import React from 'react'
import {NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Post from './Post'
import Listing from './Listing'
import Account from './Account'
import Edit from './Edit'

class Tech extends React.Component {
    componentDidMount(){
        this.props.history.push('/technology/listing')
    }

    render(){

    return(

        <div className='techContainer'>
            <nav className='techNav'>
                <NavLink to='/technology/listing'>Listings</NavLink>
                {/* <NavLink to='/technology/edit'>Edit</NavLink> */}
                <NavLink to='/technology/post'>Post</NavLink>
                <NavLink to='/technology/account'>Account</NavLink>
            </nav>

            <Route path='/technology/post' component={Post} />
            <Route path='/technology/edit' component={Edit} />
            <Route path='/technology/account' component={Account} />
            <Route path='/technology/listing' component={Listing} />

        </div>
       
    )
    }
}

export default Tech

