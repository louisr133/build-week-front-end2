import React from 'react'
import {connect} from 'react-redux'
import {editPost} from '../actions'

class Edit extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editedItem: {
                id: this.props.newEdit.id,
                name: this.props.newEdit.name,
                cost: this.props.newEdit.cost,
                category: this.props.newEdit.category,
                description: this.props.newEdit.description,
                picture: this.props.newEdit.picture,
                availability: this.props.newEdit.availability,
            }
        }
    }



    handleEdit = (e) => {
        console.table(this.state.editedItem)
        this.setState({
            editedItem: {
                ...this.state.editedItem,
                [e.target.name]: e.target.value,
            }
        })
    }


    editPost = (e) => {
        e.preventDefault();
        this.setState({
            editedItem: {
                name:'',
                item: '',
                cost: '',
                category: '',
                description: '',
                picture: '',
                availability: true,
            }
        })

        this.props.editPost(this.state.editedItem)
        .then(this.props.history.push('/technology/listing'))

    }
    render(){
        return(
        <div className='postContainer'>
           <h1>Edit Post Listing</h1>

           <form className="postForm" onSubmit={(e) => this.editPost(e)}>
                    <input 
                        type = 'text'
                        name = 'name'
                        placeholder = 'Item Name'
                        onChange = {(e) => this.handleEdit(e)}
                        value = {this.state.editedItem.name}
                    />
                    <input 
                        type = 'text'
                        name = 'category'
                        placeholder = 'Category'
                        onChange = {(e) => this.handleEdit(e)}
                        value = {this.state.editedItem.category}
                    />
                    <input 
                        type = 'text'
                        name = 'cost'
                        placeholder = 'Cost To Rent'
                        onChange = {(e) => this.handleEdit(e)}
                        value = {this.state.editedItem.cost}
                    />
                    <input 
                        type = 'text'
                        name = 'description'
                        placeholder = 'Item Description'
                        onChange = {(e) => this.handleEdit(e)}
                        value = {this.state.editedItem.description}
                    />
                    <input 
                        type = 'text'
                        name = 'picture'
                        placeholder = 'Image URL'
                        onChange = {(e) => this.handleEdit(e)}
                        value = {this.state.editedItem.picture}
                    />

                    <button className ='postButton'>Post</button>
                </form>

        </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.table();
    return({
      ...state,
      user_id: state.auth.user_id,
      auth: {...state.auth,} ,

      pass: state.pass,
      newEdit: {...state.newEdit},
  
    })
  }
  
  export default connect(mapStateToProps, {editPost})(Edit);
  