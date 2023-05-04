import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Book extends React.Component {
    constructor(props){
      super(props)
        this.state = {
            fname:'',
            lname:'',
            email:'',
            message:''
        }
    }
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
        <div className="container">
        <br></br>
        <h4>Book An Appointment</h4>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" className="form-control" value={this.state.fname} onChange={this.onFNameChange.bind(this)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" className="form-control" value={this.state.lname} onChange={this.onLNameChange.bind(this)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </div>

                <div>
                <p>Please Choose a Date:</p>
                <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <br></br>
                <br></br>

            </form>

      </div>
    );
  }

handleSubmit(event) {
  alert("Thank you for booking")
  const name = this.state.fname + " " + this.state.lname
  const email = this.state.email
  const date = this.state.date
}
onFNameChange(event) {
	this.setState({fname: event.target.value})
}

onLNameChange(event) {
	this.setState({lname: event.target.value})
}

onEmailChange(event) {
	this.setState({email: event.target.value})
}

}

export default Book;