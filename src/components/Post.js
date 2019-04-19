import React from 'react'
import {connect} from 'react-redux'
import {postListing} from '../actions'

class Post extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newItem: {
                user_id: this.props.user_id,
                name: '',
                cost: '',
                category: '',
                description: '',
                picture: '',
                availability: true,
            }
        }

    }

    handleAddChange = (e) => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [e.target.name]: e.target.value,
            }
        })
    }


    newPost = (e) => {
        e.preventDefault();
        this.props.postListing(this.state.newItem);

        this.setState({
            newItem: {
                user_id: this.props.user_id,
                name: '',
                cost: '',
                category: '',
                description: '',
                picture: '',
                availability: true,
            }
        })

    }
    render(){
        return(
        <div className='postContainer'>
           <h1>Post New Listing</h1>

           <form className="postForm" onSubmit={(e) => this.newPost(e)}>
                    <input 
                        type = 'text'
                        name = 'name'
                        placeholder = 'Item Name'
                        onChange = {(e) => this.handleAddChange(e)}
                        value = {this.state.newItem.name}
                    />
                    <input 
                        type = 'text'
                        name = 'category'
                        placeholder = 'Category'
                        onChange = {(e) => this.handleAddChange(e)}
                        value = {this.state.newItem.category}
                    />
                    <input 
                        type = 'text'
                        name = 'cost'
                        placeholder = 'Cost To Rent'
                        onChange = {(e) => this.handleAddChange(e)}
                        value = {this.state.newItem.cost}
                    />
                    <input 
                        type = 'text'
                        name = 'description'
                        placeholder = 'Item Description'
                        onChange = {(e) => this.handleAddChange(e)}
                        value = {this.state.newItem.description}
                    />
                    <input 
                        type = 'text'
                        name = 'picture'
                        placeholder = 'Image URL'
                        onChange = {(e) => this.handleAddChange(e)}
                        value = {this.state.newItem.picture}
                    />

                    <button className ='postButton'>Post</button>
                </form>

        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return({
      ...state,
      user_id: state.auth.user_id,
      auth: {...state.auth,} 
  
    })
  }
  
  export default connect(mapStateToProps, {postListing})(Post);
  