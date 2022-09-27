import React, { Component } from 'react'
import setData from '../redux/action';
import {connect} from 'react-redux'
import BioForm from './BioForm';
import Welcome from './Welcome';

export class BioInformation extends Component {
    constructor(props) {
      super(props)
      this.submitHandler = this.submitHandler.bind(this)
    
      this.state = {
        isSubmit: false,
        user: {
            name: null,
            email: null,
            contact: null,
        }
      }
    }

    submitHandler(event){           //submit handler function to change state and calling dispatch function passing the state
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const contact = event.target.contact.value;
        this.setState({isSubmit: true, user: {name, email, contact}} , () => {
            console.log(this.state)
            this.props.setData(this.state.user)
        })
    }

  render() {
    return (
      <>
        {this.state.isSubmit 
            ? <Welcome user={this.props.user} ></Welcome>
            : <BioForm submitHandler={this.submitHandler} ></BioForm>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {        //function to access redux store data
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {      //functon to access dispatch function passing user state as argument
    return {
        setData: (data) => dispatch(setData(data)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BioInformation)     