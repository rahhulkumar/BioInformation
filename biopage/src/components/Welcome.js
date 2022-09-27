import React, { Component } from 'react'

export class Welcome extends Component {    //Welcome class component displaying user information 
  
    constructor(props) {
      super(props)
    }
  
    render() {
    return (
      <div className='welcomeContainer'>
        <h1>W e l c o m e</h1>
        <p> <b> Mr. {this.props.user.name}</b> with your following BioInformation <br></br>
            Email - <strong>{this.props.user.email}</strong><br></br>
            Contact - <strong>{this.props.user.contact}</strong> 
        </p>
      </div>
    )
  }
}

export default Welcome