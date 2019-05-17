import React, { Component } from 'react'
import { API } from "aws-amplify"

interface IContactProps {
  data: any
}

class Contact extends Component<IContactProps> {

  state = {
    contactName: "",
    contactEmail: "",
    contactSubject: "",
    contactMessage: "",
    errorMessage: "",
    successMessage: "",
    isSending: false
  }

  handleChange = (event: any) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value } )
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();
    this.setState({errorMessage: "", successMessage: ""})

    debugger
    const payload = {
      name: this.state.contactName,
      email: this.state.contactEmail,
      subject: this.state.contactSubject,
      message: this.state.contactMessage
    }

    await this.postContact(payload)
  }

  postContact = async (body: any) => {
    const init = {
      body
    }
    try {
      debugger
      this.setState({isSending: true})
      const response = await API.post("MyResumeAPI", "/contact", init)
      this.setState({errorMessage: "", successMessage: "Message sent. Thank you!",
        contactName: "", contactEmail: "", contactSubject: "", contactMessage: "", isSending: false})
      debugger
      return response
    } catch (err) {
      debugger
      this.setState({errorMessage: "Unable to submit form.", successMessage: "", isSending: false})
    }
  }

  render() {
    const { data } = this.props

    if (!data) {
      return null
    } else {
      var name = data.name
      var street = data.address.street
      var city = data.address.city
      var state = data.address.state
      var zip = data.address.zip
      var phone= data.phone
      var message = data.contactmessage
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form action="" onSubmit={this.handleSubmit} id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" value={this.state.contactName} size={35} id="contactName" name="contactName" onChange={this.handleChange}/>
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" value={this.state.contactEmail} size={35} id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
                  <input type="text" value={this.state.contactSubject} size={35} id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea value={this.state.contactMessage} cols={50} rows={15} id="contactMessage" name="contactMessage" onChange={this.handleChange}></textarea>
                </div>
                <div>
                  <button type="submit" className="submit">Submit</button>
                  {this.state.isSending &&
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  }
                </div>
              </fieldset>
            </form>
            {this.state.errorMessage &&
              <div id="message-warning">{this.state.errorMessage}</div>
            }
            {this.state.successMessage &&
              <div id="message-success">
                <i className="fa fa-check"></i>{this.state.successMessage}<br/>
              </div>
            }
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}<br />
                {/*{street} <br />*/}
                {city}, {state} {zip}<br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    )
  }
}

export default Contact
