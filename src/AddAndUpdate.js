import React, { Component } from 'react';

class AddAndUpdate extends Component {
  constructor(props){
    super(props);
    this.state ={
      inputChange:"",
    } 
  }
  onSubmitAdd = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.inputChange);
  }
  handleAddChange = (e) => {
    this.setState({inputChange: e.target.value})
  }
  handleEditChange = (e) => {
    this.setState({inputChange: this.props.textCh})
    this.setState({inputChange: e.target.value});
  
  }
  onSubmitEdit = (e) => {
    e.preventDefault();
    this.props.handleUpdateSave(this.state.inputChange);
  }
  componentDidUpdate(preProps){
     if( preProps.textCh !== this.props.textCh){
       this.setState({inputChange: this.props.textCh})
     }
  }
  render() { 
    return (
      <div>
        {this.props.isAdd &&
         <form onSubmit={this.onSubmitAdd}>
           <input type="text" onChange={this.handleAddChange} />
           <button type="submit">AddTodos</button>
         </form>
        }
        {this.props.isEdit &&
         <form onSubmit={this.onSubmitEdit}>
           <input type="text" onChange={this.handleEditChange} value={this.state.inputChange} />
          <button type="submit">Update</button>
         </form>
        }
        
      </div>
      );
  }
}
 
export default AddAndUpdate;