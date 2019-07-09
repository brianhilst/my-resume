import React, { Component } from 'react'

interface IHeaderProps {
  data: any
}

class Header extends Component<IHeaderProps> {
  render() {

    const { data } = this.props

    if (!data) {
      return null
    } else {
      var title = this.props.data.title
      var logopic= "images/"+data.logo
      var name = this.props.data.name
      var occupation= this.props.data.occupation
      var description= this.props.data.description
      var city= this.props.data.address.city
      var state = this.props.data.address.state
      var networks= this.props.data.social.map((network: any) => {
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>

        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              <img className="logo-pic"  src={logopic} alt="Purposeful Logo" />
            </h1>
            <h3>I'm <span style={{fontWeight:800, color:"#ff9b00"}}>{name},</span>, a {city}-based <span>{occupation}</span> doing business as <span style={{fontWeight:800, color:"#ff9b00"}}>{title}</span>. {description}</h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
    )
  }
}

export default Header
