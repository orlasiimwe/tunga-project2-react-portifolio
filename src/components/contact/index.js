import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {


    constructor() {
        super()
        this.state = {
            message: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        alert('You have sent a message to Orla')
    }


    render() {
        const { message, email } = this.state
        return (
            <>
            <div className='contact-hero-image'>
                <img src='https://i.pinimg.com/564x/bb/70/72/bb70722b736f00cd79657817147807cd.jpg' alt='img' />
            </div>
            <section className='contact'>
                <h1 className='title' style={{paddingTop:'3%'}}>Contact me{''}:</h1>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6 cc'>
                    <h1 className='sub-title'>Send me an email</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id='email' value={email} onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">Your email will not be shared with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Message</label>
                            <textarea class="form-control" id='message' value={message} onChange={this.handleChange} placeholder="Message" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>  
                
                <div className='col-12 col-md-6 col-lg-6 cc'>
                    <h1 className='sub-title'>Call me</h1>
                    <a className='contact-index'>+256 234567890</a>
                </div>  
                </div>
            </section>
            </>
        )
    }
}

export default Contact
