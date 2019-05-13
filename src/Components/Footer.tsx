import React, { Component } from 'react'

interface IFooterProps {
  data: any
}

class Footer extends Component<IFooterProps> {
  render() {
    const { data } = this.props

    if (!data) {
      return null
    } else {
      var networks= this.props.data.social.map((network: any) => {
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.className}></i>
        </a></li>
      })
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>
            <ul className="copyright">
              <li>&copy; Copyright 2019 Brian Hilst</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    )
  }
}

export default Footer
