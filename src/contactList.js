import React, { Component } from 'react';


class ContactList  extends Component {
  render() { 
    return ( 
      <div>
        {this.props.contact.map((v, i) => {
          return (
            <div key={i}>
              <p>{v.first_name}</p>
              <button onClick={() => this.props.handleUpdate(v)}>Update</button>
              <button onClick={() => this.props.handleDelete(v)}>Delete</button>
            </div>
          )
        })}
      </div>
     );
  }
}
 
export default ContactList;