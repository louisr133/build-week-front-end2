import React from 'react'
import {connect} from 'react-redux'
import {getItems, deleteItem, passItem} from '../actions';

class Listing extends React.Component {


    componentDidMount(){
        this.props.getItems()
    }

    edit = (item) => {
        console.log(item)
        this.props.passItem(item)
        this.props.history.push('/technology/edit')

    } 


    render(){
        return(
        <div className = 'listingContainer'>
            {this.props.tech.map((i,index) => {
                return(
                <div key={index} className='item'>
                <div className='text'>
                    <img src={i.picture} alt='thingy' />
                    <div className='line'></div>
                    <h3>Item:</h3>
                    <p>{i.name}</p>
                    <h3>Description:</h3>
                    <p>{i.description}</p>
                    <h3>Price:</h3>
                    <p>${i.cost}</p>
                    <h3>Posted By:</h3>
                    <p>{i.user}</p>
                </div>

                    <div className='buttons'>
                        <button className='rentButton' >Rent Item</button>
                        <button className='updateButton' onClick={() => this.edit(i)}>Edit Item</button>
                        <button className='deleteButton' onClick={() => this.props.deleteItem(i.id)}>Delete Item</button>
                    </div>
                </div>      
                )
            })}
         </div>
        )
    }
}
const mapStateToProps = (state) => {
    return({
      ...state,
      tech: state.tech,
  
    })
  }
  
  export default connect(mapStateToProps, {getItems, deleteItem, passItem})(Listing);
  