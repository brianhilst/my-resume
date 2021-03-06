import React, { Component } from 'react'

interface IAboutProps {
  data: any
}

class About extends Component<IAboutProps> {

  render() {
    const { data } = this.props

    if (!data) {
      return null
    } else {
      var name = data.name
      var title = data.title
      var profilepic= "images/"+data.image
      var logopic= "images/"+data.logoAlt
      var occupation = data.occupation
      var description = data.description
      var bio = data.bio
      var companyPurpose = data.companyPurpose
      var companyInfo = data.companyInfo
      var street = data.address.street
      var city = data.address.city
      var state = data.address.state
      var zip = data.address.zip
      var phone= data.phone
      var email = data.email
      var resumeDownload = data.resumedownload
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <div className="centered" style={{textAlign: "center"}}>
              <img className="profile-pic"  src={profilepic} alt="Brian Hilst Profile" />
              <img className="logo-pic"  src={logopic} alt="Purposeful Logo" />
            </div>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{description}</p>
            <p>{bio}</p>
            <br/>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span><br />
                  <span>{title}</span><br/>
                  {/*<span>{street}</span><br />*/}
                  <span>{city}, {state} {zip}</span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button" target="_blank" rel="noopener noreferrer" ><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default About
