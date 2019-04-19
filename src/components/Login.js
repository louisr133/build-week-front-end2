import React from 'react'
import {connect} from 'react-redux';
import {sendingCred} from '../actions'

class Login extends React.Component {
    constructor(){
        super();

        this.state = {
            credentials: {
                username: '',
                password: '',
            }
        }

        this.handleChange = e => {
            this.setState({
                credentials: {
                    ...this.state.credentials, 
                    [e.target.name]: e.target.value
                }
            })
        }

    }

    sendingCred = (e) => {

        this.props.sendingCred(this.state.credentials)
        .then(() => {
            this.props.history.push('/technology')
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className='loginContainer'>
                <h2>Sign in</h2>
                <form className='loginForm'>
                    <h4>Username</h4>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange ={(e) => this.handleChange(e)}

                    />

                    <h4>Password</h4>
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange ={(e) => this.handleChange(e)}
                    />

                    <button className='loginButton' type='button' onClick={(e) => this.sendingCred(e)}>Login</button>
                </form>

                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return({
      ...state,
  
    })
  }
  
  export default connect(mapStateToProps, {sendingCred,})(Login);
  