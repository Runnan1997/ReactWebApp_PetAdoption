import React from 'react'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
 
class Book extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
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
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" className="form-control" value={this.state.fname} onChange={this.onNameChange.bind(this)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" className="form-control" value={this.state.lname} onChange={this.onNameChange.bind(this)}/>
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
}
onNameChange(event) {
	this.setState({name: event.target.value})
}

onEmailChange(event) {
	this.setState({email: event.target.value})
}

}

export default Book;