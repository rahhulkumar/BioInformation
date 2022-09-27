import React, { Component } from 'react'

export class BioForm extends Component {

    constructor(props) {
      super(props)
    }

  render() {
    return (
        <div className='container'>
            <h2>Bio-Form</h2>

            {/* Bio Form  with submitHandler on submit event*/}
            
            <form className='bioform' method='POST' onSubmit={this.props.submitHandler}> 
                <div>
                    <label>Name  </label>
                    <input type='text' name='name' required/>
                </div>
                <div>
                    <label>Email  </label>
                    <input type='text' name='email' required/>
                </div>
                <div>
                    <label>Contact  </label>
                    <input type='number' name='contact' required/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
         </div>
    )
  }
}

export default BioForm