import {Redirect} from 'react-router-dom';


import React, { Component } from 'react'

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      toThankyou: false,
    }
  }
  

   handleSubmit = () => {
       this.setState({
           toThankyou: true
         });
   }

   
   render() {


     if (this.state.toThankyou === true) {
       return <Redirect to='/thank-you' />
     }
 
     return (
       <div>

         <h1>Feedback Form</h1>

         <form onSubmit={this.handleSubmit}>
          <br/> 
          <br/> 
          <label>Comments</label><br/>
          <textarea rows="10" cols="50"></textarea>
          <br/>
          <input type="submit" value="Submit" />
          </form>

       </div>
     )
   }
 }

 



