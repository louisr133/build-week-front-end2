import React from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../actions'

class Account extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.auth.user_id);
    }
    render(){
        return(
            <div className='accountContainer'>
                <div className='accountInfo'>  
                    <h1>Account Info</h1>

                    <div className='accountDetails'>
                        <img src='https://www.matchmyemail.com/wp-content/themes/nrg/images/userpic.png' alt='default picture'/>
                        <div>
                            <h2>Username: {this.props.users.username}</h2>
                            <h2>Email: {this.props.users.email}</h2>
                            <h2>User id: {this.props.users.id}</h2>
                        </div>
                        

                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
      ...state,
      users: state.users,
  
    })
  }

export default connect(mapStateToProps, {getUsers})(Account);
