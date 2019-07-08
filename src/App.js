import React from 'react';
import './App.css'; 
import contact from './data.js'
import ContactList from './contactList';
import AddAndUpdate from './AddAndUpdate';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactList : [],
      searchText: '',
      isEdit: false,
      isAdd: true,
      textCh: '',
      todoIndex: ''
    }
  }

  handleDelete = (v) => {
   let newList = this.state.contactList.filter(r => v.id!== r.id);
   this.setState({contactList: newList})
  }

  handleSearch = (e) => {
    this.setState({searchText: e.target.value})
  }

  handleAddTodo = (v) => {
    let newObj ={ first_name : v}
    let newTodos = [...this.state.contactList];
    newTodos.push(newObj);
    this.setState({contactList: newTodos});
  }
  handleUpdate = (v) => {
   const index = this.state.contactList.indexOf(v);
   console.log(index);
   this.setState({isEdit: true})
   this.setState({isAdd: false});
   this.setState({textCh: v.first_name,todoIndex:index});
  }
  handleUpdateSave = (v) => {
   let ncontactList = this.state.contactList.slice();
  //  console.log("1"+ this.state.todoIndex);
  //  console.log(ncontactList[this.state.todoIndex].first_name)
   ncontactList[this.state.todoIndex].first_name = v;
   this.setState({contactList: ncontactList});
   this.setState({isAdd: true});
   this.setState({isEdit: false});
  }

  componentDidMount(){
    this.setState({contactList: contact});
  }

  render(){
    let filteredContact = this.state.contactList.filter(a => {
       return a.first_name.toLowerCase().includes(this.state.searchText.toLowerCase())
    })
    return(
      <div>
        <input type="text" onChange={this.handleSearch}/>
        <ContactList 
          contact={filteredContact}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
        <AddAndUpdate 
          isEdit={this.state.isEdit} 
          isAdd={this.state.isAdd} 
          handleAddTodo={this.handleAddTodo}
          handleUpdate={this.handleUpdate}
          textCh={this.state.textCh}
          handleUpdateSave={this.handleUpdateSave}
         />
      </div>
    )
  }
}


export default App;
