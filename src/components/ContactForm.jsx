import React, { Component } from 'react'
import MapContainer from './MapContainer'
export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <form>
                <MapContainer></MapContainer>
                <h1 style={{ 'text-align': 'center' }}>Please feel free to ask any query via this form.</h1>
                <div className="form-row">
                    <div className="form-group col-md-6">

                        <input type="Name" className="form-control" id="inputEmail1" placeholder="Name"></input>
                    </div>
                </div>

                <div class="form-row">

                    <div className="form-group col-md-6">

                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>

                </div>

                <div className="form-group col-md-12" >

                    <input type="text" className="form-control" id="inputAddress2" placeholder="Address" />


                </div>

                <div className="form-group col-md-12" >
                    <input type="text" className="form-control" id="inputSubject" placeholder="Subject" />
                </div>



                <div className="form-group col-md-12">

                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>
                <div className="form-group col-md-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                
            </form>


        );
    }
}